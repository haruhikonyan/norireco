(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{7532:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return c(7021)}])},6482:function(a,b,c){"use strict";c.d(b,{"_":function(){return d}});var d=function(){return{localStorage:localStorage}}},7021:function(a,b,c){"use strict";c.r(b);var d=c(603),e=c(5893),f=c(1163),g=c(7294),h=c(6482),i={ブラームス交響曲セット:{ファゴット:{交響曲第1番:["1st","2nd","CFg"],交響曲第2番:["1st","2nd"],交響曲第3番:["1st","2nd","CFg"],交響曲第4番:["1st","2nd","CFg"]},ホルン:{交響曲第1番:["1st","2nd","3rd","4th"],交響曲第2番:["1st","2nd","3rd","4th"],交響曲第3番:["1st","2nd","3rd","4th"],交響曲第4番:["1st","2nd","3rd","4th"]},トランペット:{交響曲第1番:["1st","2nd"],交響曲第2番:["1st","2nd"],交響曲第3番:["1st","2nd"],交響曲第4番:["1st","2nd"]}},ベートーヴェン交響曲セット:{ファゴット:{交響曲第1番:["1st","2nd"],交響曲第2番:["1st","2nd"],交響曲第3番:["1st","2nd"],交響曲第4番:["1st","2nd"],交響曲第5番:["1st","2nd","CFg"],交響曲第6番:["1st","2nd"],交響曲第7番:["1st","2nd"],交響曲第8番:["1st","2nd"],交響曲第9番:["1st","2nd","CFg"]},トランペット:{交響曲第1番:["1st","2nd"],交響曲第2番:["1st","2nd"],交響曲第3番:["1st","2nd"],交響曲第4番:["1st","2nd"],交響曲第5番:["1st","2nd"],交響曲第6番:["1st","2nd"],交響曲第7番:["1st","2nd"],交響曲第8番:["1st","2nd"],交響曲第9番:["1st","2nd"]},ホルン:{交響曲第1番:["1st","2nd"],交響曲第2番:["1st","2nd"],交響曲第3番:["1st","2nd","3rd"],交響曲第4番:["1st","2nd"],交響曲第5番:["1st","2nd"],交響曲第6番:["1st","2nd"],交響曲第7番:["1st","2nd"],交響曲第8番:["1st","2nd"],交響曲第9番:["1st","2nd","3rd","4th"]}}},j=function(){var a=(0,f.useRouter)(),b=(0,h._)().localStorage,c=(0,g.useMemo)(function(){return a.query.name},[a]),j=(0,g.useState)("ブラームス交響曲セット"),k=j[0],l=j[1],m=(0,g.useState)("ホルン"),n=m[0],o=m[1],p=(0,g.useMemo)(function(){return Object.keys(i)},[]),q=(0,g.useMemo)(function(){return Object.keys(i[k])},[k]),r=(0,g.useMemo)(function(){return i[k][n]},[n,k]),s=(0,g.useCallback)(function(a){a.preventDefault(),o(""),l(a.currentTarget.value)},[]),t=(0,g.useCallback)(function(a){a.preventDefault(),o(a.currentTarget.value)},[]),u=(0,g.useCallback)(function(e){if(e.preventDefault(),void 0!==b){var f=e.target,g={name:c,instrument:n,musicSet:k,partList:{}};Object.entries(r).forEach(function(a){var b=(0,d.Z)(a,2),c=b[0],e=b[1];g.partList[c]={},e.forEach(function(a){g.partList[c][a]=f["".concat(c,"_").concat(a)].checked})}),b.setItem("result",JSON.stringify(g)),a.push("/result")}},[b,c,n,k,r,a]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("h1",{className:"text-center",children:[c," さんの乗り番入力"]}),(0,e.jsxs)("form",{onSubmit:u,children:[(0,e.jsx)("select",{className:"form-select","aria-label":"musicSet",onChange:s,children:p.map(function(a){return(0,e.jsx)("option",{value:a,children:a},a)})}),(0,e.jsxs)("select",{className:"form-select","aria-label":"instrument",onChange:t,value:n,children:[(0,e.jsx)("option",{value:"",children:"選択してください"}),q.map(function(a){return(0,e.jsx)("option",{value:a,children:a},a)})]}),Object.entries(null!=r?r:{}).map(function(a){var b=(0,d.Z)(a,2),c=b[0],f=b[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"mt-3",children:c}),f.map(function(a){var b="".concat(c,"_").concat(a);return(0,e.jsxs)("div",{className:"form-check form-check-inline",children:[(0,e.jsx)("input",{className:"form-check-input",type:"checkbox",value:b,id:b,name:b}),(0,e.jsx)("label",{className:"form-check-label",htmlFor:b,children:a})]},b)})]})}),(0,e.jsx)("div",{className:"d-grid mt-3",children:(0,e.jsx)("button",{type:"submit",className:"btn btn-primary",children:"決定"})})]})]})};b.default=j},1163:function(a,b,c){a.exports=c(387)},603:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(b,{Z:function(){return e}})}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=7532)}),_N_E=a.O()}])