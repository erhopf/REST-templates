/* This template relies on the request module, a simplified and user friendly
way to make HTTP requests. */
const request = require('request');

/* Checks to see if the subscription key is available
as an environment variable. If you are setting your subscription key as a
string, then comment these lines out.

If you want to set your subscription key as a string, replace the value for
the Ocp-Apim-Subscription-Key header as a string. */
const subscriptionKey = process.env.YOUR_ENV_VARIABLE;
if (!subscriptionKey) {
  throw new Error('Environment variable for your subscription key is not set.')
};

/* Use the options object to declare the method, base URL, resource,
required parameters, headers, and body. Make note that since the body
input is JSON, that you won't need to parse the response.

The sample headers are pretty straight forward. This sample assumes that the
subscription key can be passed as an Ocp-Apim-Subscription-Key header, however,
there are APIs that will require a Authorization header and a Bearer token.
Only one is required. */
function httpRequest(input){
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
              'text': input
        }],
        json: true,
    };

    /* The result is stringified to ensure that all objects are printed correctly
    to the terminal. */
    request(options, function(err, res, body){
        console.log(JSON.stringify(body, null, 4));
    });
};

/* The first argument is the path to node, the second is our filename, and the
third is your query. If the query is absent, a default query of
"Hello world!" is used. Feel free to adjust this for your use case. */
const input = process.argv[2] || 'Hello World!'

/* Calls the function that we created to house the HTTP request. The value
provided for input will be passed to the API in the JSON body. */
httpRequest(input);
