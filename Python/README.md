## Template – Boilerplate code, comments, and instructions
You can use this template as the starting point for any REST call to an Azure Cognitive Service (in theory, any service). In the next few sections, we’ll talk about how you can tweak the template in a structured way to meet your product’s needs (for example: when a service needs to chunk audio or requires binary attachments).

https://github.com/erhopf/REST-templates/blob/master/Python/restTemplate.py

This is a living document. If you can improve what's there, submit a pull request. Let's make this better together (laying it on thick here!).

## Common modules (libraries)
Today, we've identified four libraries that are used in each sample.

* [os](https://docs.python.org/3/library/os.html) - provides access to the operating system. For our samples, this allows the program to read from an environment variable.
* [requests](http://docs.python-requests.org/en/master/) - From their docs: Requests allows you to send organic, grass-fed HTTP/1.1 requests, without the need for manual labor. There’s no need to manually add query strings to your URLs, or to form-encode your POST data. Keep-alive and HTTP connection pooling are 100% automatic, thanks to urllib3.
* [uuid](https://docs.python.org/3/library/uuid.html) - allows for easy creation of UUIDs that meet RFC4122. This is helpful when a call requires something like an X-ClientTraceId header, which is used to uniquely identify a request.
* [json](https://docs.python.org/3/library/json.html) - a simple JSON encoder/decoder that we use to handle responses from the Cognitive Services APIs.


## Virtual environments
With Python, it's generally accepted that the using a virtual environment is a good idea for testing. By creating a sandbox, you can install modules and test new code without impacting the packages that your system relies on. For example, you may want to test a beta version of the requests library with improved support for HTTP2 connection maintenance, but due to its instability, you don't want to replace the system-wide module that other programs rely on, so you use a virtual environment.

### Are Quickstarts the right place for this information?
That depends... If there isn't significant overhead to get one setup, I would advocate for its use. It might be overkill for REST calls, but for SDK quickstarts, where the full Azure SDK is required, using a virtual environment is a nice value add.

### How to set up a virtual environment
The instructions to set up and configure a virtual environment are different for Python 2.x and Python 3.x. First, install the correct package for the version you plan to use:

* [virtualenv](https://docs.python.org/3/tutorial/venv.html) for Python 2.7
* [venv](https://pypi.python.org/pypi/virtualenv) for Python 3.x

### Python 2.x
Create a virtual environment with virtualenv for Python 2.7:
```
virtualenv mytestenv
```

Activate your environment:
```
cd mytestenv
source bin/activate
```

### Python 3.x
Create a virtual environment with venv for Python 3.x:

```
python -m venv mytestenv
```

### Future add-ons
This is a list of topics that may warrant a standardized sample and a section in this guide. Feel free to add whatever you think is missing.

* How to stream audio
* How to read from files
* When to use/create a class
