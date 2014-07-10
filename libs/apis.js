module.exports = {
  getImageLayer: {
    method: 'get',
    url: '/v1/images/{{id}}/layer'
  },
  putImageLayer: {
    method: 'put',
    url: '/v1/images/{{id}}/layer'
  },
  putImage: {
    method: 'put',
    url: '/v1/images/{{id}}/json'
  },
  getImage: {
    method: 'get',
    url: '/v1/images/{{id}}/json'
  },
  getAncestry: {
    method: 'get',
    url: '/v1/images/{{id}}/ancestry'
  },
  getTags: {
    method: 'get',
    url: '/v1/repositories/{{namespace}}/{{repository}}/tags'
  },
  getTag: {
    method: 'get',
    url: '/v1/repositories/{{namespace}}/{{repository}}/tags/{{tag}}'
  },
  putTag: {
    method: 'put',
    url: '/v1/repositories/{{namespace}}/{{repository}}/tags/{{tag}}'
  },
  deleteTag: {
    method: 'delete',
    url: '/v1/repositories/{{namespace}}/{{repository}}/tags/{{tag}}'
  },
  deleteRepo: {
    method: 'delete',
    url: '/v1/repositories/{{namespace}}/{{repository}}'
  }
};
