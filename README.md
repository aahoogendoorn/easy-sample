# easy-sample
[![pipeline](https://github.com/thisisagile/easy-sample/workflows/pipeline/badge.svg?branch=main)](https://github.com/thisisagile/easy-sample/actions?query=workflow%3A%22pipeline%22)
[![npm package](https://img.shields.io/npm/v/@thisisagile/easy-sample.svg)](https://www.npmjs.com/package/@thisisagile/easy-sample)
[![quality gate](https://sonarcloud.io/api/project_badges/measure?project=thisisagile_easy-sample&metric=alert_status)](https://sonarcloud.io/dashboard?id=thisisagile_easy-sample)
[![coverage](https://sonarcloud.io/api/project_badges/measure?project=thisisagile_easy-sample&metric=coverage)](https://sonarcloud.io/dashboard?id=thisisagile_easy-sample)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Repository with a set of examples of how to apply @thisisagile/easy for building simple, straightforward domain-driven microservices in TypeScript, running on express.js and node.js (for example).

We keep this library simple on purpose, extending it using additional libraries and frameworks should be possible simply by embedding their API's.

We will use jest for unit testing, wrap axios for request handling, and a simple mongodb connector, and wrap tsyringe for dependency injection.

### Please note: we are slowly adding more value to the library, step by step. Most of our additions are useful as such, both it will take some effort for the full architecture to be in place to implement fully working microservices. Please bear with us.
