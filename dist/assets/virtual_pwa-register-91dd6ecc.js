import{_ as g}from"./app-fff56513.js";function f(c={}){const{immediate:d=!1,onNeedRefresh:p,onOfflineReady:i,onRegistered:r,onRegisteredSW:a,onRegisterError:s}=c;let t,o;const l=async(n=!0)=>{await o};async function _(){if("serviceWorker"in navigator){const{Workbox:n}=await g(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);t=new n("/MyBlog/sw.js",{scope:"/MyBlog/",type:"classic"}),t.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),t.addEventListener("installed",e=>{e.isUpdate||i==null||i()}),t.register({immediate:d}).then(e=>{a?a("/MyBlog/sw.js",e):r==null||r(e)}).catch(e=>{s==null||s(e)})}}return o=_(),l}export{f as registerSW};
