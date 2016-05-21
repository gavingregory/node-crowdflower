var Crowdflower = require('../index.js')('something');
var assert = require('chai').assert;

describe('API#setApiKey', function () {
  it('should allow the API key to be set', function () {
    var test_key = 'test';
    Crowdflower.API.setApiKey(test_key);
    assert.equal(test_key, Crowdflower.API.getApiKey());
  });
});

//TODO: Unit test ALL Api endpoints

//TODO: Unit test Job 'jsonlines' functionality
