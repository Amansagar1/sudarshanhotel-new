(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{752:(e,t,l)=>{Promise.resolve().then(l.bind(l,6438))},6046:(e,t,l)=>{"use strict";var s=l(6658);l.o(s,"useParams")&&l.d(t,{useParams:function(){return s.useParams}}),l.o(s,"useRouter")&&l.d(t,{useRouter:function(){return s.useRouter}})},837:(e,t,l)=>{"use strict";l.d(t,{G_:()=>r,Sx:()=>n,R4:()=>a});var s=l(2651);let o={GET_ROOMS:()=>"http://localhost:5000/api/rooms",GET_ROOMSDETAILS:()=>"http://localhost:5000/api/roomdetails",BOOKING_ROOMS:()=>"http://localhost:5000/api/book",UPDATE_ROOM_STATUS:e=>"http://localhost:5000/api/roomdetails/:".concat(e,"/status/update")};Object.freeze(o);let r=()=>{let e=o.GET_ROOMSDETAILS();return console.log("Requesting URL:",e),s.A.get(e).then(e=>(console.log("API Response:",e.data),{result:e.data})).catch(e=>(console.error("Error details:",{message:e.message,code:e.code,config:e.config,response:e.response}),{result:null}))},n=e=>s.A.get("".concat(o.GET_ROOMSDETAILS(),"/").concat(e)).then(e=>(console.log("API Response:",e.data),{result:e.data})).catch(e=>(console.error("Error fetching room data:",e),{result:null})),a=async e=>{try{let t=await fetch(o.BOOKING_ROOMS(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Booking failed");return await t.json()}catch(e){throw console.error("Error in roomBooking:",e),e}}},6438:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>m});var s=l(5155),o=l(2115),r=l(6046),n=l(837),a=l(1536),i=l(5565),c=l(7396);let u=e=>{let{isVisible:t,onClose:l,roomDetails:r}=e,[a,i]=(0,o.useState)({firstName:"",lastName:"",address:"",city:"",pincode:"",phone:"",email:"",checkIn:"",checkOut:"",checkInTime:"",checkOutTime:"",roomPreference:"",numberOfAdults:"",roomId:r._id,price:null==r?void 0:r.price,title:null==r?void 0:r.title}),{_id:c,title:u,price:m}=r;(0,o.useEffect)(()=>{console.log("Room ID:",c),console.log("Room Title:",u),console.log("Room Price:",m)},[r]);let[d,h]=(0,o.useState)(!1),f=e=>{i({...a,[e.target.name]:e.target.value})},b=async e=>{e.preventDefault(),console.log("Booking Details Submitted:",a);try{let e=await (0,n.R4)(a);e.success?(h(!0),console.log(e.message),alert("Booking successful!")):(console.error("Booking failed:",e.message),alert("Failed to book room: ".concat(result.message)))}catch(e){console.error("Error during booking:",e)}};return t?(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full",children:(0,s.jsxs)("div",{className:"relative bg-white rounded-lg h-[800px] w-[700px] overflow-y-auto",children:[(0,s.jsx)("div",{className:"top-0 left-0 right-0 h-[300px] bg-cover bg-center rounded-t-lg",children:(0,s.jsx)("div",{className:"bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-2xl font-semibold",style:{backgroundImage:"url('/images/img4.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:(0,s.jsx)("h1",{className:"text-bold text-4xl",children:d?"Booking Confirmed!":"Complete Your Booking"})})}),(0,s.jsx)("div",{className:"p-8",children:d?(0,s.jsxs)("div",{className:"text-center p-4",children:[(0,s.jsx)("h2",{className:"text-2xl text-green-500 font-semibold",children:"Thank you for choosing us!"}),(0,s.jsx)("p",{className:"mt-4 text-gray-700",children:"Your room has been successfully booked. We look forward to hosting you!"}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsx)("button",{onClick:l,className:"bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Close"})})]}):(0,s.jsxs)("form",{onSubmit:b,children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"firstName",className:"block text-gray-600 font-medium mb-2",children:"First Name"}),(0,s.jsx)("input",{type:"text",name:"firstName",value:a.firstName,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"lastName",className:"block text-gray-600 font-medium mb-2",children:"Last Name"}),(0,s.jsx)("input",{type:"text",name:"lastName",value:a.lastName,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"address",className:"block text-gray-600 font-medium mb-2",children:"Address"}),(0,s.jsx)("input",{type:"text",name:"address",value:a.address,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"city",className:"block text-gray-600 font-medium mb-2",children:"City"}),(0,s.jsx)("input",{type:"text",name:"city",value:a.city,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"pincode",className:"block text-gray-600 font-medium mb-2",children:"Pincode"}),(0,s.jsx)("input",{type:"text",name:"pincode",value:a.pincode,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"phone",className:"block text-gray-600 font-medium mb-2",children:"Phone"}),(0,s.jsx)("input",{type:"text",name:"phone",value:a.phone,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-gray-600 font-medium mb-2",children:"Email"}),(0,s.jsx)("input",{type:"email",name:"email",value:a.email,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"checkIn",className:"block text-gray-600 font-medium mb-2",children:"Check-in Date"}),(0,s.jsx)("input",{type:"date",name:"checkIn",value:a.checkIn,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"checkOut",className:"block text-gray-600 font-medium mb-2",children:"Check-out Date"}),(0,s.jsx)("input",{type:"date",name:"checkOut",value:a.checkOut,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"checkInTime",className:"block text-gray-600 font-medium mb-2",children:"Check-in Time"}),(0,s.jsx)("input",{type:"time",name:"checkInTime",value:a.checkInTime,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"checkOutTime",className:"block text-gray-600 font-medium mb-2",children:"Check-out Time"}),(0,s.jsx)("input",{type:"time",name:"checkOutTime",value:a.checkOutTime,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"roomPreference",className:"block text-gray-600 font-medium mb-2",children:"Room Preference"}),(0,s.jsxs)("select",{name:"roomPreference",value:a.roomPreference,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500",children:[(0,s.jsx)("option",{value:"Standard",children:"Standard"}),(0,s.jsx)("option",{value:"Deluxe",children:"Deluxe"})]})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"numberOfAdults",className:"block text-gray-600 font-medium mb-2",children:"Number of Adults"}),(0,s.jsx)("input",{type:"number",name:"numberOfAdults",value:a.numberOfAdults,onChange:f,className:"p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500",min:"1"})]})]}),(0,s.jsxs)("div",{className:"flex gap-4 mt-6",children:[(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 text-white font-semibold py-3 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Confirm Booking"}),(0,s.jsx)("button",{type:"button",onClick:l,className:"bg-transparent text-red-500 font-semibold py-3 rounded-lg w-full border border-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500",children:"Cancel"})]})]})})]})}):null},m=()=>{let[e,t]=(0,o.useState)(null),[l,m]=(0,o.useState)(null),{id:d}=(0,r.useParams)(),[h,f]=(0,o.useState)(0),[b,g]=(0,o.useState)(!1),[x,p]=(0,o.useState)(!1),j=(0,r.useRouter)();(0,o.useEffect)(()=>{(async()=>{let e=await fetch("/api/auth/session").then(e=>e.json());p(null!=e&&!!e.user)})()}),(0,o.useEffect)(()=>{(async()=>{try{if(d){let e=await (0,n.Sx)(d);console.log("Fetched Room Data:",e),e&&e.result?t(e.result):m("Room not found")}}catch(e){m("Error fetching room details"),console.error("Fetch Error:",e)}})()},[d]);let N=["/images/img1.jpg","/images/img2.jpg","/images/img3.jpg"],v=async e=>{e.preventDefault();let{_id:t,title:l,price:s}=roomDetails;try{let e=await fetch("/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName,lastName,address,city,pincode,phone,email,checkIn,checkOut,checkInTime,checkOutTime,roomPreference,numberOfAdults,roomId:t,roomTitle:l,roomPrice:s})}),o=await e.json();o.success?console.log("Booking confirmed:",o):console.error("Booking failed:",o.message)}catch(e){console.error("Error during booking:",e)}};return l?(0,s.jsx)("div",{children:l}):e?(0,s.jsxs)("div",{className:"font-sans w-full",children:[(0,s.jsxs)("div",{className:"h-[400px] bg-cover bg-center text-white flex flex-col justify-center items-center",style:{backgroundImage:"url('/images/img6.jpg')"},children:[(0,s.jsx)("h1",{className:"text-4xl font-bold",children:"Room Details"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.default,{href:"/",passHref:!0,children:(0,s.jsx)("span",{className:"text-lg mt-2",children:"Home /"})}),(0,s.jsx)("span",{className:"text-lg mt-2",children:(0,s.jsx)(c.default,{href:"/rooms",children:" Room Details"})})]})]}),(0,s.jsx)("div",{className:"w-full flex justify-center items-center bg-yellow-100 h-auto p-8",children:(0,s.jsxs)("div",{className:"max-w-7xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row",children:[(0,s.jsxs)("div",{className:"relative w-full md:w-1/2 bg-gray-200",children:[(0,s.jsx)(i.default,{src:N[h]||"/images/fallback-image.jpg",alt:"Room Image",className:"w-full h-full object-cover rounded-l-lg",layout:"fill"}),(0,s.jsx)("button",{onClick:()=>{f(e=>0===e?N.length-1:e-1)},className:"absolute top-1/2 left-2 text-white bg-black bg-opacity-50 p-2 rounded-full",children:"<"}),(0,s.jsx)("button",{onClick:()=>{f(e=>(e+1)%N.length)},className:"absolute top-1/2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full",children:">"})]}),(0,s.jsxs)("div",{className:"w-full md:w-1/2 p-8",children:[(0,s.jsxs)("h3",{className:"text-xl font-semibold w-full justify-between flex ",children:[e.title," ",(0,s.jsxs)("span",{children:["    ",(0,s.jsx)("div",{className:" top-4 right-4 px-4 py-2 text-sm rounded-full ".concat(e.available?"bg-green-500":"bg-red-500"," text-white"),children:e.available?"Available":"Not Available"})]})]}),(0,s.jsx)("p",{className:"text-gray-700 mb-6",children:e.description||"Description not available"}),(0,s.jsxs)("p",{className:"text-lg font-semibold mb-4",children:["Price: ",e.price||"N/A"]}),(0,s.jsxs)("p",{className:"text-yellow-500 font-bold mb-6",children:["Rating: ",e.rating||"No rating"," ⭐"]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Features"}),(0,s.jsx)("ul",{className:"list-disc list-inside text-gray-700",children:e.features&&e.features.length>0?e.features.map((e,t)=>(0,s.jsx)("li",{children:e},t)):(0,s.jsx)("li",{children:"No features available"})})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Room Amenities"}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4 text-gray-700",children:e.amenities&&e.amenities.length>0?e.amenities.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(a.pXu,{className:"text-blue-500"})," ",e]},t)):(0,s.jsx)("p",{children:"No amenities available"})})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Facilities"}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-4 text-gray-700",children:e.facilities&&e.facilities.length>0?e.facilities.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(a.sPh,{className:"text-blue-500"})," ",e]},t)):(0,s.jsx)("p",{children:"No facilities available"})})]}),(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Cancellation Rules"}),(0,s.jsx)("p",{className:"text-gray-700",children:"Free Cancellation Before 2 Days of Check-in"}),(0,s.jsx)("p",{className:"text-gray-700",children:"According to time at destination"}),(0,s.jsx)("p",{className:"text-red-500 font-semibold",children:"No Refund after check-In"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("button",{className:"bg-blue-500 text-white font-semibold py-2 rounded-lg",onClick:()=>{x?g(!0):j.push("/login")},children:["Book - ",e.price||"N/A"]}),(0,s.jsx)("button",{className:"bg-transparent text-blue-500 font-semibold py-2 rounded-lg border border-blue-500",children:"Save to wishlist"})]})]})]})}),(0,s.jsx)(u,{isVisible:b,onClose:()=>{g(!1)},onSubmit:v,roomDetails:e||{}})]}):(0,s.jsx)("div",{children:"Loading..."})}},3435:(e,t,l)=>{"use strict";l.d(t,{k5:()=>u});var s=l(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=s.createContext&&s.createContext(o),n=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,s)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach(function(t){var s,o;s=t,o=l[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var s=l.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}function u(e){return t=>s.createElement(m,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,l)=>s.createElement(t.tag,c({key:l},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var l,{attr:o,size:r,title:i}=e,u=function(e,t){if(null==e)return{};var l,s,o=function(e,t){if(null==e)return{};var l={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;l[s]=e[s]}return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)l=r[s],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}(e,n),m=r||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),s.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:l,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),e.children)};return void 0!==r?s.createElement(r.Consumer,null,e=>t(e)):t(o)}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,839,565,604,441,517,358],()=>t(752)),_N_E=e.O()}]);