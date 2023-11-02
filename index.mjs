// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two-pi@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eulergamma@v0.1.1-esm/index.mjs";function p(s){var t,e,i;return t=1+(t=1/s)*function(s){return 0===s?.08333333333334822:.08333333333334822+s*(.0034722222160545866+s*(s*(.0007873113957930937*s-.00022954996161337813)-.0026813261780578124))}(t),e=l(s),e=s>143.01608?(i=j(s,.5*s-.25))*(i/e):j(s,s-.5)/e,a*e*t}function h(s,t){return t/((1+f*s)*s)}function v(a){var j,l,f,v;if(t(a)&&a<0||a===d||s(a))return NaN;if(0===a)return e(a)?d:m;if(a>171.61447887182297)return m;if(a<-170.5674972726612)return 0;if((l=i(a))>33)return a>=0?p(a):(j=0==(1&(f=n(l)))?-1:1,(v=l-f)>.5&&(v=l-(f+=1)),v=l*r(o*v),j*o/(i(v)*p(l)));for(v=1;a>=3;)v*=a-=1;for(;a<0;){if(a>-1e-9)return h(a,v);v/=a,a+=1}for(;a<2;){if(a<1e-9)return h(a,v);v/=a,a+=1}return 2===a?v:v*function(s){var t,e;return 0===s?1:((s<0?-s:s)<=1?(t=1+s*(.4942148268014971+s*(.20744822764843598+s*(.04763678004571372+s*(.010421379756176158+s*(.0011913514700658638+s*(.00016011952247675185+0*s)))))),e=1+s*(.0714304917030273+s*(s*(.035823639860549865+s*(.011813978522206043+s*(s*(.0005396055804933034+-23158187332412014e-21*s)-.004456419138517973)))-.23459179571824335))):(t=0+(s=1/s)*(.00016011952247675185+s*(.0011913514700658638+s*(.010421379756176158+s*(.04763678004571372+s*(.20744822764843598+s*(.4942148268014971+1*s)))))),e=s*(.0005396055804933034+s*(s*(.011813978522206043+s*(.035823639860549865+s*(s*(.0714304917030273+1*s)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),t/e)}(a-=2)}export{v as default};
//# sourceMappingURL=index.mjs.map
