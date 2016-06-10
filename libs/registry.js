var sdk = require('sdk');
var apis = require('./apis');

module.exports = registry;


/**
 * @param  {String} host
 * @param  {Object} [opts]
 * @param  {Object} [opts.auth]
 * @param  {Object} [opts.apiVersion]
 */
var registry = function (host, opts) {
  if (!host) {
    throw new Error('missing docker registry host');
  }
  opts = opts || {};
  opts.apiVersion = opts.apiVersion || 'v2';

  var rules = {};
  if (opts.auth) {
    rules.all = {
      headers: {
        Authorization: 'Basic ' + new Buffer(opts.auth.username + ':' + opts.auth.password).toString('base64')
      }
    }
  }

  var api = apis[opts.apiVersion];
  return new sdk(host, api, rules);
}


module.exports = registry;
