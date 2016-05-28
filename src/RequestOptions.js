
var global = require('./global');

/**
 * Constructor for the RequestOptions object.
 * @param {String} url The url of the Crowdflower API endpoint.
 * @constructor
 */
function RequestOptions (url) {
  this.options = {
    method: global.httpVerbs.METHOD_GET,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    params: {
      'key': global.getApiKey()
    },
    dataType: 'form-url-encoded'
  };
  this.url = 'https://api.crowdflower.com/v1/' + url;
  return this;
};

module.exports = RequestOptions;
