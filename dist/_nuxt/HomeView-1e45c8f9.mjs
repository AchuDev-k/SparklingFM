import{_ as g,s as y,o as i,c as d,a as t,b as _,w as h,g as T,p as V,d as A,f as v,L as R,M as D,N as O,O as M,P as W,Q as z,R as q,S as G,T as Q,U,e as $,h as X,i as b,t as w,F as p,j as x,k as S,V as J,G as j,m as K,C as N,l as I,q as Y,W as Z,X as ee}from"./entry-448158b9.mjs";import{u as te}from"./asyncData-2280e3f7.mjs";import{S as se}from"./Seo-c68a88db.mjs";import{B as ae}from"./BlogWidget-d57b85f7.mjs";const oe={name:"HeroSection",props:["fields"],setup(c,{expose:n}){n();const e=c;y(()=>{var l=0;r();function r(){var s,o=document.getElementsByClassName("mySlides");for(s=0;s<o.length;s++)o[s].style.display="none";l++,l>o.length&&(l=1),o[l-1].style.display="block",setTimeout(r,9e3)}});const a={props:e};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},ce=c=>(V("data-v-773e8cae"),c=c(),A(),c),ie={class:"body"},ne={class:"hero"},le={class:"hero-article"},de=T('<div class="hero-text" data-v-773e8cae><h1 class="lg-text" data-v-773e8cae>Relax and Enjoy the<br data-v-773e8cae> <span class="colored-text" data-v-773e8cae> Best FM </span> on the<br data-v-773e8cae> planet earth...</h1><h1 class="mobile-text" data-v-773e8cae>Relax and Enjoy the <span class="colored-text" data-v-773e8cae> Best FM </span> on the planet earth...</h1></div><div class="hero-para" data-v-773e8cae><p data-v-773e8cae>Listen to exciting talks about sport, recent<br data-v-773e8cae> news, dramas, relationships and many more on<br data-v-773e8cae> sparkling FM</p></div>',2),re={class:"hero-links"},_e=ce(()=>t("a",{style:{"background-color":"rgba(229, 137, 70, 1)"},href:"https://mixlr.com/sparkling923fm--2",class:"listen nuxt-link-exact-active",id:"listen"},"Listen Live",-1)),me=v("Read our Articles"),ue=T('<div class="hero-img" data-v-773e8cae><div class="w3-content w3-section" style="max-width:500px;" data-v-773e8cae><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+R+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>1 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+D+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>2 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+O+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>3 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+M+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>4 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+W+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>5 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+z+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>6 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+q+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>7 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+G+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>8 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+Q+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>9 / 10</h1></div><div class="mySlides slideshow-container" data-v-773e8cae><img src="'+U+'" style="width:100%;" data-v-773e8cae><h1 class="numbertext" data-v-773e8cae>10 / 10</h1></div></div></div>',1);function he(c,n,e,a,l,r){const s=$;return i(),d("div",ie,[t("div",ne,[t("div",le,[de,t("div",re,[_e,_(s,{class:"second-link",to:"/blog/"},{default:h(()=>[me]),_:1})])]),ue])])}var ve=g(oe,[["render",he],["__scopeId","data-v-773e8cae"]]);const pe={},ge={},fe={name:"BlogPostTile",props:["featured_image","featured_image_alt","slug","title","summary"],setup(c,{expose:n}){n();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},ye={class:"col-lg-4 col-md-8 col-sm-10"},be={class:"single-blog"},we={key:0,class:"blog-header"},xe=["src","alt"],Se={class:"blog-body"},$e={class:"package-name"},ke={class:"blog-footer"},Be=v("Read More");function Pe(c,n,e,a,l,r){const s=X("router-link");return i(),d("div",ye,[t("div",be,[e.featured_image?(i(),d("div",we,[t("img",{class:"img-fluid",loading:"lazy",src:e.featured_image,alt:e.featured_image_alt},null,8,xe)])):b("",!0),t("div",Se,[t("h5",$e,[_(s,{to:`/blog/${e.slug}/`},{default:h(()=>[v(w(e.title),1)]),_:1},8,["to"])]),t("p",null,w(e.summary),1)]),t("div",ke,[_(s,{to:`/blog/${e.slug}/`,class:"main-btn btn-hover"},{default:h(()=>[Be]),_:1},8,["to"])])])])}var je=g(fe,[["render",Pe]]);const Ne={name:"BlogSection",props:["blogPosts"],setup(c,{expose:n}){n();const e={BlogPostTile:je};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},Ie={id:"blog",class:"blog-section"},Te={class:"container"},Ve=t("div",{class:"row justify-content-center"},[t("div",{class:"col-lg-6 col-md-10"},[t("div",{class:"section-title text-center"},[t("h2",null,"Latest News"),t("p")])])],-1),Ae={class:"row justify-content-center"},Ce=v(" View All News ");function Ee(c,n,e,a,l,r){const s=$;return i(),d("section",Ie,[t("div",Te,[Ve,t("div",Ae,[(i(!0),d(p,null,x(e.blogPosts,(o,m)=>(i(),S(a.BlogPostTile,J({key:m},o),null,16))),128))]),t("p",null,[_(s,{class:"main-btn btn-hover mt-5",to:"/blog/"},{default:h(()=>[Ce]),_:1})])])])}var Fe=g(Ne,[["render",Ee]]);const He={},Le={name:"HomeView",props:["slug"],async setup(c,{expose:n}){n();let e,a;const l=c,{categories:r}=j(),{$butterCMS:s}=K(),{setError:o}=N(),{handleMounted:m}=I("layout"),{data:E,refresh:k}=([e,a]=Y(async()=>te("home-data",async()=>{var P;const F=(P=l.slug)!=null?P:"landing-page-with-components";try{const u=await(s==null?void 0:s.page.retrieve("landing-page",F)),H=u==null?void 0:u.data.data,f=await(s==null?void 0:s.post.list({page:1,page_size:3})),L=f==null?void 0:f.data.data;return{pageData:H,blogPosts:L}}catch(u){return o(u),null}})),e=await e,a(),e);y(k);const B={categories:r,$butterCMS:s,setError:o,handleMounted:m,props:l,data:E,refresh:k,inject:I,onMounted:y,HeroSection:ve,TwoColumnWithImageSection:pe,FeaturesSection:ge,BlogSection:Fe,TestimonialsSection:He,useApiError:N,Seo:se,BlogWidget:ae,useCategories:j};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}},C=c=>(V("data-v-3b7d128c"),c=c(),A(),c),Re={class:"category"},De={class:"widget categories-widget"},Oe=C(()=>t("h5",{class:"widget-title"},"Categories",-1)),Me={class:"categories-list"},We=C(()=>t("div",{class:"download"},[t("a",{href:"../assets/files/advert.pdf",download:"Advert"},"Advertisments? Click here ->")],-1));function ze(c,n,e,a,l,r){const s=$;return i(),d("div",null,[_(a.Seo,Z(ee(a.data.pageData.fields.seo)),null,16),(i(!0),d(p,null,x(a.data.pageData.fields.body,(o,m)=>(i(),d(p,null,[o.type==="hero"?(i(),S(a.HeroSection,{key:m,fields:o.fields},null,8,["fields"])):b("",!0),o.type==="two_column_with_image"?(i(),S(a.TwoColumnWithImageSection,{key:m,fields:o.fields},null,8,["fields"])):b("",!0)],64))),256)),_(a.BlogSection,{"blog-posts":a.data.blogPosts},null,8,["blog-posts"]),t("section",Re,[t("div",De,[Oe,t("ul",Me,[(i(!0),d(p,null,x(a.categories,o=>(i(),d("li",{key:o.slug},[_(s,{to:`/blog/category/${o.slug}/`},{default:h(()=>[v(w(o.name),1)]),_:2},1032,["to"])]))),128))])])]),We])}var Xe=g(Le,[["render",ze],["__scopeId","data-v-3b7d128c"]]);export{Xe as H};
