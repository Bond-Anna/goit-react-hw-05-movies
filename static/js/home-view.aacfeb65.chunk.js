(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{32:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},33:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(32);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},34:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(33);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(32);var o=r(33);function i(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},36:function(t,e,r){t.exports={movieItem:"HomeViews_movieItem__1826g",movie:"HomeViews_movie__35cHV",pageTitle:"HomeViews_pageTitle__3JiHp"}},44:function(t,e,r){"use strict";r.r(e);var n=r(35),o=r(34),i=r(0),a=r(2),c=r(8),u=r(36),s=r.n(u),f=r(1);e.default=function(){var t=Object(a.g)();console.log("HomeView",t);var e=Object(i.useState)([]),r=Object(o.a)(e,2),u=r[0],l=r[1];return Object(i.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3","/trending/all/").concat("day","?api_key=").concat("b0a51c5fb2c3f42914edb92a4e0001cb")).then((function(t){if(t.ok)return t.json();throw new Error(t.status)})).then((function(t){var e=t.results;l(Object(n.a)(e))}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:s.a.pageTitle,children:"Trending for today"}),Object(f.jsx)("ul",{children:u.map((function(e){return Object(f.jsx)("li",{className:s.a.movieItem,children:Object(f.jsxs)(c.b,{to:{pathname:"/movies/".concat(e.id),state:{from:t}},className:s.a.movie,children:[e.title||e.name," "]})},e.id)}))})]})}}}]);
//# sourceMappingURL=home-view.aacfeb65.chunk.js.map