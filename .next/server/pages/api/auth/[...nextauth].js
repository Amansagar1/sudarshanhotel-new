"use strict";(()=>{var e={};e.id=651,e.ids=[651],e.modules={5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6762:(e,r)=>{Object.defineProperty(r,"M",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},7895:(e,r,t)=>{let a;t.r(r),t.d(r,{config:()=>y,default:()=>A,routeModule:()=>g});var i={};t.r(i),t.d(i,{default:()=>v});var n=t(9947),l=t(325),o=t(6762);let s=require("next-auth");var u=t.n(s);let d=require("next-auth/providers/credentials");var c=t.n(d);let m=require("next-auth/providers/google");var p=t.n(m);a=new(require("mongodb")).MongoClient(process.env.MONGODB_URI).connect();let b=require("bcryptjs");var f=t.n(b);let P=async e=>{let r=(await a).db().collection("users");return await r.findOne({email:e})},h=async e=>({id:(await db.collection("users").insertOne(e)).insertedId,...e}),w=async e=>await f().hash(e,12),E=async(e,r)=>f().compare(e,r),v=u()({providers:[c()({name:"Credentials",credentials:{email:{label:"Email",type:"email"},password:{label:"Password",type:"password"},fullName:{label:"Full Name",type:"text"},mobileNumber:{label:"Mobile Number",type:"text"},isSignUp:{label:"Sign Up",type:"checkbox"}},async authorize(e){let{email:r,password:t,fullName:a,mobileNumber:i,isSignUp:n}=e||{};if(!r||!t)return null;if(n){if(await P(r))throw Error("User already exists");let e=await w(t),n=await h({email:r,password:e,name:a,mobileNumber:i});return{id:n.id,email:n.email,name:n.name,mobileNumber:n.mobileNumber}}let l=await P(r);if(!l||!await E(t,l.password))throw Error("Invalid email or password");return{id:l.id,email:l.email,name:l.name,mobileNumber:l.mobileNumber}}}),p()({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET})],pages:{signIn:"/login",error:"/auth/error"},callbacks:{redirect:async({url:e,baseUrl:r})=>e.startsWith(r)?e:r}}),A=(0,o.M)(i,"default"),y=(0,o.M)(i,"config"),g=new n.PagesAPIRouteModule({definition:{kind:l.A.PAGES_API,page:"/api/auth/[...nextauth]",pathname:"/api/auth/[...nextauth]",bundlePath:"",filename:""},userland:i})},325:(e,r)=>{var t;Object.defineProperty(r,"A",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(t||(t={}))},9947:(e,r,t)=>{e.exports=t(5600)}};var r=require("../../../webpack-api-runtime.js");r.C(e);var t=r(r.s=7895);module.exports=t})();