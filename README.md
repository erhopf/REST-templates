The goal is to standardize the way that sample code is written for Cognitive Services quickstarts to reduce variance as developers move from one documentation set (service) to another, and to make it as easy as possible for content developers to quickly create high-quality samples for a new service.

This guide includes templates that can be used for REST calls and instructions for how to use each.  

## Why should I use these templates?

Easy, they improves the developer experience and make life easier for content creators.

* They standardize which modules are used to make RESTful calls. By using popular libraries, it creates a familiar experience for our developers, and makes it easy to test multiple services without installing too many dependencies.
* They're easy to read and include plenty of code comments. When a developer decides to use your code, they don't want to spend the first ten minutes trying to figure out why you used abbreviated names for your variables and functions.
* Reduces the cognitive load for content creators. I can think of better things to do with my time than rewrite REST calls in every language each time a new service is launched.

## When not to use these templates...

These template are specifically designed to make a REST call in less than 5 minutes. If you are building a tutorial or production application, this is probably not what you’re looking for. However! The templates are idiomatic and use popular libraries -- so I leave it up to you to make the right call for how far you take this ;).  

## Did you say there's a web app?!

Well, I didn't say that, but there is a web app that will automagically create samples in Python, Node.js, and cURL. It's still in beta and a little raw, so let me know if you encounter any issues and I'll be sure to take a look.

* [Sample Generator Web App](https://erhopf.github.io/REST-templates/)

## Show me the templates!

* [.NET Core](./DotNET/restTemplateSimple.cs)
* [Java (Gradle)](./Java/restTemplateSimple.java)
* [Node](./Node/restTemplate.js)
* [Python](./Python/restTemplate.py)
* [Go](./GoLang/restTemplate.go)
* [cURL](./cURL/restCall.txt)

## Release notes

* **2018-12-05**: Added preliminary Go template. Please note: this template is not available via the Generator yet. 
* **2018-11-30**: Added templates for Java and .NET Core. These aren't available in the generator yet. Please note, that these are for simple HTTP requests. Templates will be added with sample code for writing to file and exchanging access tokens.
* **2018-11-08**: Added improve on GitHub button and report issues link to the web app.
* **2018-11-06**: Published the beta web app.
* **2018-11-05**: Added a cURL sample.
* **2018-10-25**: First dump of Node.js and Python templates.
