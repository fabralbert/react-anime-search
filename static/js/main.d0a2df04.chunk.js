(this["webpackJsonpreact-default"]=this["webpackJsonpreact-default"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(13),i=c.n(s),r=(c(18),c(3)),j=c(4),o=c(2),l=(c(19),c(0));function d(e){return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"header-wrapper",children:[Object(l.jsx)(j.b,{to:"/",className:"logo",children:"Anime Search"}),Object(l.jsx)("ul",{className:"menu",children:Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(j.b,{to:"/favourite",children:"Favourite"})})}),Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("img",{onClick:function(){return localStorage.setItem("authorization",0),void e.check(!1)},src:"/react-anime-search/exit.png"})})]})})})}c(21);function b(){return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"footer-wrapper",children:Object(l.jsxs)("span",{children:["Made on Unofficial MyAnimeList ",Object(l.jsx)("a",{href:"https://jikan.moe",target:"_blank",rel:"nofollow noopener noreferrer",children:"API"})]})})})}var u=c(11),O=c(7),h=c.n(O),m=c(10);c(23);function p(e){var t=e.animes,c=void 0===t?[]:t,n=e.setFavourite,a=void 0===n?Function.protytype:n,s=e.favouriteArray;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"animes",children:c.map((function(e){return Object(l.jsxs)("div",{className:"anime-wrapper",children:[Object(l.jsx)("div",{children:Object(l.jsx)(j.b,{to:"/".concat("TV"===e.type||"Movie"===e.type||"OVA"===e.type||"Special"===e.type||"ONA"===e.type?"anime":"manga","/").concat(e.mal_id),children:Object(l.jsx)("img",{className:"anime-img",src:e.image_url})})}),Object(l.jsxs)("div",{className:"anime-text",children:[s.find((function(t){return t.mal_id===e.mal_id}))?Object(l.jsx)("i",{className:"fas fa-star",onClick:function(){return a(e,e.type)}}):Object(l.jsx)("i",{className:"far fa-star",onClick:function(){return a(e,e.type)}}),Object(l.jsx)("span",{children:e.title.length>32?"".concat(e.title.slice(0,32),"..."):e.title})]})]},e.mal_id)}))})})}function x(){return Object(l.jsx)("div",{className:"preloader",children:Object(l.jsx)("div",{className:"water"})})}c(24);var f=function(e){var t=e.searchAnimes,c=void 0===t?Function.protytype:t,a=Object(n.useState)(""),s=Object(r.a)(a,2),i=s[0],j=s[1],o=Object(n.useState)("anime"),d=Object(r.a)(o,2),b=d[0],u=d[1],O=function(e){u(e.target.dataset.type),c(i,e.target.dataset.type)};return Object(l.jsxs)("div",{className:"inputs-wrapper",children:[Object(l.jsxs)("div",{className:"search-wrapper",children:[Object(l.jsx)("input",{className:"search-input",placeholder:"Type what you want to search",id:"search",type:"search",value:i,onChange:function(e){return j(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&c(i,b)}}),Object(l.jsx)("button",{className:"button",onClick:function(){return c(i,b)},children:"Search"})]}),Object(l.jsxs)("div",{className:"radio-buttons-wrapper",children:[Object(l.jsx)("input",{className:"with-gap",name:"type",id:"radio-1",type:"radio","data-type":"anime",onChange:O,checked:"anime"===b}),Object(l.jsx)("label",{for:"radio-1",children:"Anime"}),Object(l.jsx)("input",{className:"with-gap",name:"type",id:"radio-2",type:"radio","data-type":"manga",onChange:O,checked:"manga"===b}),Object(l.jsx)("label",{for:"radio-2",children:"Manga"})]})]})};c(25),c(26);function g(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),j=i[0],o=i[1],d=Object(n.useState)(!0),b=Object(r.a)(d,2),O=b[0],g=b[1],v=JSON.parse(localStorage.getItem("favourite"))||[],N=function(){var e=Object(m.a)(h.a.mark((function e(t,c){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!1),o(!0),e.next=4,fetch("https://api.jikan.moe/v3/search/".concat(c,"?q=").concat(t,"&limit=10"));case 4:return n=e.sent,e.next=7,n.json();case 7:(a=e.sent).results&&y(a.results),o(!1);case 10:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();function y(e){var t=Object(u.a)(e);t&&a(t)}return Object(l.jsxs)("main",{className:"container",children:[Object(l.jsx)(f,{searchAnimes:N}),O?Object(l.jsx)("div",{className:"banner",children:Object(l.jsx)("img",{src:"/react-anime-search/banner.png"})}):j?Object(l.jsx)(x,{}):Object(l.jsx)(p,{animes:c,setFavourite:function(e,t){console.log(e,t);var n=v.findIndex((function(c){return c.mal_id===e.mal_id&&c.type===t}));console.log(n),-1!=n?v.splice(n,1):v.push(e),localStorage.setItem("favourite",JSON.stringify(v)),y(c)},favouriteArray:v})]})}c(27);function v(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("favourite"))||[]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(l.jsx)(l.Fragment,{children:c.length?Object(l.jsx)("div",{className:"container favourite-container",children:Object(l.jsx)("div",{className:"animes",children:c.map((function(e){return Object(l.jsxs)("div",{className:"anime-wrapper",children:[Object(l.jsx)("div",{children:Object(l.jsx)(j.b,{to:"/".concat("TV"===e.type||"Movie"===e.type||"OVA"===e.type||"Special"===e.type||"ONA"===e.type?"anime":"manga","/").concat(e.mal_id),children:Object(l.jsx)("img",{className:"anime-img",src:e.image_url})})}),Object(l.jsxs)("div",{className:"anime-text",children:[Object(l.jsx)("i",{className:"far fa-trash-alt",onClick:function(){return function(e){console.log(e);var t=c.findIndex((function(t){return t.mal_id===e.mal_id}));c.splice(t,1),localStorage.setItem("favourite",JSON.stringify(c));var n=Object(u.a)(c);a(n)}(e)}}),Object(l.jsx)("span",{children:e.title.length>32?"".concat(e.title.slice(0,32),"..."):e.title})]})]},e.mal_id)}))})}):Object(l.jsx)("h3",{className:"notFound container",children:"No favorites added"})})}c(28);function N(){var e=Object(o.h)(),t=e.id,c=e.animepage,a=Object(n.useState)(null),s=Object(r.a)(a,2),i=s[0],j=s[1];return Object(n.useEffect)(Object(m.a)(h.a.mark((function e(){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/".concat(c,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).mal_id&&j(a);case 7:case"end":return e.stop()}}),e)}))),[]),Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container anime-container",children:[Object(l.jsx)("h2",{className:"anime-title",children:i.title}),Object(l.jsxs)("div",{className:"anime-wrapper-info",children:[Object(l.jsx)("img",{className:"anime-img",src:i.image_url}),Object(l.jsxs)("ul",{className:"anime-info",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Synopsis:"})," ",i.synopsis]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Type:"}),"  ",i.type]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Source:"})," ",i.source]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Episodes:"})," ",i.episodes]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Score:"})," ",i.score]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Reting:"})," ",i.rating]})]})]})]})}):Object(l.jsx)("h3",{className:"notFound container",children:"Request not found"})})}c(29);function y(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"page404-wrapper",children:[Object(l.jsx)("h1",{className:"page404-title",children:"404"}),Object(l.jsx)("div",{className:"page404-text",children:"Page not found"}),Object(l.jsx)(j.b,{to:"/",className:"page404-btn",children:"Go home page"})]})})})}var S=c(9),w=(c(30),function(e){var t=Object(n.useState)({authorization:"",pass:""}),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),j=Object(r.a)(i,2),o=j[0],d=j[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"authorization-container",children:Object(l.jsx)("div",{className:"authorization-wrapper",children:Object(l.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),console.log(a),"admin"==a.authorization&&"123456"==a.pass?(localStorage.setItem("authorization",1),e.check(!0)):d("Incorrect login or password")}(t)},children:[Object(l.jsx)("h1",{className:"authorization-title",children:"Login to Site"}),Object(l.jsxs)("div",{className:"login-input",children:[Object(l.jsx)("label",{for:"login-input",children:"Login"}),Object(l.jsx)("input",{type:"text",placeholder:"Type 'admin'",onInput:function(e){return s(Object(S.a)(Object(S.a)({},a),{},{authorization:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"password-input",children:[Object(l.jsx)("label",{for:"password-input",children:"Password"}),Object(l.jsx)("input",{type:"password",placeholder:"Type '123456'",onInput:function(e){return s(Object(S.a)(Object(S.a)({},a),{},{pass:e.target.value}))}})]}),Object(l.jsx)("button",{className:"authorization-btn",children:"Login"}),Object(l.jsx)("p",{children:o})]})})})})});var k=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){1==localStorage.getItem("authorization")&&a(!0)}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.a,{children:[c?Object(l.jsx)(d,{check:a}):null,Object(l.jsxs)(o.d,{children:[c?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",element:Object(l.jsx)(g,{})}),Object(l.jsx)(o.b,{path:"/favourite",element:Object(l.jsx)(v,{})}),Object(l.jsx)(o.b,{path:"/:animepage/:id",element:Object(l.jsx)(N,{})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{path:"/react-anime-search",element:Object(l.jsx)(o.a,{replace:!0,to:"/"})}),Object(l.jsx)(o.b,{path:"/",element:Object(l.jsx)(w,{check:a})})]}),Object(l.jsx)(o.b,{path:"*",element:Object(l.jsx)(y,{})})]}),Object(l.jsx)(b,{})]})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d0a2df04.chunk.js.map