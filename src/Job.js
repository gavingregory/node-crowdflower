/**
 * Constructor for the Job object
 * @param {Object} options - The job options.
 * @param {String} options.title - The title of the job.
 * @param {String} options.instructions - The instructions given to the crowdflower worker.
 * @param {String} options.cml - The job's crowdflower markup langage(CML).
 * @param {String} options.css - The job's cascading style sheet(CSS).
 * @param {String} options.js - The job's javascript.
 * @param {String} options.support_email - The email address to be contacted for support regarding this job.
 * @param {Number} options.payment_cents - The payment (in USD cents) for successful completion of each unit of work for this job.
 * @param {Number} options.units_per_assignment - The units per asignment.
 * @param {Number} options.judgments_per_unit - The judgements per unit.
 * @param {Number} options.time_per_page - The time given per page.
 * @param {Object[]} options.units - Each unit is a unit of work.
 * @constructor
 */
function Job(options) {

  if (!options) throw new TypeError('options Object is required.');
  if (!options.title) throw new TypeError('title is mandatory to create a job object');
  if (!options.instructions) throw new TypeError('instructions are mandatory to create a job object');
  if (options.units)
    if (!Array.isArray(options.units))
      throw new TypeError('units must be a valid array');

    this['job[title]'] = options.title ? options.title : 'No title';
    this['job[instructions]'] = options.instructions ? options.instructions : 'No instructions';
    this['job[cml]'] = options.cml ? options.cml : ' ';
    this['job[css]'] = options.css ? options.css : ' ';
    this['job[js]'] = options.js ? options.js : ' ';
    this['job[support_email]'] = options.support_email ? options.support_email : ' ';
    this['job[payment_cents]'] = options.payment_cents ? options.payment_cents : 5;
    this['job[units_per_assignment]'] = options.units_per_assignment ? options.units_per_assignment : 10;
    this['job[judgments_per_unit]'] = options.judgments_per_unit ? options.judgments_per_unit : 5;
    this['job[time_per_page]'] = options.time_per_page ? options.time_per_page : 0;
    this['job[webhook_uri]'] = options.webhook_url ? options.webhook_uri : ' ';
    this.units = (options.units) ? options.units.slice(0) : [];
    return this;
}

/**
 * Returns units parsed as 'crowdflower json'
 * The crowdflower API states it requires valid JSON however only accepts units
 * newline delimited JSON (Each line of text is a JSON object, separated by a
 * '\n' character.
 * This function takes an array of JSON objects and builds the required string
 * that will be compatible with the API.
 * @returns {String}
 */
Job.prototype.getCrowdflowerUnits = function () {
  var s = '';
  for (var i = 0; i < this.units.length; i++) {
    s += (JSON.stringify(this.units[i]) + '\n');
  }
  return s;
};

module.exports = Job;
