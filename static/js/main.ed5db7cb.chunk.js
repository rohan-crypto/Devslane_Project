(this.webpackJsonpnew_software=this.webpackJsonpnew_software||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s(20),a=s.n(r),n=(s(27),s(28),s(5)),l=s(3),i=s(1),o=function(e){return console.log("AuthHero Rendering"),Object(c.useEffect)((function(){console.log("AuthHero rendering for the first time")}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"h-screen w-1/2 bg-black text-white invisible medium:visible",children:"Logo will go here."})})};o.defaultProps={};var b=Object(c.memo)(o),j=s(11),d=s(12),m=s(14),x=s(13),u=s(22),h=function(e){var t=Object(c.useState)({username:"",password:""}),s=Object(m.a)(t,2),r=s[0],a=s[1],o=Object(c.useState)({username:!1,password:!1}),b=Object(m.a)(o,2),h=b[0],O=b[1],f=Object(c.useState)(!1),p=Object(m.a)(f,2),g=p[0],v=p[1],N=Object(l.g)(),w=function(e){a(Object(d.a)(Object(d.a)({},r),{},Object(j.a)({},e.target.name,e.target.value)))},y=function(e){O(Object(d.a)(Object(d.a)({},h),{},Object(j.a)({},e.target.name,!0)))},P="",k="";return r.username?(r.username.includes(" ")||r.username.includes(",")||r.username.includes("%"))&&(P="Do not enter space or comma or percentage"):P="Username is required",r.password?r.password.length<6?k="Password should be of atleast 6 characters":r.password.includes(" ")&&(k="Do not enter space"):k="Password is required",Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"flex flex-col items-center py-6 mx-auto",children:[Object(i.jsxs)("div",{className:"w-full",children:[Object(i.jsxs)("h1",{className:"text-4xl font-mediun mb-2 text-gray-700",children:["Log In to",Object(i.jsx)("a",{className:"text-blue-600 font-medium",target:"_blank",href:"https://designreset.com/cork/ltr/demo4/index.html",children:" CORK"})," "]}),Object(i.jsxs)("p",{className:"mb-14 text-sm font-medium text-gray-700",children:["New Here?",Object(i.jsx)(n.b,{to:"/signup",children:Object(i.jsx)("span",{className:"text-blue-700 border-b border-blue-700 font-mediun",children:" Create an account"})})]})]}),Object(i.jsx)("form",{action:"",className:"text-left",onSubmit:function(e){e.preventDefault(),P||k?console.log("Form submission failed"):(v(!0),console.log("Login started with data: ",r),setTimeout((function(){console.log("Login Successful"),N.push("/dashboard")}),3e3))},children:Object(i.jsxs)("div",{className:"w-96",children:[Object(i.jsxs)("div",{className:"flex items-center border-b pb-3.5 mt-3 hover:border-blue-700",children:[Object(i.jsx)(x.b,{className:"text-blue-700 text-2xl"}),Object(i.jsx)("input",{required:!0,type:"text",id:"username",name:"username",value:r.username,onChange:w,onBlur:y,placeholder:"Username",className:"pl-2 text-md tracking-wide outline-none"})]}),h.username&&Object(i.jsx)("div",{className:"text-red-600 text-sm",children:P}),Object(i.jsxs)("div",{className:"flex items-center border-b pb-3.5 mt-8 hover:border-blue-700",children:[Object(i.jsx)(x.a,{className:"text-blue-700 text-2xl"}),Object(i.jsx)("input",{required:!0,type:"password",id:"password",name:"password",value:r.password,onChange:w,onBlur:y,placeholder:"Password",className:"pl-2 text-md tracking-wide outline-none"})]}),h.password&&Object(i.jsx)("div",{className:"text-red-600 text-sm",children:k}),Object(i.jsxs)("div",{className:"flex justify-between mt-8",children:[Object(i.jsxs)("div",{className:"text-left flex items-center",children:[Object(i.jsx)("p",{className:"inline-block text-sm tracking-wide font-medium text-gray-700",children:"Show Password"}),Object(i.jsx)("div",{className:"w-8 h-4 ml-2 flex items-center bg-gray-200 rounded-full py-1 pl-1 cursor-pointer",children:Object(i.jsx)("div",{className:"bg-blue-600 w-3 h-3 rounded-full shadow-md"})})]}),Object(i.jsxs)("div",{className:"pr-2 flex items-center",children:[Object(i.jsx)("button",{type:"submit",className:"bg-blue-700 text-white rounded py-1 px-3.5 shadow-xl",children:"Log In"}),g&&Object(i.jsx)(u.a,{className:"ml-2 text-blue-700 text-xl animate-spin"})]})]}),Object(i.jsx)("div",{className:"mt-12 text-center mb-4",children:Object(i.jsxs)("label",{htmlFor:"checkbox",className:"pl-4 text-gray-400 text-md cursor-pointer",children:[Object(i.jsx)("input",{type:"checkbox",id:"checkbox",className:"cursor-pointer mr-3"}),"Keep me logged in"]})}),Object(i.jsx)("div",{className:"text-center text-blue-600 font-medium",children:Object(i.jsx)(n.b,{to:"/forgotPassword",children:"Forgot Password ?"})})]})}),Object(i.jsxs)("p",{className:"mt-auto text-gray-900 font-sm",children:["\xa9 2020 All Rights Reserved.",Object(i.jsx)("a",{className:"text-blue-600 font-medium",target:"_blank",href:"https://designreset.com/cork/ltr/demo4/index.html",children:" CORK "}),"is a product of ",Object(i.jsx)("br",{})," Designreset.",Object(i.jsx)("a",{className:"text-blue-600 font-medium",href:"javascript:void(0);",children:" Cookie Preferences,"}),Object(i.jsx)("a",{className:"text-blue-600 font-medium",href:"javascript:void(0);",children:" Privacy, and"}),Object(i.jsx)("a",{className:"text-blue-600 font-medium",href:"javascript:void(0);",children:" Terms."})]})]})})};h.defaultProps={};var O=Object(c.memo)(h),f=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:["This is SignUp Page. Already have an account.",Object(i.jsx)(n.b,{to:"/login",children:Object(i.jsx)("span",{className:"text-blue-600",children:"Click here"})})]})})};f.defaultProps={};var p=Object(c.memo)(f),g=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/login",children:Object(i.jsx)(O,{})}),Object(i.jsx)(l.b,{path:"/signup",children:Object(i.jsx)(p,{})})]}),Object(i.jsx)(b,{})]})})};g.defaultProps={};var v=Object(c.memo)(g),N=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"h-screen w-80 bg-gray-500",children:"This is Sidebar."})})};N.defaultProps={};var w=Object(c.memo)(N),y=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:["This is Dashboard page.",Object(i.jsx)("br",{}),Object(i.jsx)(n.b,{to:"/recordings",children:Object(i.jsx)("span",{className:"text-blue-600",children:"Go to Recordings"})})]})})};y.defaultProps={};var P=Object(c.memo)(y),k=function(e){var t=Object(l.h)(),s=t.lectureNumber,c=t.batchNumber;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"h-screen w-screen",children:["Showing data of lecture #",s," of batch #",c,"."]})})};k.defaultProps={};var F=Object(c.memo)(k),S=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:["This is Recordings Page",Object(i.jsx)("br",{}),Object(i.jsx)(n.b,{to:"/dashboard",children:Object(i.jsx)("span",{className:"text-blue-600",children:"Go to Dashboard"})})]})})};S.defaultProps={};var C=Object(c.memo)(S),D=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"flex flex-row",children:[Object(i.jsx)(w,{}),Object(i.jsx)(l.b,{path:"/dashboard",children:Object(i.jsx)(P,{})}),Object(i.jsx)(l.b,{path:"/recordings",children:Object(i.jsx)(C,{})}),Object(i.jsx)(l.b,{path:"/batch/:batchNumber/lecture/:lectureNumber",children:Object(i.jsx)(F,{})})]})})};D.defaultProps={};var R=Object(c.memo)(D),T=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"bg-blue-500 h-screen w-screen",children:"Sorry, the page you are looking for is not found."})})};T.defaultProps={};var L=Object(c.memo)(T);var _=function(){return Object(i.jsx)(n.a,{children:Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/Devslane_Project",exact:!0,children:Object(i.jsx)(l.a,{to:"/login"})}),Object(i.jsx)(l.b,{path:["/login","/signup"],exact:!0,children:Object(i.jsx)(v,{})}),Object(i.jsx)(l.b,{path:["/dashboard","/recordings","/batch/:batchNumber/lecture/:lectureNumber"],exact:!0,children:Object(i.jsx)(R,{})}),Object(i.jsx)(l.b,{children:Object(i.jsx)(L,{})})]})})};a.a.render(Object(i.jsx)(_,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ed5db7cb.chunk.js.map