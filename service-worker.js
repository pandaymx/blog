if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const f=e=>a(e,r),t={module:{uri:r},exports:c,require:f};s[r]=Promise.all(d.map((e=>t[e]||f(e)))).then((e=>(i(...e),c)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html-D_g-UCnd.js",revision:"1c5d030256912bdb46c82269fd0e0309"},{url:"assets/1.html-D_MHsscF.js",revision:"2995178236a732b35967420eb32ec900"},{url:"assets/2.html-BLwPQwwu.js",revision:"95d00f04fb5f0206768b21372412ea8f"},{url:"assets/2.html-DNarFvCn.js",revision:"63dbaa8fd40db2d51c898c4214891e1d"},{url:"assets/3.html-BjnVsks5.js",revision:"ef6976dbebc889643e500a0d17aa14a3"},{url:"assets/3.html-CUc-_kXH.js",revision:"3619e5df8713aa833c435f5f6faedd74"},{url:"assets/4.html-BmQBgHA7.js",revision:"f66e00c8e97236622082cd10c2f123fb"},{url:"assets/4.html-CQVgR5Ep.js",revision:"8eac31c38d11ee7a8f3637c1e35cd203"},{url:"assets/404.html-DTzM8kdr.js",revision:"2d51a91345ae8a722049fb5d1f1c2f02"},{url:"assets/app-7upAAkCC.js",revision:"157f0458f10717eb4324d7eb059a3e70"},{url:"assets/browser-ryVndGA8.js",revision:"1ad57d46116f58fd4e61203a386767d2"},{url:"assets/cherry.html-CE75ikDk.js",revision:"95c92a24149e84df7ed8ebdeda92b0f5"},{url:"assets/disable.html-DzJhQ1lT.js",revision:"ccc652aca12d7a4d1e404f7b957ae41f"},{url:"assets/dragonfruit.html-DY3-Wcac.js",revision:"206fdd8873fa27344a1171e3b0d4a430"},{url:"assets/encrypt.html-C_uqygKB.js",revision:"886b3525f4bb22fa2d51b1cbd79cd874"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html--ixu8jeh.js",revision:"c02eb4e45d55f56cb30902208529d448"},{url:"assets/index.html-6Tgb2n5F.js",revision:"0c41dbe3cfdd1064cbbe030cffb1c61e"},{url:"assets/index.html-aHdqH255.js",revision:"bf10a95746cd65ea119aae11c646c014"},{url:"assets/index.html-B02gMf_g.js",revision:"76aa6fb6e8b79d28e26cf3adeb422d85"},{url:"assets/index.html-BkBmgahg.js",revision:"9552a866d78dcdcecb518a830200aa00"},{url:"assets/index.html-BLkGi9hR.js",revision:"3f136a4aafa71095dd51cff5904ba2f9"},{url:"assets/index.html-BNAr86Fc.js",revision:"7bc46d392fff0a13e105ce85993a613c"},{url:"assets/index.html-BtPxsG1W.js",revision:"0adac6a8d43db8119f48e8717749b06d"},{url:"assets/index.html-BuJA_q1y.js",revision:"2121d251015d8a3c52eeb5035b6681b8"},{url:"assets/index.html-CaeUXjh-.js",revision:"22ffdb3f9db1727b24a1b5bcf7c9156c"},{url:"assets/index.html-CbDAb6_S.js",revision:"91e46ac3606dfd8d69f804a7e5d2d4d2"},{url:"assets/index.html-CgtnfPuo.js",revision:"0a4a1e538583147a5cb25ed49fd5856a"},{url:"assets/index.html-CjIBXnm4.js",revision:"a98ef858a96c7a5bfaa4d87c01a251df"},{url:"assets/index.html-ClhvmZBV.js",revision:"46f6e5a6d66e08141cf264a15cfcefc7"},{url:"assets/index.html-CM2UfMeh.js",revision:"2ffa1e83f118572939a365f0c5d9b67a"},{url:"assets/index.html-CpMt7xbW.js",revision:"0049faf8cda742f6df5dde41fb682e67"},{url:"assets/index.html-CryzBMw4.js",revision:"bd7bf9ec8ca75d66828ee13a0d3b2469"},{url:"assets/index.html-Ctv1LF2e.js",revision:"e5d45383bf82a0a79a92c8d7d5112477"},{url:"assets/index.html-CuDo4W3K.js",revision:"8c5cdcf23adca9a7ec56d67ef571c7cb"},{url:"assets/index.html-CuK3uk-y.js",revision:"ab09d509c507461c53f469d33b1d7dad"},{url:"assets/index.html-CXuzK3eZ.js",revision:"8662103fd5249462affc84f5b458ea60"},{url:"assets/index.html-D2Wah9u5.js",revision:"4a73b21fa6fbb96a502e2d79e46644e2"},{url:"assets/index.html-D9xvUlqe.js",revision:"8c8c46283a5e18ccbd1584e2ddb0c808"},{url:"assets/index.html-DeoSC5bU.js",revision:"204a50deae54f6b67c58297a18299020"},{url:"assets/index.html-DIh3nhrS.js",revision:"cb8f642cc4b290487467dba97b9dbc11"},{url:"assets/index.html-DNzPbCbl.js",revision:"1ed643475161153504a5d7b9e30eb381"},{url:"assets/index.html-DQARoUTr.js",revision:"6924389b53fae7662da503b3e0f2825e"},{url:"assets/index.html-DUvF7FF8.js",revision:"18614209328b3a27552068613581956d"},{url:"assets/index.html-DYP8iVQ7.js",revision:"9edbbc2fb5503226b50c0e58bf5acbb3"},{url:"assets/index.html-Ph-2upPH.js",revision:"fe0259988935219d89c2b85c8044d036"},{url:"assets/index.html-UAttf7iv.js",revision:"0fe9da75c46c6301d21d0f9e22bacd1a"},{url:"assets/index.html-vvlCuVL8.js",revision:"d6689f207f0c672ef248977a1b250504"},{url:"assets/intro.html-BqOclLzH.js",revision:"211b6e4fc686830b67b9a185d6909297"},{url:"assets/layout.html-DhyjMgZs.js",revision:"3bd28f7ea4eaf950dfc2a1f02e6337d7"},{url:"assets/markdown.html-eNIL6qhi.js",revision:"b99ff7726d74d427cd587cb1378be169"},{url:"assets/page.html-CR7hZdnZ.js",revision:"d2d9761263d89b03da10efffd6366f30"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/strawberry.html-B6dZVCCR.js",revision:"bc28ed009982fe41e73597cdb4fa84eb"},{url:"assets/style-C9EYxOhU.css",revision:"82fdf86866a4493b884ce36dcd554758"},{url:"assets/tomato.html-B94j3C6Q.js",revision:"1b48611574a0b899e46ef9ace22ab49c"},{url:"assets/update.html-BE86te_z.js",revision:"2bdd61a2d459e64f3c1e0bcf024abe4e"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"f8de55684adb5f44a2b44b20962d47ae"},{url:"article/index.html",revision:"20c235000ef5ab37fa65be0ad122fbe2"},{url:"category/index.html",revision:"b5812d73e3c4990652959a8e25b843d4"},{url:"category/使用指南/index.html",revision:"494c7b0bfab4fff828ca45282a58aedb"},{url:"category/指南/index.html",revision:"74b6f6b6efeb7020d956d9bf8dcc0ce6"},{url:"category/樱桃/index.html",revision:"ee9321d36a905a0b13c8331935a07ba3"},{url:"category/水果/index.html",revision:"fe59cac5c36d9b7609e74ccf56fcbb57"},{url:"category/火龙果/index.html",revision:"89d169413c963ea538d063792c168d08"},{url:"category/苹果/index.html",revision:"b97e7fdbe2f797045c29fdf06d8a817e"},{url:"category/草莓/index.html",revision:"ee09c803ea567d2e063d1f2f25604c75"},{url:"category/蔬菜/index.html",revision:"1bb817b0e7b9a7987e7e00d9e6d3f37b"},{url:"category/香蕉/index.html",revision:"4b11824e4682a14707d4d181815844f2"},{url:"demo/disable.html",revision:"2bb1e2bf8c675a90e8f4eef2878663b4"},{url:"demo/encrypt.html",revision:"8891e94aa47cbb979509a47c65f7eb63"},{url:"demo/index.html",revision:"652c849903df34af4388348bd3b03cae"},{url:"demo/layout.html",revision:"a91d13aba085f019cd603edeceaa3736"},{url:"demo/markdown.html",revision:"4074726ee1d7f00cfeceaf4e6ac5fad3"},{url:"demo/page.html",revision:"d373dbb0c6e96acc52afecf37955c8dd"},{url:"index.html",revision:"d7426e7828ce11652e491edb9c85c1cf"},{url:"intro.html",revision:"fd0bf3d54e66bae8fc88011de3b56ba2"},{url:"posts/apple/1.html",revision:"db43dd3042d538a343f1379d98ef4e04"},{url:"posts/apple/2.html",revision:"a3f5eeb51eb951584f2c5ff8cd17dd19"},{url:"posts/apple/3.html",revision:"ffc937ded5ad465c925a38e4f3dbf305"},{url:"posts/apple/4.html",revision:"ab9e33d685bf4ebc17b20f9007ce6662"},{url:"posts/apple/index.html",revision:"c057f01845156254c597572545eaaa51"},{url:"posts/banana/1.html",revision:"11d21c6fb8701347d1d98699d1b790ad"},{url:"posts/banana/2.html",revision:"70ce31e5681e1fa83e32c5c1eb64fabf"},{url:"posts/banana/3.html",revision:"779aa6f77e1cd6979023d4d055c565fe"},{url:"posts/banana/4.html",revision:"a7cbf679ab5b0abe234d888df5d876d8"},{url:"posts/banana/index.html",revision:"d7a5830a545678e98df030d4c5fcf00c"},{url:"posts/cherry.html",revision:"be73a8f594b8d0233fc45b5c1b874f07"},{url:"posts/dragonfruit.html",revision:"17d4da55992a47ad57250716bb445793"},{url:"posts/index.html",revision:"2fe900cf7af947ef5b08b5ec0f1ffdad"},{url:"posts/strawberry.html",revision:"d613d5e36f0898a6c717903c99f6636b"},{url:"posts/tomato.html",revision:"863c13ca687cad103cd632d05bb5519f"},{url:"star/index.html",revision:"a262400b65b58cd5ec51f929766f6a41"},{url:"tag/index.html",revision:"bf8d179054710656b6873acdda3b878a"},{url:"tag/markdown/index.html",revision:"2a36df44bbcc835892a8924feee3a626"},{url:"tag/使用指南/index.html",revision:"09b3fe0f8be8952310fb4ded9ff518df"},{url:"tag/加密/index.html",revision:"44a28d0c70157f3ef3c72360bc080f86"},{url:"tag/圆/index.html",revision:"7c5caa257be1fbeafb4bd6a56aacc0a4"},{url:"tag/大/index.html",revision:"bfb61bdbc927597a81db78f729497a06"},{url:"tag/小/index.html",revision:"022696a9f322cff49882b78f4a6a16fa"},{url:"tag/布局/index.html",revision:"ed9e06e407518ad3c508e9b7b1f44f08"},{url:"tag/弯曲的/index.html",revision:"467cc4d98baf70538d202b605a49b816"},{url:"tag/禁用/index.html",revision:"798e398a426ecc6dc7112b335cd31891"},{url:"tag/红/index.html",revision:"a661e2c401ec254b793a3a9a5e9c68d3"},{url:"tag/长/index.html",revision:"08a8fd10c13d778168803119962a375d"},{url:"tag/页面配置/index.html",revision:"f8537444e79f9765c5b9781fb5e894e4"},{url:"tag/黄/index.html",revision:"3b347451d48954e2d42d539e550ab461"},{url:"timeline/index.html",revision:"ef8ecf4e37a2cf18a0244a01d560a52f"},{url:"update.html",revision:"2f650b1ca99f32d850e0abf07c125520"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/cover1.jpg",revision:"1a661f8cca025ca27a846090c11b86ad"},{url:"assets/images/cover2.jpg",revision:"b228edd2b9054c83cb464d6b1ed8a4ae"},{url:"assets/images/cover3.jpg",revision:"88358b4d02ef94e59f1f563f38a94fad"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));