(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{7833:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list",function(){return c(1082)}])},6482:function(a,b,c){"use strict";c.d(b,{"_":function(){return d}});var d=function(){return{localStorage:localStorage}}},1082:function(a,b,c){"use strict";c.r(b);var d=c(603),e=c(5893),f=c(7294),g=c(1163),h=c(6482),i=c(1664),j=c.n(i),k=function(){var a=(0,g.useRouter)(),b=(0,h._)().localStorage,c=(0,f.useMemo)(function(){if(void 0===b)return{};var a=b.getItem("result");return null!=a?JSON.parse(a):{}},[b]);return 0===Object.keys(c).length?(0,e.jsx)(j(),{href:"/",children:(0,e.jsx)("a",{children:"乗りレコを作る"})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("h1",{className:"text-center",children:[c.name," さんの乗りレコリスト"]}),Object.entries(c.musicSet).map(function(a){var b=(0,d.Z)(a,2),c=b[0];return Object.keys(b[1]).map(function(a){var b="".concat(c,": ").concat(a);return(0,e.jsx)("p",{children:(0,e.jsx)(j(),{href:"/result?l=".concat(b),children:(0,e.jsx)("a",{children:b})})},b)})}),(0,e.jsx)("div",{className:"mt-3 text-center",children:(0,e.jsx)(j(),{href:"create?name=".concat(c.name),children:(0,e.jsx)("a",{children:"乗りレコを作る"})})}),(0,e.jsx)("div",{className:"text-end mt-5",children:(0,e.jsx)("button",{type:"button",onClick:function(){null==b||b.clear(),a.push("/")},className:"btn btn-danger mt-5",children:"全て削除する"})})]})};b.default=k}},function(a){a.O(0,[14,774,888,179],function(){var b;return a(a.s=7833)}),_N_E=a.O()}])