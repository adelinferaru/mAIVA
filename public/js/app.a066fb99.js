(()=>{"use strict";var e={6618:(e,t,r)=>{r(8964),r(702);var o=r(1957),n=r(213),i=r(499),a=r(9835);function s(e,t,r,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const l=(0,a.aZ)({name:"App"});var c=r(1639);const u=(0,c.Z)(l,[["render",s]]),p=u;var f=r(3340),d=r(1809);const h=(0,f.h)((()=>{const e=(0,d.WB)();return e}));var v=r(8339);const g=[{path:"/",component:()=>Promise.all([r.e(736),r.e(846)]).then(r.bind(r,8846)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(296)]).then(r.bind(r,6296))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],b=g,m=(0,f.BC)((function(){const e=v.PO,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("/")});return t}));async function y(e,t){const r=e(p);r.use(n.Z,t);const o="function"===typeof h?await h({}):h;r.use(o);const a=(0,i.Xl)("function"===typeof m?await m({store:o}):m);return o.use((({store:e})=>{e.router=a})),{app:r,store:o,router:a}}const w={config:{}},S="/";async function j({app:e,router:t,store:r},o){let n=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:a,urlPath:s,publicPath:S})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}y(o.ri,w).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,6244))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));j(e,r)}))}))},6244:(e,t,r)=>{r.r(t),r.d(t,{api:()=>u,axios:()=>i(),default:()=>p});var o=r(3340),n=r(9981),i=r.n(n),a=(r(8964),r(1809)),s=r(8967),l=r.n(s);const c=(0,a.Q_)("settings",{state:()=>({config:{}}),getters:{},actions:{getApiBaseUrl(){var e,t;return null!==(e=null===(t=this.config)||void 0===t?void 0:t.API_BASE_URL)&&void 0!==e?e:null},getCurrentScriptUrl(){var e;null!==(e=this.config)&&void 0!==e&&e.currentScriptUrl;let t=l()().src;return console.log("currentScript = ",t),t?(-1!==t.indexOf("?")&&(t=t.replace(/\?.*$/g,"")),this.saveSetting("config",{currentScriptUrl:t.replace("js/app.js","").replace("/app.js","")}),console.log("currentScriptUrl = ",this.config.currentScriptUrl),this.config.currentScriptUrl):null},saveSetting(e,t){if(void 0!==this[e])if(console.log(e," is instanceof ",this[e]),"object"===typeof this[e]){if("object"===typeof t)for(const r in t)this[e][r]=t[r]}else this[e]=t;else this[e]=t},async retrieveSettings(){var e;const t=await fetch(this.getCurrentScriptUrl()+"/config.json"),r=await t.json();await this.saveSetting("config",r),null!==(e=this.config)&&void 0!==e&&e.API_BASE_URL&&await fetch(this.config.API_BASE_URL+"/sanctum/csrf-cookie",{credentials:"include"})}}});i().defaults.withCredentials=!0;let u=i();const p=(0,o.xr)((async({app:e,store:t})=>{const r=c();await r.retrieveSettings(),console.log("axios = ",JSON.parse(JSON.stringify(r.config))),u=i().create({baseURL:r.getApiBaseUrl()+"/api"}),console.log("axios = ",r.getApiBaseUrl()+"/api"),e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=u}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,i)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){for(var[o,n,i]=e[u],s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{296:"8936b745",846:"031592d1",862:"7aa248f7"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"29ff1932"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={};r.l=(t,o,n,i)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==t){a=u;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=t),e[t]=[o];var p=(r,o)=>{a.onerror=a.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=i);var a=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};r.l(a,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[a,s,l]=o,c=0;if(a.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(o);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},o=globalThis["webpackChunk"]=globalThis["webpackChunk"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(6618)));o=r.O(o)})();