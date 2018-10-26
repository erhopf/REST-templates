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

/* Don't forget to give your function an apt name. Be descriptive.
Use your best judgement for how complex you want to make your quickstart
sample code. With that said, you can add an argument to the function to
pass a JSON object to the request dynamically. */

function functionName(){
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
              'text': 'Hello World! Welcome to Azure!'
        }],
        json: true,
    };

    /* The result is stringified to ensure that all objects are printed correctly
    to the terminal. */
    request(options, function(err, res, body){
        console.log(JSON.stringify(body, null, 4));
    });
};

functionName();
