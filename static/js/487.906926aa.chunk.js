"use strict";(self.webpackChunke_store=self.webpackChunke_store||[]).push([[487],{9544:(t,e,s)=>{s.d(e,{h4:()=>c,op:()=>a,v5:()=>r,vr:()=>n,zh:()=>l});const a=async()=>{try{const t=await fetch("https://dummyjson.com/products");return(await t.json()).products}catch(t){console.error(t)}},c=async()=>{try{const t=await fetch("https://dummyjson.com/products/category-list");return await t.json()}catch(t){console.error(t)}},r=async t=>{try{const e=await fetch(`https://dummyjson.com/products/category/${t}`);return(await e.json()).products}catch(e){console.error(e)}},l=async t=>{try{const e=await fetch(`https://dummyjson.com/products/search?q=${t}`);return(await e.json()).products}catch(e){console.error(e)}},n=async()=>{try{const t=await fetch("https://dummyjson.com/comments");return(await t.json()).comments}catch(t){console.error(t)}}},9005:(t,e,s)=>{s.d(e,{A:()=>d});var a=s(5043),c=s(184),r=s(3216),l=s(2603),n=s(9719),o=s(1462),i=s(579);function x(t){let{product:e,index:s}=t;const x=(0,r.Zp)(),{addToCart:d,cart:m}=(0,a.useContext)(l.M),u=m.find((t=>t.id===e.id));return(0,i.jsxs)(n.P.div,{initial:{opacity:0,y:100*s},animate:{opacity:1,y:0,transition:{delay:.5,duration:1}},className:"w-full sm:h-[400px] h-[250px] sm:p-3 p-2 rounded-lg shadow-lg bg-white  ",children:[(0,i.jsx)("button",{className:"  w-full h-[60%] rounded-md bg-primary/10 hover:bg-primary/30 flex justify-center items-center relative",children:(0,i.jsx)("img",{onClick:()=>{x("/product-details",{state:{product:e}})},src:e.images[0],alt:e.name,className:"w-[100%] h-[100%] object-cover rounded-md"})}),(0,i.jsxs)("div",{className:"w-full h-[40%]  flex flex-col items-center justify-between capitalize text-center pt-5 relative",children:[(0,i.jsx)("button",{onClick:()=>{d(e)},className:`h-10 w-10 flex justify-center items-center bg-white shadow\n          rounded-full  absolute -top-5 left-1/2\n          -translate-x-1/2  z-30 duration-300\n          ${u?" text-red-600 hover:text-white hover:bg-red-600":"text-green-600 hover:bg-green-600 hover:text-white"}\n          `,children:u?(0,i.jsx)(o.g3M,{}):(0,i.jsx)(o.Qf0,{})}),(0,i.jsx)("p",{className:"text-black/50 sm:text-sm text-[10px] ",children:e.category}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("div",{className:"flex gap-1 text-primary sm:text-sm text-[8px]",children:Array.from({length:5},((t,s)=>s<e.rating?(0,i.jsx)(c.gt3,{},s):(0,i.jsx)(c.wei,{},s)))}),(0,i.jsxs)("p",{className:"sm:text-xs text-[8px] text-black/50",children:["(",e.rating,")"]})]}),(0,i.jsx)("p",{className:"font-semibold sm:text-base text-xs",children:e.title}),(0,i.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,i.jsxs)("p",{className:" text-primary font-semibold sm:text-base text-[10px]",children:["$",(e.price-e.price*e.discountPercentage/100).toFixed(1)]}),(0,i.jsxs)("p",{className:"text-black/50 line-through sm:text-xs text-[8px]",children:["$",e.price]})]})]})]})}function d(t){let{products:e}=t;return(0,i.jsx)("div",{className:"w-full sm:p-10 p-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-2",children:e.map(((t,e)=>(0,i.jsx)(x,{product:t,index:e},t.id)))})}},7847:(t,e,s)=>{s.d(e,{A:()=>p});var a=s(5043),c=s(5051),r=s(3216),l=s(7962),n=s(3002),o=s(7196),i=s(5475),x=s(579);function d(t){let{to:e,icon:s,activeIcon:a}=t;const c=(0,r.zy)().pathname===e;return(0,x.jsx)(i.N_,{to:e,className:`hover:text-primary ${c&&"text-primary"}`,children:c?a:s})}var m=s(5187),u=s(3614),h=s(2603);function p(t){let{dark:e,menuBtn:s,toggleDrawer:i,className:p}=t;const{loggedIn:j}=(0,a.useContext)(m.c),f=(0,r.Zp)(),{cart:g}=(0,a.useContext)(h.M),y=(0,a.useMemo)((()=>g.reduce(((t,e)=>t+e.quantity),0)),[g]);return(0,x.jsxs)("nav",{className:`md:px-16 px-5 w-full md:h-24 h-16 flex justify-between items-center z-50 ${e?"text-black/50":"text-white/50"} ${p}`,children:[(0,x.jsx)("button",{onClick:()=>f("/"),className:"uppercase md:text-3xl text-xl font-serif",children:(0,x.jsx)("img",{src:e?u.X.darkLogo:u.X.logo,className:"sm:w-24 sm:h-12 w-14 h-7",alt:"Logo"})}),(0,x.jsxs)("div",{className:"flex gap-2 md:text-xl",children:[(0,x.jsx)(d,{to:"/search",icon:(0,x.jsx)(c.Xj1,{}),activeIcon:(0,x.jsx)(o.teL,{})}),(0,x.jsxs)("div",{className:" relative",children:[(0,x.jsx)("span",{className:" md:text-[6px] text-[5px] absolute md:h-3 md:w-3 h-2 w-2 flex justify-center items-center text-white left-1/2 -translate-x-1/2 md:-top-2 -top-1 rounded-full bg-primary ",children:y}),(0,x.jsx)(d,{to:"/cart",icon:(0,x.jsx)(n.Lpp,{}),activeIcon:(0,x.jsx)(n.Ey8,{})})]}),(0,x.jsx)(d,{to:j?"/auth/profile":"/auth/login",icon:(0,x.jsx)(c.G3M,{}),activeIcon:(0,x.jsx)(l.XPP,{})}),(0,x.jsx)(d,{to:"/",icon:(0,x.jsx)(n.Xuk,{}),activeIcon:(0,x.jsx)(n.j$i,{})}),s&&(0,x.jsx)("button",{className:"hover:text-primary",onClick:i,children:(0,x.jsx)(l.QtF,{})})]})]})}},5487:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=s(5043),c=s(9544),r=s(9005),l=s(9679),n=s(579);const o=t=>{let{isOpen:e,onClose:s,content:a,FilterProducts:c,fetchProducts:r}=t;return(0,n.jsxs)("div",{className:`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${e?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out z-50`,children:[(0,n.jsx)("button",{className:"absolute top-4 right-4 text-xl font-bold",onClick:s,children:"\u2715"}),(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("h2",{className:"md:text-2xl text-lg font-semibold font-serif uppercase mt-5",children:"Categories"}),(0,n.jsxs)("div",{className:"flex flex-col  items-start gap-1 md:mt-3 mt-1 md:text-sm text-xs ",children:[(0,n.jsx)("button",{className:"text-black/50 hover:text-primary capitalize",onClick:()=>{r(),s()},children:"All"}),a.map(((t,e)=>(0,n.jsx)("button",{className:"text-black/50 hover:text-primary capitalize",onClick:()=>{c(t),s()},children:t},e)))]})]})]})};var i=s(3216),x=s(7847);const d=function(){const[t,e]=(0,a.useState)([]),[s,d]=(0,a.useState)([]),[m,u]=(0,a.useState)("All Products"),[h,p]=(0,a.useState)(""),[j,f]=(0,a.useState)(!0),[g,y]=(0,a.useState)(null),[w,b]=(0,a.useState)(!1),v=((0,i.Zp)(),(0,a.useCallback)((()=>{b((t=>!t))}),[])),N=(0,a.useCallback)((async()=>{try{const t=await(0,c.op)();e(t),f(!1),u("All Products")}catch(t){y("Failed to fetch products")}finally{f(!1)}}),[]),k=(0,a.useCallback)((async()=>{try{const t=await(0,c.h4)();d(t)}catch(t){y("Failed to fetch products")}finally{f(!1)}}),[]),C=(0,a.useCallback)((async t=>{try{p(t);const s=await(0,c.v5)(t);e(s),u(t),f(!1)}catch(s){y("Failed to fetch products")}finally{f(!1)}}),[]);return(0,a.useEffect)((()=>{N(),k()}),[N,k]),j?(0,n.jsx)(l.A,{}):g?(0,n.jsx)("p",{children:g}):(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)(x.A,{menuBtn:!0,toggleDrawer:v,dark:!0}),(0,n.jsx)("h2",{className:" md:text-4xl text-sm font-serif  md:-mb-5 md:mx-auto text-center  uppercase",children:m}),(0,n.jsx)("div",{children:(0,n.jsx)(o,{isOpen:w,onClose:v,content:s,FilterProducts:C,fetchProducts:N})}),(0,n.jsx)(r.A,{products:t})]})}}}]);
//# sourceMappingURL=487.906926aa.chunk.js.map