// import React, { useState,useEffect  } from "react";
// import {roomBooking} from "../../Webservices/ManagementAPIController"

// // console.log("Imported postBooking:", roomBooking);
// const BookingModal = ({ isVisible, onClose, roomDetails }) => {
//   const [bookingDetails, setBookingDetails] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     pincode: "",
//     phone: "",
//     email: "",
//     checkIn: "",
//     checkOut: "",
//     checkInTime: "",
//     checkOutTime: "",
//     roomPreference: "", 
//     numberOfAdults: "",
//     roomId: roomDetails._id, 
//     price: roomDetails?.price,   
//     title: roomDetails?.title    
//   });

//   // Destructure the room details

//   const { _id, title, price,  } = roomDetails;

//   useEffect(() => {
//     console.log("Room ID:", _id);   
//     console.log("Room Title:", title);
//     console.log("Room Price:", price);
//   }, [roomDetails]);
//   const [isBooked, setIsBooked] = useState(false); 

//   const handleChange = (e) => {
//     setBookingDetails({
//       ...bookingDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Booking Details Submitted:", bookingDetails);
//     try {
//       const response = await roomBooking(bookingDetails);
  
//       if (response.success) {
//         setIsBooked(true);
//         console.log(response.message);
//         alert('Booking successful!');
//       } else {
//         console.error('Booking failed:', response.message);
//         alert(`Failed to book room: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error during booking:', error);
//     }
//   };
  
  
  
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full">

//       <div className="relative bg-white rounded-lg h-[800px] w-[700px] overflow-y-auto">
   
//         {/* Background Image */}
//         <div className="top-0 left-0 right-0 h-[300px] bg-cover bg-center rounded-t-lg">
//           <div
//             className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-2xl font-semibold"
//             style={{
//               backgroundImage: "url('/images/img4.jpg')",
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//             }}
//           >
//             <h1 className="text-bold text-4xl">{isBooked ? "Booking Confirmed!" : "Complete Your Booking"}</h1>
//           </div>
//         </div>

//         {/* Form Section or Success Message */}
//         <div className="p-8">
//           {!isBooked ? (
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* First Name and Last Name */}
//                 <div className="mb-4">
//                   <label htmlFor="firstName" className="block text-gray-600 font-medium mb-2">First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={bookingDetails.firstName}
//                     onChange={handleChange}
//                     className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="lastName" className="block text-gray-600 font-medium mb-2">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={bookingDetails.lastName}
//                     onChange={handleChange}
//                     className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//               {/* Address, City, Pincode */}
//               <div className="mb-4">
//                 <label htmlFor="address" className="block text-gray-600 font-medium mb-2">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={bookingDetails.address}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="city" className="block text-gray-600 font-medium mb-2">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={bookingDetails.city}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="pincode" className="block text-gray-600 font-medium mb-2">Pincode</label>
//                 <input
//                   type="text"
//                   name="pincode"
//                   value={bookingDetails.pincode}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Phone and Email */}
//               <div className="mb-4">
//                 <label htmlFor="phone" className="block text-gray-600 font-medium mb-2">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={bookingDetails.phone}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={bookingDetails.email}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Check-in and Check-out Dates */}
//               <div className="mb-4">
//                 <label htmlFor="checkIn" className="block text-gray-600 font-medium mb-2">Check-in Date</label>
//                 <input
//                   type="date"
//                   name="checkIn"
//                   value={bookingDetails.checkIn}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="checkOut" className="block text-gray-600 font-medium mb-2">Check-out Date</label>
//                 <input
//                   type="date"
//                   name="checkOut"
//                   value={bookingDetails.checkOut}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Check-in and Check-out Times */}
//               <div className="mb-4">
//                 <label htmlFor="checkInTime" className="block text-gray-600 font-medium mb-2">Check-in Time</label>
//                 <input
//                   type="time"
//                   name="checkInTime"
//                   value={bookingDetails.checkInTime}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="checkOutTime" className="block text-gray-600 font-medium mb-2">Check-out Time</label>
//                 <input
//                   type="time"
//                   name="checkOutTime"
//                   value={bookingDetails.checkOutTime}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Room Preference and Number of Adults */}
//               <div className="mb-4">
//                 <label htmlFor="roomPreference" className="block text-gray-600 font-medium mb-2">Room Preference</label>
//                 <select
//                   name="roomPreference"
//                   value={bookingDetails.roomPreference}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="Standard">Standard</option>
//                   <option value="Deluxe">Deluxe</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="numberOfAdults" className="block text-gray-600 font-medium mb-2">Number of Adults</label>
//                 <input
//                   type="number"
//                   name="numberOfAdults"
//                   value={bookingDetails.numberOfAdults}
//                   onChange={handleChange}
//                   className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   min="1"
//                 />
//               </div>
//             </div>

//             {/* Buttons */}
//             {/* Buttons */}
//             <div className="flex gap-4 mt-6">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white font-semibold py-3 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     Confirm Booking
//                   </button>
//                   <button
//                     type="button"
//                     onClick={onClose}
//                     className="bg-transparent text-red-500 font-semibold py-3 rounded-lg w-full border border-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   >
//                     Cancel
//                   </button>
//                 </div>
       
//             </form>
//           ) : (
//             <div className="text-center p-4">
//               <h2 className="text-2xl text-green-500 font-semibold">Thank you for choosing us!</h2>
//               <p className="mt-4 text-gray-700">Your room has been successfully booked. We look forward to hosting you!</p>
//               <div className="mt-6">
//                 <button
//                   onClick={onClose}
//                   className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BookingModal;

import React, { useState, useEffect } from "react";
import { roomBooking } from "../../Webservices/ManagementAPIController";

const BookingModal = ({ isVisible, onClose, roomDetails }) => {
  const [bookingDetails, setBookingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    checkInTime: "",
    checkOutTime: "",
    roomPreference: "",
    numberOfAdults: "",
    roomId: roomDetails._id,
    price: roomDetails?.price,
    title: roomDetails?.title,
  });

  const { _id, title, price } = roomDetails;

  useEffect(() => {
    console.log("Room ID:", _id);
    console.log("Room Title:", title);
    console.log("Room Price:", price);
  }, [roomDetails]);

  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Booking Details Submitted:", bookingDetails);
    try {
      const response = await roomBooking(bookingDetails);

      if (response.success) {
        setIsBooked(true);
        console.log(response.message);
        alert("Booking successful!");
      } else {
        console.error("Booking failed:", response.message);
        alert(`Failed to book room: ${response.message}`);
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-2xl overflow-scroll h-[600px]">
        {/* Header */}
        <div
          className="h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/images/img4.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white">
            <h1 className="text-3xl font-bold">{isBooked ? "Booking Confirmed!" : "Complete Your Booking"}</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6">
          {!isBooked ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={bookingDetails.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={bookingDetails.lastName}
                      onChange={handleChange}
                         className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Address Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={bookingDetails.address}
                      onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">City</label>
                    <input
                      type="text"
                      name="city"
                      value={bookingDetails.city}
                      onChange={handleChange}
                       className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={bookingDetails.pincode}
                      onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={bookingDetails.phone}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={bookingDetails.email}
                      onChange={handleChange}
                         className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Check-in Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={bookingDetails.checkIn}
                      onChange={handleChange}
                       className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={bookingDetails.checkOut}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-lg focus:ring  "
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-red-500 text-red-500 font-medium py-2 px-6 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center p-4">
              <h2 className="text-2xl text-green-500 font-semibold">Thank you for choosing us!</h2>
              <p className="mt-4 text-gray-700">
                Your room has been successfully booked. We look forward to hosting you!
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
