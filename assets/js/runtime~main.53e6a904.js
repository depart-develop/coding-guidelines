(()=>{"use strict";var e,t,r,o,n,a={},d={};function c(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=a,c.c=d,e=[],c.O=(t,r,o,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var d=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(d=!1,n<a&&(a=n));if(d){e.splice(u--,1);var f=o();void 0!==f&&(t=f)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var d=2&o&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(n,a),n},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({45:"7cdd9999",53:"935f2afb",71:"48d81719",75:"1e4d086d",195:"c4f5d8e4",270:"8ec64c1c",319:"29347da9",445:"e9e6794f",514:"1be78505",530:"5c2c2c88",608:"9e4087bc",635:"5387f0b4",726:"77e71d11",743:"bb302a33",774:"0b78a569",816:"2192c842",896:"0dbe53d8",918:"17896441",929:"47c323e5",974:"c74155ea"}[e]||e)+"."+{45:"31f20993",53:"bef23fb5",71:"d0040329",75:"87f7b2a1",195:"a57475ec",270:"6a3e9b54",319:"46ea87ce",445:"0692d9f2",514:"372f65bc",530:"4ccda084",608:"e97eb710",635:"7f1ec4e0",726:"d27857ab",743:"35b22919",774:"3c8d1d60",816:"2c0dc018",818:"461b8336",896:"3dc8d22e",918:"36090160",929:"422221dc",974:"4fb3d4f3"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="coding-guidelines:",c.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var d,i;if(void 0!==r)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){d=l;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.setAttribute("data-webpack",n+r),d.src=e),o[e]=[t];var b=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var n=o[e];if(delete o[e],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=b.bind(null,d.onerror),d.onload=b.bind(null,d.onload),i&&document.head.appendChild(d)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/coding-guidelines/",c.gca=function(e){return e={17896441:"918","7cdd9999":"45","935f2afb":"53","48d81719":"71","1e4d086d":"75",c4f5d8e4:"195","8ec64c1c":"270","29347da9":"319",e9e6794f:"445","1be78505":"514","5c2c2c88":"530","9e4087bc":"608","5387f0b4":"635","77e71d11":"726",bb302a33:"743","0b78a569":"774","2192c842":"816","0dbe53d8":"896","47c323e5":"929",c74155ea:"974"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=c.p+c.u(t),d=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],d=r[1],i=r[2],f=0;if(a.some((t=>0!==e[t]))){for(o in d)c.o(d,o)&&(c.m[o]=d[o]);if(i)var u=i(c)}for(t&&t(r);f<a.length;f++)n=a[f],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(u)},r=self.webpackChunkcoding_guidelines=self.webpackChunkcoding_guidelines||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();