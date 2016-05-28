
var apiKey = 'default';

module.exports = {
  httpVerbs : {
    METHOD_POST: 'POST',
    METHOD_GET: 'GET',
    METHOD_PUT: 'PUT',
    METHOD_DELETE: 'DELETE'
  },

  /**
   * Gets the currently configured Crowdflower API key.
   * @return {String} The API key.
   */
  getApiKey : function () { return apiKey; },

  /**
   * Sets the Crowdflower API key to the one provided.
   * @param {String} k The API key.
   */
  setApiKey : function (key) { if (key) apiKey = key; }
}
