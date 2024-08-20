"use strict";(self.webpackChunkcoding_guidelines=self.webpackChunkcoding_guidelines||[]).push([[726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>v});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,v=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(v,r(r({ref:t},m),{},{components:a})):n.createElement(v,r({ref:t},m))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={title:"\u5168\u822c",sidebar_position:4,custom_edit_url:null},r=void 0,s={unversionedId:"guidelines/general",id:"guidelines/general",title:"\u5168\u822c",description:"\u5fc5\u9808 \u30d7\u30ed\u30c8\u30b3\u30eb",source:"@site/docs/guidelines/general.md",sourceDirName:"guidelines",slug:"/guidelines/general",permalink:"/coding-guidelines/docs/guidelines/general",editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5168\u822c",sidebar_position:4,custom_edit_url:null},sidebar:"guidelineSidebar",previous:{title:"\u6539\u8a02\u5c65\u6b74",permalink:"/coding-guidelines/docs/guidelines/changelog"},next:{title:"HTML",permalink:"/coding-guidelines/docs/guidelines/html"}},o={},p=[{value:'<span class="label-required">\u5fc5\u9808</span> \u30d7\u30ed\u30c8\u30b3\u30eb',id:"\u5fc5\u9808-\u30d7\u30ed\u30c8\u30b3\u30eb",level:2},{value:'<span class="label-required">\u5fc5\u9808</span> \u30a4\u30f3\u30c7\u30f3\u30c8',id:"\u5fc5\u9808-\u30a4\u30f3\u30c7\u30f3\u30c8",level:2},{value:'<span class="label-required">\u5fc5\u9808</span> \u884c\u672b\u5c3e\u306e\u7a7a\u767d',id:"\u5fc5\u9808-\u884c\u672b\u5c3e\u306e\u7a7a\u767d",level:2},{value:'<span class="label-required">\u5fc5\u9808</span> \u30d5\u30a1\u30a4\u30eb\u672b\u5c3e\u306e\u6539\u884c',id:"\u5fc5\u9808-\u30d5\u30a1\u30a4\u30eb\u672b\u5c3e\u306e\u6539\u884c",level:2},{value:'<span class="label-required">\u5fc5\u9808</span> \u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0',id:"\u5fc5\u9808-\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0",level:2},{value:'<span class="label-required">\u5fc5\u9808</span> \u6539\u884c\u30b3\u30fc\u30c9',id:"\u5fc5\u9808-\u6539\u884c\u30b3\u30fc\u30c9",level:2},{value:'<span class="label-recommend">\u63a8\u5968</span> \u30b3\u30e1\u30f3\u30c8',id:"\u63a8\u5968-\u30b3\u30e1\u30f3\u30c8",level:2},{value:'<span class="label-required">\u5fc5\u9808</span> \u30e9\u30a4\u30bb\u30f3\u30b9\u9075\u5b88',id:"\u5fc5\u9808-\u30e9\u30a4\u30bb\u30f3\u30b9\u9075\u5b88",level:2},{value:'<span class="label-required">\u5fc5\u9808</span> \u30e9\u30a4\u30bb\u30f3\u30b9\u8868\u8a18',id:"\u5fc5\u9808-\u30e9\u30a4\u30bb\u30f3\u30b9\u8868\u8a18",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u30d7\u30ed\u30c8\u30b3\u30eb"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u30d7\u30ed\u30c8\u30b3\u30eb"),(0,i.kt)("p",null,"\u7d76\u5bfe\u30d1\u30b9\u3067\u306e\u30ea\u30bd\u30fc\u30b9\u8aad\u307f\u8fbc\u307f\u306f\u53ef\u80fd\u306a\u9650\u308aHTTPS\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"https:"),"\uff09\u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u753b\u50cf\u3084\u305d\u306e\u4ed6\u306e\u30e1\u30c7\u30a3\u30a2\u30d5\u30a1\u30a4\u30eb\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u306f\u3001HTTPS\u7d4c\u7531\u3067\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u3092\u9664\u304d\u3001\u5e38\u306bHTTPS\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"https:"),"\uff09\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"BAD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u30d7\u30ed\u30c8\u30b3\u30eb\u7701\u7565\u306f\u975e\u63a8\u5968 --\x3e\n<script src="//code.jquery.com/jquery-3.6.3.min.js"><\/script>\n\n\x3c!-- HTTP\u306e\u4f7f\u7528\u306f\u975e\u63a8\u5968 --\x3e\n<script src="http://code.jquery.com/jquery-3.6.3.min.js"><\/script>\n')))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GOOD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://code.jquery.com/jquery-3.6.3.min.js"><\/script>\n'))))),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u30a4\u30f3\u30c7\u30f3\u30c8"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u30a4\u30f3\u30c7\u30f3\u30c8"),(0,i.kt)("p",null,"\u30a4\u30f3\u30c7\u30f3\u30c8\u306f\u534a\u89d2\u30b9\u30da\u30fc\u30b9\uff08U+0020\uff092\u3064\u30921\u5358\u4f4d\u3068\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u30bf\u30d6\uff08U+0009\uff09\u3067\u30a4\u30f3\u30c7\u30f3\u30c8\u3057\u305f\u308a\u3001\u30bf\u30d6\u3068\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u3092\u6df7\u5728\u3055\u305b\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GOOD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ul>\n  <li>Fantastic</li>\n  <li>Great</li>\n</ul>\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GOOD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-css"},".example {\n  color: blue;\n}\n"))))),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u884c\u672b\u5c3e\u306e\u7a7a\u767d"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u884c\u672b\u5c3e\u306e\u7a7a\u767d"),(0,i.kt)("p",null,"\u884c\u672b\u5c3e\u306e\u7a7a\u767d\u306f\u524a\u9664\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u884c\u672b\u5c3e\u306e\u7a7a\u767d\u306f\u4e0d\u8981\u3067\u3042\u308a\u3001\u5dee\u5206\u304c\u308f\u304b\u308a\u306b\u304f\u304f\u306a\u308b\u305f\u3081\u524a\u9664\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"BAD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>\u884c\u672b\u5c3e\u306b\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u3042\u308a</p> \n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GOOD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>\u884c\u672b\u5c3e\u306b\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u306a\u3057</p>\n"))))),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u30d5\u30a1\u30a4\u30eb\u672b\u5c3e\u306e\u6539\u884c"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u30d5\u30a1\u30a4\u30eb\u672b\u5c3e\u306e\u6539\u884c"),(0,i.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u672b\u5c3e\u306f\u6539\u884c\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u5dee\u5206\u304c\u308f\u304b\u308a\u306b\u304f\u304f\u306a\u308b\u305f\u3081\u30d5\u30a1\u30a4\u30eb\u672b\u5c3e\u306e\u884c\u3067\u306f\u6539\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"BAD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n</html>\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"GOOD")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n</html>\n\n"))))),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0"),(0,i.kt)("p",null,"UTF-8\uff08BOM\u306a\u3057\uff09\u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u6587\u5b57\u30a8\u30f3\u30b3\u30fc\u30c9\u304cUTF-8\uff08BOM\u306a\u3057\uff09\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","HTML\u306e\u5834\u5408\u306f",(0,i.kt)("inlineCode",{parentName:"p"},'<meta charset="utf-8">'),"\u3067HTML\u6587\u66f8\u306e\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u306fUTF-8\u3092\u60f3\u5b9a\u3057\u3066\u3044\u308b\u305f\u3081\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u6307\u5b9a\u3057\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\uff08\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u8a73\u7d30\u3068\u305d\u306e\u6307\u5b9a\u65b9\u6cd5\u306f\u3001W3C\u306e",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/International/tutorials/tutorial-char-enc/"},"Handling character encodings in HTML and CSS"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff09")),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u6539\u884c\u30b3\u30fc\u30c9"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u6539\u884c\u30b3\u30fc\u30c9"),(0,i.kt)("p",null,"LF\u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u6539\u884c\u30b3\u30fc\u30c9\u304cLF\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Windows\u306e\u5834\u5408\u306fGit\u64cd\u4f5c\u6642\u306b\u6539\u884c\u30b3\u30fc\u30c9\u304c\u81ea\u52d5\u5909\u63db\u3055\u308c\u306a\u3044\u3088\u3046.gitconfig\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"core.autocrlf"),"\u306e\u8a2d\u5b9a\u3082\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf"},"Git - git-config Documentation"))))),(0,i.kt)("h2",{id:"\u63a8\u5968-\u30b3\u30e1\u30f3\u30c8"},(0,i.kt)("span",{class:"label-recommend"},"\u63a8\u5968")," \u30b3\u30e1\u30f3\u30c8"),(0,i.kt)("p",null,"\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30b3\u30e1\u30f3\u30c8\u3067\u30b3\u30fc\u30c9\u3092\u8aac\u660e\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u57fa\u672c\u65b9\u91dd\u3068\u3057\u3066\u306f\u3001\u30b3\u30e1\u30f3\u30c8\u3092\u8a18\u8ff0\u3057\u306a\u304f\u3066\u3082\u8aad\u307f\u624b\u304c\u7406\u89e3\u3067\u304d\u308b\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3088\u3046\u306b\u5fc3\u304c\u3051\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u30b3\u30e1\u30f3\u30c8\u3092\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u305d\u306e\u30b3\u30fc\u30c9\u304c\u4f55\u3092\u610f\u56f3\u3057\u3066\u3044\u308b\u304b\u3001\u3069\u3093\u306a\u76ee\u7684\u3092\u679c\u305f\u3057\u3066\u3044\u308b\u304b\u3001\u306a\u305c\u305d\u306e\u89e3\u6c7a\u30a2\u30d7\u30ed\u30fc\u30c1\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002")),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u30e9\u30a4\u30bb\u30f3\u30b9\u9075\u5b88"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u30e9\u30a4\u30bb\u30f3\u30b9\u9075\u5b88"),(0,i.kt)("p",null,"\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\uff08CSS\u30ea\u30bb\u30c3\u30c8\u306a\u3069\u3082\u542b\u3080\uff09\u3092\u5229\u7528\u3059\u308b\u969b\u306f\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u9075\u5b88\u3059\u308b\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u5546\u7528\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002  "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5546\u7528\u5229\u7528\u304c\u53ef\u80fd\u306a\u30e9\u30a4\u30bb\u30f3\u30b9")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},"Apache-2.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.org/licenses/BSD-3-Clause"},"BSD-3-Clause")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.org/licenses/BSD-2-Clause"},"BSD-2-Clause")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.org/licenses/ISC"},"ISC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document"},"W3C-20150513"))))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5546\u7528\u5229\u7528\u304c\u4e0d\u53ef\u306a\u30e9\u30a4\u30bb\u30f3\u30b9")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/licenses/lgpl-2.1.en.html"},"GNU LGPL v2.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/licenses/lgpl-3.0.en.html"},"GNU LGPL v3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/licenses/gpl-2.0.en.html"},"GNU GPL v2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU GPL v3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"GNU AGPL v3")))))),(0,i.kt)("h2",{id:"\u5fc5\u9808-\u30e9\u30a4\u30bb\u30f3\u30b9\u8868\u8a18"},(0,i.kt)("span",{class:"label-required"},"\u5fc5\u9808")," \u30e9\u30a4\u30bb\u30f3\u30b9\u8868\u8a18"),(0,i.kt)("p",null,"\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\uff08CSS\u30ea\u30bb\u30c3\u30c8\u306a\u3069\u3082\u542b\u3080\uff09\u3092\u5229\u7528\u3059\u308b\u969b\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u8868\u8a18\u306e\u30b3\u30e1\u30f3\u30c8\u306f\u524a\u9664\u3057\u306a\u3044\u3002"),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"\u8a73\u7d30"),(0,i.kt)("p",null,"\u30b3\u30fc\u30c9\u3092\u30b3\u30f3\u30d1\u30a4\u30eb/\u5727\u7e2e\u3057\u305f\u969b\u306b\u30e9\u30a4\u30bb\u30f3\u30b9\u8868\u8a18\u306e\u30b3\u30e1\u30f3\u30c8\u304c\u524a\u9664\u3055\u308c\u3066\u3044\u306a\u3044\u304b\u5fc5\u305a\u78ba\u8a8d\u3057\u307e\u3059\u3002")))}c.isMDXComponent=!0}}]);