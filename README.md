# node-crowdflower
A simple node module which provides an interface to the Crowdflower API. It currently uses requestify as a dependency, and creates an HTTPS connection to the Crowdflower API.

API endpoints return a promise object. 


# Getting Started


## Importing module
Import this module into your project with the following:
```javascript
var Crowdflower = require('node-crowdflower')('your_api_key');
```
Alternatively:
```javascript
var Crowdflower = require('node-crowdflower'); // no api key provided
Crowdflower.API.setApiKey('your-api-key');
```


## Setting/getting API key
```javascript
Crowdflower.API.setApiKey('your-api-key'); // set your API key
var key = Crowdflower.API.getApiKey(); // get your API key
```

## Creating a job
```javascript
var job = new Crowdflower.Job({
  title: 'title',
  instructions: 'job instructions',
  cml: 'cml here',
  css: 'css here',
  js: 'js here',
  support_email: 'me@example.com',
  payment_cents: 5,
  units_per_assignment: 1,
  judgments_per_unit: 1,
  units: [
    {name: 'Esteban', age: 18},
    {name: 'Pedro', age: 32}
  ]
}); // create a new job object

Crowdflower.API.createJob(job)
  .then(function (crowdflower_data) {
    console.log('success!');
    // do something with your data ...
  }
  .catch(function (err) {
    console.error('Oh dear ... ' + err);
  };
```


# The API

```javascript
Crowdflower.API.setApiKey(key);

Crowdflower.API.getApiKey();

Crowdflower.API.getAllJobs();

Crowdflower.API.getAccountInfo();

Crowdflower.API.createJob(job);

Crowdflower.API.deleteJob(jobId);

Crowdflower.API.updateJob(jobId, params);

Crowdflower.API.getUnits(jobId);

Crowdflower.API.uploadUnits(jobId, data);

Crowdflower.API.pingJob(jobId);

Crowdflower.API.getJob(jobId);

Crowdflower.API.pingUnits(jobId);

Crowdflower.API.cancelJob(jobId);

Crowdflower.API.getResults(jobId, page);
```

# Testing
To run unit tests, simple type the following into your terminal (in the module root directory):
```bash
npm test
```


# Contributors

Gavin Gregory <gavin.ian.gregory@gmail.com>

<https://github.com/gavingregory>


# License
The MIT License (MIT)

Copyright (c) 2016 Gavin Gregory <gavin.ian.gregory@gmail.com>


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
