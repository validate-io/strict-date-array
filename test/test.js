/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isDateArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-strict-date-array', function tests() {

	it( 'should export a function', function test() {
		expect( isDateArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isDateArray( [new Date(), new Date()] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			new Date(),
			function(){},
			[],
			{},
			['2014/02/21'],
			[{}],
			[new Date(), Date.now()]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isDateArray( value );
		}
	});

});
