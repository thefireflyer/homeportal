if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const i=e=>n(e,c),r={module:{uri:c},exports:o,require:i};s[c]=Promise.all(t.map((e=>r[e]||i(e)))).then((e=>(a(...e),o)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/homeportal/_next/static/chunks/framework-6e4ba497ae0c8a3f.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/chunks/main-b5ba77ff029b1cc7.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/chunks/pages/404-b5346abd7cde9d35.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/chunks/pages/_app-9cd1d19dd7237c4c.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/chunks/pages/index-6d3dfcecaf49c4e6.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/chunks/webpack-f5c41e408c5f6249.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/css/fa055aa0964aaabb.css",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/css/fcb3006b4ee21b22.css",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/pSQIboJVI-5GT_nLLO2hc/_buildManifest.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/pSQIboJVI-5GT_nLLO2hc/_middlewareManifest.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/_next/static/pSQIboJVI-5GT_nLLO2hc/_ssgManifest.js",revision:"pSQIboJVI-5GT_nLLO2hc"},{url:"/homeportal/bg.mp4",revision:"a79ce986d0b9c747e25b2cb96565bb9c"},{url:"/homeportal/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/homeportal/icon.png",revision:"7661903fbb4aca94419da224c71c308b"},{url:"/homeportal/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/homeportal",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
