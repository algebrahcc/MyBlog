import{_ as p}from "./app-16adca9e.js";function v(c={}){const{immediate:d=!1,onNeedRefresh:w,onOfflineReady:i,onRegistered:r,onRegisteredSW:a,onRegisterError:s}=c;let t,o;const l=async(n=!0)=>{await o};async function _(){if("serviceWorker"in navigator){const{Workbox:n}=await p(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);t=new n("/sw.js",{scope:"/",type:"classic"}),t.addEventListener("activated", e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),t.addEventListener("installed", e=>{e.isUpdate||i==null||i()}),t.register({immediate:d}).then(e=>{a?a("/sw.js",e):r==null||r(e)}).catch(e=>{s==null||s(e)})}}return o=_(),l}export{v as registerSW};
