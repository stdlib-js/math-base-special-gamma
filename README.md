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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Gamma Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gamma][gamma-function] function.

<section class="intro">

The [gamma function][gamma-function] extends the [factorial function][@stdlib/math/base/special/factorial] to [real][real] and [complex][complex] numbers. If `n` is a positive `integer`,

<!-- <equation class="equation" label="eq:gamma_function_positive_integers" align="center" raw="\Gamma ( n ) = (n-1)!" alt="Gamma function for positive integers."> -->

```math
\Gamma ( n ) = (n-1)!
```

<!-- <div class="equation" align="center" data-raw-text="\Gamma ( n ) = (n-1)!" data-equation="eq:gamma_function_positive_integers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gamma/docs/img/equation_gamma_function_positive_integers.svg" alt="Gamma function for positive integers.">
    <br>
</div> -->

<!-- </equation> -->

Generalized to all complex numbers `z`, except for nonpositive integers, the [gamma function][gamma-function] can be expressed as an infinite product

<!-- <equation class="equation" label="eq:gamma_function_infinite_product" align="center" raw="\Gamma ( z ) = \frac{e^{-\gamma z}}{z} \prod^{\infty}_{n=1} \left ( 1+\frac{z}{n}\right )^{-1} e^{z/n}" alt="Gamma function for all complex numbers."> -->

```math
\Gamma ( z ) = \frac{e^{-\gamma z}}{z} \prod^{\infty}_{n=1} \left ( 1+\frac{z}{n}\right )^{-1} e^{z/n}
```

<!-- <div class="equation" align="center" data-raw-text="\Gamma ( z ) = \frac{e^{-\gamma z}}{z} \prod^{\infty}_{n=1} \left ( 1+\frac{z}{n}\right )^{-1} e^{z/n}" data-equation="eq:gamma_function_infinite_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/gamma/docs/img/equation_gamma_function_infinite_product.svg" alt="Gamma function for all complex numbers.">
    <br>
</div> -->

<!-- </equation> -->

where `γ ≈ 0.577216` is the  [Euler–Mascheroni constant][@stdlib/constants/float64/eulergamma].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-gamma
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var gamma = require( '@stdlib/math-base-special-gamma' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -10.0, 10.0, opts );

logEachMap( 'x: %0.4f, f(x): %0.4f', x, gamma );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/gamma.h"
```

#### stdlib_base_gamma( x )

Evaluates the [gamma function][gamma-function].

```c
double out = stdlib_base_gamma( 4.0 );
// returns 6.0

out = stdlib_base_gamma( -1.5 );
// returns ~2.363
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_gamma( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/gamma.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 4.0, -1.5, -0.5, 0.5 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_gamma( x[ i ] );
        printf( "gamma(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/gamma1pm1`][@stdlib/math/base/special/gamma1pm1]</span><span class="delimiter">: </span><span class="description">compute gamma(x+1) - 1.</span>
-   <span class="package-name">[`@stdlib/math-base/special/gammainc`][@stdlib/math/base/special/gammainc]</span><span class="delimiter">: </span><span class="description">incomplete gamma function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/gammaincinv`][@stdlib/math/base/special/gammaincinv]</span><span class="delimiter">: </span><span class="description">inverse incomplete gamma function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/gammaln`][@stdlib/math/base/special/gammaln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the gamma function.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-gamma/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-gamma/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-gamma/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-gamma/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-gamma/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-gamma/blob/esm/README.md
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
