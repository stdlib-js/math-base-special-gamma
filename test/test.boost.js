/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var incrspace = require( '@stdlib/array-base-incrspace' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var gamma = require( './../lib/boost/gamma.js' );


// FIXTURES //

var integers = require( './fixtures/cpp/integers.json' );
var decimals = require( './fixtures/cpp/decimals.json' );
var near1 = require( './fixtures/cpp/near_one.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gamma, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative integer, the function returns `NaN`', function test( t ) {
	var values = incrspace( -1.0, -1000.0, -1.0 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = gamma( values[ i ] );
		t.equal( isnan( v ), true, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'if provided negative infinity, the function returns `NaN`', function test( t ) {
	var v = gamma( NINF );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = gamma( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `-0`, the function returns negative infinity', function test( t ) {
	var v = gamma( -0.0 );
	t.equal( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `+0`, the function returns positive infinity', function test( t ) {
	var v = gamma( 0.0 );
	t.equal( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'if `x >= 171.63...`, the function returns positive infinity', function test( t ) {
	var values = incrspace( 172.0, 1000.0, 10.1234 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = gamma( values[ i ] );
		t.equal( v, PINF, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'if `x <= -170.65`, the function returns zero', function test( t ) {
	var values = incrspace( -170.65, -1000.0, -10.1234 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = gamma( values[ i ] );
		t.equal( v, 0, 'returns expected value when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the gamma function (positive integers)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	expected = integers.expected;
	x = integers.x;

	for ( i = 0; i < x.length; i++ ) {
		v = gamma( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 10.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function evaluates the gamma function (decimal values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	expected = decimals.expected;
	x = decimals.x;

	for ( i = 0; i < x.length; i++ ) {
		v = gamma( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 10.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function evaluates the gamma function (values near one)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	expected = near1.expected;
	x = near1.x;

	for ( i = 0; i < x.length; i++ ) {
		v = gamma( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 10.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. y: '+v+'. E: '+ expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'if provided a positive integer, the function returns the factorial of (n-1)', function test( t ) {
	t.equal( gamma( 4.0 ), 6.0, 'returns 6' );
	t.equal( gamma( 5.0 ), 24.0, 'returns 24' );
	t.equal( gamma( 6.0 ), 120.0, 'returns 120' );
	t.end();
});
