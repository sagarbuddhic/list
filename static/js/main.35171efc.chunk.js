(this.webpackJsonplist=this.webpackJsonplist||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n.n(r),o=n(9),i=n.n(o),u=(n(19),n(8)),s=n(6),d=(n.p,n(20),n(11)),l=n(13),f=n(5),b=n(10),g=n.n(b),h=function(e,t,n,c,r){return function(a){return t&&a===n?{y:100*c+r,scale:1.1,zIndex:"1",shadow:15,immediate:function(e){return"y"===e||"zIndex"===e}}:{y:100*e.indexOf(a),scale:1,zIndex:"0",shadow:1,immediate:!1}}};var j=function(){Object(r.useEffect)((function(){console.log("inside useEffect"),window.addEventListener("devicelight",(function(e){var t=document.body.style;console.log("devicelight event value:".concat(JSON.stringify(e))),e.value<100?(alert("Hey, you! You are working in a dark environment"),t.backgroundColor="lightgrey"):t.backgroundColor="#fff"}))}));var e="testing the list".split(" "),t=Object(r.useRef)(e.map((function(e,t){return t}))),n=Object(f.c)(e.length,h(t.current)),a=Object(s.a)(n,2),o=a[0],i=a[1],b=Object(d.a)((function(n){var c=Object(s.a)(n.args,1)[0],r=n.down,a=Object(s.a)(n.delta,2)[1],o=t.current.indexOf(c),u=Object(l.a)(Math.round((100*o+a)/100),0,e.length-1),d=g()(t.current,o,u);i(h(d,r,c,o,a)),r||(t.current=d)}));return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{class:"content",style:{height:100*e.length},children:o.map((function(t,n){var c=t.zIndex,a=t.shadow,o=t.y,i=t.scale;return Object(r.createElement)(f.a.div,Object(u.a)(Object(u.a)({},b(n)),{},{key:n,style:{zIndex:c,boxShadow:a.interpolate((function(e){return"rgba(0, 0, 0, 0.15) 0px ".concat(e,"px ").concat(2*e,"px 0px")})),transform:Object(f.b)([o,i],(function(e,t){return"translate3d(0,".concat(e,"px,0) scale(").concat(t,")")}))},children:e[n]}))}))})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.35171efc.chunk.js.map