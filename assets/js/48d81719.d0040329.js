"use strict";(self.webpackChunkcoding_guidelines=self.webpackChunkcoding_guidelines||[]).push([[71],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||s[u]||i;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5023:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"JavaScript",sidebar_position:4,custom_edit_url:null},l=void 0,o={unversionedId:"naming_convention/js-name",id:"naming_convention/js-name",title:"JavaScript",description:"JavaScript \u547d\u540d\u30ea\u30b9\u30c8",source:"@site/docs/naming_convention/js-name.md",sourceDirName:"naming_convention",slug:"/naming_convention/js-name",permalink:"/coding-guidelines/docs/naming_convention/js-name",editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"JavaScript",sidebar_position:4,custom_edit_url:null},sidebar:"guidelineSidebar",previous:{title:"CSS\u3067\u3088\u304f\u4f7f\u3046\u30d1\u30bf\u30fc\u30f3",permalink:"/coding-guidelines/docs/naming_convention/css-sample-name"},next:{title:"\u30c4\u30fc\u30eb\u30fb\u30b5\u30fc\u30d3\u30b9",permalink:"/coding-guidelines/docs/naming_convention/tools"}},p={},m=[{value:"JavaScript \u547d\u540d\u30ea\u30b9\u30c8",id:"javascript-\u547d\u540d\u30ea\u30b9\u30c8",level:2},{value:"\u8a18\u6cd5\u5f62\u5f0f",id:"\u8a18\u6cd5\u5f62\u5f0f",level:3},{value:"\u547d\u540d\u3067\u4f7f\u308f\u308c\u308b\u5358\u8a9e\u30ea\u30b9\u30c8\u3068\u610f\u5473",id:"\u547d\u540d\u3067\u4f7f\u308f\u308c\u308b\u5358\u8a9e\u30ea\u30b9\u30c8\u3068\u610f\u5473",level:3}],c={toc:m},d="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"javascript-\u547d\u540d\u30ea\u30b9\u30c8"},"JavaScript \u547d\u540d\u30ea\u30b9\u30c8"),(0,r.kt)("h3",{id:"\u8a18\u6cd5\u5f62\u5f0f"},"\u8a18\u6cd5\u5f62\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8a18\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8a18\u6cd5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9"),(0,r.kt)("td",{parentName:"tr",align:null},"UserForm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5909\u6570\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30e1\u30eb\u30b1\u30fc\u30b9"),(0,r.kt)("td",{parentName:"tr",align:null},"sampleFunction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u6570\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30b9\u30cd\u30fc\u30af\u30b1\u30fc\u30b9"),(0,r.kt)("td",{parentName:"tr",align:null},"API_URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30e1\u30bd\u30c3\u30c9\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30e1\u30eb\u30b1\u30fc\u30b9"),(0,r.kt)("td",{parentName:"tr",align:null},"addNumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30e1\u30eb\u30b1\u30fc\u30b9"),(0,r.kt)("td",{parentName:"tr",align:null},"userName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u30af\u30e9\u30b9\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9"),(0,r.kt)("td",{parentName:"tr",align:null},"MyCar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d1\u30b9\u30ab\u30eb\u30b1\u30fc\u30b9"),(0,r.kt)("td",{parentName:"tr",align:null},"MyType")))),(0,r.kt)("p",null,"\u305d\u306e\u4ed6\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u65b9\u91dd\u306b\u6cbf\u3063\u305f\u5f62\u3067\u306e\u547d\u540d\u898f\u5247\u3068\u3059\u308b\u3002"),(0,r.kt)("h3",{id:"\u547d\u540d\u3067\u4f7f\u308f\u308c\u308b\u5358\u8a9e\u30ea\u30b9\u30c8\u3068\u610f\u5473"},"\u547d\u540d\u3067\u4f7f\u308f\u308c\u308b\u5358\u8a9e\u30ea\u30b9\u30c8\u3068\u610f\u5473"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u203b\u66f4\u65b0\u4e88\u5b9a")),(0,r.kt)("p",null,"\u4e0b\u8a18\u5916\u90e8\u8a18\u4e8b\u306a\u3069\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u53c2\u8003\u306b\u306a\u308b\u5916\u90e8\u8a18\u4e8b")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://qiita.com/KeithYokoma/items/2193cf79ba76563e3db6"},"https://qiita.com/KeithYokoma/items/2193cf79ba76563e3db6"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://php-archive.net/php/words-in-function-names/"},"https://php-archive.net/php/words-in-function-names/"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://arakan-pgm-ai.hatenablog.com/entry/2019/04/15/000000"},"https://arakan-pgm-ai.hatenablog.com/entry/2019/04/15/000000"),"  "))))}s.isMDXComponent=!0}}]);