if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let n={};const r=e=>i(e,c),f={module:{uri:c},exports:n,require:r};a[c]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-44c90a21"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/112.357edbae1e37592a.js",revision:"357edbae1e37592a"},{url:"/_next/static/chunks/1324.da3991a89d765333.js",revision:"da3991a89d765333"},{url:"/_next/static/chunks/1612.95d2d9c4d4a35f86.js",revision:"95d2d9c4d4a35f86"},{url:"/_next/static/chunks/166.7c0fcbea9c6f40fb.js",revision:"7c0fcbea9c6f40fb"},{url:"/_next/static/chunks/2026.f6b6cf82f0b4ae7e.js",revision:"f6b6cf82f0b4ae7e"},{url:"/_next/static/chunks/2032.a87587ffc8690672.js",revision:"a87587ffc8690672"},{url:"/_next/static/chunks/2060.122a768e295aed18.js",revision:"122a768e295aed18"},{url:"/_next/static/chunks/230.dfd2f5b427aff0f0.js",revision:"dfd2f5b427aff0f0"},{url:"/_next/static/chunks/2447.d7487e9b4d34212b.js",revision:"d7487e9b4d34212b"},{url:"/_next/static/chunks/2517.b1b6a54223d10f82.js",revision:"b1b6a54223d10f82"},{url:"/_next/static/chunks/2586.6cd02262d8d303f5.js",revision:"6cd02262d8d303f5"},{url:"/_next/static/chunks/2876.0d046c8d63b077c3.js",revision:"0d046c8d63b077c3"},{url:"/_next/static/chunks/2969.e73b3e8e05c43a0d.js",revision:"e73b3e8e05c43a0d"},{url:"/_next/static/chunks/3127.96c2fd29699144f2.js",revision:"96c2fd29699144f2"},{url:"/_next/static/chunks/3457.f1c86a962e3434d0.js",revision:"f1c86a962e3434d0"},{url:"/_next/static/chunks/352.9393d6fb8790cef0.js",revision:"9393d6fb8790cef0"},{url:"/_next/static/chunks/3539.c89feaf353e01044.js",revision:"c89feaf353e01044"},{url:"/_next/static/chunks/3758-0e3db4550712c318.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/3888.4541946110400860.js",revision:"4541946110400860"},{url:"/_next/static/chunks/418.daf2345e7cfccf10.js",revision:"daf2345e7cfccf10"},{url:"/_next/static/chunks/431.43c6ac547e8d5d42.js",revision:"43c6ac547e8d5d42"},{url:"/_next/static/chunks/4866.37ba7b87b7b070b5.js",revision:"37ba7b87b7b070b5"},{url:"/_next/static/chunks/4b1a69f1-3ac97c383530cc7d.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/5353.474208913f6cfc5d.js",revision:"474208913f6cfc5d"},{url:"/_next/static/chunks/5545.47ad60e4fc95f469.js",revision:"47ad60e4fc95f469"},{url:"/_next/static/chunks/581.9890b07646cfc93a.js",revision:"9890b07646cfc93a"},{url:"/_next/static/chunks/5855.cea099e91fc9b690.js",revision:"cea099e91fc9b690"},{url:"/_next/static/chunks/602dbae6.1984a4f0cef5908c.js",revision:"1984a4f0cef5908c"},{url:"/_next/static/chunks/6237.bd90afd43fbb3c56.js",revision:"bd90afd43fbb3c56"},{url:"/_next/static/chunks/638.59078527fad8fbb9.js",revision:"59078527fad8fbb9"},{url:"/_next/static/chunks/6511.721d92c2b9e86823.js",revision:"721d92c2b9e86823"},{url:"/_next/static/chunks/6564.185dc099697a18bf.js",revision:"185dc099697a18bf"},{url:"/_next/static/chunks/6572.d80785ac6558f039.js",revision:"d80785ac6558f039"},{url:"/_next/static/chunks/6903.2e5792f76978444f.js",revision:"2e5792f76978444f"},{url:"/_next/static/chunks/6945.687091550667a4b8.js",revision:"687091550667a4b8"},{url:"/_next/static/chunks/723.985ce38094801f8c.js",revision:"985ce38094801f8c"},{url:"/_next/static/chunks/7603.b22de8fbf23dea28.js",revision:"b22de8fbf23dea28"},{url:"/_next/static/chunks/7946.538d9921f666ad9d.js",revision:"538d9921f666ad9d"},{url:"/_next/static/chunks/8003.1a7427985497a75c.js",revision:"1a7427985497a75c"},{url:"/_next/static/chunks/8563-938948e2317c0876.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/8916.d445749e80cdc92b.js",revision:"d445749e80cdc92b"},{url:"/_next/static/chunks/8b5b427a.4638c1e3e5285a6c.js",revision:"4638c1e3e5285a6c"},{url:"/_next/static/chunks/90542734.536484d7b956ca0c.js",revision:"536484d7b956ca0c"},{url:"/_next/static/chunks/91dbc596.c7c8b19b0ec6dc35.js",revision:"c7c8b19b0ec6dc35"},{url:"/_next/static/chunks/9510.441a3d1c787a0aad.js",revision:"441a3d1c787a0aad"},{url:"/_next/static/chunks/9631.3520e5e626bdb3cf.js",revision:"3520e5e626bdb3cf"},{url:"/_next/static/chunks/app/_not-found-5a7f82266dee403d.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/app/layout-1a9d286ee55642e0.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/app/page-0d1e74b19e5838e7.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/bf6a786c-e001fe5bfd7eaa68.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/d3ac728e.d91b426a5f72422f.js",revision:"d91b426a5f72422f"},{url:"/_next/static/chunks/fcfb803e.557778422ade9dc9.js",revision:"557778422ade9dc9"},{url:"/_next/static/chunks/framework-638abc5ad5ea33cc.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/main-4f839120dc42d0ce.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/main-app-c8ff2579e18a7289.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/pages/_app-0a6f9986ee298e67.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/pages/_error-77acd5d276fadc61.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-95cecce1cd528141.js",revision:"sf7JqK1OQiHeLm7JcBlGW"},{url:"/_next/static/css/07f730e4f4808c70.css",revision:"07f730e4f4808c70"},{url:"/_next/static/css/1dae5fc9ec9efac7.css",revision:"1dae5fc9ec9efac7"},{url:"/_next/static/css/228107db14ee9b97.css",revision:"228107db14ee9b97"},{url:"/_next/static/css/6d71ea0e90c1cda4.css",revision:"6d71ea0e90c1cda4"},{url:"/_next/static/css/a74908935c53f4e7.css",revision:"a74908935c53f4e7"},{url:"/_next/static/css/dd4de24b618096fb.css",revision:"dd4de24b618096fb"},{url:"/_next/static/css/f2c285b6c43f087a.css",revision:"f2c285b6c43f087a"},{url:"/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"1608a09b"},{url:"/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"4aafdb68"},{url:"/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"a79f1c31"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"b6770918"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"cce5b8ec"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"ec17d132"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"07ef19e7"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"55fac258"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"dad44a7f"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"9f256b85"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"b18f59e1"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"d42a5579"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"7c187121"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"d3c882a6"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"ed38e79f"},{url:"/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"b74a1a8b"},{url:"/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"c3fb5ac2"},{url:"/_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"d181c465"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"6f2bb1df"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"70d8b0a5"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"e3f82f9d"},{url:"/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"47373d1e"},{url:"/_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"8916142b"},{url:"/_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"9024d815"},{url:"/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"0462f03b"},{url:"/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"7f51fe03"},{url:"/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"b7f8fe9b"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"572d331f"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"a879cf83"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"f1035d8d"},{url:"/_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"5295ba48"},{url:"/_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"939bc644"},{url:"/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"f28c23ac"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"8c5b5494"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"94e1e8dc"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"bf59d231"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"3b1e59b3"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"7c9bc82b"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"b4c20c84"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"74048478"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"ba21ed5f"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"d4d7ba48"},{url:"/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"03e9641d"},{url:"/_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"07505710"},{url:"/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"fe9cbbe1"},{url:"/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"e1e279cb"},{url:"/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"eae34984"},{url:"/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"fabc004a"},{url:"/_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"57727022"},{url:"/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"5916a24f"},{url:"/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"d6b476ec"},{url:"/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"9acaf01c"},{url:"/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"a144ef58"},{url:"/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"b4230e7e"},{url:"/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"10d95fd3"},{url:"/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"7a996c9d"},{url:"/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"fbccdabe"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"6258592b"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"a8709e36"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"d97aaf4a"},{url:"/_next/static/media/bot.0c800005.png",revision:"c48250b57264d738aebcc50ae0458a0b"},{url:"/_next/static/media/chatgpt.1956a04f.png",revision:"61b9f706b1d1643af222d66c7971a074"},{url:"/_next/static/sf7JqK1OQiHeLm7JcBlGW/_buildManifest.js",revision:"7325914526b5f8f85ecc782caa8e2afc"},{url:"/_next/static/sf7JqK1OQiHeLm7JcBlGW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"6b788c40a7854b7398b63f65c609c195"},{url:"/android-chrome-512x512.png",revision:"3cc0a59259c7cd2ed5aa4cbb14360681"},{url:"/apple-touch-icon.png",revision:"8d55c260cb3865063885538f05d1fc79"},{url:"/favicon-16x16.png",revision:"0d80917dba74a8b71e420e8f5eaf84c9"},{url:"/favicon-32x32.png",revision:"3f885b4cd3fc7985ae4a9887a86df292"},{url:"/favicon.ico",revision:"7306f086ae98c9a17300f6ef740ee6a8"},{url:"/macos.png",revision:"3cc0a59259c7cd2ed5aa4cbb14360681"},{url:"/prompts.json",revision:"38797f76ab3a2b9f44bb9ffdd0774ea8"},{url:"/robots.txt",revision:"69d3f01e3bea60d87abd8c11668ad5e7"},{url:"/serviceWorker.js",revision:"aaf623ea81ca691c6a0669e75bfd4820"},{url:"/serviceWorkerRegister.js",revision:"cf8f42537d2fe275115940cd93b4e869"},{url:"/site.webmanifest",revision:"9bd8f6aaa8b56207a778ce56a299f571"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
