(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{4184:function(a,b){var c,d; /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !function(){"use strict";var e={}.hasOwnProperty;function f(){for(var a=[],b=0;b<arguments.length;b++){var c=arguments[b];if(c){var d=typeof c;if("string"===d||"number"===d)a.push(c);else if(Array.isArray(c)){if(c.length){var g=f.apply(null,c);g&&a.push(g)}}else if("object"===d){if(c.toString===Object.prototype.toString)for(var h in c)e.call(c,h)&&c[h]&&a.push(h);else a.push(c.toString())}}}return a.join(" ")}a.exports?(f.default=f,a.exports=f):void 0!==(d=(function(){return f}).apply(b,c=[]))&&(a.exports=d)}()},6961:function(a,b,c){var d,e=function(){var a=String.fromCharCode,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",d={};function e(a,b){if(!d[a]){d[a]={};for(var c=0;c<a.length;c++)d[a][a.charAt(c)]=c}return d[a][b]}var f={compressToBase64:function(a){if(null==a)return"";var c=f._compress(a,6,function(a){return b.charAt(a)});switch(c.length%4){default:case 0:return c;case 1:return c+"===";case 2:return c+"==";case 3:return c+"="}},decompressFromBase64:function(a){return null==a?"":""==a?null:f._decompress(a.length,32,function(c){return e(b,a.charAt(c))})},compressToUTF16:function(b){return null==b?"":f._compress(b,15,function(b){return a(b+32)})+" "},decompressFromUTF16:function(a){return null==a?"":""==a?null:f._decompress(a.length,16384,function(b){return a.charCodeAt(b)-32})},compressToUint8Array:function(a){for(var b=f.compress(a),c=new Uint8Array(2*b.length),d=0,e=b.length;d<e;d++){var g=b.charCodeAt(d);c[2*d]=g>>>8,c[2*d+1]=g%256}return c},decompressFromUint8Array:function(b){if(null==b)return f.decompress(b);for(var c=Array(b.length/2),d=0,e=c.length;d<e;d++)c[d]=256*b[2*d]+b[2*d+1];var g=[];return c.forEach(function(b){g.push(a(b))}),f.decompress(g.join(""))},compressToEncodedURIComponent:function(a){return null==a?"":f._compress(a,6,function(a){return c.charAt(a)})},decompressFromEncodedURIComponent:function(a){return null==a?"":""==a?null:(a=a.replace(/ /g,"+"),f._decompress(a.length,32,function(b){return e(c,a.charAt(b))}))},compress:function(b){return f._compress(b,16,function(b){return a(b)})},_compress:function(a,b,c){if(null==a)return"";var d,e,f,g={},h={},i="",j="",k="",l=2,m=3,n=2,o=[],p=0,q=0;for(f=0;f<a.length;f+=1)if(i=a.charAt(f),Object.prototype.hasOwnProperty.call(g,i)||(g[i]=m++,h[i]=!0),j=k+i,Object.prototype.hasOwnProperty.call(g,j))k=j;else{if(Object.prototype.hasOwnProperty.call(h,k)){if(256>k.charCodeAt(0)){for(d=0;d<n;d++)p<<=1,q==b-1?(q=0,o.push(c(p)),p=0):q++;for(d=0,e=k.charCodeAt(0);d<8;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}else{for(d=0,e=1;d<n;d++)p=p<<1|e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e=0;for(d=0,e=k.charCodeAt(0);d<16;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}0== --l&&(l=Math.pow(2,n),n++),delete h[k]}else for(d=0,e=g[k];d<n;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1;0== --l&&(l=Math.pow(2,n),n++),g[j]=m++,k=String(i)}if(""!==k){if(Object.prototype.hasOwnProperty.call(h,k)){if(256>k.charCodeAt(0)){for(d=0;d<n;d++)p<<=1,q==b-1?(q=0,o.push(c(p)),p=0):q++;for(d=0,e=k.charCodeAt(0);d<8;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}else{for(d=0,e=1;d<n;d++)p=p<<1|e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e=0;for(d=0,e=k.charCodeAt(0);d<16;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1}0== --l&&(l=Math.pow(2,n),n++),delete h[k]}else for(d=0,e=g[k];d<n;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1;0== --l&&(l=Math.pow(2,n),n++)}for(d=0,e=2;d<n;d++)p=p<<1|1&e,q==b-1?(q=0,o.push(c(p)),p=0):q++,e>>=1;for(;;){if(p<<=1,q==b-1){o.push(c(p));break}q++}return o.join("")},decompress:function(a){return null==a?"":""==a?null:f._decompress(a.length,32768,function(b){return a.charCodeAt(b)})},_decompress:function(b,c,d){var e,f,g,h,i,j,k,l=[],m=4,n=4,o=3,p="",q=[],r={val:d(0),position:c,index:1};for(e=0;e<3;e+=1)l[e]=e;for(g=0,i=4,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;switch(g){case 0:for(g=0,i=256,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;k=a(g);break;case 1:for(g=0,i=65536,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;k=a(g);break;case 2:return""}for(l[3]=k,f=k,q.push(k);;){if(r.index>b)return"";for(g=0,i=Math.pow(2,o),j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;switch(k=g){case 0:for(g=0,i=256,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;l[n++]=a(g),k=n-1,m--;break;case 1:for(g=0,i=65536,j=1;j!=i;)h=r.val&r.position,r.position>>=1,0==r.position&&(r.position=c,r.val=d(r.index++)),g|=(h>0?1:0)*j,j<<=1;l[n++]=a(g),k=n-1,m--;break;case 2:return q.join("")}if(0==m&&(m=Math.pow(2,o),o++),l[k])p=l[k];else{if(k!==n)return null;p=f+f.charAt(0)}q.push(p),l[n++]=f+p.charAt(0),m--,f=p,0==m&&(m=Math.pow(2,o),o++)}}};return f}();void 0!==(d=(function(){return e}).call(b,c,b,a))&&(a.exports=d)},7170:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/result",function(){return c(7165)}])},6482:function(a,b,c){"use strict";c.d(b,{"_":function(){return d}});var d=function(){return{localStorage:localStorage}}},4026:function(a,b,c){"use strict";c.d(b,{V:function(){return g},n:function(){return f}});var d=c(6961),e=c.n(d),f=function(a){return e().compressToEncodedURIComponent(a)},g=function(a){return e().decompressFromEncodedURIComponent(a)}},7165:function(a,b,c){"use strict";c.r(b);var d=c(603),e=c(5893),f=c(7294),g=c(4184),h=c.n(g),i=c(6482),j=c(4026),k=function(){var a=(0,f.useState)(),b=a[0],c=a[1],g=(0,i._)().localStorage,k=(0,f.useMemo)(function(){if(void 0!==g){var a=g.getItem("result");return null!=a?JSON.parse(a):{}}},[g]),l=(0,f.useCallback)(function(){if(void 0!==g){var a=g.getItem("result");null!=a&&c("".concat(location.origin,"/norireco/share?r=").concat((0,j.n)(a)))}},[g]);return void 0===k?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("h1",{className:"text-center",children:[k.name," さんの乗りレコ"]}),(0,e.jsx)("h2",{className:"text-center",children:k.musicSet}),(0,e.jsx)("h3",{className:"text-center",children:k.instrument}),(0,e.jsx)("p",{className:"mt-3",children:"交響曲第1番"}),(0,e.jsx)("div",{className:"d-flex gap-2",children:Object.entries(k.partList).filter(function(a){var b=(0,d.Z)(a,2),c=b[0];return b[1],c.includes("sym1")}).map(function(a){var b=(0,d.Z)(a,2),c=b[0],f=b[1],g=c.split("_")[1];return(0,e.jsx)("span",{className:h()({"text-muted":!f},{"fw-bold":f}),children:g},c)})}),(0,e.jsx)("p",{className:"mt-3",children:"交響曲第2番"}),(0,e.jsx)("div",{className:"d-flex gap-2",children:Object.entries(k.partList).filter(function(a){var b=(0,d.Z)(a,2),c=b[0];return b[1],c.includes("sym2")}).map(function(a){var b=(0,d.Z)(a,2),c=b[0],f=b[1],g=c.split("_")[1];return(0,e.jsx)("span",{className:h()({"text-muted":!f},{"fw-bold":f}),children:g},c)})}),(0,e.jsx)("p",{className:"mt-3",children:"交響曲第3番"}),(0,e.jsx)("div",{className:"d-flex gap-2",children:Object.entries(k.partList).filter(function(a){var b=(0,d.Z)(a,2),c=b[0];return b[1],c.includes("sym3")}).map(function(a){var b=(0,d.Z)(a,2),c=b[0],f=b[1],g=c.split("_")[1];return(0,e.jsx)("span",{className:h()({"text-muted":!f},{"fw-bold":f}),children:g},c)})}),(0,e.jsx)("p",{className:"mt-3",children:"交響曲第4番"}),(0,e.jsx)("div",{className:"d-flex gap-2",children:Object.entries(k.partList).filter(function(a){var b=(0,d.Z)(a,2),c=b[0];return b[1],c.includes("sym4")}).map(function(a){var b=(0,d.Z)(a,2),c=b[0],f=b[1],g=c.split("_")[1];return(0,e.jsx)("span",{className:h()({"text-muted":!f},{"fw-bold":f}),children:g},c)})}),b?(0,e.jsxs)("div",{className:"form-floating mt-3",children:[(0,e.jsx)("textarea",{className:"form-control",value:b,id:"shareURL",style:{height:"400px"}}),(0,e.jsx)("label",{htmlFor:"shareURL",children:"URLをコピーして結果をシェア"})]}):(0,e.jsx)("div",{className:"text-end",children:(0,e.jsx)("button",{type:"button",className:"btn btn-success",onClick:l,children:"シェアする"})}),(0,e.jsx)("div",{className:"mt-5",children:(0,e.jsx)("a",{href:"https://musig.net",target:"_blank",rel:"noreferrer",children:"詳しく記録したい方はみゅーぐも！"})})]})};b.default=k},603:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(b,{Z:function(){return e}})}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=7170)}),_N_E=a.O()}])