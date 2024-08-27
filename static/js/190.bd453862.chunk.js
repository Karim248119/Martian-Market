"use strict";(self.webpackChunke_store=self.webpackChunke_store||[]).push([[190],{9544:(e,t,s)=>{s.d(t,{h4:()=>a,op:()=>r,v5:()=>c,vr:()=>o,zh:()=>n});const r=async()=>{try{const e=await fetch("https://dummyjson.com/products");return(await e.json()).products}catch(e){console.error(e)}},a=async()=>{try{const e=await fetch("https://dummyjson.com/products/category-list");return await e.json()}catch(e){console.error(e)}},c=async e=>{try{const t=await fetch(`https://dummyjson.com/products/category/${e}`);return(await t.json()).products}catch(t){console.error(t)}},n=async e=>{try{const t=await fetch(`https://dummyjson.com/products/search?q=${e}`);return(await t.json()).products}catch(t){console.error(t)}},o=async()=>{try{const e=await fetch("https://dummyjson.com/comments");return(await e.json()).comments}catch(e){console.error(e)}}},6917:(e,t,s)=>{s.d(t,{A:()=>a});s(5043);var r=s(579);function a(e){let{categories:t,selectedCategory:s,FilterProducts:a}=e;return(0,r.jsx)("div",{className:"flex flex-wrap justify-center gap-3",children:t.map((e=>(0,r.jsx)("button",{className:" border-2 md:py-1 md:px-2 px-1 md:text-base text-xs inline-flex items-center "+(s===e.slug?"text-primary border-primary":"hover:text-primary hover:border-primary border-black/30 text-black/30"),onClick:()=>a(e.slug),children:e.name},e.id)))})}},9005:(e,t,s)=>{s.d(t,{A:()=>x});var r=s(5043),a=s(184),c=s(3216),n=s(2603),o=s(9719),i=s(1462),l=s(579);function d(e){let{product:t,index:s}=e;const d=(0,c.Zp)(),{addToCart:x,cart:m}=(0,r.useContext)(n.M),u=m.find((e=>e.id===t.id));return(0,l.jsxs)(o.P.div,{initial:{opacity:0,y:100*s},animate:{opacity:1,y:0,transition:{delay:.5,duration:1}},className:"w-full sm:h-[400px] h-[250px] sm:p-3 p-2 rounded-lg shadow-lg bg-white  ",children:[(0,l.jsx)("button",{className:"  w-full h-[60%] rounded-md bg-primary/10 hover:bg-primary/30 flex justify-center items-center relative",children:(0,l.jsx)("img",{onClick:()=>{d("/product-details",{state:{product:t}})},src:t.images[0],alt:t.name,className:"w-[100%] h-[100%] object-cover rounded-md"})}),(0,l.jsxs)("div",{className:"w-full h-[40%]  flex flex-col items-center justify-between capitalize text-center pt-5 relative",children:[(0,l.jsx)("button",{onClick:()=>{x(t)},className:`h-10 w-10 flex justify-center items-center bg-white shadow\n          rounded-full  absolute -top-5 left-1/2\n          -translate-x-1/2  z-30 duration-300\n          ${u?" text-red-600 hover:text-white hover:bg-red-600":"text-green-600 hover:bg-green-600 hover:text-white"}\n          `,children:u?(0,l.jsx)(i.g3M,{}):(0,l.jsx)(i.Qf0,{})}),(0,l.jsx)("p",{className:"text-black/50 sm:text-sm text-[10px] ",children:t.category}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("div",{className:"flex gap-1 text-primary sm:text-sm text-[8px]",children:Array.from({length:5},((e,s)=>s<t.rating?(0,l.jsx)(a.gt3,{},s):(0,l.jsx)(a.wei,{},s)))}),(0,l.jsxs)("p",{className:"sm:text-xs text-[8px] text-black/50",children:["(",t.rating,")"]})]}),(0,l.jsx)("p",{className:"font-semibold sm:text-base text-xs",children:t.title}),(0,l.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,l.jsxs)("p",{className:" text-primary font-semibold sm:text-base text-[10px]",children:["$",(t.price-t.price*t.discountPercentage/100).toFixed(1)]}),(0,l.jsxs)("p",{className:"text-black/50 line-through sm:text-xs text-[8px]",children:["$",t.price]})]})]})]})}function x(e){let{products:t}=e;return(0,l.jsx)("div",{className:"w-full sm:p-10 p-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-2",children:t.map(((e,t)=>(0,l.jsx)(d,{product:e,index:t},e.id)))})}},7847:(e,t,s)=>{s.d(t,{A:()=>u});var r=s(5043),a=s(5051),c=s(3216),n=s(7962),o=s(3002),i=s(7196),l=s(5475),d=s(579);function x(e){let{to:t,icon:s,activeIcon:r}=e;const a=(0,c.zy)().pathname===t;return(0,d.jsx)(l.N_,{to:t,className:`hover:text-primary ${a&&"text-primary"}`,children:a?r:s})}s(8996),s(925);var m=s(5187);function u(e){let{dark:t,menuBtn:s,toggleDrawer:l,className:u}=e;const{loggedIn:p}=(0,r.useContext)(m.c),h=(0,c.Zp)();return(0,d.jsxs)("nav",{className:`md:px-16 px-5 w-full md:h-24 h-16 flex justify-between items-center z-50 ${t?"text-black/50":"text-white/50"} ${u}`,children:[(0,d.jsx)("button",{onClick:()=>h("/"),className:"uppercase md:text-3xl text-xl font-serif",children:(0,d.jsx)("img",{src:t?"../assets/DLOGO.png":"../assets/LOGO.png",className:"sm:w-24 sm:h-12 w-14 h-7",alt:"Logo"})}),(0,d.jsxs)("div",{className:"flex gap-2 md:text-xl",children:[(0,d.jsx)(x,{to:"/search",icon:(0,d.jsx)(a.Xj1,{}),activeIcon:(0,d.jsx)(i.teL,{})}),(0,d.jsx)(x,{to:"/cart",icon:(0,d.jsx)(o.Lpp,{}),activeIcon:(0,d.jsx)(o.Ey8,{})}),(0,d.jsx)(x,{to:p?"/auth/profile":"/auth/login",icon:(0,d.jsx)(a.G3M,{}),activeIcon:(0,d.jsx)(n.XPP,{})}),(0,d.jsx)(x,{to:"/",icon:(0,d.jsx)(o.Xuk,{}),activeIcon:(0,d.jsx)(o.j$i,{})}),s&&(0,d.jsx)("button",{className:"hover:text-primary",onClick:l,children:(0,d.jsx)(n.QtF,{})})]})]})}},1190:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s(5043),a=s(9544),c=s(7847),n=s(9005),o=s(6917),i=s(579);const l=[{id:1,slug:"tops",name:"tops"},{id:2,slug:"womens-dresses",name:"dresses"},{id:3,slug:"womens-jewellery",name:"jewellery"},{id:4,slug:"womens-shoes",name:"shoes"},{id:5,slug:"womens-watches",name:"watches"},{id:6,slug:"beauty",name:"make-up"}];function d(){const[e,t]=(0,r.useState)([]),[s,d]=(0,r.useState)(!1),[x,m]=(0,r.useState)(null),[u,p]=(0,r.useState)("tops");return(0,r.useEffect)((()=>{(async()=>{try{const e=await(0,a.v5)("tops");t(e),d(!1)}catch(e){m("Failed to fetch products")}finally{d(!1)}})()}),[]),s?(0,i.jsx)("p",{children:"Loading..."}):x?(0,i.jsx)("p",{children:x}):(0,i.jsxs)("div",{children:[(0,i.jsx)(c.A,{dark:!0}),(0,i.jsx)(o.A,{categories:l,selectedCategory:u,FilterProducts:async e=>{try{p(e);const s=await(0,a.v5)(e);t(s),d(!1)}catch(s){m("Failed to fetch products")}finally{d(!1)}}}),(0,i.jsx)(n.A,{products:e})]})}}}]);
//# sourceMappingURL=190.bd453862.chunk.js.map