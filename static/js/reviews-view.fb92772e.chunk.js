(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[6],{41:function(e,t,i){"use strict";i.r(t);var n=i(34),c=i(0),r=i(42),s=i.n(r),o=i(1);t.default=function(e){var t=e.id,i=Object(c.useState)([]),r=Object(n.a)(i,2),a=r[0],h=r[1];return Object(c.useEffect)((function(){fetch("".concat("https://api.themoviedb.org","/3/movie/").concat(t,"/reviews?api_key=").concat("b0a51c5fb2c3f42914edb92a4e0001cb","&language=en-US")).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(e){var t=e.results;h(t)}))}),[t]),console.log(a),Object(o.jsx)(o.Fragment,{children:a.length>0?a.map((function(e){return Object(o.jsxs)("li",{className:s.a.reviewItem,children:[Object(o.jsxs)("p",{className:s.a.reviewTitle,children:["Author: ",e.author]}),Object(o.jsx)("p",{children:e.content})]},e.id)})):Object(o.jsx)("p",{children:"We don't have any reviews for this movie"})})}},42:function(e,t,i){e.exports={reviewItem:"Reviews_reviewItem__3kT6S",reviewTitle:"Reviews_reviewTitle__MEAdM"}}}]);
//# sourceMappingURL=reviews-view.fb92772e.chunk.js.map