import{_ as w,o as c,c as i,a as e,b as d,w as h,h as D,f,p as A,d as I,e as y,F as g,j as v,k as b,L as E,G as $,m as G,C as B,l as P,q as L,s as j,M,N as R,g as N,t as O}from"./entry-01a6ba94.mjs";import{u as W}from"./asyncData-22e2db75.mjs";import{B as z}from"./BlogPostTile-0ceb9b6c.mjs";import{S as q}from"./Seo-375534b9.mjs";import{B as J}from"./BlogWidget-b52b3481.mjs";const K={name:"HeroSection",props:["fields"],setup(s,{expose:r}){r();const t={props:s};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},Q=s=>(A("data-v-42efc549"),s=s(),I(),s),U={class:"body"},X={class:"hero"},Y={class:"hero-article"},Z=D('<div class="hero-text" data-v-42efc549><h1 class="lg-text" data-v-42efc549>Relax and Enjoy the<br data-v-42efc549> <span class="colored-text" data-v-42efc549> Best FM </span> on the<br data-v-42efc549> planet earth...</h1><h1 class="mobile-text" data-v-42efc549>Relax and Enjoy the <span class="colored-text" data-v-42efc549> Best FM </span> on the planet earth...</h1></div><div class="hero-para" data-v-42efc549><p data-v-42efc549>Listen to exciting talks about sport, recent<br data-v-42efc549> news, dramas, relationships and many more on<br data-v-42efc549> sparkling FM</p></div>',2),ee={class:"hero-links"},te=f("Learn More"),se=f("Read our Articles"),oe=Q(()=>e("div",{class:"hero-img"},[e("img",{src:"https://i.ibb.co/TmGH9xG/Group-1.png",alt:"Group-1",border:"0"})],-1));function ae(s,r,n,t,_,u){const o=y;return c(),i("div",U,[e("div",X,[e("div",Y,[Z,e("div",ee,[d(o,{style:{"background-color":"rgba(229, 137, 70, 1)"},tag:"li",to:"/about",class:"nuxt-link-exact-active"},{default:h(()=>[te]),_:1}),d(o,{class:"second-link",to:"/blog/"},{default:h(()=>[se]),_:1})])]),oe])])}var ne=w(K,[["render",ae],["__scopeId","data-v-42efc549"]]);const ce={},re={},ie={name:"BlogSection",props:["blogPosts"],setup(s,{expose:r}){r();const n={BlogPostTile:z};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},le={id:"blog",class:"blog-section"},de={class:"container"},_e=e("div",{class:"row justify-content-center"},[e("div",{class:"col-lg-6 col-md-10"},[e("div",{class:"section-title text-center"},[e("h2",null,"Latest News"),e("p")])])],-1),pe={class:"row justify-content-center"},ue=f(" View All News ");function ge(s,r,n,t,_,u){const o=y;return c(),i("section",le,[e("div",de,[_e,e("div",pe,[(c(!0),i(g,null,v(n.blogPosts,(a,l)=>(c(),b(t.BlogPostTile,E({key:l},a),null,16))),128))]),e("p",null,[d(o,{class:"main-btn btn-hover mt-5",to:"/blog/"},{default:h(()=>[ue]),_:1})])])])}var he=w(ie,[["render",ge]]);const fe={},me={name:"HomeView",props:["slug"],async setup(s,{expose:r}){r();let n,t;const _=s,{categories:u}=$(),{$butterCMS:o}=G(),{setError:a}=B(),{handleMounted:l}=P("layout"),{data:H,refresh:x}=([n,t]=L(async()=>W("home-data",async()=>{var k;const T=(k=_.slug)!=null?k:"landing-page-with-components";try{const p=await(o==null?void 0:o.page.retrieve("landing-page",T)),C=p==null?void 0:p.data.data,m=await(o==null?void 0:o.post.list({page:1,page_size:3})),F=m==null?void 0:m.data.data;return{pageData:C,blogPosts:F}}catch(p){return a(p),null}})),n=await n,t(),n);j(x);const S={categories:u,$butterCMS:o,setError:a,handleMounted:l,props:_,data:H,refresh:x,inject:P,onMounted:j,HeroSection:ne,TwoColumnWithImageSection:ce,FeaturesSection:re,BlogSection:he,TestimonialsSection:fe,useApiError:B,Seo:q,BlogWidget:J,useCategories:$};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}},V=s=>(A("data-v-3b7d128c"),s=s(),I(),s),ve={class:"category"},be={class:"widget categories-widget"},we=V(()=>e("h5",{class:"widget-title"},"Categories",-1)),ye={class:"categories-list"},xe=V(()=>e("div",{class:"download"},[e("a",{href:"../assets/files/advert.pdf",download:"Advert"},"Advertisments? Click here ->")],-1));function Se(s,r,n,t,_,u){const o=y;return c(),i("div",null,[d(t.Seo,M(R(t.data.pageData.fields.seo)),null,16),(c(!0),i(g,null,v(t.data.pageData.fields.body,(a,l)=>(c(),i(g,null,[a.type==="hero"?(c(),b(t.HeroSection,{key:l,fields:a.fields},null,8,["fields"])):N("",!0),a.type==="two_column_with_image"?(c(),b(t.TwoColumnWithImageSection,{key:l,fields:a.fields},null,8,["fields"])):N("",!0)],64))),256)),d(t.BlogSection,{"blog-posts":t.data.blogPosts},null,8,["blog-posts"]),e("section",ve,[e("div",be,[we,e("ul",ye,[(c(!0),i(g,null,v(t.categories,a=>(c(),i("li",{key:a.slug},[d(o,{to:`/blog/category/${a.slug}/`},{default:h(()=>[f(O(a.name),1)]),_:2},1032,["to"])]))),128))])])]),xe])}var Ne=w(me,[["render",Se],["__scopeId","data-v-3b7d128c"]]);export{Ne as H};
