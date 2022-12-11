import{j as t,m as o,a as e,u as j,P as I,E as A,M as S,r as h,b as B,C,L as f,i as E,c as F,d as y,e as g,f as b,F as P,R as z,g as w,h as L,k as V,B as R}from"./vendor.b6b2be9a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const T=()=>t(o.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},className:"h-screen flex flex-col relative text-center md:text-left md:flex-row ma-w-7xl px-10 justify-evenly mx-auto items-center",children:[e("h3",{className:"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl",children:"About"}),e(o.img,{initial:{x:-200,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:1.2},viewport:{once:!0},src:"profile.jpg",className:"-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"}),t("div",{className:"space-y-10 px-0 md:px-10",children:[t("h4",{className:"text-4xl font-semibold",children:["Here is a",e("span",{className:"underline decoration-[#7AB0A]/50",children:"   little "})," ","background"]}),t("p",{className:"text-base ",children:["I  am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. A key strength is communication; building strong relationships with people in order to deliver the best results.",e("br",{}),"Recently, I completed  degree, including CS and Statisitic at the Colombo University and I am now fully employed by Clearly Presented as a Fullstack Developer."]})]})]}),D=()=>t(o.div,{initial:{opacity:0},animate:{scale:[1,2,2,3,1],opacity:[.1,.2,.4,.8,.1,1],borderRadius:["20%","20%","50%","80%","20%"]},transition:{duration:2.5},className:"relative flex justify-center items-center",children:[e("div",{className:" absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"}),e("div",{className:" absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 "}),e("div",{className:"  border border-[#F7AB0A] rounded-full opacity-20 h-[650px] w-[650px] mt-52  absolute animate-pulse"})]}),H=()=>{const{register:a,handleSubmit:s,watch:n,formState:{errors:i}}=j();return t("div",{className:"h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly\r mx-auto items-center",children:[e("h3",{className:"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl",children:"Contact"}),t("div",{className:"flex flex-col space-y-10",children:[t("h4",{className:"text-4xl font-semibold",children:["I have got just what",e("span",{className:"decoration-[#F7AB0A]/50 underline",children:"Lets Talk"})]}),t("div",{className:"space-y-10",children:[t("div",{className:"flex items-center space-x-5 justify-center",children:[e(I,{className:"text-[#F7AB0A] h-7 w-7 animate-pulse"}),e("p",{className:"text-2xl",children:"+94 74 191 7084"})]}),t("div",{className:"flex items-center space-x-5 justify-center",children:[e(A,{className:"text-[#F7AB0A] h-7 w-7 animate-pulse"}),e("p",{className:"text-2xl",children:"vipert68@gmail.com"})]}),t("div",{className:"flex items-center space-x-5 justify-center",children:[e(S,{className:"text-[#F7AB0A] h-7 w-7 animate-pulse"}),e("p",{className:"text-2xl",children:"Sri Lanka"})]})]}),t("form",{onSubmit:s(l=>{window.location.href="mailto:sandub612@gmail?subject=dkdk&body=hi,my name is sandunddd(vipert68@gmail.com)"}),className:"flex flex-col space-y-2 w-fit mx-auto",children:[t("div",{className:"flex space-x-2",children:[e("input",{...a("name"),className:"contactInput",type:"text",placeholder:"Name"}),e("input",{...a("email"),className:"contactInput",type:"email",placeholder:"Email"})]}),e("input",{...a("subject"),className:"contactInput",type:"text",placeholder:"Subject"}),e("textarea",{...a("message"),className:"contactInput",name:"",id:"",cols:"30",rows:"2",placeholder:"Message"}),e("button",{type:"submit",className:"bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg",children:"Submit"})]})]})]})};function M(){return t("header",{className:"sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center",children:[t(o.div,{initial:{x:-500,opacity:0,scale:.5},animate:{x:0,opacity:1,scale:1},transition:{duration:1.5},className:"flex flex-row items-center",children:[e(h.SocialIcon,{url:"https://youtube.com/",fgColor:"gray",bgColor:"transparent"}),e(h.SocialIcon,{url:"https://github.com/sandun1994-blip",fgColor:"gray",bgColor:"transparent"}),e(h.SocialIcon,{url:"https://facebook.com/sandun.tharuka.54379/",fgColor:"gray",bgColor:"transparent"}),e(h.SocialIcon,{url:"https://stackflow.com/",fgColor:"gray",bgColor:"transparent"})]}),t(o.div,{initial:{x:-500,opacity:0,scale:.5},animate:{x:0,opacity:1,scale:1},transition:{duration:1},className:"flex flex-row items-center text-gray-300 cursor-pointer",children:[e(h.SocialIcon,{className:"cursor-pointer",network:"email",fgColor:"gray",bgColor:"transparent"}),e("p",{className:"uppercase hidden md:inline-flex text-sm text-gray-400",children:"Get In Touch"})]})]})}const _=()=>{const[a,s]=B({words:["Hi I'm Sandun Tharuka","Developer","<LovesToCodeMore/>"],loop:!0,delaySpeed:2e3});return t("div",{className:"h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden",children:[e(D,{}),e("img",{src:"profile.jpg",alt:"",className:"relative rounded-full h-32 w-32 mx-auto object-cover"}),t("div",{className:"z-20",children:[e("h2",{className:"text-sm uppercase text-gray-500 pb-2 tracking-[15px]",children:"Fullstack Developer"}),t("h1",{className:"text-5xl lg:text-6xl font-semibold px-10",children:[e("span",{className:"mr-3",children:a}),e(C,{cursorColor:"#F7AB0A"})]}),t("div",{className:"pt-5",children:[t(f,{children:[" ",e("button",{className:"heroButton",children:"About"})]}),t(f,{children:[" ",e("button",{className:"heroButton",children:"Experience"})]}),t(f,{children:[" ",e("button",{className:"heroButton",children:"Skills"})]}),t(f,{href:"#contact",children:[" ",e("button",{className:"heroButton",children:"Projects"})]})]})]})]})},O=()=>{const a=[1,2,3,4,5];return t(o.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},className:"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly\r mx-auto items-center z-0",children:[e("h3",{className:"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl",children:"Projects"}),e("div",{className:"relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 flex scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80",children:a.map((s,n)=>t("div",{className:"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center\r justify-center md:p-44 h-screen p-20",children:[e(o.img,{initial:{y:-300,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:1.2},viewport:{once:!0},src:"google.png"}),t("div",{children:[t("h4",{className:"text-4xl font-semibold text-center",children:[t("span",{className:"underline decoration-[#F7AB0A]/50",children:["Case Study ",n+1," 0f ",a.length," :"]})," Facebook Clone"]}),e("p",{className:"text-lg text-center md:text-left ",children:"project summary project summary"})]})]},n))}),e("div",{className:"w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"})]})},p=({directionLeft:a})=>t("div",{className:"group realative flex cursor-pointer",children:[e(o.img,{initial:{x:a?-200:200,opacity:0},whileInView:{opacity:1,x:0},transition:{duration:1},src:"react.svg",className:"rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale\r transition duration-300 ease-in-out"}),e("div",{className:"absolute opacity-0  group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white\r h-24 w-24 rounded-full z-0",children:e("div",{className:"flex items-center justify-center h-full",children:e("p",{className:"text-3xl font-bold text-black opacity-100",children:"100%"})})})]}),q=()=>t(o.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},className:"h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center",children:[e("h3",{className:"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl",children:"Skills"}),e("h3",{className:"absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ",children:"Hover over a skill for currency profieciency"}),t("div",{className:"grid grid-cols-4 gap-5",children:[e(p,{}),e(p,{}),e(p,{}),e(p,{}),e(p,{}),e(p,{}),e(p,{}),e(p,{})]})]}),K=({data:a,id:s})=>{var n,i;return console.log(s),t("article",{className:" snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] xl:w-[900px]",children:[e(o.img,{initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:1.2},viewport:{once:!0},src:"profile.jpg",className:" w-32 h-32 rounded-full   xl:w-[200px] xl:h-[200px] object-cover object-center"}),t("div",{className:"px-0 md:px-10",children:[e("h4",{className:"text-4xl font-light",children:a==null?void 0:a.position}),e("p",{className:"font-bold text-2xl mt-1",children:a==null?void 0:a.companyName}),e("div",{className:"flex space-x-2 my-2",children:(n=a.srcUrl)==null?void 0:n.map(r=>e("img",{className:"h-10 w-10 rounded-full",src:r,alt:""},r))}),e("p",{className:"uppercase py-5 text-gray-300"}),e("ul",{className:"list-disc space-y-4 ml-5 text-lg",children:(i=a.summary)==null?void 0:i.map(r=>e("li",{children:a.summary},a.summary))})]},s)]},s)},U=({experince:a})=>(console.log(a),t(o.div,{className:"h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center",children:[e("h3",{className:"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ",children:"Experince"}),e("div",{className:"w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-[100px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80",children:a.length>0&&a.map(({data:s,id:n})=>e(K,{id:n,data:s},n))})]}));console.log({VITE_APP_KEY:"AIzaSyB2zwBzmoBPbE76zLwJFmPB55me5qcHejg",VITE_authDomain:"sandun-tharuka-senanayaka.firebaseapp.com",VITE_projectId:"sandun-tharuka-senanayaka",VITE_storageBucket:"sandun-tharuka-senanayaka.appspot.com",VITE_messagingSenderId:"319257242884",VITE_appId:"1:319257242884:web:e30864af5df546537bf451",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0});const J={apiKey:"AIzaSyB2zwBzmoBPbE76zLwJFmPB55me5qcHejg",authDomain:"sandun-tharuka-senanayaka.firebaseapp.com",projectId:"sandun-tharuka-senanayaka",storageBucket:"sandun-tharuka-senanayaka.appspot.com",messagingSenderId:"319257242884",appId:"1:319257242884:web:e30864af5df546537bf451"},G=E(J),N=F(G),W=()=>{const[a,s]=y.exports.useState([]),[n,i]=y.exports.useState([]),[r,l]=y.exports.useState([]),m=()=>{const u=g(N,"projects");b(u).then(c=>{const x=c.docs.map(d=>({data:d.data(),id:d.id}));s(x)}).catch(c=>console.log(c.message))},v=()=>{const u=g(N,"skill");b(u).then(c=>{const x=c.docs.map(d=>({data:d.data(),id:d.id}));i(x)}).catch(c=>console.log(c.message))},k=()=>{const u=g(N,"experince");b(u).then(c=>{const x=c.docs.map(d=>({data:d.data(),id:d.id}));l(x)}).catch(c=>console.log(c.message))};return y.exports.useEffect(()=>{m(),v(),k()},[]),t("div",{className:"bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden \r z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80",children:[e(M,{}),e("section",{id:"hero",className:"snap-start",children:e(_,{})}),e("section",{id:"about",className:"snap-center",children:e(T,{})}),e("section",{id:"experince",className:"snap-center",children:e(U,{experince:r})}),e("section",{id:"skills",className:"snap-start",children:e(q,{skill:n})}),e("section",{id:"projects",className:"snap-start",children:e(O,{projects:a})}),e("section",{id:"contact",className:"snap-start",children:e(H,{})})]})},Y=()=>e("div",{children:"NotFountPage"});function $(){return e(P,{children:t(z,{children:[e(w,{path:"/",element:e(W,{})}),e(w,{path:"*",element:e(Y,{})})]})})}L.createRoot(document.getElementById("root")).render(e(V.StrictMode,{children:e(R,{children:e($,{})})}));
