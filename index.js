module.exports = function (k) {
  this.Job = require('./src/Job');
  this.API = require('./src/API')(k);
  return this;
}
