/* This template relies on the request module, a simplified and user friendly
way to make HTTP requests. */
const request = require('request');

/* Checks to see if the subscription key is available
as an environment variable. If you are setting your subscription key as a
string, then comment these lines out.

If you want to set your subscription key as a string, replace the value for
the Ocp-Apim-Subscription-Key header as a string. */
let subscriptionKey = process.env.NAME_OF_YOUR_ENV_VARIABLE;

/* Use the options object to declare the method, base URL, resource,
required parameters, headers, and body. Make note that since the body
input is JSON, that you won't need to parse the response.

The sample headers are pretty straight forward. This sample assumes that the
subscription key can be passed as anOcp-Apim-Subscription-Key header, however,
there are APIs that will require a Authorization header and a Bearer token.
Only one is required. */
const options = {
    method: 'POST',
    baseUrl: 'https://api.cognitive.microsofttranslator.com/',
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'to': 'de'
    },
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Content-type': 'application/json',
    },
    body: [{
          'text': 'Hello World!'
    }],
    json: true,
};

/* The result is stringified to ensure that all objects are printed correctly
to the terminal. */
request(options, function(err, res, body){
    console.log(JSON.stringify(body, null, 4));
});
