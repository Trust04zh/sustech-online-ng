/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "20f4a2453e59745b7028a1c965bf679d"
  },
  {
    "url": "about.html",
    "revision": "c117e2b5ba6a5030aab324747b308212"
  },
  {
    "url": "assets/css/0.styles.adc7614e.css",
    "revision": "06d76b3dfa0139016f5dcc6749e241a2"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/59cf84079d9ff4f9.c3cb8642.jpg",
    "revision": "c3cb86428ca95ea7809e4d036b128f88"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline2.d007a398.png",
    "revision": "d007a398c9483d2e223ecef841927ba8"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/IMG_20210123_205049.50b37749.jpg",
    "revision": "50b3774914c541b0bf82c53bbf7babd6"
  },
  {
    "url": "assets/img/IMG_20210126_195515.6e5798e8.jpg",
    "revision": "6e5798e838b6316c0d63516bf2217f14"
  },
  {
    "url": "assets/img/IMG_20210126_195546.64da6a29.jpg",
    "revision": "64da6a297e623bba762e4611a17e307b"
  },
  {
    "url": "assets/img/IMG_20210126_195856.50b26fe4.jpg",
    "revision": "50b26fe4593d88ec4236396acf71ccac"
  },
  {
    "url": "assets/img/IMG_20210126_195932.cc16b5b6.jpg",
    "revision": "cc16b5b6cc7b5d3b418cb6ef3b59f00c"
  },
  {
    "url": "assets/img/IMG_20210126_200439_edit_7106211807769.679c984e.jpg",
    "revision": "679c984e3cc616f2a894b628a7da95b0"
  },
  {
    "url": "assets/img/IMG_20210126_205402.5b5d2cc1.jpg",
    "revision": "5b5d2cc105685e7f0fc1ad80559701cc"
  },
  {
    "url": "assets/img/IMG_20210126_205908.73ed6cb5.jpg",
    "revision": "73ed6cb55530f8bd19980029946ca663"
  },
  {
    "url": "assets/img/IMG_20210126_210458.2062dad8.jpg",
    "revision": "2062dad8c05bf3a6dd2ac50c61f734a6"
  },
  {
    "url": "assets/img/IMG_20210126_210550.b0ee9b5a.jpg",
    "revision": "b0ee9b5ac13f8c02b4bf84f11bef0e73"
  },
  {
    "url": "assets/img/IMG_20210126_210622.042c5b47.jpg",
    "revision": "042c5b47ddbb72825795dfe663af5eec"
  },
  {
    "url": "assets/img/IMG_20210126_211345.589c64df.jpg",
    "revision": "589c64df659620fda62d9d557cdd4680"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/qr-code.ccaefe4a.jpg",
    "revision": "ccaefe4a0f839087e7ded77788a6e2df"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/Screenshot_20210128_114248_com.MobileTicket.b64a9636.jpg",
    "revision": "b64a9636ad938d85cb54a89e599c7c36"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.85b97d4a.js",
    "revision": "c1e551d1684598b65be65c91f6b9ab0a"
  },
  {
    "url": "assets/js/11.3f905aa4.js",
    "revision": "079908c9e310ce8a82896893de79a5b1"
  },
  {
    "url": "assets/js/12.947c9d67.js",
    "revision": "b214bfea6597cc3751e39b35f666ca6c"
  },
  {
    "url": "assets/js/13.7ea4d4a7.js",
    "revision": "e2b3f7812ac1f89e0407f29db8363e67"
  },
  {
    "url": "assets/js/14.69360440.js",
    "revision": "f00104ef9442bb1c4c9f3b08213c2aae"
  },
  {
    "url": "assets/js/15.aae8a42a.js",
    "revision": "de19460a3fb5ab0d5970eb65e6e5de2d"
  },
  {
    "url": "assets/js/16.cbd831be.js",
    "revision": "2ca7d943e650e7dadc812254fdc01f62"
  },
  {
    "url": "assets/js/17.cf69746b.js",
    "revision": "188f9844a9d66fa44e9bbd4f51e401cd"
  },
  {
    "url": "assets/js/18.44c8c4bc.js",
    "revision": "e8f3b3d0040db5a7f9127ffadc6c7999"
  },
  {
    "url": "assets/js/19.d57c26d5.js",
    "revision": "4a24ec2244fe7053be7cc0c0dc865c35"
  },
  {
    "url": "assets/js/2.03a9e5d6.js",
    "revision": "eda89f0b37e2b652b7f8be74f27d0f16"
  },
  {
    "url": "assets/js/20.e92b5eb3.js",
    "revision": "edd5f7ff53cb90c6570a668f31c9f275"
  },
  {
    "url": "assets/js/21.9cecd6a0.js",
    "revision": "12a3d555c05ac347afa8e1c190db255e"
  },
  {
    "url": "assets/js/22.126bdcee.js",
    "revision": "dca2dfad741ba687ee2950494bd77755"
  },
  {
    "url": "assets/js/23.8f2f05b4.js",
    "revision": "8b30c1a5c6c8628f4e640e9c84b72b93"
  },
  {
    "url": "assets/js/24.440ad5f0.js",
    "revision": "8be28f55840f140a5295497ffbf14fca"
  },
  {
    "url": "assets/js/25.a0e059a8.js",
    "revision": "c85795ec097defb3a33e2793aac9b770"
  },
  {
    "url": "assets/js/26.665bf21f.js",
    "revision": "799fbd828dbdf9bd10cee81ed0b735a9"
  },
  {
    "url": "assets/js/27.92432a22.js",
    "revision": "e9f0fee5f50846a7a41e3054992a32e9"
  },
  {
    "url": "assets/js/28.5b080006.js",
    "revision": "cbc90205c0d51ada3320f54dddbddf7e"
  },
  {
    "url": "assets/js/29.3a8e15d8.js",
    "revision": "44cace6eb6c7f61ac6bb6ee5ba2751d3"
  },
  {
    "url": "assets/js/3.cb7bbadb.js",
    "revision": "99d2fe575d6b018c2324ee4d42c3cf69"
  },
  {
    "url": "assets/js/30.6ee8b46a.js",
    "revision": "90ee87af9e1bddd97bc6e370ba525d9d"
  },
  {
    "url": "assets/js/31.bafede15.js",
    "revision": "68e3b3c86e67e53b03f114b67e27aeb1"
  },
  {
    "url": "assets/js/32.cda4d40d.js",
    "revision": "0c82d6c5e4aed61cd92e5d92d2296cdc"
  },
  {
    "url": "assets/js/33.c9a3bd01.js",
    "revision": "adbcc899de9c1f2f50f3b961b2cd612a"
  },
  {
    "url": "assets/js/34.655a1956.js",
    "revision": "a2a9b4debaaf89a3d97d313ae0080132"
  },
  {
    "url": "assets/js/35.c6d85623.js",
    "revision": "431ade1f7affd36303088fe52e726063"
  },
  {
    "url": "assets/js/36.4a26ab0d.js",
    "revision": "dfbeeeb534ae7f6d06d57d1c66d02ae6"
  },
  {
    "url": "assets/js/37.2c29b344.js",
    "revision": "6ae9ed869c942825cf2567ae95bfa14b"
  },
  {
    "url": "assets/js/38.d8b49133.js",
    "revision": "fb9c338b5f8f897d087c39a16fbc7da7"
  },
  {
    "url": "assets/js/39.cf044db9.js",
    "revision": "9afc85b4aed11ad47b9494d781a22d96"
  },
  {
    "url": "assets/js/4.3149bb4c.js",
    "revision": "719abe0ef41c4778c5ebcab1313b1bfa"
  },
  {
    "url": "assets/js/40.7641b60c.js",
    "revision": "288261bd39eb13133159b4e8cec530a5"
  },
  {
    "url": "assets/js/41.582a6fad.js",
    "revision": "144eebc1109edf481cef80eb72068ad6"
  },
  {
    "url": "assets/js/42.59896bc2.js",
    "revision": "60c5729f7906f1e000758111ce36bfdf"
  },
  {
    "url": "assets/js/43.9fe7b5ae.js",
    "revision": "e26bdbb263edb271ab78a668264206d4"
  },
  {
    "url": "assets/js/44.a49ecd81.js",
    "revision": "eb4035eefe5e135327549c5b64221c9a"
  },
  {
    "url": "assets/js/45.e9a5f519.js",
    "revision": "13d2de1585603b814e0a6f6a7f6e1395"
  },
  {
    "url": "assets/js/46.df05977b.js",
    "revision": "a5f8d80cf3bf18d3068bfd7381b57bce"
  },
  {
    "url": "assets/js/47.1c0dbaaa.js",
    "revision": "fe260d9f2c894bfad0eeed3dca20172c"
  },
  {
    "url": "assets/js/48.66017a79.js",
    "revision": "67db9eb5e47947a9a88cf240122f7c6b"
  },
  {
    "url": "assets/js/49.0ab35be0.js",
    "revision": "32f4b1376a2b9662619fbb51996ab7d8"
  },
  {
    "url": "assets/js/5.35d7c992.js",
    "revision": "17e4ec597bf7de4281c29cb0f8e73f9c"
  },
  {
    "url": "assets/js/50.5209af19.js",
    "revision": "2c5df8df1f25ab08c0e222b16907f36f"
  },
  {
    "url": "assets/js/51.30ba7865.js",
    "revision": "8c2ee40276795b077d117758b5033a18"
  },
  {
    "url": "assets/js/52.c5ecf276.js",
    "revision": "2c99c7f37bd53b9a633620cb7e77b300"
  },
  {
    "url": "assets/js/53.56325f72.js",
    "revision": "0d47412edb088ab1e1819d88efd37003"
  },
  {
    "url": "assets/js/54.1dddaff7.js",
    "revision": "0fab0a11445d8e419d03d384232703a3"
  },
  {
    "url": "assets/js/55.7f22f9a4.js",
    "revision": "899f6d32976da1b64df1e0988e639196"
  },
  {
    "url": "assets/js/56.e1b8d8f7.js",
    "revision": "ace8915cc3d50cea86dbf038b9a25040"
  },
  {
    "url": "assets/js/57.ca160e93.js",
    "revision": "abdb42338882194ce223e6947a6fc6eb"
  },
  {
    "url": "assets/js/58.3d3f26f5.js",
    "revision": "ee546cbe889f7332b16b9b04aa78b05d"
  },
  {
    "url": "assets/js/59.45e720a0.js",
    "revision": "91b343578ad5280b8f37529ec92bf44f"
  },
  {
    "url": "assets/js/6.45fef6cd.js",
    "revision": "ad5c169ea8496a3db0927738975f76c0"
  },
  {
    "url": "assets/js/60.3028983a.js",
    "revision": "52bedf4d14ea963dc2d428e1df3e3ab5"
  },
  {
    "url": "assets/js/7.e8d94dbe.js",
    "revision": "8a28953576b76c5f9697687cc078608f"
  },
  {
    "url": "assets/js/8.845d6514.js",
    "revision": "92485c5e4a025eb25ca4d931a64b7328"
  },
  {
    "url": "assets/js/9.b7c4a255.js",
    "revision": "e45d29d332289760895ae1a9e976fe75"
  },
  {
    "url": "assets/js/app.6c8ef76a.js",
    "revision": "5c4324f6fc5f996f32d359b7b117ed26"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "3a08476f0807f88255b5bdb85cfd4258"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "8b71ebbe133e88e2b7d44966bb8177c0"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "d8b6727a03e0f0005e839957d40cafca"
  },
  {
    "url": "calendar/2021-2022.html",
    "revision": "a9fd6f6e9a2d2701de33ff1ec4436a7e"
  },
  {
    "url": "calendar/index.html",
    "revision": "2cdac741562d2af73682f6c14982e023"
  },
  {
    "url": "contact/index.html",
    "revision": "a506f4f5e0d0a333c34cb9660a20733c"
  },
  {
    "url": "emergency/index.html",
    "revision": "5d3dc0054e6665be9a9e7a7363dc2f15"
  },
  {
    "url": "facility/index.html",
    "revision": "4edbe32cf54be9df94e26ca3ec802652"
  },
  {
    "url": "facility/panolens.html",
    "revision": "a8d18c754ec562fe072efbf7355fb2a7"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "e4374b20c15874f553814fc2cbbc473c"
  },
  {
    "url": "index.html",
    "revision": "edf3ec3b540dcc9b5cc3223facbf8edc"
  },
  {
    "url": "life/catering/index.html",
    "revision": "9836d4da267c4b4902098a52c3ba4ef6"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "d64b7adb541dffc4b3d1b743e1243313"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "7e8aca54a757f86c3c1b3d64a4f993d2"
  },
  {
    "url": "life/index.html",
    "revision": "597669cdb0fefac2a95f565d196e7e81"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "2d39db1b44eb1d9298f5d9437aff35eb"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "6e094f5e370897704adf321a62406013"
  },
  {
    "url": "news/index.html",
    "revision": "08867aac5972a9eab485b816c2aeb68a"
  },
  {
    "url": "organizations/index.html",
    "revision": "88eba761320c62b10dddd6956ae80e12"
  },
  {
    "url": "organizations/registered-organization-2019.html",
    "revision": "5ecfefeb0c985cdd57b218f7f77664bd"
  },
  {
    "url": "organizations/registered-organization-2020.html",
    "revision": "79a8b40583fb2f4d592471082436a5eb"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "3c53f66d2d162830f4d96a9438a574f6"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "39549633409d6abb7cbf2f5f80ced0e8"
  },
  {
    "url": "service/email/index.html",
    "revision": "829a7884d8db839eecaedfec98f553a4"
  },
  {
    "url": "service/index.html",
    "revision": "11546cde552d892479dddb7ad3de323f"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "432dd6b176b2513b744db7354adaed52"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "3f5e5414500a7eeddb48e7074d66b33a"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "80b937683c0889d32d202b2e912832e9"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "57ca8d9fcc4ef0765c2c25740fa8eff4"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "9c0ddd8aa4f10dcd53656e5249517234"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "ddc09d61b2e6a51f90a30b6aa3d79e49"
  },
  {
    "url": "service/network/eduroam/index.html",
    "revision": "3bfd0d3e81718b8fc4d367a96db41e41"
  },
  {
    "url": "service/network/index.html",
    "revision": "9a494b3dadcf9d54c9e69646300278c1"
  },
  {
    "url": "service/network/remote-desktop/index.html",
    "revision": "cef5a5a130b079b2159a050693205ced"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "6939c60be7d80ab642fe3e540e1cb60c"
  },
  {
    "url": "service/sid/index.html",
    "revision": "8df71d5c7f799b349eeeed26e99314e7"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "56be866fcb6227af655dcfa4c32c1044"
  },
  {
    "url": "service/student-train-ticket/index.html",
    "revision": "917cbd16db56c626541b8a4d2444ce5d"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "bf17a20b0b2f325e948850ebf4079e18"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "976338a80b45fbc71d2ad2bb2e61670f"
  },
  {
    "url": "site-help/index.html",
    "revision": "5e9a8b40d832fa1d19f089c55b27648e"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "78469c362da54dc0a60a9f63b5451c4e"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "f23aba11476fb6dce1fae00be92e9905"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "6c93248450478861215270b6312614fc"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "93380f017b44780cbfbc222a7a47c182"
  },
  {
    "url": "study/index.html",
    "revision": "c6dd42240df57b28b9f36ca4ef82c661"
  },
  {
    "url": "surroundings/index.html",
    "revision": "83c82f50411a87b854d9b10e48ebc11c"
  },
  {
    "url": "transport/holiday.html",
    "revision": "909d52b596c15853b254e698ef1be45e"
  },
  {
    "url": "transport/index.html",
    "revision": "4fc261e039147ca1a17766b2eff97025"
  },
  {
    "url": "transport/redirect.html",
    "revision": "71b250b476812a90ab66655b385cf0fa"
  },
  {
    "url": "transport/workday.html",
    "revision": "9c341afb4cd5bb108d83ff64224889f1"
  },
  {
    "url": "wx_helper.js",
    "revision": "09d67f229a32659f1acf7d55a767e962"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
