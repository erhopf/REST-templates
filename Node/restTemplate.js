const request = require('request');
const util = require('util');

let subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;

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

request(options, function(err, res, body){
    console.log(JSON.stringify(body, null, 4));
});
