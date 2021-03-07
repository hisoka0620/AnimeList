(function(){"use strict";var e={3309:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var i,a=t(144),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("WATCHING-ANIME-MANAGEMENT"),t("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:"Using API by Annict",expression:"'Using API by Annict'",modifiers:{hover:!0,top:!0}}],staticClass:"px-3 ml-2 mb-2 info-btn",attrs:{variant:"secondary"}},[e._v("i")])],1),t("h4",[e._v("2020(Autumn)-2021(Winter)")]),t("anime-list")],1)},o=[],s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"anime-list"}},[t("Loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),e._l(e.animes,(function(n){return t("anime-item",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],key:n.id,attrs:{anime:n}})}))],2)},l=[],u=t(1213),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{key:e.anime.id,staticClass:"anime"},[t("div",{staticClass:"shadow p-3 mb-5 bg-white rounded"},[t("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"24rem"},attrs:{title:e.anime.node.title,"img-src":e.anime.node.image.recommendedImageUrl,"img-alt":"NoImage","img-top":"",tag:"article"}},[t("b-card-text",[t("div",{staticClass:"span-contents"},[t("span",{staticClass:"text-primary twitterHash"},[e._v("#"+e._s(e.anime.node.twitterHashtag))]),t("span",{staticClass:"text-primary"},[e._v("#"+e._s(e.anime.node.seasonYear))])]),t("div",{staticClass:"p-contents"},[t("p",{staticClass:"text-white bg-secondary rounded d-inline-block px-2 mr-2"},[e._v(e._s(e.anime.node.viewerStatusState)+" ")]),t("p",{staticClass:"text-white bg-secondary rounded d-inline-block px-2"},[e._v(e._s(e.anime.node.seasonName))])])]),t("b-button",{attrs:{href:e.anime.node.officialSiteUrl,target:"_blank",rel:"noopener",variant:"info"}},[e._v("公式サイトはこちら")])],1)],1)])])},d=[],f={name:"AnimeItem",props:["anime"]},p=f,m=t(5961),h=(0,m.Z)(p,c,d,!1,null,"548c5dc0",null),v=h.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"loading"}},[t("vue-loading",{attrs:{type:"bars",color:"#00bfff",size:{width:"60px",height:"60px"}}})],1)},b=[],_=t(759),w={name:"Loading",components:{VueLoading:_.VueLoading}},x=w,y=(0,m.Z)(x,g,b,!1,null,null,null),E=y.exports,A=t(3121),S=(0,A.ZP)(i||(i=(0,u.Z)(['\n  {\n  searchWorks(seasons: ["2021-spring","2021-winter","2020-autumn"], orderBy: { field: WATCHERS_COUNT, direction: DESC }, first: 40) {\n    edges {\n      node {\n        title\n        twitterHashtag\n        officialSiteUrl\n        viewerStatusState\n        seasonYear\n        seasonName\n        image{\n          recommendedImageUrl\n        \ttwitterAvatarUrl\n        }\n      }\n    }\n  }\n}']))),C={name:"AnimeList",components:{AnimeItem:v,Loading:E},data:function(){return{animes:[],loading:!0}},beforeUpdate:function(){this.loading=!1},apollo:{animes:{query:S,update:function(e){return e.searchWorks.edges}}}},k=C,N=(0,m.Z)(k,s,l,!1,null,"29b39d9e",null),U=N.exports,P={name:"App",components:{AnimeList:U}},I=P,L=(0,m.Z)(I,r,o,!1,null,null,null),O=L.exports,T=t(2489),Z=t(6822),j=t(8483),M=t(817),R=t(5123),V=t(9272);t(3192);a.default.config.productionTip=!1,a.default.use(Z.XG7),a.default.use(j.X);var B={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_TOKEN,H={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_URI;console.log(B),console.log(H);var W=(0,R.L)({uri:"https://api.annict.com/graphql",headers:{authorization:"Bearer RXfnbi3w0faSCeZhdGUqBskkz49V3koiRITLZRxvA7k"}}),G=new V.h4,$=new M.fe({link:W,cache:G}),q=new T.ZP({defaultClient:$});a.default.use(T.ZP),new a.default({el:"#app",apolloProvider:q,render:function(e){return e(O)}})}},n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={id:i,loaded:!1,exports:{}};return e[i](a,a.exports,t),a.loaded=!0,a.exports}t.m=e,t.x=function(){},function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0},n=[[3309,998]],i=function(){},a=function(a,r){for(var o,s,l=r[0],u=r[1],c=r[2],d=r[3],f=0,p=[];f<l.length;f++)s=l[f],t.o(e,s)&&e[s]&&p.push(e[s][0]),e[s]=0;for(o in u)t.o(u,o)&&(t.m[o]=u[o]);c&&c(t),a&&a(r);while(p.length)p.shift()();return d&&n.push.apply(n,d),i()},r=self["webpackChunkanime_app"]=self["webpackChunkanime_app"]||[];function o(){for(var i,a=0;a<n.length;a++){for(var r=n[a],o=!0,s=1;s<r.length;s++){var l=r[s];0!==e[l]&&(o=!1)}o&&(n.splice(a--,1),i=t(t.s=r[0]))}return 0===n.length&&(t.x(),t.x=function(){}),i}r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r));var s=t.x;t.x=function(){return t.x=s||function(){},(i=o)()}}();t.x()})();
//# sourceMappingURL=app.5f00eb30.js.map