!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(t){return e[t]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="p5Qz")}({"2Gk3":function(){"use strict";try{self["workbox:cacheable-response:6.2.4"]&&_()}catch(e){}},Gpc1:function(){"use strict";try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},I3Xu:function(){"use strict";try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},myed:function(){"use strict";try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}},p5Qz:function(e,t,r){"use strict";function n(e,t,r){let n;if("string"==typeof e){const i=new URL(e,location.href);0;n=new g((({url:e})=>e.href===i.href),t,r)}else if(e instanceof RegExp)n=new b(e,t,r);else if("function"==typeof e)n=new g(e,t,r);else{if(!(e instanceof g))throw new m("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return R().registerRoute(n),n}function i(e,t){const r=t();return e.waitUntil(r),r}function s(e){if(!e)throw new m("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:r}=e;if(!r)throw new m("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(r,location.href),i=new URL(r,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:i.href}}function o(e,t){return new Promise((function(r,n){let i,s,o,c,u;if(i=null,e.url){let t;t=new URL(e.url),i=t.origin}return i!==self.location.origin?n(new m("cross-origin-copy-response",{origin:i})):(s=e.clone(),o={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},c=t?t(o):o,Promise.resolve(new Promise((function(e,t){return function(){if(void 0===O){const e=new Response("");if("body"in e)try{new Response(e.body),O=!0}catch(e){O=!1}O=!1}return O}()?e(s.body):Promise.resolve(s.blob()).then(e,t)}))).then((function(e){try{return u=e,r(new Response(u,c))}catch(e){return n(e)}}),n))}))}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}function a(e){return new Promise((t=>setTimeout(t,e)))}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){return"string"==typeof e?new Request(e):e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e){return H().getCacheKeyForURL(e)}function p(e,t){!function(e){H().precache(e)}(e),function(e){const t=H();n(new F(t,e))}(t)}r.r(t);r("xgXd");const y=(e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r};class m extends Error{constructor(e,t){super(y(e,t)),this.name=e,this.details=t}}r("I3Xu");const v=e=>e&&"object"==typeof e?e:{handle:e};class g{constructor(e,t,r="GET"){this.handler=v(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=v(e)}}class b extends g{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}const w=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");class P{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return void 0;const n=r.origin===location.origin,{params:i,route:s}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:r});let o=s&&s.handler;const c=e.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return void 0;let u;try{u=o.handle({url:r,request:e,event:t,params:i})}catch(e){u=Promise.reject(e)}const a=s&&s.catchHandler;return u instanceof Promise&&(this._catchHandler||a)&&(u=u.catch((n=>new Promise(function(s,o){function c(){return this._catchHandler?s(this._catchHandler.handle({url:r,request:e,event:t})):o(n)}if(a){0;var u=function(){try{return c.call(this)}catch(e){return o(e)}}.bind(this),h=function(e){try{return e instanceof Error&&(n=e),u()}catch(e){return o(e)}};try{return Promise.resolve(a.handle({url:r,request:e,event:t,params:i})).then(s,h)}catch(e){h(e)}}return c.call(this)}.bind(this))))),u}findMatchingRoute({url:e,sameOrigin:t,request:r,event:n}){const i=this._routes.get(r.method)||[];for(const s of i){let i;const o=s.match({url:e,sameOrigin:t,request:r,event:n});if(o)return i=o,(Array.isArray(i)&&0===i.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(i=void 0),{route:s,params:i}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,v(e))}setCatchHandler(e){this._catchHandler=v(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new m("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new m("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let _;const R=()=>(_||(_=new P,_.addFetchListener(),_.addCacheListener()),_),C={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},U=e=>[C.prefix,e,C.suffix].filter((e=>e&&e.length>0)).join("-"),q=e=>e||U(C.googleAnalytics),x=e=>e||U(C.precache),k=()=>C.prefix,L=e=>e||U(C.runtime),T=()=>C.suffix;r("Gpc1");class K{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=({request:e,state:t})=>new Promise((function(r){return t&&(t.originalRequest=e),r()})),this.cachedResponseWillBeUsed=({event:e,state:t,cachedResponse:r})=>new Promise(function(n){if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n(r)}.bind(this))}}class S{constructor({precacheController:e}){this.cacheKeyWillBeUsed=({request:e,params:t})=>new Promise(function(r){const n=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return r(n?new Request(n):e)}.bind(this)),this._precacheController=e}}let O;class N{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const M=new Set;r("myed");class E{constructor(e,t){this._cacheKeys={},h(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new N,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return new Promise(function(t,r){function n(){o=this.hasCallback("fetchDidFail")?s.clone():null;var e=function(){try{c=s.clone();var e=function(e){try{if(o)return Promise.resolve(this.runCallbacks("fetchDidFail",{error:e,event:i,originalRequest:o.clone(),request:c.clone()})).then(function(){try{return t.call(this)}catch(e){return r(e)}}.bind(this),r);function t(){throw e}return t.call(this)}catch(e){return r(e)}}.bind(this);try{let r;return Promise.resolve(fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions)).then(function(n){try{{var s,o;function u(){var[e,t]=o();return a.bind(this,e,t)}function a(t,n){return o=function(){return[t,n]},!(n[1]=n[0].next()).done&&(t=n[1].value,1)?Promise.resolve(t({event:i,request:c,response:r})).then((function(t){try{return r=t,u}catch(t){return e(t)}}),e):[1]}return r=n,(s=function(t){for(;t;){if(t.then)return void t.then(s,e);try{if(t.pop){if(t.length)return t.pop()?h.call(this):t;t=u}else t=t.call(this)}catch(t){return e(t)}}}.bind(this))(a.bind(this,void 0,[this.iterateCallbacks("fetchDidSucceed")[Symbol.iterator]()]));function h(){return t(r)}}}catch(t){return e(t)}}.bind(this),e)}catch(t){e(t)}}catch(e){return r(e)}}.bind(this),n=function(t){try{if(t instanceof Error)throw new m("plugin-error-request-will-fetch",{thrownErrorMessage:t.message});return e()}catch(e){return r(e)}};try{var u,a;function t(){var[e,t]=a();return r.bind(this,e,t)}function r(e,r){return a=function(){return[e,r]},!(r[1]=r[0].next()).done&&(e=r[1].value,1)?Promise.resolve(e({request:s.clone(),event:i})).then((function(e){try{return s=e,t}catch(e){return n(e)}}),n):[1]}return(u=function(e){for(;e;){if(e.then)return void e.then(u,n);try{if(e.pop){if(e.length)return e.pop()?o.call(this):e;e=t}else e=e.call(this)}catch(e){return n(e)}}}.bind(this))(r.bind(this,void 0,[this.iterateCallbacks("requestWillFetch")[Symbol.iterator]()]));function o(){return e()}}catch(e){n(e)}}let i,s,o,c;if(({event:i}=this),s=l(e),"navigate"===s.mode&&i instanceof FetchEvent&&i.preloadResponse){let e;return Promise.resolve(i.preloadResponse).then(function(i){try{return e=i,e?t(e):n.call(this)}catch(e){return r(e)}}.bind(this),r)}return n.call(this)}.bind(this))}fetchAndCachePut(e){return new Promise(function(t,r){let n,i;return Promise.resolve(this.fetch(e)).then(function(s){try{return n=s,i=n.clone(),this.waitUntil(this.cachePut(e,i)),t(n)}catch(e){return r(e)}}.bind(this),r)}.bind(this))}cacheMatch(e){return new Promise(function(t,r){let n,i,s,o,c,u;return n=l(e),({cacheName:s,matchOptions:o}=this._strategy),Promise.resolve(this.getCacheKey(n,"read")).then(function(e){try{return c=e,u=h(h({},o),{cacheName:s}),Promise.resolve(caches.match(c,u)).then(function(e){try{{var n,u;function a(){var[e,t]=u();return h.bind(this,e,t)}function h(e,t){return u=function(){return[e,t]},!(t[1]=t[0].next()).done&&(e=t[1].value,1)?Promise.resolve(e({cacheName:s,matchOptions:o,cachedResponse:i,request:c,event:this.event})).then((function(e){try{return i=e||void 0,a}catch(e){return r(e)}}),r):[1]}return i=e,(n=function(e){for(;e;){if(e.then)return void e.then(n,r);try{if(e.pop){if(e.length)return e.pop()?l.call(this):e;e=a}else e=e.call(this)}catch(e){return r(e)}}}.bind(this))(h.bind(this,void 0,[this.iterateCallbacks("cachedResponseWillBeUsed")[Symbol.iterator]()]));function l(){return t(i)}}}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}.bind(this))}cachePut(e,t){return new Promise(function(r,n){let i,s,o,h,f,d,p,y;return i=l(e),Promise.resolve(a(0)).then(function(){try{return Promise.resolve(this.getCacheKey(i,"write")).then(function(e){try{return s=e,t?Promise.resolve(this._ensureResponseSafeToCache(t)).then(function(e){try{return o=e,o?(({cacheName:h,matchOptions:f}=this._strategy),Promise.resolve(self.caches.open(h)).then(function(e){try{return d=e,p=this.hasCallback("cacheDidUpdate"),Promise.resolve(new Promise((function(e,t){return p?Promise.resolve(function(e,t,r,n){return new Promise((function(i,s){let o,a,h;return o=u(t.url,r),t.url===o?i(e.match(t,n)):(a=c(c({},n),{ignoreSearch:!0}),Promise.resolve(e.keys(t,a)).then((function(t){try{h=t;for(const t of h){let s;if(s=u(t.url,r),o===s)return i(e.match(t,n))}return i()}catch(e){return s(e)}}),s))}))}(d,s.clone(),["__WB_REVISION__"],f)).then(e,t):e(null)}))).then(function(e){try{y=e;var t=function(){try{var e,t;function i(){var[e,r]=t();return c.bind(this,e,r)}function c(e,r){return t=function(){return[e,r]},!(r[1]=r[0].next()).done&&(e=r[1].value,1)?Promise.resolve(e({cacheName:h,oldResponse:y,newResponse:o.clone(),request:s,event:this.event})).then((function(){try{return i}catch(e){return n(e)}}),n):[1]}return(e=function(t){for(;t;){if(t.then)return void t.then(e,n);try{if(t.pop){if(t.length)return t.pop()?u.call(this):t;t=i}else t=t.call(this)}catch(e){return n(e)}}}.bind(this))(c.bind(this,void 0,[this.iterateCallbacks("cacheDidUpdate")[Symbol.iterator]()]));function u(){return r(!0)}}catch(e){return n(e)}}.bind(this),i=function(e){try{if(e instanceof Error){if("QuotaExceededError"===e.name)return Promise.resolve(new Promise((function(e,t){function r(){var[e,t]=o();return n.bind(this,e,t)}function n(e,n){return o=function(){return[e,n]},!(n[1]=n[0].next()).done&&(e=n[1].value,1)?Promise.resolve(e()).then((function(){try{return r}catch(e){return t(e)}}),t):[1]}function i(){return e()}var s,o;return(s=function(e){for(;e;){if(e.then)return void e.then(s,t);try{if(e.pop){if(e.length)return e.pop()?i.call(this):e;e=r}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(n.bind(this,void 0,[M[Symbol.iterator]()]))}))).then(function(){try{return t.call(this)}catch(e){return n(e)}}.bind(this),n);function t(){throw e}return t.call(this)}return t()}catch(e){return n(e)}}.bind(this);try{return Promise.resolve(d.put(s,p?o.clone():o)).then((function(){try{return t()}catch(e){return i(e)}}),i)}catch(e){i(e)}}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this),n)):r(!1)}catch(e){return n(e)}}.bind(this),n):n(new m("cache-put-with-no-response",{url:w(s.url)}))}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this),n)}.bind(this))}getCacheKey(e,t){return new Promise(function(r,n){function i(){return r(this._cacheKeys[t])}if(!this._cacheKeys[t]){let r;var s,o;function c(){var[e,t]=o();return u.bind(this,e,t)}function u(e,i){return o=function(){return[e,i]},!(i[1]=i[0].next()).done&&(e=i[1].value,1)?Promise.resolve(e({mode:t,request:r,event:this.event,params:this.params})).then((function(e){try{return r=l(e),c}catch(e){return n(e)}}),n):[1]}return r=e,(s=function(e){for(;e;){if(e.then)return void e.then(s,n);try{if(e.pop){if(e.length)return e.pop()?a.call(this):e;e=c}else e=e.call(this)}catch(e){return n(e)}}}.bind(this))(u.bind(this,void 0,[this.iterateCallbacks("cacheKeyWillBeUsed")[Symbol.iterator]()]));function a(){return this._cacheKeys[t]=r,i.call(this)}}return i.call(this)}.bind(this))}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}runCallbacks(e,t){return new Promise(function(r,n){function i(){var[e,t]=u();return s.bind(this,e,t)}function s(e,r){return u=function(){return[e,r]},!(r[1]=r[0].next()).done&&(e=r[1].value,1)?Promise.resolve(e(t)).then((function(){try{return i}catch(e){return n(e)}}),n):[1]}function o(){return r()}var c,u;return(c=function(e){for(;e;){if(e.then)return void e.then(c,n);try{if(e.pop){if(e.length)return e.pop()?o.call(this):e;e=i}else e=e.call(this)}catch(e){return n(e)}}}.bind(this))(s.bind(this,void 0,[this.iterateCallbacks(e)[Symbol.iterator]()]))}.bind(this))}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),n=n=>{const i=h(h({},n),{state:r});return t[e](i)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}doneWaiting(){return new Promise(function(e,t){function r(){return(i=this._extendLifetimePromises.shift())?Promise.resolve(i).then((function(){try{return r}catch(e){return t(e)}}),t):[1]}function n(){return e()}let i;var s;return(s=function(e){for(;e;){if(e.then)return void e.then(s,t);try{if(e.pop){if(e.length)return e.pop()?n.call(this):e;e=r}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(r)}.bind(this))}destroy(){this._handlerDeferred.resolve(null)}_ensureResponseSafeToCache(e){return new Promise(function(t,r){function n(){var[e,t]=a();return i.bind(this,e,t)}function i(e,t){return a=function(){return[e,t]},!(t[1]=t[0].next()).done&&(e=t[1].value,1)?Promise.resolve(e({request:this.request,response:o,event:this.event})).then((function(e){try{return o=e||void 0,c=!0,o?n:[1]}catch(e){return r(e)}}),r):[1]}function s(){return c||o&&200!==o.status&&(o=void 0),t(o)}let o,c;var u,a;return o=e,c=!1,(u=function(e){for(;e;){if(e.then)return void e.then(u,r);try{if(e.pop){if(e.length)return e.pop()?s.call(this):e;e=n}else e=e.call(this)}catch(e){return r(e)}}}.bind(this))(i.bind(this,void 0,[this.iterateCallbacks("cacheWillUpdate")[Symbol.iterator]()]))}.bind(this))}}class W{constructor(e={}){this.cacheName=L(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,n=new E(this,{event:t,request:r,params:"params"in e?e.params:void 0}),i=this._getResponse(n,r,t);return[i,this._awaitComplete(i,n,r,t)]}_getResponse(e,t,r){return new Promise(function(n,i){let s;return Promise.resolve(e.runCallbacks("handlerWillStart",{event:r,request:t})).then(function(){try{s=void 0;var o=function(){try{var o,c;function u(){var[e,t]=c();return a.bind(this,e,t)}function a(e,n){return c=function(){return[e,n]},!(n[1]=n[0].next()).done&&(e=n[1].value,1)?Promise.resolve(e({event:r,request:t,response:s})).then((function(e){try{return s=e,u}catch(e){return i(e)}}),i):[1]}return(o=function(e){for(;e;){if(e.then)return void e.then(o,i);try{if(e.pop){if(e.length)return e.pop()?h.call(this):e;e=u}else e=e.call(this)}catch(e){return i(e)}}}.bind(this))(a.bind(this,void 0,[e.iterateCallbacks("handlerWillRespond")[Symbol.iterator]()]));function h(){return n(s)}}catch(e){return i(e)}},c=function(n){try{if(n instanceof Error){var c,u;function o(){var[e,t]=u();return h.bind(this,e,t)}function h(e,c){return u=function(){return[e,c]},!(c[1]=c[0].next()).done&&(e=c[1].value,1)?Promise.resolve(e({error:n,event:r,request:t})).then((function(e){try{return s=e,s?[1]:o}catch(e){return i(e)}}),i):[1]}return(c=function(e){for(;e;){if(e.then)return void e.then(c,i);try{if(e.pop){if(e.length)return e.pop()?l.call(this):e;e=o}else e=e.call(this)}catch(e){return i(e)}}}.bind(this))(h.bind(this,void 0,[e.iterateCallbacks("handlerDidError")[Symbol.iterator]()]));function l(){return a.call(this)}}function a(){if(!s)throw n;return o()}return a.call(this)}catch(e){return i(e)}}.bind(this);try{return Promise.resolve(this._handle(t,e)).then((function(e){try{if(s=e,!s||"error"===s.type)throw new m("no-response",{url:t.url});return o()}catch(e){return c(e)}}),c)}catch(e){c(e)}}catch(e){return i(e)}}.bind(this),i)}.bind(this))}_awaitComplete(e,t,r,n){return new Promise((function(i,s){let o,c;var u=function(){try{var e=function(){try{return Promise.resolve(t.runCallbacks("handlerDidComplete",{event:n,request:r,response:o,error:c})).then((function(){try{return t.destroy(),c?s(c):i()}catch(e){return s(e)}}),s)}catch(e){return s(e)}},u=function(t){try{return t instanceof Error&&(c=t),e()}catch(e){return s(e)}};try{return Promise.resolve(t.runCallbacks("handlerDidRespond",{event:n,request:r,response:o})).then((function(){try{return Promise.resolve(t.doneWaiting()).then((function(){try{return e()}catch(e){return u(e)}}),u)}catch(e){return u(e)}}),u)}catch(e){u(e)}}catch(e){return s(e)}},a=function(){try{return u()}catch(e){return s(e)}};try{return Promise.resolve(e).then((function(e){try{return o=e,u()}catch(e){return a()}}),a)}catch(c){a()}}))}}class j extends W{constructor(e={}){e.cacheName=x(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(j.copyRedirectedCacheableResponsesPlugin)}_handle(e,t){return new Promise(function(r,n){let i;return Promise.resolve(t.cacheMatch(e)).then(function(s){try{return i=s,i?r(i):t.event&&"install"===t.event.type?Promise.resolve(this._handleInstall(e,t)).then(r,n):Promise.resolve(this._handleFetch(e,t)).then(r,n)}catch(e){return n(e)}}.bind(this),n)}.bind(this))}_handleFetch(e,t){return new Promise(function(r,n){function i(){return function(){return r(s)}.call(this)}let s;return this._fallbackToNetwork?Promise.resolve(t.fetch(e)).then(function(e){try{return s=e,i.call(this)}catch(e){return n(e)}}.bind(this),n):n(new m("missing-precache-entry",{cacheName:this.cacheName,url:e.url}))}.bind(this))}_handleInstall(e,t){return new Promise(function(r,n){let i,s;return this._useDefaultCacheabilityPluginIfNeeded(),Promise.resolve(t.fetch(e)).then((function(o){try{return i=o,Promise.resolve(t.cachePut(e,i.clone())).then((function(t){try{return s=t,s?r(i):n(new m("bad-precaching-response",{url:e.url,status:i.status}))}catch(e){return n(e)}}),n)}catch(e){return n(e)}}),n)}.bind(this))}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[r,n]of this.plugins.entries())n!==j.copyRedirectedCacheableResponsesPlugin&&(n===j.defaultPrecacheCacheabilityPlugin&&(e=r),n.cacheWillUpdate&&t++);0===t?this.plugins.push(j.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}j.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:({response:e})=>new Promise((function(t){return t(!e||e.status>=400?null:e)}))},j.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:({response:e})=>new Promise((function(t,r){return Promise.resolve(new Promise((function(t,r){return e.redirected?Promise.resolve(o(e)).then(t,r):t(e)}))).then(t,r)}))};class A{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new j({cacheName:x(e),plugins:[...t,new S({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url);const{cacheKey:e,url:n}=s(r),i="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new m("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==r.integrity)throw new m("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,r.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return i(e,(()=>new Promise(function(t,r){function n(){var[e,t,r]=h();return i.bind(this,e,t,r)}function i(t,i,s){if(h=function(){return[t,i,s]},!(s[1]=s[0].next()).done&&([t,i]=s[1].value,1)){let s,o,c;return s=this._cacheKeysToIntegrities.get(i),o=this._urlsToCacheModes.get(t),c=new Request(t,{integrity:s,cache:o,credentials:"same-origin"}),Promise.resolve(Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:c,event:e}))).then((function(){try{return n}catch(e){return r(e)}}),r)}return[1]}function s(){return({updatedURLs:c,notUpdatedURLs:u}=o),t({updatedURLs:c,notUpdatedURLs:u})}let o,c,u;var a,h;return o=new K,this.strategy.plugins.push(o),(a=function(e){for(;e;){if(e.then)return void e.then(a,r);try{if(e.pop){if(e.length)return e.pop()?s.call(this):e;e=n}else e=e.call(this)}catch(e){return r(e)}}}.bind(this))(i.bind(this,void 0,void 0,[this._urlsToCacheKeys[Symbol.iterator]()]))}.bind(this))))}activate(e){return i(e,(()=>new Promise(function(e,t){let r,n,i,s;return Promise.resolve(self.caches.open(this.strategy.cacheName)).then(function(o){try{return r=o,Promise.resolve(r.keys()).then(function(o){try{{var c,u;function a(){var[e,t]=u();return h.bind(this,e,t)}function h(e,n){if(u=function(){return[e,n]},!(n[1]=n[0].next()).done&&(e=n[1].value,1)){if(!i.has(e.url))return Promise.resolve(r.delete(e)).then(function(){try{return s.push(e.url),n.call(this)}catch(e){return t(e)}}.bind(this),t);function n(){return a}return n.call(this)}return[1]}return n=o,i=new Set(this._urlsToCacheKeys.values()),s=[],(c=function(e){for(;e;){if(e.then)return void e.then(c,t);try{if(e.pop){if(e.length)return e.pop()?l.call(this):e;e=a}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(h.bind(this,void 0,[n[Symbol.iterator]()]));function l(){return e({deletedURLs:s})}}}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}matchPrecache(e){return new Promise(function(t,r){let n,i;if(n=e instanceof Request?e.url:e,i=this.getCacheKeyForURL(n),i){let e;return Promise.resolve(self.caches.open(this.strategy.cacheName)).then((function(n){try{return e=n,t(e.match(i))}catch(e){return r(e)}}),r)}return t(void 0)}.bind(this))}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new m("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=f({cacheKey:t},r.params),this.strategy.handle(r))}}let I;const H=()=>(I||(I=new A),I);class F extends g{constructor(e,t){super((({request:r})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const s=new URL(e,location.href);s.hash="",yield s.href;const o=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(s,t);if(yield o.href,r&&o.pathname.endsWith("/")){const e=new URL(o.href);e.pathname+=r,yield e.href}if(n){const e=new URL(o.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:s});for(const t of e)yield t.href}}(r.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}const D=e=>"navigate"===e.request.mode;const B={cacheWillUpdate:({response:e})=>new Promise((function(t){return t(200===e.status||0===e.status?e:null)}))};const G={get googleAnalytics(){return q()},get precache(){return x()},get prefix(){return k()},get runtime(){return L()},get suffix(){return T()}};r("2Gk3");class X{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}const $={};var Q,z;n((({event:e})=>D(e)),new class extends W{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}_handle(e,t){return new Promise(function(r,n){let i,s,o,c,u;if(i=[],s=[],this._networkTimeoutSeconds){let r,n;({id:r,promise:n}=this._getTimeoutPromise({request:e,logs:i,handler:t})),o=r,s.push(n)}return c=this._getNetworkPromise({timeoutId:o,request:e,logs:i,handler:t}),s.push(c),Promise.resolve(t.waitUntil(new Promise((function(e,r){return Promise.resolve(new Promise((function(e,r){var n;return Promise.resolve(t.waitUntil(Promise.race(s))).then(function(t){try{if(!(n=t))return Promise.resolve(c).then(function(e){try{return n=e,i.call(this)}catch(e){return r(e)}}.bind(this),r);function i(){return e(n)}return i.call(this)}catch(e){return r(e)}}.bind(this),r)}))).then(e,r)})))).then(function(t){try{return u=t,u?r(u):n(new m("no-response",{url:e.url}))}catch(e){return n(e)}}.bind(this),n)}.bind(this))}_getTimeoutPromise({request:e,handler:t}){let r;return{promise:new Promise((n=>{r=setTimeout((()=>new Promise(function(r,i){return Promise.resolve(t.cacheMatch(e)).then((function(e){try{return n(e),r()}catch(e){return i(e)}}),i)}.bind(this))),1e3*this._networkTimeoutSeconds)})),id:r}}_getNetworkPromise({timeoutId:e,request:t,handler:r}){return new Promise(function(n,i){let s,o;var c=function(){try{if(e&&clearTimeout(e),s||!o)return Promise.resolve(r.cacheMatch(t)).then(function(e){try{return o=e,c.call(this)}catch(e){return i(e)}}.bind(this),i);function c(){return n(o)}return c.call(this)}catch(e){return i(e)}}.bind(this),u=function(e){try{return e instanceof Error&&(s=e),c()}catch(e){return i(e)}};try{return Promise.resolve(r.fetchAndCachePut(t)).then((function(e){try{return o=e,c()}catch(e){return u(e)}}),u)}catch(e){u(e)}}.bind(this))}}({cacheName:G.precache,networkTimeoutSeconds:5,plugins:[new class{constructor(e){this.cacheWillUpdate=({response:e})=>new Promise(function(t){return this._cacheableResponse.isResponseCacheable(e)?t(e):t(null)}.bind(this)),this._cacheableResponse=new X(e)}}({statuses:[200]})]})),Q=({event:e})=>D(e)?caches.match(d("/200.html")||d("/index.html")):Response.error(),R().setCatchHandler(Q),p([{'revision':'2e7f26694e7ade134a798a9f90406a4a','url':'/200.html'},{'revision':'663dfa60a5f1bf06c590cf07f21a234c','url':'/assets/fresh-codes.svg'},{'revision':'cecce51c65e8197ef4b2228e15024c64','url':'/assets/icons/android-chrome-192x192.png'},{'revision':'eed1c34561a82ef0ed4e01e23af84ad3','url':'/assets/icons/android-chrome-512x512.png'},{'revision':'37e106673c019152ec66d9bd78482524','url':'/assets/icons/apple-touch-icon.png'},{'revision':'5e749540b041e66d8022ca8f5ff3345c','url':'/assets/icons/favicon-16x16.png'},{'revision':'3e1458196d5341bfd4f42cda83d6d082','url':'/assets/icons/favicon-32x32.png'},{'revision':'d94d7c54977be39fc3acc05554f6aaa8','url':'/assets/icons/mstile-144x144.png'},{'revision':'6bd279184a1f5f5bdf95214d39b75f5f','url':'/assets/icons/mstile-150x150.png'},{'revision':'33de6e9e923a22a6ea1f0ea2ebda1d21','url':'/assets/icons/mstile-310x150.png'},{'revision':'da59120e8bd1675c6034e926d6258043','url':'/assets/icons/mstile-310x310.png'},{'revision':'f871cad744dd4de1b195b1796d61fa0d','url':'/assets/icons/mstile-70x70.png'},{'revision':'b3a6b6f989a2cd0d8be80562568273ab','url':'/assets/icons/safari-pinned-tab.svg'},{'revision':'6d76b463fa083c5b4475c72816d61597','url':'/assets/noun_Microphone_15265.svg'},{'revision':'a862c55f55bf03b5be60bcab53959e50','url':'/assets/noun_Stop_1196958.svg'},{'revision':'b4a2c6353a7a416fabd21b26946c10e2','url':'/assets/noun_Stopwatch_1560850.svg'},{'revision':'1fb2f0478d362cf7627fea113f2efa6a','url':'/assets/noun_clear_2801805.svg'},{'revision':'67660ae953282fef8cc85a860ce6a253','url':'/assets/noun_lap_1197012.svg'},{'revision':'bdadf758ec825ff9fea6dda2bd2133e7','url':'/assets/noun_mic_3501622.svg'},{'revision':'eaf5f5535a3d0fdcde2ba3b2b9a76033','url':'/assets/noun_play_1196954.svg'},{'revision':null,'url':'/bundle.9d96c.esm.js'},{'revision':null,'url':'/bundle.acc8b.css'},{'revision':null,'url':'/polyfills.ef8ab.esm.js'},{'revision':null,'url':'/route-about.chunk.860d9.esm.js'},{'revision':null,'url':'/route-histories.chunk.94b23.esm.js'},{'revision':null,'url':'/route-stopwatch.chunk.9ee09.esm.js'}],z||$)},xgXd:function(){"use strict";try{self["workbox:core:6.2.4"]&&_()}catch(e){}}});
//# sourceMappingURL=sw-esm.js.map