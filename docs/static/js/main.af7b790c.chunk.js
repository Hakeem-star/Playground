(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(n,e,t){n.exports=t(23)},19:function(n,e,t){},20:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(10),i=t.n(a),c=(t(19),t(4)),l=t(6),u=t(3),s=t(2),f=(t(20),t(1));function d(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  width: 100%;\n  background-color: black;\n  color: white;\n  font-size: 1rem;\n  div {\n    color: white;\n    border-right: 1px solid white;\n    height: 100%;\n    padding: 10px;\n  }\n"]);return d=function(){return n},n}var b=f.c.header(d());function m(){return o.a.createElement(b,null,o.a.createElement("div",null,"Playground"))}function h(){var n=Object(s.a)(["\n  width: 80%;\n  height: 100px;\n  background-color: ",";\n  margin: 20px 0;\n"]);return h=function(){return n},n}function v(){var n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 50px 100px 0px;\n  color: white;\n  font-weight: 600;\n  font-size: 2rem;\n  transform: ",";\n  transition: all 0.8s ease;\n"]);return v=function(){return n},n}function g(){var n=Object(s.a)(["\n          transform: translateX(0%);\n        "]);return g=function(){return n},n}function p(){var n=Object(s.a)(["\n          transform: translateX(100%);\n        "]);return p=function(){return n},n}function j(){var n=Object(s.a)(["\n          transform: translateX(-100%);\n        "]);return j=function(){return n},n}function E(){var n=Object(s.a)(["\n        opacity: 1;\n        overflow-y: auto;\n        transition-delay: 0s, 0.4s;\n      "]);return E=function(){return n},n}function C(){var n=Object(s.a)(["\n        pointer-events: none;\n        opacity: 0;\n        transition-delay: 0s, 0s;\n      "]);return C=function(){return n},n}function O(){var n=Object(s.a)(["\n  position: absolute;\n  align-self: flex-start;\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  ","\n  ","\n  transition-property: transform,opacity;\n  transition-duration: 0.8s, 0.8s;\n  /* transition: all 0.8s ease; */\n  /* transition: all 0.8s ease; */\n  z-index: 1;\n"]);return O=function(){return n},n}var w=f.c.div(O(),(function(n){return n.bgColor}),(function(n){var e=n.closed;return e?Object(f.b)(C()):e?void 0:Object(f.b)(E())}),(function(n){switch(n.moveToPosition){case"left":return Object(f.b)(j());case"right":return Object(f.b)(p());default:return Object(f.b)(g())}})),x=f.c.div(v(),(function(n){switch(n.moveToPosition){case"left":return"translateX(100%)";case"right":return"translateX(-100%)";default:return"translateX(0%)"}})),y=f.c.div(h(),(function(n){return n.bgColor}));function k(n){var e=n.hideCard,t=n.moveToPosition,a=n.bgColor,i=n.text,c=n.closed,l=function(){switch(i){case"Abba":return"blue";case"Coldplay":return"Yellow";default:return"Green"}},u=Object(r.useRef)(null);return o.a.createElement(w,{ref:u,className:"page-card",hideCard:e,closed:c,bgColor:a,moveToPosition:t()},o.a.createElement(x,{className:"page-card__card-content",moveToPosition:t()},o.a.createElement("h1",null,i),o.a.createElement("div",null,o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}),o.a.createElement(y,{bgColor:l()}))))}function P(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 900px;\n  transform: scale(0.98) translateY(30px);\n  background-color: ",";\n  &:hover {\n    ","\n  }\n  transition: all 0.4s ease;\n"]);return P=function(){return n},n}function T(){var n=Object(s.a)(["\n        transition-delay: 0s;\n\n        transform: translateX(","%) scale(1);\n      "]);return T=function(){return n},n}function S(){var n=Object(s.a)(["\n        transform: translateY(500px) scale(0.2);\n        transition-delay: 0.4s;\n      "]);return S=function(){return n},n}function X(){var n=Object(s.a)(["\n  cursor: pointer;\n  position: absolute;\n  align-self: flex-start;\n  display: flex;\n\n  ",";\n  transition-property: transform;\n  transition-duration: 0.8s;\n"]);return X=function(){return n},n}var z=f.c.div(X(),(function(n){var e=n.theme,t=e.closed,r=e.slide;return t?Object(f.b)(S()):Object(f.b)(T(),-33.3333*(r-2))})),N=f.c.div(P(),(function(n){return n.bgColor}),(function(n){return n.theme.closed&&"transform: translateY(-30px);"}));function Y(n){var e=n.setClosed,t=n.setSlide,a=n.slide,i=n.closed,c=n.move,l=(n.setShowCard,n.setHideCard,Object(r.useRef)(""));return o.a.createElement(f.a,{theme:{closed:i,slide:a,move:c}},o.a.createElement(z,{ref:l,className:"bg-tiles-container"},o.a.createElement(N,{onClick:function(){e(!1),t(1)},bgColor:"red"}),o.a.createElement(N,{onClick:function(){console.log("HEAR ME"),e(!1),t(2)},bgColor:"green"}),o.a.createElement(N,{onClick:function(){e(!1),t(3)},bgColor:"blue"})))}function A(){var n=Object(s.a)(["\n  position: absolute;\n  right: 530px;\n  height: 100px;\n  width: 60px;\n  z-index: 3;\n"]);return A=function(){return n},n}function H(){var n=Object(s.a)(["\n  height: 30px;\n  width: 60px;\n"]);return H=function(){return n},n}function R(){var n=Object(s.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n"]);return R=function(){return n},n}var B=o.a.createContext(!1),J=f.c.main(R()),M=f.c.button(H()),W=f.c.div(A());var _=function(){var n=Object(r.useState)({1:!0,2:!1,3:!1}),e=Object(u.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(1),s=Object(u.a)(i,2),f=s[0],d=s[1],b=Object(r.useState)(!0),h=Object(u.a)(b,2),v=h[0],g=h[1],p=Object(r.useState)(!0),j=Object(u.a)(p,2),E=j[0],C=j[1];return Object(r.useEffect)((function(){a((function(n){return Object(l.a)(Object(l.a)({},{1:!1,2:!1,3:!1}),{},Object(c.a)({},f,!0))}))}),[f]),o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(J,null,o.a.createElement(B.Provider,{value:{move:t,closed:v}},o.a.createElement(k,{hideCard:E,closed:v,text:"Abba",moveToPosition:function(){return t[2]||t[3]?"left":"center"}}),o.a.createElement(k,{hideCard:E,closed:v,text:"Coldplay",moveToPosition:function(){return t[2]?"center":t[1]?"right":"left"}}),o.a.createElement(k,{hideCard:E,closed:v,text:"Outkast",moveToPosition:function(){return t[3]?"center":"right"}})),o.a.createElement(W,null,o.a.createElement(M,{onClick:function(){g((function(n){return!n}))}},"Toggle"),o.a.createElement(M,{onClick:function(){d((function(n){return n<3?++n:n}))}},"Next"),o.a.createElement(M,{onClick:function(){d((function(n){return n>1?--n:n}))}},"Previous")),o.a.createElement(Y,{setHideCard:C,hideCard:E,setSlide:d,slide:f,setClosed:g,closed:v,move:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.af7b790c.chunk.js.map