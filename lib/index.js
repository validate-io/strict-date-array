/**
*
*	VALIDATE: strict-date-array
*
*
*	DESCRIPTION:
*		- Validates if a value is an array of Date objects.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isDate = require( 'validate.io-strict-date' );


// IS DATE ARRAY //

/**
* FUNCTION: isDateArray( value )
*	Validates if a value is an array of Date objects.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of Date objects
*/
function isDateArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isDate( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isDateArray()


// EXPORTS //

module.exports = isDateArray;
