if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>i(e,l),u={module:{uri:l},exports:o,require:a};s[l]=Promise.all(r.map((e=>u[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"6f448b0658a4848b1269d73c871eca8b"},{url:"assets/_...all_-ebdc6176.js",revision:null},{url:"assets/_name_-3f3885d8.js",revision:null},{url:"assets/404-7f8bebde.js",revision:null},{url:"assets/about-71d7b9b6.js",revision:null},{url:"assets/app-fff56513.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/home-bf5fda59.js",revision:null},{url:"assets/index-618b2fb0.css",revision:null},{url:"assets/ja-d59f836d.js",revision:null},{url:"assets/README-031d17b3.js",revision:null},{url:"assets/virtual_pwa-register-91dd6ecc.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"index.html",revision:"55644006616e7dfab5cad8fb5df99c73"},{url:"readme.html",revision:"bc6035794dcfab176bea11e37c5f62d5"},{url:"favicon.svg",revision:"8291bb677e3845e641f1861c65e7fbd7"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"2c2f4d966a4a6821a7efe25ba33f4e21"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
