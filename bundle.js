(()=>{var t={649:()=>{var t=document.querySelector(".books"),e=document.querySelector("#books"),r=!1,o=function(){t.classList.add("hidden")};e.addEventListener("click",(function(e){t.classList.remove("hidden"),r=!0})),document.addEventListener("click",(function(t){!t.target.closest("#books")&&r&&o()}));t.addEventListener("click",(function(t){var r=t.target.closest(".books__item");r&&(e.value=r.textContent,o())}))},894:()=>{document.querySelectorAll(".form__input").forEach((function(t){var e=t.id,r=document.querySelector('label[for="'.concat(e,'"]'));t.addEventListener("focus",(function(){(r.classList.add("top"),t.classList.contains("form__input--select"))&&document.querySelector("div[data-input=".concat(e,"]")).classList.add("top")})),t.addEventListener("blur",(function(){setTimeout((function(){t.classList.contains("form__input--select")&&document.querySelector("div[data-input=".concat(e,"]")).classList.remove("top");""===t.value.trim()&&r.classList.remove("top")}),100)}))}))},301:()=>{var t,e=window.matchMedia("(min-width:769px)"),r=function(){!0!==e.matches?!1!==e.matches||(t=new Swiper(".swiper",{loop:!0,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0}})):void 0!==t&&t.destroy(!0,!0)};e.addListener(r),r()},91:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},159:(t,e,r)=>{"use strict";t.exports=r.p+"img/Star.svg"},39:(t,e,r)=>{"use strict";t.exports=r.p+"img/books-1.jpg"},89:(t,e,r)=>{"use strict";t.exports=r.p+"img/post1.png"},111:(t,e,r)=>{"use strict";t.exports=r.p+"img/post2.png"},24:(t,e,r)=>{"use strict";t.exports=r.p+"img/post3.png"}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,r),s.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var t=r(91),e=r.n(t),o=new URL(r(39),r.b),n=new URL(r(159),r.b),s=new URL(r(89),r.b),i=new URL(r(111),r.b),c=new URL(r(24),r.b),a=e()(o),u=e()(n,{hash:"#Star"});e()(s),e()(i),e()(c);r(649),r(894),r(301)})()})();