(this["webpackJsonpstable-marriage"]=this["webpackJsonpstable-marriage"]||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/reorder.eaa32adc.svg"},32:function(e,t,n){e.exports=n.p+"static/media/userAvatar.330f6514.png"},38:function(e,t,n){e.exports=n(66)},43:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),i=n.n(o),c=(n(43),n(4)),u=n.n(c),l=n(8),s=n(14),m=n(6),p=n(7),f=n(31),d=n.n(f),g=n(32),h=n.n(g),v=n(13),b=n.n(v);function x(e,t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark((function e(t,n){var a,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.forEach((function(e){a.push(e.email)})),r=[n.email,a],e.prev=3,e.next=6,b.a.post("/ranking",r);case 6:return o=e.sent,e.abrupt("return",o.status);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}var E=n(37),y=n(9);function k(){var e=Object(m.a)(["\n  flex: 0 1 auto;\n  margin: 0 1em;\n\n  & p {\n    font-size: 1.5em;\n    color: red;\n  }\n"]);return k=function(){return e},e}function O(){var e=Object(m.a)(["\n  max-width: 50px;\n  min-width: 25px;\n  height: 100%;\n"]);return O=function(){return e},e}function S(){var e=Object(m.a)(["\n  max-width: 150px;\n  flex: 1 1 auto;\n  font-size: 1.2rem;\n  margin: 0 1em;\n  overflow-wrap: break-word;\n  hyphens: auto;\n"]);return S=function(){return e},e}function j(){var e=Object(m.a)(["\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  flex: 0 0 auto;\n  border: solid 1px #cec4c4;\n"]);return j=function(){return e},e}function I(){var e=Object(m.a)(["\n  max-height: 100px;\n  min-width: 360px;\n  border: 1px solid #eeeeee;\n  box-shadow: 4px 3px 3px 0px rgb(28 27 33 / 55%);\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 1em;\n  padding: 1em 0;\n  background-color: white;\n\n  &.sortable-swap-highlight {\n    background-color: #f9c7c8;\n  }\n\n  &:hover {\n    cursor: move;\n    cursor: -webkit-grabbing;\n  }\n"]);return I=function(){return e},e}function N(){var e=Object(m.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 90%;\n  margin: 0 auto;\n"]);return N=function(){return e},e}function L(){var e=Object(m.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n"]);return L=function(){return e},e}function J(){var e=Object(m.a)(["\n  max-width: 500px;\n  margin: 1em auto;\n"]);return J=function(){return e},e}var z=p.a.div(J()),U=p.a.h1(L()),C=Object(p.a)(E.a)(N()),F=p.a.div(I()),A=p.a.img(j()),B=p.a.h2(S()),P=p.a.img(O()),D=p.a.div(k());function T(){var e=JSON.parse(localStorage.getItem("validUser")),t=Object(a.useState)((function(){var e=localStorage.getItem("rankingList");return JSON.parse(e)})),n=Object(s.a)(t,2),o=n[0],i=n[1],c=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(o,e);case 2:200===t.sent&&alert("200");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(z,null,r.a.createElement(U,null,"Hi, ".concat(e.name,"! Please rate this  \n        ").concat("mentor"===e.role?"mentees":"mentors",":")),r.a.createElement(C,{tag:"div",list:o,setList:i,onSort:function(e){var t=[];o.forEach((function(e){t.push({name:e.name,surname:e.surname,photo:e.photo,email:e.email})})),localStorage.setItem("rankingList",JSON.stringify(t))},animation:200,easing:"cubic-bezier(1, 0, 0, 1)"},o.map((function(e,t){return r.a.createElement(F,{key:e.email},r.a.createElement(D,null,r.a.createElement("p",{className:"user-rating"},t+1)),0===e.photo.length?r.a.createElement(A,{src:h.a,alt:"User avatar"}):r.a.createElement(A,{src:e.photo,alt:"User avatar"}),r.a.createElement(B,null,"".concat(e.name," ").concat(e.surname)),r.a.createElement(P,{src:d.a,alt:"reorderList"}))}))),r.a.createElement("button",{type:"button",style:{display:"block",margin:"1em 0",padding:"1em"},onClick:c},"Submit ranking results"),r.a.createElement(y.b,{to:"/",onClick:function(){localStorage.removeItem("validUser"),localStorage.removeItem("rankingList")}},"Choose another account"))}function W(e){return q.apply(this,arguments)}function q(){return(q=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/user",{params:{email:t}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var H=n(1),M=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(H.f)(),c=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.trim().toLocaleLowerCase(),e.next=4,W(a);case 4:(r=e.sent)?(localStorage.setItem("validUser",JSON.stringify(r[0])),o=[],r[1].forEach((function(e){o.push({id:e["Order ID"],name:e["First Name"],surname:e["Last Name"],photo:e["A recent photo of yourself"],email:e.Email})})),localStorage.setItem("rankingList",JSON.stringify(o)),i.push("/ranking")):document.getElementById("userNotFound").innerText="Please, check the spelling and try once again";case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:c},r.a.createElement("label",null,"Please identify yourself with your email address, that you used for register to this event: ",r.a.createElement("br",null),r.a.createElement("input",{name:"email",type:"email",id:"email",required:!0,value:n,onChange:function(e){return o(e.target.value)},style:{fontSize:"1.3rem",padding:"1rem",marginTop:"1rem"}})),r.a.createElement("button",{type:"submit",style:{fontSize:"1.3rem",padding:"1rem"}},"Submit"),r.a.createElement("span",{id:"userNotFound",style:{marginLeft:"1rem",fontStyle:"italic"}})))},$=localStorage.getItem("validUser");var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.b,{exact:!0,path:"/"},$?r.a.createElement(H.a,{to:"/ranking"}):r.a.createElement(M,null)),r.a.createElement(H.b,{exact:!0,path:"/ranking"},r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.59c4c44a.chunk.js.map