if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),l={module:{uri:c},exports:r,require:t};s[c]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(d(...e),r)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html-BaJGvJR_.js",revision:"17df1fbadc81178f9623d1ac7c69081d"},{url:"assets/1.html-StXse-fJ.js",revision:"e0ae586948db32f46fe7c24c6258c761"},{url:"assets/2.html-BeVtrVQi.js",revision:"f10fa9d184568b10572450e6cda6ae0f"},{url:"assets/2.html-Dn7jaAua.js",revision:"5f495f5a3ecde3a8bc804871c8e865a5"},{url:"assets/3.html-Bh6wdzXY.js",revision:"95e65e8e00254296ae384b769fdf47ee"},{url:"assets/3.html-c9mwBdpS.js",revision:"b8f029fe58237f15209b0682d80fd0aa"},{url:"assets/4.html-D1l_HTLi.js",revision:"7d0a2a2b48fe8093d36a3a6cdd00d332"},{url:"assets/4.html-DFCDcHyH.js",revision:"2333d9e09cb204e04d18bfe48a1fd4da"},{url:"assets/404.html-CZd6Kzce.js",revision:"44d86784bb92080a21e717ceff47f909"},{url:"assets/app-DAG0m6jX.js",revision:"46ec407e80a2317bcd66b3d96d20bd98"},{url:"assets/browser-ryVndGA8.js",revision:"1ad57d46116f58fd4e61203a386767d2"},{url:"assets/cherry.html-DMPMaJwF.js",revision:"28aa5f884a4502ba5fd024c2d2ab052c"},{url:"assets/component-snFOq-RG.js",revision:"e89912fd1b86b88296a7ecfc6cdc52a8"},{url:"assets/disable.html-hEBK0WvL.js",revision:"a023909bf88ceb228ee121f82f96364f"},{url:"assets/dragonfruit.html-VTCK4AWx.js",revision:"182990ce5e096fa5358fe587ba96079a"},{url:"assets/encrypt.html-Bh4b0tSQ.js",revision:"962187dff27d8a88b1d4074984e6dc5a"},{url:"assets/icon/preface.svg",revision:"f837d2dcc35eae1cefe0ae7487116bd1"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-B1nBf8YN.js",revision:"9a9715abdc8b36823a31b332b229a0ed"},{url:"assets/index.html-Bh6MgsRt.js",revision:"87608f7ca633403b48b88a10ab6bed23"},{url:"assets/index.html-BLYWRvU_.js",revision:"8ff871a087171f598e8bb429fca63b65"},{url:"assets/index.html-BqVeVABo.js",revision:"09233a1959b492b4bb9533747a51c2b8"},{url:"assets/index.html-Bz_WVx9Y.js",revision:"de9767a56b05afcd81017cede990e635"},{url:"assets/index.html-C1hKJvxa.js",revision:"cc38cfb069ff7ad820ec028ab28a603a"},{url:"assets/index.html-C1UrLoir.js",revision:"e0554c7a323bca4bec5d6a9f0dd39021"},{url:"assets/index.html-C72CvN2F.js",revision:"cbbf24c93dfbe63f2c09e7c375297822"},{url:"assets/index.html-CA_194By.js",revision:"dfcba89b3c2f36a3c1e86cc4e8677fd7"},{url:"assets/index.html-CCWc1_1u.js",revision:"952c8936cc51054adae0eedb0b328775"},{url:"assets/index.html-Cf4a91Su.js",revision:"51d3d73cf289c58c64a90402c4b88c76"},{url:"assets/index.html-Cjzwx9Vr.js",revision:"f040c75ff672673185883a7418904afe"},{url:"assets/index.html-CLbNMntO.js",revision:"79ffc0441b266ab18ea7de1a83caa1bb"},{url:"assets/index.html-CLIvi_j5.js",revision:"a356a71a61723f59d34c8677fd8fa992"},{url:"assets/index.html-CmEdPxoe.js",revision:"fd6c566d28548219542f7607eefb8643"},{url:"assets/index.html-CSi-nrnQ.js",revision:"518b9d550ab5330b47f6233f1a09ab0a"},{url:"assets/index.html-CzvvwfWB.js",revision:"8c52da2a5b4d68858a4cd535b79cac30"},{url:"assets/index.html-D-xwPQ6U.js",revision:"572ed18bec5c50230bd82277a40a3aca"},{url:"assets/index.html-Dd2oHOwI.js",revision:"66717250a5dd3c6640c98e6aee0e23c1"},{url:"assets/index.html-DDzbAwLy.js",revision:"9e915e600abb2db48c44b3a2d7b226bd"},{url:"assets/index.html-DG8bk34Y.js",revision:"bd437076c8af8ce1f00c3a020d9c0efa"},{url:"assets/index.html-DKBHCN36.js",revision:"7143e317d6ebfb8fe96b438154359378"},{url:"assets/index.html-Dofu3swd.js",revision:"bfc4d1d45dbbf48c0f8c83e826f87a73"},{url:"assets/index.html-DQA9Gw-F.js",revision:"a6437167326c4f64aff84d187ef6aa28"},{url:"assets/index.html-Dv5KPcek.js",revision:"bdcdc677b713bada8e6335d59149194e"},{url:"assets/index.html-DzRers6X.js",revision:"94adde0541e96e3928b26ea1d991ba52"},{url:"assets/index.html-KvLWPHe8.js",revision:"036ce322896fd48f8cad1688398a7e85"},{url:"assets/index.html-O10Z54oR.js",revision:"896ea13b1d4ffee75a4bfa83cb69fb81"},{url:"assets/index.html-ODXN1TYi.js",revision:"81fa84650ecc680ed2402f6113c8f074"},{url:"assets/index.html-R5HCCVc5.js",revision:"1cee38445c9b1a4725c512f644727871"},{url:"assets/index.html-u5pfE4SP.js",revision:"14c379c71a9c2ff76742dcf9356afec3"},{url:"assets/index.html-YCrl0WCx.js",revision:"5731443f94929f3b780b2abca9caa010"},{url:"assets/index.html-zWFH3KXj.js",revision:"4b490ea2a7aed1f33f8e65778a1ad20d"},{url:"assets/intro.html-kdXOl2A2.js",revision:"b55f32ce6b033181877dba53c2c150e1"},{url:"assets/layout.html-DD5Ofxc5.js",revision:"ebbb891e49357b2d9c9acdbd616dbd59"},{url:"assets/markdown.html-BYgU1eAU.js",revision:"5a5ad6299494022cbbf4e3220cfeb064"},{url:"assets/norm.html-CT-1Sgjy.js",revision:"a34b750049529be429078a2ce61c15d1"},{url:"assets/page.html-CCDQYBgG.js",revision:"ac96148e48f1e01584a4178be68cb4e1"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/portfolio.html-CVB80u9V.js",revision:"716043d46679324d8339f15220fa30dd"},{url:"assets/strawberry.html-DQToAwcL.js",revision:"43fc843db8738cc29b9a051e8ea43639"},{url:"assets/style-DpHU-k2f.css",revision:"489d15ddd3a2305f2a1eac9e91784a80"},{url:"assets/tomato.html-D2CXzQu4.js",revision:"092a5d6be3c6c845e121a937981d73c0"},{url:"assets/update.html-C_qnde9b.js",revision:"b2b28757092179ac2a318137c899703a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"77a54b98d728a198f490b67c2ea60020"},{url:"article/index.html",revision:"11ee9f6acbaa5581383826b22de1990c"},{url:"category/index.html",revision:"ee08158891c1a6f07b0574dc3cb4d5dd"},{url:"category/使用指南/index.html",revision:"302dda8b483814f771a837c03442e909"},{url:"category/指南/index.html",revision:"6d3c359d9a60ff8af980ccf12c6adf22"},{url:"category/樱桃/index.html",revision:"0a3253bd4e7a2c943c3234db3522e185"},{url:"category/水果/index.html",revision:"05ae3662898ef321a06ab91f1a3e3408"},{url:"category/火龙果/index.html",revision:"2eca334af1125c4b753caf3f36921d9f"},{url:"category/苹果/index.html",revision:"027476124e4a690e75c233850a1ff4a7"},{url:"category/草莓/index.html",revision:"a4cb00510fec1c8e3f524c938ad788b4"},{url:"category/蔬菜/index.html",revision:"eb6d2d71ebc0ec8a49eac2f7df327917"},{url:"category/香蕉/index.html",revision:"ba27c939d83d5fc62e6fcd370d0a6d15"},{url:"demo/disable.html",revision:"26ed58ca7be0ef95b81549063c32a892"},{url:"demo/encrypt.html",revision:"bc6dfffa61d79a95f451883dfc79fbe3"},{url:"demo/index.html",revision:"dbf03946c1467f748afd0e4b384349c6"},{url:"demo/layout.html",revision:"c8b2a2d148d3c35916f6e86652b3686b"},{url:"demo/markdown.html",revision:"958e70639386158a347834d754bcda1c"},{url:"demo/page.html",revision:"a8984d9493a7399150876d3e72450fe1"},{url:"index.html",revision:"9333abae3513be9f9db6c051a3de659c"},{url:"intro.html",revision:"405149abf8af6587e718f028e74e122a"},{url:"portfolio.html",revision:"e0c3fcaa0169ca1ce5144b2df584ea2c"},{url:"posts/apple/1.html",revision:"44de394f2153b81799ec28efa56c957a"},{url:"posts/apple/2.html",revision:"ab29b36715bdc3f2ba0d97668ee6bcd5"},{url:"posts/apple/3.html",revision:"e98ed6a8c39b15a3b973511eed0206fc"},{url:"posts/apple/4.html",revision:"df3037a6913aa6e6665fadc5b4cde67c"},{url:"posts/apple/index.html",revision:"8d60ed15b19215828468a14601b1cc38"},{url:"posts/banana/1.html",revision:"962dc99bbb14513a1f666f493599709d"},{url:"posts/banana/2.html",revision:"809cca2c3cba0e854209df5d7e61848b"},{url:"posts/banana/3.html",revision:"2b97fb262addfd9759f42c348593707f"},{url:"posts/banana/4.html",revision:"d4a54edd979e4a62dd62415439c93f82"},{url:"posts/banana/index.html",revision:"c6fb488867e55d976b4d67995acd5ee6"},{url:"posts/cherry.html",revision:"97e1dc1840bf8212d3157ced24c5c80d"},{url:"posts/dragonfruit.html",revision:"e9c3c7cbcf8fee6b5bbfa404f3263ccd"},{url:"posts/index.html",revision:"f71b37d608f3e9d05b80615f3246f908"},{url:"posts/strawberry.html",revision:"746c123d119c8c01b7fc14db3273728c"},{url:"posts/tomato.html",revision:"35153cc58d3137cb603c50c152d742ee"},{url:"preface/index.html",revision:"a7f4f9cad5a7fd2281fbbb49f1c9da01"},{url:"preface/norm.html",revision:"95b9ee926155982da1fa860def7ccc96"},{url:"star/index.html",revision:"1f81c7f9f5224a55f4c7754e9dae4549"},{url:"tag/index.html",revision:"53fbbaf103aa30f35134ca979dd99817"},{url:"tag/markdown/index.html",revision:"05000ebf446f46f4f59306108ab786e9"},{url:"tag/使用指南/index.html",revision:"a0ac3fe78292a2b03f4bde39e5be41b1"},{url:"tag/加密/index.html",revision:"bc8315f94acfe3f087fb6076a6bbfe35"},{url:"tag/圆/index.html",revision:"3102b7fb6749c231806023e89359ebbe"},{url:"tag/大/index.html",revision:"b1f5783fd87ff16c0291a1056a67aa99"},{url:"tag/小/index.html",revision:"644e302deeb54df2ffd1a25a14c7c0a1"},{url:"tag/布局/index.html",revision:"befb4de9e6a31abb30abf4caec48d777"},{url:"tag/弯曲的/index.html",revision:"2e0443474fce8159358536d7bbe8c6a0"},{url:"tag/禁用/index.html",revision:"c1747ea688648618dc8eefbbda3425a8"},{url:"tag/红/index.html",revision:"0b527f10f159c887d7057bc81a4807c8"},{url:"tag/长/index.html",revision:"a4757a56134fab856bc9696c8f2a4665"},{url:"tag/页面配置/index.html",revision:"7c3b3c7a1a2c80a534b960a6e5cf970e"},{url:"tag/黄/index.html",revision:"b326cbb9116c2c33ee2272624a6c2aaa"},{url:"timeline/index.html",revision:"9a3c81d3b3464affccd7719297b1a7fb"},{url:"update.html",revision:"6163bd0bccc3245c039e0b9dd4fdec35"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/cover1.jpg",revision:"1a661f8cca025ca27a846090c11b86ad"},{url:"assets/images/cover2.jpg",revision:"b228edd2b9054c83cb464d6b1ed8a4ae"},{url:"assets/images/cover3.jpg",revision:"88358b4d02ef94e59f1f563f38a94fad"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
