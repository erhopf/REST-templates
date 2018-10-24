# -*- coding: utf-8 -*-
# The encoding value has been added for Python 2.7.x support and must be
# at the top of the file.

# Make sure to provide a description of your program.

import os, requests, uuid, json

# Checks to see if the subscription key is available
# as an environment variable. If you are setting your subscription key as a
# string, then comment these lines out.
if 'TRANSLATOR_TEXT_KEY' in os.environ:
    subscriptionKey = os.environ['NAME_OF_YOUR_ENV_VARIABLE']
else:
    print('Environment variable for your subscription key is not set.')
    exit()
# If you want to set your subscription key as a string, uncomment the next line.
#subscriptionKey = 'put_your_key_here'

# Here you define the endpoint, the resource and any required parameters.
# For APIs with a single route, it's not necessary to separate base_url and
# path. The values provided are from: https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-translate
base_url = 'https://api.cognitive.microsofttranslator.com'
path = '/translate?api-version=3.0'
params = '&to=de&to=it'
constructed_url = base_url + path + params

# The sample headers are pretty straigh forward. Not all services require
# X-ClientTraceId. If it's not used in your service it should be removed.
# This sample assumes that the subscription key can be passed as an
# Ocp-Apim-Subscription-Key header, however, there are APIs that will require
# a Authorization header and a Bearer token. Only one is required.
headers = {
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    'Content-type': 'application/json',
    'X-ClientTraceId': str(uuid.uuid4())
}

# To ensure readability, the JSON body is hardcoded for this sample. In a
# tutorial, you would more than likely want to leverage a class for this data
# structure.
body = [{
    'text': 'Hello World!'
}]

# This is a POST request using the requests library. All REST methods are
# available via requests. For example: requests.get(). The response is stored
# as raw JSON.
request = requests.post(constructed_url, headers=headers, json=body)
response = request.json()

# The dumps method is used to prettify the response so that it's human readable
# when printed to terminal/console.
print(json.dumps(response, sort_keys=True, indent=4, ensure_ascii=False, separators=(',', ': ')))
