var sdk = require('sdk');
var apis = require('./apis');

module.exports = registry;


var encodeBasic = function (s) {
  return new Buffer(s).toString('base64');
};


/**
 * @param  {String} host
 * @param  {Object} [opts]
 * @param  {Object} [opts.auth] - Either an object with `username` and `password`, or a string `username:password`.  If none is provided, the docker config will be checked.
 * @param  {String} [opts.apiVersion=v2]
 */
var registry = function (host, opts) {
  if (!host) {
    throw new Error('missing docker registry host');
  }
  opts = opts || {};
  opts.apiVersion = opts.apiVersion || 'v2';

  var rules = {};
  if (opts.auth) {
    var encoded;
    var authType = typeof opts.auth;
    if (authType === 'object') {
      encoded = encodeBasic(opts.auth.username + ':' + opts.auth.password);
    } else if (authType === 'string') {
      if (opts.auth.indexOf(':') >= 0) {
        encoded = encodeBasic(opts.auth);
      } else {
        encoded = opts.auth;
      }
    } else {
      throw new Error('Unknown auth type: ' + authType);
    }

    rules.all = {
      headers: {
        Authorization: 'Basic ' + encoded
      }
    }
  }

  var api = apis[opts.apiVersion];
  return new sdk(host, api, rules);
}


module.exports = registry;
