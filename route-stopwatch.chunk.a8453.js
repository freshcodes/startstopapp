(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{MbLX:function(t,e,n){"use strict";var o=n("hosL"),s=n("ox/y");e.a=function(){return Object(o.h)("nav",null,Object(o.h)(s.Link,{activeClassName:"active",href:"/"},"Stopwatch"),Object(o.h)(s.Link,{activeClassName:"active",href:"/history"},"History"),Object(o.h)(s.Link,{activeClassName:"active",href:"/about"},"About"))}},YYZC:function(t,e,n){"use strict";var o=n("hosL"),s=n("kN0v");e.a=function({lap:t,milliseconds:e}){const n=Object(s.a)(e);return Object(o.h)("li",null,Object(o.h)("time",{"aria-label":"lap "+t,datetime:n},n))}},dEah:function(t,e,n){"use strict";function o(){return"undefined"!=typeof window&&("SpeechRecognition"in window||"webkitSpeechRecognition"in window)}function s(){if(o())return Object(i.h)("section",{class:"note"},Object(i.h)("p",null,"Your browser supports voice recognition. This is expiremental and might be a bit wonky. To enable, use the microphone icon."),Object(i.h)("p",null,"Once enabled you can use commands like: ",Object(i.h)("strong",null,'"start", "loop", "stop", "reset"'),"."),Object(i.h)("p",null,"There are alternates like ",Object(i.h)("strong",null,'"go", "begin", "lap", "next", "end", and "clear"'),"."))}n.r(e),n.d(e,"default",(function(){return k}));var i=n("hosL"),c=n("MbLX"),r=n("UQAG"),a=n("BXF7"),l=function({onclick:t}){return Object(i.h)("button",{type:"button","aria-label":"start",onclick:t,id:"start"},Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 37.95 39.6"},Object(i.h)("path",{d:"M36.74 17.77L3.32.26A2.27 2.27 0 000 2.27v35a2.27 2.27 0 003.32 2l33.42-17.48a2.27 2.27 0 000-4.02z"})))},h=function({onclick:t}){return Object(i.h)("button",{type:"button","aria-label":"stop",onclick:t,id:"stop"},Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 42.52 42.52"},Object(i.h)("rect",{width:"42.52",height:"42.52",rx:"2.27",ry:"2.27"})))},u=function({onclick:t}){return Object(i.h)("button",{type:"button","aria-label":"lap",onclick:t},Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 78.94 62.8"},Object(i.h)("path",{d:"M65.37 9.78H60.3v9h5.07a4.58 4.58 0 014.57 4.57V49a4.58 4.58 0 01-4.57 4.57h-51.8A4.58 4.58 0 019 49V23.35a4.58 4.58 0 014.57-4.57h19.58v5.28a4.52 4.52 0 00.09.88c0 .13.08.26.11.39a4.42 4.42 0 00.14.45 4.44 4.44 0 00.23.44c.06.11.11.23.18.33a4.52 4.52 0 001.25 1.25c.11.07.22.12.34.18a2.65 2.65 0 00.89.37c.13 0 .25.09.39.11a4.41 4.41 0 001.76 0c.13 0 .26-.08.39-.11a2.64 2.64 0 00.88-.35c.11-.06.23-.11.34-.18a4.51 4.51 0 00.69-.57l9.77-9.77a4.5 4.5 0 000-6.36l-9.77-9.8a4.51 4.51 0 00-.69-.56C40 .68 39.91.63 39.8.57a4.42 4.42 0 00-.43-.23 4.45 4.45 0 00-.46-.14c-.13 0-.25-.09-.38-.11a4.52 4.52 0 00-1.76 0c-.13 0-.25.08-.38.11a4.45 4.45 0 00-.46.14 4.42 4.42 0 00-.43.23c-.11.06-.23.11-.34.19A4.52 4.52 0 0033.9 2c-.07.11-.12.22-.18.33a4.43 4.43 0 00-.23.44 4.42 4.42 0 00-.14.45c0 .13-.09.25-.11.39a4.52 4.52 0 00-.09.88v5.29H13.57A13.59 13.59 0 000 23.35V49a13.59 13.59 0 0013.57 13.57h51.8A13.59 13.59 0 0078.94 49V23.35A13.59 13.59 0 0065.37 9.78z"})))};const p={start:"start",go:"start",begin:"start",lap:"lap",loop:"lap",next:"lap",stop:"stop",end:"stop",reset:"reset",clear:"reset"},b=Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},Object(i.h)("path",{d:"M50 66.161c8.532 0 15.449-6.917 15.449-15.449V15.699C65.449 7.167 58.532.25 50 .25S34.551 7.167 34.551 15.699v35.013c0 8.532 6.917 15.449 15.449 15.449z"}),Object(i.h)("path",{d:"M73.055 37.881a3.169 3.169 0 00-3.17 3.168v9.663c0 10.964-8.92 19.885-19.885 19.885-10.966 0-19.886-8.921-19.886-19.885v-9.663a3.168 3.168 0 10-6.337 0v9.663c0 14.459 11.764 26.223 26.223 26.223s26.223-11.764 26.223-26.223v-9.663a3.168 3.168 0 00-3.168-3.168zM63.07 93.412h-9.902V79.26c-1.041.126-2.094.21-3.168.21-1.075 0-2.128-.084-3.169-.21v14.152H36.93a3.168 3.168 0 00-3.168 3.169v3.169h32.477v-3.169a3.17 3.17 0 00-3.169-3.169z"})),d=Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12.7 12.7"},Object(i.h)("path",{d:"M6.35.529a5.824 5.824 0 00-5.82 5.82 5.826 5.826 0 005.82 5.822c3.211 0 5.82-2.61 5.82-5.822A5.824 5.824 0 006.35.529zm0 .529a5.289 5.289 0 013.92 8.84L8.51 8.135c.309-.439.486-.967.486-1.521v-.793c0-.353-.53-.353-.53 0v.793c0 .412-.122.805-.337 1.14l-.385-.385c.123-.229.193-.487.193-.755v-2.91a1.588 1.588 0 10-3.176 0v.683l-1.959-1.96a5.266 5.266 0 013.547-1.37zM2.427 2.803l2.333 2.333v1.479A1.59 1.59 0 007.145 7.99c.098-.057.187-.127.269-.201l.375.374c-.116.107-.241.205-.38.286a2.117 2.117 0 01-3.177-1.834v-.793a.265.265 0 00-.267-.27.265.265 0 00-.26.27v.793c0 .944.504 1.818 1.323 2.29.33.191.69.301 1.058.338v.811H4.47c-.353.018-.326.548.027.53H8.2c.353 0 .353-.53 0-.53H6.615v-.811a2.638 2.638 0 001.059-.337c.18-.104.341-.23.488-.37l1.735 1.735a5.288 5.288 0 01-7.468-7.468z",color:"#000",overflow:"visible"}));class g extends i.Component{constructor(...t){super(...t),this.state={enabled:!1},this.toggle=()=>this.state.enabled?this.disable():this.enable(),this.onspeechstart=()=>{this.voiceStartTime=Date.now(),console.debug("speechstart",this.voiceStartTime),setTimeout(()=>{console.debug("Attempting to restart listening after 1 second"),this.restartListening()},1e3)},this.onresult=t=>{const e=t.results[t.results.length-1][0],n=e.transcript.toLowerCase().trim(),o=p[n];console.log("Command "+n),console.log("Confidence: "+e.confidence),console.log("Known Command "+o),o&&(this.props[o](this.voiceStartTime),this.restartListening())},this.onstart=()=>{console.debug("start")},this.onend=()=>{console.debug("done listening"),this.listening&&this.startListening()}}componentDidMount(){"undefined"!=typeof window&&this.setupRecognition()}enable(){this.setState({enabled:!0}),this.listening=!0,this.startListening()}disable(){this.setState({enabled:!1}),this.listening=!1,this.recognition.stop()}setupRecognition(){const t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.continuous=!0,t.lang="en-US",t.interimResults=!1,t.maxAlternatives=1,t.onstart=()=>{console.debug("started listening")},t.onspeechstart=this.onspeechstart,t.onresult=this.onresult,t.onend=this.onend,this.recognition=t}restartListening(){if(this.listening){console.debug("attempting to stop recognition in order to restart it");try{this.recognition.stop()}catch(t){console.debug("failed to stop recognition",t.message)}this.startListening()}}startListening(){if(this.listening){console.debug("attempting to start recognition");try{this.recognition.start()}catch(t){console.debug("failed to start recognition",t.message),this.recognition.stop()}}}render(t,{enabled:e}){const n=(e?"Dis":"En")+"able voice commands";return Object(i.h)("button",{type:"button","aria-label":n,onclick:this.toggle},e?d:b)}}var v=function({onclick:t}){return Object(i.h)("button",{type:"button","aria-label":"reset",onclick:t,id:"reset"},Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},Object(i.h)("switch",null,Object(i.h)("g",null,Object(i.h)("path",{d:"M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2c0 1.8.7 3.6 2 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5c1.3-1.3 2-3.1 2-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z"}),Object(i.h)("path",{d:"M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM86.1 2.5H13.9C7.6 2.5 2.5 7.6 2.5 13.9V86c0 6.3 5.1 11.4 11.4 11.4H86c6.3 0 11.4-5.1 11.4-11.4V13.9c.1-6.3-5-11.4-11.3-11.4zM69.6 61.3c2.3 2.3 2.3 6 0 8.3-1.1 1.1-2.6 1.7-4.1 1.7s-3-.6-4.1-1.7L50 58.3 38.7 69.6c-1.1 1.1-2.6 1.7-4.1 1.7-1.5 0-3-.6-4.1-1.7-2.3-2.3-2.3-6 0-8.3L41.7 50 30.4 38.7c-2.3-2.3-2.3-6 0-8.3s6-2.3 8.3 0L50 41.7l11.3-11.3c2.3-2.3 6-2.3 8.3 0s2.3 6 0 8.3L58.3 50l11.3 11.3z"})))))};const f=o();var O=Object(r.connect)("running",a.a)(class extends i.Component{constructor(...t){super(...t),this.start=()=>this.props.start(),this.stop=()=>this.props.stop(),this.lap=()=>this.props.lap(),this.reset=()=>this.props.reset()}render({running:t,start:e,stop:n,lap:o,reset:s}){return Object(i.h)("menu",null,Object(i.h)("li",null,t?Object(i.h)(h,{onclick:this.stop}):Object(i.h)(l,{onclick:this.start})),Object(i.h)("li",null,Object(i.h)(u,{onclick:this.lap})),Object(i.h)("li",null,Object(i.h)(v,{onclick:this.reset})),f?Object(i.h)("li",null,Object(i.h)(g,{start:e,stop:n,lap:o,reset:s})):"")}}),w=n("kN0v");var j=Object(r.connect)("currentTime")(({currentTime:t})=>Object(i.h)("output",{"aria-live":"polite",role:"timer",id:"time",name:"time",for:"start stop reset"},Object(w.a)(t))),m=n("YYZC"),y=Object(r.connect)("laps")((function({laps:t}){const e=t.map((t,e)=>Object(i.h)(m.a,{key:t,lap:e+1,milliseconds:t}));return Object(i.h)("ol",{class:"laps","aria-live":"polite",role:"log","aria-relevant":"additions"},e)}));class k extends i.Component{render(){return Object(i.h)("div",null,Object(i.h)(O,null),Object(i.h)(j,null),Object(i.h)(y,null),Object(i.h)(s,null),Object(i.h)(c.a,null))}}},kN0v:function(t,e,n){"use strict";function o(t){let e=Math.floor(t/1e3%1*100),n=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),s=Math.floor(t/1e3/3600%24);return s=`${s<10?"0":""}${s}`,o=`${o<10?"0":""}${o}`,n=`${n<10?"0":""}${n}`,e=`${e<10?"0":""}${e}`,`${s}:${o}:${n}.${e}`}n.d(e,"a",(function(){return o}))},"ox/y":function(t,e,n){"use strict";function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n("hosL"),c=n("Y3FI"),r=e.Match=function(t){function e(){for(var e,n,s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return e=n=o(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},o(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,c.exec)(n,t.path,{})})},e}(i.Component),a=function(t){var e=t.activeClassName,n=t.path,o=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["activeClassName","path"]);return(0,i.h)(r,{path:n||o.href},(function(t){return(0,i.h)(c.Link,s({},o,{class:[o.class||o.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=r,r.Link=a}}]);
//# sourceMappingURL=route-stopwatch.chunk.a8453.js.map