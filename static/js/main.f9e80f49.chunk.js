(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,function(e,n,t){e.exports={"array-visualizer__element":"ArrayVisualizerElement_array-visualizer__element__1tMfY","array-visualizer__element--active":"ArrayVisualizerElement_array-visualizer__element--active__2Tpxe"}},,,,,function(e,n,t){e.exports={"array-sorting-controller":"ArraySortingController_array-sorting-controller__efqOE"}},function(e,n,t){e.exports={"array-visualizer":"ArrayVisualizer_array-visualizer__10iCg"}},function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(6),c=t.n(i),s=(t(16),t(17),t(18),t(3)),o=t.n(s),l=t(7),u=t(8),v=t(1),m=t(9),f=t.n(m),p=t(10),h=t.n(p),d=t(4),g=t.n(d);var y=function(e){var n=e.isActive,t=e.height,r=e.width;return a.a.createElement("div",{className:"".concat(g.a["array-visualizer__element"]," ").concat(n&&g.a["array-visualizer__element--active"]),style:{height:"".concat(t,"%"),width:"".concat(r,"%")}},"\xa0")};var w=function(e){var n=function(e,n,t){return e.map((function(e,r){return a.a.createElement(y,{isActive:e.isActive,height:e.value/t.max*100,width:1/n*100,key:r})}))}(e.startingArray,e.lenght,e.range);return a.a.createElement("div",{className:h.a["array-visualizer"]},n)};function x(e,n,t){var r=e.slice(0);if(t>=r.length)for(var a=t-r.length+1;a--;)r.push(void 0);return r.splice(t,0,r.splice(n,1)[0]),r}function _(e,n,t){var r=e.slice(0),a=[];if(n<t){var i=parseInt((t-n)/2)+n,c=_(r,n,i);r=c.newArray,a=a.concat(c.steps);var s=_(r,i+1,t);r=s.newArray,a=a.concat(s.steps);var o=function(e,n,t,r){var a=e.slice(0),i=[],c=n,s=t+1;0==n&&4==t&&9==r&&console.log();for(;c<=t&&s<=r;){var o={elements:[]};a[s].value<a[c].value?(o.elements.push({index:s,newIndex:c}),o.elements.push({index:c+1,newIndex:c+1}),a=x(a,s,c),s++,t++):(o.elements.push({index:c,newIndex:c}),o.elements.push({index:s,newIndex:s})),c++,i.push(o)}return{newArray:a,steps:i}}(r,n,i,t);r=o.newArray,a=a.concat(o.steps)}return{newArray:r,steps:a}}var A=function(e,n){var t=e.elements,r=n.slice(0);return t.forEach((function(e){r[e.index].isActive=!0,r=x(r,e.index,e.newIndex)})),r},E=function(e,n){var t=e.elements,r=n.slice(0);return t.forEach((function(e){r[e.newIndex].isActive=!1})),r},b=function(e){return new Promise((function(n){return setTimeout(n,e)}))};var z=function(e){var n=e.lenght,t=e.range,i=Object(r.useState)([]),c=Object(v.a)(i,2),s=c[0],m=c[1],p=Object(r.useState)([]),h=Object(v.a)(p,2),d=h[0],g=h[1],y=Object(r.useState)({elements:[],isChange:!1}),x=Object(v.a)(y,2),z=(x[0],x[1]),O=Object(r.useState)([]),j=Object(v.a)(O,2),k=(j[0],j[1]);Object(r.useEffect)((function(){var e=function(e,n){return Array.from(Array(e)).map((function(e){return{value:Math.round(Math.random()*(n.max-n.min)+n.min),isActive:!1}}))}(n,t);m(e);var r=_(e,0,e.length-1);k(r.newArray),g(r.steps)}),[]);var I=function(){var e=Object(u.a)(o.a.mark((function e(){var n,t,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("start"),n=s,console.log(d,s),t=Object(l.a)(d),e.prev=4,t.s();case 6:if((r=t.n()).done){e.next=18;break}return a=r.value,z(a),i=A(a,n),m(i),e.next=13,b(10);case 13:i=E(a,i),m(i),n=i;case 16:e.next=6;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),t.e(e.t0);case 23:return e.prev=23,t.f(),e.finish(23);case 26:z({elements:[],isChange:!1}),g([]);case 28:case"end":return e.stop()}}),e,null,[[4,20,23,26]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:f.a["array-sorting-controller"]},a.a.createElement("div",{onClick:function(){return I()}},"start"),a.a.createElement(w,{startingArray:s,range:t,lenght:n}))};var O=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(z,{lenght:100,range:{min:5,max:1e3}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.f9e80f49.chunk.js.map