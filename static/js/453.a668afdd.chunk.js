"use strict";(self.webpackChunke_store=self.webpackChunke_store||[]).push([[453],{6721:(e,s,t)=>{t.d(s,{A:()=>l});t(5043);var a=t(579);function l(e){let{title:s,onClick:t,className:l,icon:r,type:c}=e;return(0,a.jsxs)("button",{type:c,onClick:t,className:` bg-primary p-1 group relative overflow-hidden  border-2 border-primary md:h-10 h-6  text-white hover:text-primary flex justify-center items-center ${l}`,children:[(0,a.jsx)("span",{className:"bg-white w-[500px] aspect-square absolute -top-96 -left-[500px] rotate-45 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-300"}),(0,a.jsxs)("div",{className:"flex justify-center items-center md:gap-2 gap-1 md:text-base text-[10px] uppercase  z-10 ",children:[(0,a.jsx)("span",{children:s}),(0,a.jsx)("span",{children:r&&r})]})]})}},7847:(e,s,t)=>{t.d(s,{A:()=>p});var a=t(5043),l=t(5051),r=t(3216),c=t(7962),n=t(3002),o=t(7196),i=t(5475),x=t(579);function m(e){let{to:s,icon:t,activeIcon:a}=e;const l=(0,r.zy)().pathname===s;return(0,x.jsx)(i.N_,{to:s,className:`hover:text-primary ${l&&"text-primary"}`,children:l?a:t})}var d=t(5187);function p(e){let{dark:s,menuBtn:t,toggleDrawer:i,className:p}=e;const{loggedIn:u}=(0,a.useContext)(d.c),h=(0,r.Zp)();return(0,x.jsxs)("nav",{className:`md:px-16 px-5 w-full md:h-24 h-16 flex justify-between items-center z-50 ${s?"text-black/50":"text-white/50"} ${p}`,children:[(0,x.jsx)("button",{onClick:()=>h("/"),className:"uppercase md:text-3xl text-xl font-serif",children:(0,x.jsx)("img",{src:s?"./assets/DLOGO.png":"./assets/LOGO.png",className:"sm:w-24 sm:h-12 w-14 h-7",alt:"Logo"})}),(0,x.jsxs)("div",{className:"flex gap-2 md:text-xl",children:[(0,x.jsx)(m,{to:"/search",icon:(0,x.jsx)(l.Xj1,{}),activeIcon:(0,x.jsx)(o.teL,{})}),(0,x.jsx)(m,{to:"/cart",icon:(0,x.jsx)(n.Lpp,{}),activeIcon:(0,x.jsx)(n.Ey8,{})}),(0,x.jsx)(m,{to:u?"/auth/profile":"/auth/login",icon:(0,x.jsx)(l.G3M,{}),activeIcon:(0,x.jsx)(c.XPP,{})}),(0,x.jsx)(m,{to:"/",icon:(0,x.jsx)(n.Xuk,{}),activeIcon:(0,x.jsx)(n.j$i,{})}),t&&(0,x.jsx)("button",{className:"hover:text-primary",onClick:i,children:(0,x.jsx)(c.QtF,{})})]})]})}},453:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var a=t(5043),l=t(3216),r=t(9679),c=t(5187),n=t(925),o=t(7847),i=t(6721),x=t(184),m=t(5394),d=t(3002),p=t(579);const u=function(){const{user:e,loading:s}=(0,a.useContext)(c.c),t=(0,l.Zp)();return s?(0,p.jsx)(r.A,{}):e?(0,p.jsxs)("div",{className:"flex min-h-screen",children:[(0,p.jsx)(o.A,{dark:!0,className:" absolute"}),(0,p.jsx)("div",{className:"hidden md:flex md:w-1/2 bg-cover bg-center",style:{backgroundImage:"url(https://images.pexels.com/photos/5585862/pexels-photo-5585862.jpeg)"}}),(0,p.jsx)("div",{className:"w-full md:w-1/2 flex items-center justify-center bg-white",children:(0,p.jsxs)("div",{className:"w-full max-w-md p-8 rounded-lg ",children:[(0,p.jsx)(d.YFW,{className:" text-9xl text-primary md:mb-10 mb-5 m-auto"}),(0,p.jsx)("h2",{className:"md:text-4xl text-2xl font-semibold md:mb-10 mb-5 font-serif",children:"PROFILE"}),(0,p.jsxs)("div",{className:" flex flex-row gap-2 items-center md:mb-6 mb-3 ml-1",children:[(0,p.jsx)(x.x$1,{className:" text-primary/70"}),(0,p.jsxs)("p",{className:"md:text-lg text-sm text-black/50",children:[" ",e.name]})]}),(0,p.jsxs)("div",{className:" flex flex-row gap-2 items-center md:mb-10 mb-5 ml-1",children:[(0,p.jsx)(x.maD,{className:" text-primary/70"}),(0,p.jsxs)("p",{className:"md:text-lg text-sm text-black/50",children:[" ",e.email]})]}),(0,p.jsx)(i.A,{title:"LOG OUT",onClick:async()=>{try{await n.j.signOut(),t("/"),console.log("User logged out successfully!")}catch(e){console.error("Error logging out:",e.message)}},className:"w-full py-3 px-4 bg-primary text-white font-semibold shadow-sm focus:outline-none  ",icon:(0,p.jsx)(m.HSs,{})})]})})]}):(t("/auth/login"),null)}}}]);
//# sourceMappingURL=453.a668afdd.chunk.js.map