Date Array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an array of Date objects.


## Installation

``` bash
$ npm install validate.io-strict-date-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isDateArray = require( 'validate.io-strict-date-array' );
```

#### isDateArray( value )

Validates if a `value` is an `array` of `Date` objects.

``` javascript
var value = [ new Date(), new Date() ];

var bool = isDateArray( value );
// returns true
```

__Note__: the method will return `false` for an empty `array`.


## Examples

``` javascript
var isDateArray = require( 'validate.io-strict-date-array' );

console.log( isDateArray( [new Date(), new Date()] ) );
// returns true

console.log( isDateArray( [new Date(), Date.now()] ) );
// returns false

console.log( isDateArray( ['72ms-ago'] ) );
// returns false

console.log( isDateArray( ['2015/02/21'] ) );
// returns false

console.log( isDateArray( [] ) );
// returns false

console.log( isDateArray( [{}] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-strict-date-array.svg
[npm-url]: https://npmjs.org/package/validate.io-strict-date-array

[travis-image]: http://img.shields.io/travis/validate-io/strict-date-array/master.svg
[travis-url]: https://travis-ci.org/validate-io/strict-date-array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/strict-date-array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/strict-date-array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/strict-date-array.svg
[dependencies-url]: https://david-dm.org/validate-io/strict-date-array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/strict-date-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/strict-date-array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/strict-date-array.svg
[github-issues-url]: https://github.com/validate-io/strict-date-array/issues
