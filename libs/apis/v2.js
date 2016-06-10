module.exports = {
  // fetching status of the registry server
  status: '/v2/',
  // alias for fetcing status
  ping: '/v2/',

  getTags: {
    method: 'get',
    url: '/v2/{{name}}/tags/list'
  },
  getCatalog: {
    method: 'get',
    url: '/v2/_catalog'
  },

  getManifest: {
    method: 'get',
    url: '/v2/{{name}}/manifests/{{reference}}'
  },
  putManifest: {
    method: 'put',
    url: '/v2/{{name}}/manifests/{{reference}}'
  },
  deleteManifest: {
    method: 'delete',
    url: '/v2/{{name}}/manifests/{{reference}}'
  },

  getBlob: {
    method: 'get',
    url: '/v2/{{name}}/blobs/{{digest}}'
  },
  deleteBlob: {
    method: 'delete',
    url: '/v2/{{name}}/blobs/{{digest}}'
  }
};
