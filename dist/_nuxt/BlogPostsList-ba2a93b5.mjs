import{_ as p,o,c as r,i as h,F as m,h as g,d as e,f,w as u,b as c,t as l,e as k,p as x,a as $,C as B}from"./entry-ab855759.mjs";import{f as S}from"./index-d02c2915.mjs";import{p as P}from"./placeholder-733c4eac.mjs";const N={name:"ZeroData"};function w(s,_,a,n,v,y){return o(),r("p",null,"Sorry,No posts found matching this search.")}var D=p(N,[["render",w]]);const I={name:"BlogPostsList",props:["blogPosts"],setup(s,{expose:_}){_();const a={ZeroData:D,formatTime:S,placeholder:P};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},b=s=>(x("data-v-7dd10737"),s=s(),$(),s),V={class:"row"},C={class:"blog-roll-card"},L={class:"blog-roll-card-meta"},T={class:"blog-roll-card-header"},Z={class:"blog-roll-card-meta-info"},F={href:"#"},j=["src"],E={href:"#"},M=b(()=>e("i",{class:"lni lni-calendar"},null,-1)),O=b(()=>e("i",{class:"lni lni-tag"},null,-1)),R={key:0,class:"single-post-thumbnail"},q=["src","alt"],z={class:"blog-roll-card-body"},A={class:"blog-roll-card-footer text-center"},G=c("Read More");function H(s,_,a,n,v,y){const i=B;return o(),r("div",V,[a.blogPosts.length===0?(o(),h(n.ZeroData,{key:0})):(o(!0),r(m,{key:1},g(a.blogPosts,t=>(o(),r("div",{key:t.slug,class:"col-12 col-lg-6"},[e("div",C,[e("div",L,[e("h2",T,[f(i,{to:`/blog/${t.slug}/`},{default:u(()=>[c(l(t.title),1)]),_:2},1032,["to"])]),e("ul",Z,[e("li",null,[e("a",F,[e("img",{src:t.author.profile_image||n.placeholder,alt:"#"},null,8,j),c(" "+l(t.author.first_name)+" "+l(t.author.last_name),1)])]),e("li",null,[e("a",E,[M,c(" "+l(n.formatTime(t.published)),1)])]),e("li",null,[(o(!0),r(m,null,g(t.tags,d=>(o(),h(i,{key:d.slug,to:`/blog/tag/${d.slug}/`,class:"tag"},{default:u(()=>[O,c(" "+l(d.name),1)]),_:2},1032,["to"]))),128))])])]),t.featured_image?(o(),r("div",R,[e("img",{src:t.featured_image,alt:t.featured_image_alt},null,8,q)])):k("",!0),e("div",z,[e("p",null,l(t.summary),1)]),e("div",A,[f(i,{to:`/blog/${t.slug}/`,class:"main-btn btn-hover"},{default:u(()=>[G]),_:2},1032,["to"])])])]))),128))])}var U=p(I,[["render",H],["__scopeId","data-v-7dd10737"]]);export{U as B};
