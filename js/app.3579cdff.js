(function(e){function t(t){for(var a,r,o=t[0],s=t[1],u=t[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-62959306":"085161e6","chunk-ab1e07a8":"24b9ddcf"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-62959306":1,"chunk-ab1e07a8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-62959306":"ce61f3a2","chunk-ab1e07a8":"b956c0af"}[e]+".css",c=s.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===c))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===a||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/aqi-app/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01a7":function(e,t,n){},"15e7":function(e,t,n){"use strict";n("67fd")},3810:function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["M"])("data-v-32230914");Object(a["u"])("data-v-32230914");var c=Object(a["i"])("section",{class:"p-grid p-jc-center p-align-center p-flex-column topbar"},[Object(a["i"])("div",{class:"header"}," Air Quality Monitoring "),Object(a["i"])("div",{class:"sub-header"},"For Major Indian Cities")],-1),i={class:"main-content"};Object(a["s"])();var o=r((function(e,t){var n=Object(a["z"])("router-view");return Object(a["r"])(),Object(a["e"])(a["a"],null,[c,Object(a["i"])("section",i,[Object(a["i"])(n,null,{default:r((function(e){return[Object(a["i"])(a["b"],{name:"route",mode:"out-in"},{default:r((function(){return[(Object(a["r"])(),Object(a["e"])(Object(a["B"])(e.Component)))]})),_:2},1024)]})),_:1})])],64)}));n("15e7");const s={};s.render=o,s.__scopeId="data-v-32230914";var u=s,d=(n("d3b7"),n("6c02"));n("b0c0");function l(e,t,n,r,c,i){var o=Object(a["z"])("Column"),s=Object(a["z"])("AqiValue"),u=Object(a["z"])("RelativeTime"),d=Object(a["z"])("AqiCategory"),l=Object(a["z"])("Button"),f=Object(a["z"])("DataTable"),b=Object(a["z"])("Card"),j=Object(a["A"])("tooltip");return Object(a["r"])(),Object(a["e"])(b,null,{content:Object(a["I"])((function(){return[Object(a["i"])(f,{value:e.allCities},{default:Object(a["I"])((function(){return[Object(a["i"])(o,{field:"name",header:"Name",sortable:!0},{body:Object(a["I"])((function(e){return[Object(a["i"])("strong",null,Object(a["D"])(e.data.name),1)]})),_:1}),Object(a["i"])(o,{field:"aqi",header:"Air Quality Index",sortable:!0},{body:Object(a["I"])((function(e){return[Object(a["i"])(s,{value:e.data.aqi},null,8,["value"])]})),_:1}),Object(a["i"])(o,{field:"updatedAt",header:"Last Updated At",sortable:!0},{body:Object(a["I"])((function(e){return[Object(a["i"])(u,{dateTime:e.data.updatedAt},null,8,["dateTime"])]})),_:1}),Object(a["i"])(o,{field:"updatedAt",header:"Category"},{body:Object(a["I"])((function(e){return[Object(a["i"])(d,{value:e.data.aqi},null,8,["value"])]})),_:1}),Object(a["i"])(o,{field:"",header:"Actions"},{body:Object(a["I"])((function(e){return[Object(a["J"])(Object(a["i"])(l,{onClick:function(t){return i.redirectToLiveView(e.data.name)},icon:"pi pi-chart-line",class:"p-button-sm p-button-outlined p-button-rounded p-mr-1"},null,8,["onClick"]),[[j,"Live Chart"]]),Object(a["J"])(Object(a["i"])(l,{onClick:function(t){return i.redirectToComparisonView(e.data.name)},icon:"pi pi-table",class:"p-button-sm p-button-outlined p-button-rounded"},null,8,["onClick"]),[[j,"Compare Now"]])]})),_:1})]})),_:1},8,["value"])]})),_:1})}var f=n("5530"),b=n("5502"),j=Object(a["M"])("data-v-ddceb110"),p=j((function(e,t,n,r,c,i){return Object(a["r"])(),Object(a["e"])(a["b"],{name:"value-update",mode:"out-in"},{default:j((function(){return[(Object(a["r"])(),Object(a["e"])("div",{class:"container",style:"border-color:"+i.color,key:n.value},Object(a["D"])(n.value),5))]})),_:1})})),m=(n("a9e3"),n("8992")),v={props:{value:Number},computed:{color:function(){return Object(m["d"])(this.value)}}};n("8566");v.render=p,v.__scopeId="data-v-ddceb110";var h=v,O=Object(a["M"])("data-v-59ff8e54"),y=O((function(e,t,n,r,c,i){return Object(a["r"])(),Object(a["e"])("div",{class:"container",style:"background-color:"+i.color},Object(a["D"])(i.category),5)})),g=n("6df8"),C={props:{value:Number},computed:{color:function(){return Object(m["d"])(this.value)},category:function(){return g["a"][Object(m["c"])(this.value)]}}};n("c09e");C.render=y,C.__scopeId="data-v-59ff8e54";var k=C;function T(e,t,n,r,c,i){return Object(a["r"])(),Object(a["e"])("span",null,[Object(a["i"])("i",null,Object(a["D"])(c.displayDate),1)])}var A={props:{dateTime:{type:Date}},data:function(){return{registeredInterval:null,displayDate:"A second ago"}},methods:{convertToRelativeTime:function(){var e=this;e.dateTime&&(e.displayDate=Object(m["e"])((new Date).valueOf(),e.dateTime.valueOf()))}},created:function(){var e=this;e.registeredInterval=setInterval((function(){e.convertToRelativeTime()}),2e3),e.convertToRelativeTime()},beforeUnmount:function(){clearInterval(this.registeredInterval)}};A.render=T;var E=A,w={name:"Home",components:{AqiValue:h,AqiCategory:k,RelativeTime:E},computed:Object(f["a"])({},Object(b["b"])({allCities:"allCitiesSortedByName"})),methods:{getTimeString:function(e){return Object(m["e"])((new Date).getMilliseconds(),e.getMilliseconds())},redirectToLiveView:function(e){this.$store.dispatch("updateSelectedCity",e),this.$router.push("/liveChart").catch((function(e){return console.error(e)}))},redirectToComparisonView:function(e){this.$store.dispatch("addToComparisonList",e),this.$router.push("/cityComparison").catch((function(e){return console.error(e)}))}}};w.render=l;var S=w,z=[{path:"/",name:"Dashboard",component:S},{path:"/liveChart",name:"Live Chart",component:function(){return n.e("chunk-ab1e07a8").then(n.bind(null,"f1ec"))}},{path:"/cityComparison",name:"City Comparison",component:function(){return n.e("chunk-62959306").then(n.bind(null,"14d5"))}},{path:"/:pathMatch(.*)*",redirect:"/"}],_=Object(d["a"])({history:Object(d["b"])("/aqi-app/"),routes:z}),D=_,L=(n("99af"),n("d81d"),n("fb6a"),n("b680"),n("b64b"),n("07ac"),n("6062"),n("3ca3"),n("ddb0"),n("b85c")),H=n("2909"),q=function(){return{cities:{},cityHistories:{},selectedCity:null,selectedCityLatestEntry:null,comparisonList:new Set}},I=function(e){return{name:e.city,aqi:parseFloat(e.aqi.toFixed(2)),updatedAt:new Date}},R=function(e,t){return t?t.length>=g["d"]?[].concat(Object(H["a"])(t.slice(1,t.length)),[e]):[].concat(Object(H["a"])(t),[e]):[e]},M=Object(b["a"])({state:q(),getters:{allCities:function(e){return Object.values(e.cities)},allCityNames:function(e){return Object.keys(e.cities)},allCitiesSortedByName:function(e){return Object.values(e.cities).sort(m["b"].byAqiValue)},cityHistory:function(e){return function(t){return e.cityHistories[t]||[]}},cityHistoryWithFormattedDateString:function(e){return function(t){return e.cityHistories[t]?e.cityHistories[t].map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{updatedAtHHmmss:m["a"].getTimeInHHmmss(e.updatedAt),updatedAtEpoch:e.updatedAt.valueOf()})})):[]}}},mutations:{updateCity:function(e,t){e.cities[t.name]=t},updateCityHistory:function(e,t){e.cities[t.city]=t.data},updateCities:function(e,t){e.cities=Object(f["a"])(Object(f["a"])({},e.cities),t)},updateCityHistories:function(e,t){e.cityHistories=Object(f["a"])(Object(f["a"])({},e.cityHistories),t)},updateSelectedCity:function(e,t){e.selectedCity=t},updateSelectedCityLatestEntry:function(e,t){e.selectedCityLatestEntry=t},addToComparisonList:function(e,t){e.comparisonList.add(t)},clearComparisonList:function(e){e.comparisonList.clear()}},actions:{updateCities:function(e,t){var n=e.state,a=e.commit;if(Array.isArray(t)){var r,c={},i={},o=Object(L["a"])(t);try{for(o.s();!(r=o.n()).done;){var s=r.value,u=I(s);c[s.city]=u,i[s.city]=R({aqi:u.aqi,updatedAt:u.updatedAt},n.cityHistories[s.city]),n.selectedCity===s.city&&a("updateSelectedCityLatestEntry",u)}}catch(d){o.e(d)}finally{o.f()}a("updateCities",c),a("updateCityHistories",i)}},updateSelectedCity:function(e,t){var n=e.commit;n("updateSelectedCity",t)},addToComparisonList:function(e,t){var n=e.commit;n("addToComparisonList",t)},clearComparisonList:function(e){var t=e.commit;t("clearComparisonList")}}}),P=(n("098b"),n("e1ae"),n("4121"),n("bddf"),n("7e79"),n("6b8c")),F=n("5b2c"),N=n("6f85"),x=n("1f80"),V=n("bb57"),B=n("4344"),U=n("9899"),J=n("4147"),Y=Object(a["d"])(u);Y.use(M),Y.use(D),Y.component("DataTable",F["a"]),Y.component("Column",N["a"]),Y.component("ColumnGroup",x["a"]),Y.component("Button",V["a"]),Y.component("Chart",B["a"]),Y.component("Card",U["a"]),Y.component("MultiSelect",J["a"]),Y.directive("tooltip",P["a"]),Y.mount("#app");var G="wss://city-ws.herokuapp.com",$=new WebSocket(G,["websocket"]);$.addEventListener("message",(function(e){"string"===typeof e.data&&M.dispatch("updateCities",JSON.parse(e.data))}))},"67fd":function(e,t,n){},"6df8":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=20,r=5,c={GOOD:"#5DA84F",SATISFACTORY:"#A3C853",MODERATE:"#FCEE33",POOR:"#F09C34",VERY_POOR:"#E63F36",SEVERE:"#AF2E27"},i={GOOD:"Good",SATISFACTORY:"Satisfactory",MODERATE:"Moderate",POOR:"Poor",VERY_POOR:"Very Poor",SEVERE:"Severe"}},"7e79":function(e,t,n){},8566:function(e,t,n){"use strict";n("3810")},8992:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));n("b0c0");var a=n("6df8"),r=n("1315"),c=function(e){return e>=401?"SEVERE":e>=301?"VERY_POOR":e>=201?"POOR":e>=101?"MODERATE":e>=51?"SATISFACTORY":e>=0?"GOOD":null},i=function(e){var t=c(e);return null===t?null:a["b"][t]},o=function(e,t){var n=1e3,a=6e4,c=60*a,i=e-t;return i<n?"A second ago":i<a?Math.round(i/n)+" seconds ago":i<c?"A few minutes ago":r["DateTime"].fromMillis(t).toFormat("HH:mm")},s={getTimeInHHmmss:function(e){return r["DateTime"].fromJSDate(e).toFormat("HH:mm:ss")}},u={byName:function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n>a?1:n<a?-1:0},byAqiValue:function(e,t){return e.aqi>t.aqi?1:e.aqi<t.aqi?-1:0}}},c09e:function(e,t,n){"use strict";n("01a7")}});
//# sourceMappingURL=app.3579cdff.js.map