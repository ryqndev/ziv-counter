(this["webpackJsonpzivs-law"]=this["webpackJsonpzivs-law"]||[]).push([[0],[,function(e){e.exports=JSON.parse('["2019-11-12T22:39:06.873Z","2019-11-19T22:30:15.017Z","2019-11-26T22:21:32.329Z"]')},,,,,,function(e,t,n){e.exports=n.p+"static/media/Ziv.4a7a86d2.jpg"},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(13),n(3)),l=function(e){var t=document.documentElement.style;e?(t.setProperty("--text-color-1","#CECECE"),t.setProperty("--text-color-accent","#FFFF00"),t.setProperty("--background-color","#151515"),t.setProperty("--alt-background-color","#777777")):(t.setProperty("--text-color-1","#151515"),t.setProperty("--text-color-accent","#FF00FF"),t.setProperty("--background-color","#FFFFFF"),t.setProperty("--alt-background-color","#CECECE"))},s=n(6),u=n.n(s),v=(n(21),function(e){var t=e.cur,n=e.set;return r.a.createElement("label",null,r.a.createElement(u.a,{checked:t,icons:!1,onChange:n.bind(null,!t)}))}),f=n(1),d=n(7),m=n.n(d),p=(n(22),n(2)),g=function(e){var t=e.display,n=e.data,a=Object(p.b)({top:t?"10vh":"110vh"});return r.a.createElement(p.a.div,{className:"history--wrapper",style:a},r.a.createElement("div",{className:"history--title"},"Past Mentions"),n.map((function(e){return r.a.createElement("div",{className:"history--item",key:e},new Date(e).toString())})))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),E=r.a.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),y=function(e){var t=e.svgRef,n=e.title,a=w(e,["svgRef","title"]);return r.a.createElement("svg",h({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),n?r.a.createElement("title",null,n):null,b,E)},O=r.a.forwardRef((function(e,t){return r.a.createElement(y,h({svgRef:t},e))}));n.p,n(23);var k=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),s=Object(c.a)(i,2),u=s[0],d=s[1],p=new Date(f[f.length-1]);return Object(a.useEffect)((function(){l(n)}),[n]),r.a.createElement("div",{className:"ziv-law--wrapper"},r.a.createElement("div",{className:"ziv-law--toggle"},r.a.createElement(v,{cur:n,set:o})),r.a.createElement("div",{className:"ziv-law--history",onClick:d.bind(null,!u)},r.a.createElement(O,{className:"ziv-law--history-icon"})),r.a.createElement("div",{className:"ziv-law--title"},r.a.createElement("img",{className:"ziv-law--image",alt:"Hadar Ziv",src:m.a}),r.a.createElement("br",null),"Number of times Ziv has mentioned Ziv's Law:"),r.a.createElement("div",{className:"ziv-law--counter"},f.length),r.a.createElement("div",{className:"ziv-law--footer"},"Last mention: ",r.a.createElement("span",null,p.toDateString())," at ",r.a.createElement("span",null,p.toTimeString().substr(0,2)-12,":",p.toTimeString().substr(3,2)," PM")),r.a.createElement(g,{display:u,data:f}))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ziv-counter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ziv-counter","/service-worker.js");j?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.3b452537.chunk.js.map