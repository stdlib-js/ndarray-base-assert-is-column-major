/** @license Apache-2.0 */

'use strict';

/**
* Given a stride array, determine whether an array is column-major.
*
* @module @stdlib/ndarray-base-assert-is-column-major
*
* @example
* var isColumnMajor = require( '@stdlib/ndarray-base-assert-is-column-major' );
*
* var bool = isColumnMajor( [ 1, 2 ] );
* // returns true
*
* bool = isColumnMajor( [ 2, 1 ] );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
