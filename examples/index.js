'use strict';

var isDateArray = require( './../lib' );

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
