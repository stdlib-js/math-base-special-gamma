<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Gamma Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gamma][gamma-function] function.

<section class="intro">

The [gamma function][gamma-function] extends the [factorial function][@stdlib/math/base/special/factorial] to [real][real] and [complex][complex] numbers. If `n` is a positive `integer`,

<!-- <equation class="equation" label="eq:gamma_function_positive_integers" align="center" raw="\Gamma ( n ) = (n-1)!" alt="Gamma function for positive integers."> -->

<div class="equation" align="center" data-raw-text="\Gamma ( n ) = (n-1)!" data-equation="eq:gamma_function_positive_integers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gamma/docs/img/equation_gamma_function_positive_integers.svg" alt="Gamma function for positive integers.">
    <br>
</div>

<!-- </equation> -->

Generalized to all complex numbers `z`, except for nonpositive integers, the [gamma function][gamma-function] can be expressed as an infinite product

<!-- <equation class="equation" label="eq:gamma_function_infinite_product" align="center" raw="\Gamma ( z ) = \frac{e^{-\gamma z}}{z} \prod^{\infty}_{n=1} \left ( 1+\frac{z}{n}\right )^{-1} e^{z/n}" alt="Gamma function for all complex numbers."> -->

<div class="equation" align="center" data-raw-text="\Gamma ( z ) = \frac{e^{-\gamma z}}{z} \prod^{\infty}_{n=1} \left ( 1+\frac{z}{n}\right )^{-1} e^{z/n}" data-equation="eq:gamma_function_infinite_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/gamma/docs/img/equation_gamma_function_infinite_product.svg" alt="Gamma function for all complex numbers.">
    <br>
</div>

<!-- </equation> -->

where `?? ??? 0.577216` is the  [Euler???Mascheroni constant][@stdlib/constants/float64/eulergamma].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-gamma
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var gamma = require( '@stdlib/math-base-special-gamma' );
```

#### gamma( x )

Evaluates the [gamma function][gamma-function].

```javascript
var v = gamma( 4.0 );
// returns 6.0

v = gamma( -1.5 );
// returns ~2.363

v = gamma( -0.5 );
// returns ~-3.545

v = gamma( 0.5 );
// returns ~1.772

v = gamma( 0.0 );
// returns Infinity

v = gamma( -0.0 );
// returns -Infinity

v = gamma( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var gamma = require( '@stdlib/math-base-special-gamma' );

var x = linspace( -10.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, f(x): %d', x[ i ], gamma( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/gamma1pm1`][@stdlib/math/base/special/gamma1pm1]</span><span class="delimiter">: </span><span class="description">compute gamma(x+1) - 1.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammainc`][@stdlib/math/base/special/gammainc]</span><span class="delimiter">: </span><span class="description">incomplete gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammaincinv`][@stdlib/math/base/special/gammaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gammaln`][@stdlib/math/base/special/gammaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-gamma.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-gamma

[test-image]: https://github.com/stdlib-js/math-base-special-gamma/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-gamma/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-gamma/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-gamma?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-gamma.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-gamma/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-gamma/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-gamma/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-gamma/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-gamma/blob/main/branches.md

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[@stdlib/math/base/special/factorial]: https://github.com/stdlib-js/math-base-special-factorial

[real]: https://en.wikipedia.org/wiki/Real_number

[complex]: https://en.wikipedia.org/wiki/Complex_number

[@stdlib/constants/float64/eulergamma]: https://github.com/stdlib-js/constants-float64-eulergamma

<!-- <related-links> -->

[@stdlib/math/base/special/gamma1pm1]: https://github.com/stdlib-js/math-base-special-gamma1pm1

[@stdlib/math/base/special/gammainc]: https://github.com/stdlib-js/math-base-special-gammainc

[@stdlib/math/base/special/gammaincinv]: https://github.com/stdlib-js/math-base-special-gammaincinv

[@stdlib/math/base/special/gammaln]: https://github.com/stdlib-js/math-base-special-gammaln

<!-- </related-links> -->

</section>

<!-- /.links -->
