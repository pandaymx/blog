if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>a(e,c),t={module:{uri:c},exports:r,require:f};s[c]=Promise.all(i.map((e=>t[e]||f(e)))).then((e=>(d(...e),r)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html-Bfou6_37.js",revision:"4a58976fc330508e81bb1c2d6fd6a4f7"},{url:"assets/1.html-mkbempG0.js",revision:"cfba496ad352a32d62975fec8a1a8f55"},{url:"assets/2.html-D7DJ1tVf.js",revision:"d41852bb88f0d337f1e97d7fd4b0bdbf"},{url:"assets/2.html-DZrDy6ej.js",revision:"3f22f39888a6ef9f8b7073b127b02c73"},{url:"assets/3.html-CD1eQ6-z.js",revision:"327bfba08d1e1c5bf46cdc7bfa4b32a1"},{url:"assets/3.html-CQuhSUe_.js",revision:"ebaa684d153905d94ea1a72cec076cbb"},{url:"assets/4.html-CaPYVhto.js",revision:"7ebacd2532ef9666372f95d63cb02f2c"},{url:"assets/4.html-Dne5ZnBN.js",revision:"85a2ea67488eea149c7c67339a501dec"},{url:"assets/404.html-CYAobc9D.js",revision:"13edb6eb3b2a14e59538cec32393d674"},{url:"assets/app-CPqx8sm4.js",revision:"1053c8ce988f6af5d50d4cdbbf05023c"},{url:"assets/browser-ryVndGA8.js",revision:"1ad57d46116f58fd4e61203a386767d2"},{url:"assets/cherry.html-BzRtLZ98.js",revision:"98a71914c14c8b2f2a0a1b4aef4f1329"},{url:"assets/component-C1DM9prD.js",revision:"8cbfe2ea53ed7b3a4c8238cff9c7277c"},{url:"assets/disable.html-CSLh0D5Z.js",revision:"01e2ca8ccfa03605bbd05cf168f1c0cc"},{url:"assets/dragonfruit.html-DKiLMSit.js",revision:"328012d1174db0e609a21e99272bfb69"},{url:"assets/encrypt.html-DYlsz5hR.js",revision:"a3a628751053c0afea2220f66ef1ca0a"},{url:"assets/icon/preface.svg",revision:"f837d2dcc35eae1cefe0ae7487116bd1"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html--oxx7a1z.js",revision:"25b94576d5cb1c71a7d75319dcc12c3f"},{url:"assets/index.html-1Y9AJM9U.js",revision:"429186afac2888afcb019b2f6006be24"},{url:"assets/index.html-B_qfPho5.js",revision:"e0d0aefe3d6ea4ffd10fbfa5d7470ba2"},{url:"assets/index.html-B_xzgr5i.js",revision:"7cfe3c3a36fc38721c50350671cafb61"},{url:"assets/index.html-B4aOAxrr.js",revision:"1c1360952df8c0dfd5d4e23ea11aab58"},{url:"assets/index.html-B4bCSaPI.js",revision:"b07e2a6a0c21106373583b23bb8c422e"},{url:"assets/index.html-Be-N27MC.js",revision:"c0bac7b956f5b035eeadad968484e604"},{url:"assets/index.html-BL9d05z7.js",revision:"87337cd7330340b1de478e49fe709a20"},{url:"assets/index.html-BSLJJtys.js",revision:"e4e4f75d644ad754502e00b5e362b872"},{url:"assets/index.html-BVZjkdBh.js",revision:"a9efc28f57444c119c8b124d3f458799"},{url:"assets/index.html-Bw0DlNyU.js",revision:"a8c4543c4154fac474afa20d4780a0a5"},{url:"assets/index.html-CnEU-_Hv.js",revision:"6b8fb367ad24b09d79d3bccda94944f5"},{url:"assets/index.html-Cof5sLcL.js",revision:"59dc05ac089b08f6fc515cbee9506eec"},{url:"assets/index.html-CRNStotI.js",revision:"3993afee6761b97853aa560eddce20d1"},{url:"assets/index.html-CtglbkTO.js",revision:"ecdbd9ccca5a70bd28107d075eebbbd1"},{url:"assets/index.html-CYzGByYF.js",revision:"397d8ea8c6b5eb9d53adfe3822fb9b53"},{url:"assets/index.html-D_qPG0iz.js",revision:"b892d80a4d5eb15d4ce28b8e7f46492a"},{url:"assets/index.html-D13so_HA.js",revision:"02b93c26898c07993481c59d981f9a19"},{url:"assets/index.html-DibFoXDU.js",revision:"26047ce9db420bdc8a9ac30bbb72ac39"},{url:"assets/index.html-DmUStfDQ.js",revision:"ed49f6e1c60ffe83ab617ab723fb4e81"},{url:"assets/index.html-DqXgEuAs.js",revision:"5410b32961692f34cc423af9d516d561"},{url:"assets/index.html-DUCmEnSV.js",revision:"f63a95dacee4e617f988d49c976ac0e1"},{url:"assets/index.html-DX9_c8YD.js",revision:"9f4c6d7842d8e4eaacbe96f30bc392c0"},{url:"assets/index.html-DYg09QVa.js",revision:"ee15b10b23d3cffc78a52af824d6bbbc"},{url:"assets/index.html-DzH71YI3.js",revision:"0b5fea95331eee5f3cf4f2f890f916fe"},{url:"assets/index.html-F4_LGWfl.js",revision:"bb3cea935d5343dbe1c594600683ac24"},{url:"assets/index.html-JDqvYBja.js",revision:"c89fd9daf3e3adf25044089d82ade566"},{url:"assets/index.html-K-T38PIT.js",revision:"ea54f8f36f1ebdffa65c1d22eca29a8e"},{url:"assets/index.html-pm2NBiSf.js",revision:"3ab9b2cdf930b96aa9d133fab27241a0"},{url:"assets/index.html-QP6GTimW.js",revision:"646d8acfe03d33e792db683474c0b60d"},{url:"assets/index.html-RYnnBUXx.js",revision:"e1b3dba743bc26392b07f5dd8e5de345"},{url:"assets/index.html-WWyXgbuY.js",revision:"6feb223ba3a25b171d476eee0b915ec7"},{url:"assets/index.html-Zd2eEQFr.js",revision:"60279bc88606eee2f4f41ccea1378bcd"},{url:"assets/intro.html-Cd2y8GQr.js",revision:"cec86c312d40dc9e989bdfc3705a938e"},{url:"assets/layout.html-Bqg8qkhO.js",revision:"a883365fe614047bfe1f92f7b4a6821e"},{url:"assets/markdown.html-Bnd0AjAV.js",revision:"62b3ef201828d146f398c1b9c4c0bcb4"},{url:"assets/norm.html-BHGpgycg.js",revision:"9905de21b26f95c96042bef29ba20486"},{url:"assets/page.html-DIQDF0Lb.js",revision:"031f1dc18322fd2163c223113804f7bf"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/portfolio.html-B1mi0v7J.js",revision:"ca75b5b33cf099221f523ad0b2e0e179"},{url:"assets/strawberry.html-D1STs3kz.js",revision:"5cac929c23ba2a49d3451dbf1b8fff0a"},{url:"assets/style-DpHU-k2f.css",revision:"489d15ddd3a2305f2a1eac9e91784a80"},{url:"assets/tomato.html-CIHt2eV-.js",revision:"5d07d2e8d5249b33617d76601c0af977"},{url:"assets/update.html-CeTFlYVh.js",revision:"2065db10c0093c0a7e7e050046f0f111"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"581ec73e61ab4d6318098f9aabcfcce1"},{url:"article/index.html",revision:"b1f6df3c99ca9b0a6a963be45966f8e3"},{url:"category/index.html",revision:"7dfabaf4903b90607e46eebee4856283"},{url:"category/使用指南/index.html",revision:"66c817f6a2e98e66d503c933a4d283ee"},{url:"category/指南/index.html",revision:"d59ab32d4239401fcd80b4c888e69689"},{url:"category/樱桃/index.html",revision:"7ec469e232677398ce7cc3f537cef6a7"},{url:"category/水果/index.html",revision:"c8f384d220da8cef7e68bcec5fd9cc3b"},{url:"category/火龙果/index.html",revision:"6227fea403d921dfe695035052581aa7"},{url:"category/苹果/index.html",revision:"12cf07a8fa4283fa54aaa9a67920cf27"},{url:"category/草莓/index.html",revision:"f6687826992a9c8abc0879f5897760eb"},{url:"category/蔬菜/index.html",revision:"d126aba5f517b8e369096dc4d8d8cfbb"},{url:"category/香蕉/index.html",revision:"a754a0c3ab4721e84754138bc4ec3b2a"},{url:"demo/disable.html",revision:"cd2e14ccd735f3adeba042f4a12c722e"},{url:"demo/encrypt.html",revision:"7b2269be1bf169318caf39c261cf2014"},{url:"demo/index.html",revision:"3fbd6356f5486edb4d6d9ea33486c37c"},{url:"demo/layout.html",revision:"7f405f5e4afce8d2290586d55d8922e4"},{url:"demo/markdown.html",revision:"596f8d2f6e08a43cde7d9a897a994b94"},{url:"demo/page.html",revision:"3a9eae46946b4b74d4112f1e949ce89a"},{url:"index.html",revision:"15f807ff36718574282b2b5cf338e4a4"},{url:"intro.html",revision:"ac2aae26bdf016add0e7c34b113ae0ca"},{url:"portfolio.html",revision:"4bbd2ca9665e205b5569dc3db10afc0a"},{url:"posts/apple/1.html",revision:"5a0a53c18ba83dc7233fc95c7ceab1c8"},{url:"posts/apple/2.html",revision:"d10add9098a3cd66b9abf200ae0aa1d3"},{url:"posts/apple/3.html",revision:"e101184fe7d524db8a404b90a0f04b47"},{url:"posts/apple/4.html",revision:"d22a15ad18226a562e9c5269c06080aa"},{url:"posts/apple/index.html",revision:"43ecba0af80014c5891197f4c8e8919a"},{url:"posts/banana/1.html",revision:"0627e1733390d61244f45214f329703d"},{url:"posts/banana/2.html",revision:"d6499f88dcfe20db06d1fe28f0bc217a"},{url:"posts/banana/3.html",revision:"00d0fc54279e320318b47fa75ad289c7"},{url:"posts/banana/4.html",revision:"03132a949a859016104dd35bac5d9ba3"},{url:"posts/banana/index.html",revision:"d1dc5d574aa8a3b2e078603a442424ec"},{url:"posts/cherry.html",revision:"61d7787e71c1227c3cde15092c2ca274"},{url:"posts/dragonfruit.html",revision:"24d2a8921fcf6e64bfff02c4887405ba"},{url:"posts/index.html",revision:"7e637706367c8fba1f37444c132738be"},{url:"posts/strawberry.html",revision:"6d0df82138c20e6754a2c500221ff819"},{url:"posts/tomato.html",revision:"370e8b574b2e1779a8f8ae9df23c622e"},{url:"preface/index.html",revision:"f639719793561f43c8ee6509c854d591"},{url:"preface/norm.html",revision:"d43d21ee00913d9a8b34d134fb0c4627"},{url:"star/index.html",revision:"c0792243009e45b93b035befcb129d9e"},{url:"tag/index.html",revision:"7d1f61f9c141ffd461556bd3dfcd4436"},{url:"tag/markdown/index.html",revision:"3bbfd8a80dda8c1d1a95ed06ea4c6f8c"},{url:"tag/使用指南/index.html",revision:"ecc84c2e19bf452d6ed45fa0c49b51a9"},{url:"tag/加密/index.html",revision:"d838697bcf5dd6ce3278e8469cb7a430"},{url:"tag/圆/index.html",revision:"e4f984271883bc973e03fbd2f7a65236"},{url:"tag/大/index.html",revision:"a9c638261b8be4d5ec426cc7c3f7c8fc"},{url:"tag/小/index.html",revision:"39a55348177fc17ea148fa1081bfa966"},{url:"tag/布局/index.html",revision:"a0b7da83f37358a0205a571fe699e894"},{url:"tag/弯曲的/index.html",revision:"ed16ca6b1152ec57f04aa815041ab47f"},{url:"tag/禁用/index.html",revision:"5e07cd69801246acc190b74bf883fcee"},{url:"tag/红/index.html",revision:"8cfdb587fd6947f41c5184daa60e2617"},{url:"tag/长/index.html",revision:"6d749f0b8c8537d1d5b1b79b74610ccb"},{url:"tag/页面配置/index.html",revision:"f13e378d51a009249e36aa4ca43d731d"},{url:"tag/黄/index.html",revision:"cc5dd4988d075229528c8f56d116729b"},{url:"timeline/index.html",revision:"a86dffa97696b86f0834146238208875"},{url:"update.html",revision:"4554a21dffbb73c8ca2c18bbb591da7a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/cover1.jpg",revision:"1a661f8cca025ca27a846090c11b86ad"},{url:"assets/images/cover2.jpg",revision:"b228edd2b9054c83cb464d6b1ed8a4ae"},{url:"assets/images/cover3.jpg",revision:"88358b4d02ef94e59f1f563f38a94fad"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
