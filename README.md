The goal is to standardize the way that sample code is written for Cognitive Services quickstarts to reduce variance as developers move from one documentation set (service) to another, and to make it as easy as possible for content developers to quickly create high-quality samples for a new service.

This guide includes templates that can be used for REST calls and instructions for how to use each.  

## Why should I use the template?

Easy, it improves the developer experience and makes life easier for content creators.

* It standardizes which modules are used to make RESTful calls. By using popular libraries, it creates a familiar experience for our developers, and makes it easy to test multiple services without installing too many dependencies.
* It's easy to read and includes plenty of code comments. When a developer decides to use your code, they don't want to spend the first ten minutes trying to figure out why you used abbreviated names for your variables and functions.
* Reduces the cognitive load for content creators. I can think of better things to do with my time than rewrite REST calls in every language each time a new service is launched.

## When not to use these templates...

These template are specifically designed to make a REST call in less than 5 minutes. If you are building a tutorial or production application, this is probably not what you’re looking for. However! The templates are idiomatic and use popular libraries -- so I leave it up to you to make the right call for how far you take this ;).  

## Show me the templates!

* [Node](./Node/README.md)
* [Python](./NODE/README.md)

## Release notes

* **2018-10-25**: First dump of Node.js and Python templates.
