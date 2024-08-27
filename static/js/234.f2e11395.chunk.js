"use strict";(self.webpackChunke_store=self.webpackChunke_store||[]).push([[234],{7467:(e,s,t)=>{t.d(s,{A:()=>r});t(5043);var a=t(579);function r(e){let{label:s,type:t,name:r,value:l,onChange:n,className:i,placeholder:c,error:m}=e;return(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{className:"block sm:text-sm text-[8px] text-gray-700 uppercase",children:s}),(0,a.jsx)("input",{type:t,name:r,value:l,onChange:n,placeholder:c,className:`mt-1 block w-full md:px-3 md:py-2 p-1 md:text-base  border-2 border-black shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:sm:text-sm text-[8px] ${m&&"border-red-500"} ${i}`}),m&&(0,a.jsx)("p",{className:"text-red-500 md:text-sm text-[8px]",children:m})]})}},6721:(e,s,t)=>{t.d(s,{A:()=>r});t(5043);var a=t(579);function r(e){let{title:s,onClick:t,className:r,icon:l,type:n}=e;return(0,a.jsxs)("button",{type:n,onClick:t,className:` bg-primary p-1 group relative overflow-hidden  border-2 border-primary md:h-10 h-6  text-white hover:text-primary flex justify-center items-center ${r}`,children:[(0,a.jsx)("span",{className:"bg-white w-[500px] aspect-square absolute -top-96 -left-[500px] rotate-45 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-300"}),(0,a.jsxs)("div",{className:"flex justify-center items-center md:gap-2 gap-1 md:text-base text-[10px] uppercase  z-10 ",children:[(0,a.jsx)("span",{children:s}),(0,a.jsx)("span",{children:l&&l})]})]})}},7847:(e,s,t)=>{t.d(s,{A:()=>u});var a=t(5043),r=t(5051),l=t(3216),n=t(7962),i=t(3002),c=t(7196),m=t(5475),d=t(579);function o(e){let{to:s,icon:t,activeIcon:a}=e;const r=(0,l.zy)().pathname===s;return(0,d.jsx)(m.N_,{to:s,className:`hover:text-primary ${r&&"text-primary"}`,children:r?a:t})}var x=t(5187),p=t(1548);function u(e){let{dark:s,menuBtn:t,toggleDrawer:m,className:u}=e;const{loggedIn:h}=(0,a.useContext)(x.c),j=(0,l.Zp)();return(0,d.jsxs)("nav",{className:`md:px-16 px-5 w-full md:h-24 h-16 flex justify-between items-center z-50 ${s?"text-black/50":"text-white/50"} ${u}`,children:[(0,d.jsx)("button",{onClick:()=>j("/"),className:"uppercase md:text-3xl text-xl font-serif",children:(0,d.jsx)("img",{src:s?p.X.darkLogo:p.X.logo,className:"sm:w-24 sm:h-12 w-14 h-7",alt:"Logo"})}),(0,d.jsxs)("div",{className:"flex gap-2 md:text-xl",children:[(0,d.jsx)(o,{to:"/search",icon:(0,d.jsx)(r.Xj1,{}),activeIcon:(0,d.jsx)(c.teL,{})}),(0,d.jsx)(o,{to:"/cart",icon:(0,d.jsx)(i.Lpp,{}),activeIcon:(0,d.jsx)(i.Ey8,{})}),(0,d.jsx)(o,{to:h?"/auth/profile":"/auth/login",icon:(0,d.jsx)(r.G3M,{}),activeIcon:(0,d.jsx)(n.XPP,{})}),(0,d.jsx)(o,{to:"/",icon:(0,d.jsx)(i.Xuk,{}),activeIcon:(0,d.jsx)(i.j$i,{})}),t&&(0,d.jsx)("button",{className:"hover:text-primary",onClick:m,children:(0,d.jsx)(n.QtF,{})})]})]})}},3234:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var a=t(5043),r=t(7467),l=t(7306),n=t(9479),i=t(7847),c=t(6721),m=t(3216),d=t(1694),o=t.n(d),x=t(579);const p=o().object({name:o().string().required().messages({"any.required":"Name is required."}),email:o().string().email({minDomainSegments:2,tlds:{allow:["com","net"]}}).required().messages({"string.email":"Please enter a valid email address.","any.required":"Email is required."}),phone:o().string().required().messages({"any.required":"Phone number is required."}),address:o().string().required().messages({"any.required":"Address is required."})});function u(){const[e,s]=(0,a.useState)({name:"",email:"",phone:"",address:""}),[t,d]=(0,a.useState)({}),o=(0,m.Zp)(),u=t=>{s({...e,[t.target.name]:t.target.value})};return(0,x.jsxs)("div",{children:[(0,x.jsx)(i.A,{dark:!0}),(0,x.jsxs)("div",{className:"md:grid grid-cols-8",children:[(0,x.jsxs)("div",{className:"col-span-5 mt-10",children:[(0,x.jsx)(n.A,{num:1}),(0,x.jsxs)("form",{className:"md:p-10 p-3 mt-5 flex flex-col md:gap-6 gap-4",onSubmit:s=>{s.preventDefault(),(()=>{const{error:s}=p.validate(e,{abortEarly:!1});if(s){const e={};return s.details.forEach((s=>{let{path:t,message:a}=s;e[t[0]]=a})),d(e),!1}return d({}),!0})()&&o("/shipping")},children:[(0,x.jsx)("h2",{className:"md:text-2xl text-lg -mb-1 uppercase font-semibold",children:"Contact Person"}),(0,x.jsx)(r.A,{type:"text",label:"Name",name:"name",placeholder:"Eg: John Doe",value:e.name,onChange:u,error:t.name}),(0,x.jsx)(r.A,{type:"email",label:"Email",name:"email",placeholder:"Eg: example@example.com",value:e.email,onChange:u,error:t.email}),(0,x.jsx)(r.A,{type:"text",label:"Phone",name:"phone",placeholder:"+20 111-222-33333",value:e.phone,onChange:u,error:t.phone}),(0,x.jsx)(r.A,{type:"text",label:"Address",name:"address",placeholder:"Eg: 123, Street Name, City, Country",value:e.address,onChange:u,error:t.address}),(0,x.jsx)(c.A,{title:"Continue to Shipping",className:"md:w-1/3 w-full self-end",type:"submit"})]})]}),(0,x.jsx)("div",{className:"col-span-3",children:(0,x.jsx)(l.A,{})})]})]})}},7306:(e,s,t)=>{t.d(s,{A:()=>n});var a=t(5043),r=t(2603),l=t(579);function n(){const{cart:e}=(0,a.useContext)(r.M),s=(0,a.useMemo)((()=>e.reduce(((e,s)=>e+s.price*s.quantity),0)),[e]);return(0,l.jsxs)("div",{className:"md:block hidden",children:[(0,l.jsx)("h2",{className:"text-2xl mb-5 font-semibold",children:"ORDER SUMMARY"}),(0,l.jsx)("div",{className:"flex flex-col items-center justify-center gap-3",children:e.map(((e,s)=>(0,l.jsxs)("div",{className:"flex w-full md:gap-3 gap-3 md:h-36 h-32",children:[(0,l.jsx)("div",{className:"h-full w-32 bg-primary/10 flex justify-center items-center",children:(0,l.jsx)("img",{src:e.images[0],alt:e.name,className:"w-[100%] aspect-square object-cover rounded-md"})}),(0,l.jsxs)("div",{className:"flex flex-col w-full gap-3",children:[(0,l.jsx)("h2",{className:" uppercase",children:e.title}),(0,l.jsxs)("p",{className:"text-black/30 ",children:["x",e.quantity]}),(0,l.jsxs)("p",{className:"",children:["$",e.price*e.quantity]})]})]},s)))}),(0,l.jsxs)("div",{className:"flex justify-between font-semibold mr-10 mt-5 text-lg",children:[(0,l.jsx)("p",{children:"Total Price"}),(0,l.jsxs)("p",{children:["$",s]})]})]})}},9479:(e,s,t)=>{t.d(s,{A:()=>n});t(5043);var a=t(7962),r=t(184),l=t(579);function n(e){let{num:s}=e;return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"md:mx-10 mx-2",children:[(0,l.jsx)("h1",{className:"md:text-6xl text-2xl font-serif uppercase",children:"Checkout Form"}),(0,l.jsxs)("div",{className:" md:mt-10 mt-8 flex gap-3",children:[(0,l.jsx)(i,{num:s,stepNum:1,title:"Personal info",icon:(0,l.jsx)(a.XPP,{}),checked:1!==s&&!0}),(0,l.jsx)("div",{className:" md:h-1 h-[1px] md:w-28 w-14 bg-black/20 md:-ml-40 -ml-20 mt-3"}),(0,l.jsx)(i,{num:s,stepNum:2,title:"Shipping Delivery",icon:(0,l.jsx)(r.dv1,{}),checked:3===s&&!0}),(0,l.jsx)("div",{className:" md:h-1 h-[1px] md:w-28 w-14 bg-black/20 md:-ml-40 -ml-20 mt-3"}),(0,l.jsx)(i,{num:s,stepNum:3,title:"confirmation",icon:(0,l.jsx)(r.x1c,{})})]})]})})}const i=e=>{let{stepNum:s,title:t,icon:a,num:n,checked:i}=e;return(0,l.jsxs)("div",{className:"flex flex-col gap-1  md:w-48 w-32 \n    ",children:[(0,l.jsx)("div",{className:` md:w-8 md:h-8 h-6 w-6 md:text-base text-xs border-[1px] rounded-full flex justify-center items-center \n        ${n===s?"bg-primary/10 text-primary":"border-[1px]"}\n        ${i&&"bg-green-500/30 border-0 text-green-800"}\n        `,children:i?(0,l.jsx)(r.CMH,{}):a}),(0,l.jsxs)("p",{className:" capitalize md:text-xs text-[7px] text-black/40",children:["step ",s]}),(0,l.jsx)("p",{className:`" uppercase md:text-base text-[8px] "  ${n===s&&"text-primary"}`,children:t})]})}}}]);
//# sourceMappingURL=234.f2e11395.chunk.js.map