(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{4184:function(a,b){var c,d; /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !function(){"use strict";var e={}.hasOwnProperty;function f(){for(var a=[],b=0;b<arguments.length;b++){var c=arguments[b];if(c){var d=typeof c;if("string"===d||"number"===d)a.push(c);else if(Array.isArray(c)){if(c.length){var g=f.apply(null,c);g&&a.push(g)}}else if("object"===d){if(c.toString===Object.prototype.toString)for(var h in c)e.call(c,h)&&c[h]&&a.push(h);else a.push(c.toString())}}}return a.join(" ")}a.exports?(f.default=f,a.exports=f):void 0!==(d=(function(){return f}).apply(b,c=[]))&&(a.exports=d)}()},640:function(a,b,c){"use strict";var d=c(1742),e={"text/plain":"Text","text/html":"Url",default:"Text"};a.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n=!1;b||(b={}),h=b.debug||!1;try{if(j=d(),k=document.createRange(),l=document.getSelection(),m=document.createElement("span"),m.textContent=a,m.ariaHidden="true",m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",function(c){if(c.stopPropagation(),b.format){if(c.preventDefault(),void 0===c.clipboardData){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=e[b.format]||e.default;window.clipboardData.setData(d,a)}else c.clipboardData.clearData(),c.clipboardData.setData(b.format,a)}b.onCopy&&(c.preventDefault(),b.onCopy(c.clipboardData))}),document.body.appendChild(m),k.selectNodeContents(m),l.addRange(k),!document.execCommand("copy"))throw Error("copy command was unsuccessful");n=!0}catch(o){h&&console.error("unable to copy using execCommand: ",o),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(b.format||"text",a),b.onCopy&&b.onCopy(window.clipboardData),n=!0}catch(p){h&&console.error("unable to copy using clipboardData: ",p),h&&console.error("falling back to prompt"),i=(f="message"in b?b.message:"Copy to clipboard: #{key}, Enter",g=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",f.replace(/#{\s*key\s*}/g,g)),window.prompt(i,a)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(k):l.removeAllRanges()),m&&document.body.removeChild(m),j()}return n}},6961:function(a,b,c){var d,e=function(){var a=String.fromCharCode,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",d={};function e(a,b){if(!d[a]){d[a]={};for(var c=0;c<a.length;c++)d[a][a.charAt(c)]=c}return d[a][b]}var f={compressToBase64:function(a){if(null==a)return"";var c=f._compress(a,6,function(a){return b.charAt(a)});switch(c.length%4){default:case 0:return c;case 1:return c+"===";case 2:return c+"==";case 3:return c+"="}},decompressFromBase64:function(a){return null==a?"":""==a?null:f._decompress(a.length,32,function(c){return e(b,a.charAt(c))})},compressToUTF16:function(b){return null==b?"":f._compress(b,15,function(b){return a(b+32)})+" "},decompressFromUTF16:function(a){return null==a?"":""==a?null:f._decompress(a.length,16384,function(b){return a.charCodeAt(b)-32})},compressToUint8Array:function(a){for(var b=f.compress(a),c=new Uint8Array(2*b.length),d=0,e=b.length;d<e;d++){var g=b.charCodeAt(d);c[2*d]=g>>>8,c[2*d+1]=g%256}return c},decompressFromUint8Array:function(b){if(null==b)return f.decompress(b);for(var c=Array(b.length/2),d=0,e=c.length;d<e;d++)c[d]=256*b[2*d]+b[2*d+1];var g=[];return c.forEach(function(b){g.push(a(b))}),f.decompress(g.join(""))},compressToEncodedURIComponent:function(a){return null==a?"":f._compress(a,6,function(a){return c.charAt(a)})},decompressFromEncodedURIComponent:function(a){return null==a?"":""==a?null:(a=a.replace(/ /g,"+"),f._decompress(a.length,32,function(b){return e(c,a.charAt(b))}))},compress:function(b){return f._compress(b,16,function(b){return a(b)})},_compress:function(a,b,c){if(null==a)return"";var d,e,f,g={},h={},i="",j="",k="",l=2,m=3,n=2,o=[],p=0,q=0;for(f=0;f<a.length;f+=1)if(i=a.charAt(f),Object.prototype.hasOwnProperty.call(g,i)||(g[i]=m++,h[i]=!0),j=k+i,Object.prototype.hasOwnProperty.call(g,j))k=j;else{if(Object.prototype.hasOwnProperty.call(h,k)){if(256>k.charCodeAt(0)){for(d=0;d<n;d++)p<<=1,q==b-1?(q=0,o.push(c(p)),p=0):q++;for(d=0,e=k.charCodeAt(0);d<8;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}else{for(d=0,e=1;d<n;d++)p=p<<1|e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e=0;for(d=0,e=k.charCodeAt(0);d<16;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}0== --l&&(l=Math.pow(2,n),n++),delete h[k]}else for(d=0,e=g[k];d<n;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1;0== --l&&(l=Math.pow(2,n),n++),g[j]=m++,k=String(i)}if(""!==k){if(Object.prototype.hasOwnProperty.call(h,k)){if(256>k.charCodeAt(0)){for(d=0;d<n;d++)p<<=1,q==b-1?(q=0,o.push(c(p)),p=0):q++;for(d=0,e=k.charCodeAt(0);d<8;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}else{for(d=0,e=1;d<n;d++)p=p<<1|e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e=0;for(d=0,e=k.charCodeAt(0);d<16;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}0== --l&&(l=Math.pow(2,n),n++),delete h[k]}else for(d=0,e=g[k];d<n;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1;0== --l&&(l=Math.pow(2,n),n++)}for(d=0,e=2;d<n;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1;for(;;){if(p<<=1,q==b-1){o.push(c(p));break}q++}return o.join("")},decompress:function(a){return null==a?"":""==a?null:f._decompress(a.length,32768,function(b){return a.charCodeAt(b)})},_decompress:function(b,c,d){var e,f,g,h,i,j,k,l=[],m=4,n=4,o=3,p="",q=[],r={val:d(0),position:c,index:1};for(e=0;e<3;e+=1)l[e]=e;for(g=0,i=4,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;switch(g){case 0:for(g=0,i=256,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;k=a(g);break;case 1:for(g=0,i=65536,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;k=a(g);break;case 2:return""}for(l[3]=k,f=k,q.push(k);;){if(r.index>b)return"";for(g=0,i=Math.pow(2,o),j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;switch(k=g){case 0:for(g=0,i=256,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;l[n++]=a(g),k=n-1,m--;break;case 1:for(g=0,i=65536,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;l[n++]=a(g),k=n-1,m--;break;case 2:return q.join("")}if(0==m&&(m=Math.pow(2,o),o++),l[k])p=l[k];else{if(k!==n)return null;p=f+f.charAt(0)}q.push(p),l[n++]=f+p.charAt(0),m--,f=p,0==m&&(m=Math.pow(2,o),o++)}}};return f}();void 0!==(d=(function(){return e}).call(b,c,b,a))&&(a.exports=d)},7170:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/result",function(){return c(5241)}])},9027:function(a,b,c){"use strict";var d=c(603),e=c(5893),f=c(7294),g=c(4184),h=c.n(g),i=f.memo(function(a){var b=a.partList;return(0,e.jsx)(e.Fragment,{children:Object.entries(b).map(function(a){var b=(0,d.Z)(a,2),c=b[0],f=b[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"mt-3",children:c}),(0,e.jsx)("div",{className:"d-flex gap-2",children:Object.entries(f).map(function(a){var b=(0,d.Z)(a,2),c=b[0],f=b[1];return(0,e.jsx)("span",{className:h()({"text-muted":!f},{"fw-bold":f}),children:c},c)})})]})})})});i.displayName="PartList",b.Z=i},6482:function(a,b,c){"use strict";c.d(b,{"_":function(){return d}});var d=function(){return{localStorage:localStorage}}},4026:function(a,b,c){"use strict";c.d(b,{V:function(){return g},n:function(){return f}});var d=c(6961),e=c.n(d),f=function(a){return e().compressToEncodedURIComponent(a)},g=function(a){return e().decompressFromEncodedURIComponent(a)}},5241:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return q}});var d=c(5893),e=c(7294),f=c(6482),g=c(4026),h=c(4855),i=c.n(h),j=e.memo(function(a){var b=a.copyText;return(0,d.jsx)(i(),{text:b,children:(0,d.jsx)("button",{type:"button",className:"btn btn-success",children:"クリップボードにコピー"})})});j.displayName="CopyClipboard";var k=j,l=c(9027),m=c(1163),n=c(1664),o=c.n(n),p=function(){var a=(0,e.useState)(),b=a[0],c=a[1],h=(0,f._)().localStorage,i=(0,m.useRouter)(),j=(0,e.useMemo)(function(){if(void 0===h)return{};var a=h.getItem("result");return null!=a?JSON.parse(a):{}},[h]),n=(0,e.useMemo)(function(){var a=i.query.l;return"string"!=typeof a||null==a?[]:a.split(": ")},[i.query.l]),p=n[0],q=n[1],r=(0,e.useCallback)(function(){if(void 0!==h){var a=h.getItem("result");null!=a&&c("".concat(location.origin,"/norireco/share?r=").concat((0,g.n)(a),"&l=").concat("".concat(p,": ").concat(q)))}},[q,h,p]);return 0===Object.keys(j).length||null==p||null==q?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsxs)("h1",{children:[j.name," さんの乗りレコ"]}),(0,d.jsx)("h3",{children:p}),(0,d.jsx)("h4",{children:q})]}),(0,d.jsx)(l.Z,{partList:j.musicSet[p][q]}),b?(0,d.jsxs)("div",{className:"mt-3",children:[(0,d.jsx)(k,{copyText:b}),(0,d.jsxs)("div",{className:"form-floating mt-2",children:[(0,d.jsx)("textarea",{className:"form-control",value:b,id:"shareURL",style:{height:"400px"}}),(0,d.jsx)("label",{htmlFor:"shareURL",children:"URLをコピーして結果をシェア"})]})]}):(0,d.jsx)("div",{className:"text-end",children:(0,d.jsx)("button",{type:"button",className:"btn btn-success",onClick:r,children:"シェアする"})}),(0,d.jsx)("div",{className:"mt-5",children:(0,d.jsx)(o(),{href:"/list",children:(0,d.jsx)("a",{children:"作った乗りレコリスト"})})}),(0,d.jsx)("div",{className:"mt-5",children:(0,d.jsx)("a",{href:"https://musig.net",target:"_blank",rel:"noreferrer",children:"詳しく記録したい方はみゅーぐも！"})})]})},q=p},1163:function(a,b,c){a.exports=c(387)},4300:function(a,b,c){"use strict";function d(a){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}Object.defineProperty(b,"__esModule",{value:!0}),b.CopyToClipboard=void 0;var e=h(c(7294)),f=h(c(640)),g=["text","onCopy","options","children"];function h(a){return a&&a.__esModule?a:{default:a}}function i(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?i(Object(c),!0).forEach(function(b){o(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function k(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function l(a,b){return(l=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function m(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function n(a){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function o(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var p=function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),b&&l(a,b)}(r,a);var b,c,h,i,p,q=(b=r,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,e=n(b);if(c){var f=n(this).constructor;a=Reflect.construct(e,arguments,f)}else a=e.apply(this,arguments);return function a(b,c){if(c&&("object"===d(c)||"function"==typeof c))return c;if(void 0!==c)throw TypeError("Derived constructors may only return object or undefined");return m(b)}(this,a)});function r(){var a;!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,r);for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return a=q.call.apply(q,[this].concat(c)),o(m(a),"onClick",function(b){var c=a.props,d=c.text,g=c.onCopy,h=c.children,i=c.options,j=e.default.Children.only(h),k=(0,f.default)(d,i);g&&g(d,k),j&&j.props&&"function"==typeof j.props.onClick&&j.props.onClick(b)}),a}return h=r,i=[{key:"render",value:function(){var a=this.props,b=(a.text,a.onCopy,a.options,a.children),c=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,g),d=e.default.Children.only(b);return e.default.cloneElement(d,j(j({},c),{},{onClick:this.onClick}))}}],k(h.prototype,i),p&&k(h,p),Object.defineProperty(h,"prototype",{writable:!1}),r}(e.default.PureComponent);b.CopyToClipboard=p,o(p,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(a,b,c){"use strict";var d=c(4300).CopyToClipboard;d.CopyToClipboard=d,a.exports=d},1742:function(a){a.exports=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var b=document.activeElement,c=[],d=0;d<a.rangeCount;d++)c.push(a.getRangeAt(d));switch(b.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":b.blur();break;default:b=null}return a.removeAllRanges(),function(){"Caret"===a.type&&a.removeAllRanges(),a.rangeCount||c.forEach(function(b){a.addRange(b)}),b&&b.focus()}}}},function(a){a.O(0,[26,774,888,179],function(){var b;return a(a.s=7170)}),_N_E=a.O()}])