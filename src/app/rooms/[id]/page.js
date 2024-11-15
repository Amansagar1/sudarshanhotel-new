"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getRoomDetailsById } from "../../../Webservices/ManagementAPIController"; // Updated function name
import { FaShower, FaConciergeBell, FaKey, FaSuitcase, FaBed, FaWifi, FaSwimmer } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "../../../components/RoomBooking/BookingPopup"
const RoomDetailsPage = () => {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get room id from params
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        if (id) {
          const data = await getRoomDetailsById(id); // Fetch room by ID
          console.log("Fetched Room Data:", data); // Check the data structure here

          if (data && data.result) {
            setRoom(data.result);
          } else {
            setError("Room not found");
          }
        }
      } catch (err) {
        setError("Error fetching room details");
        console.error("Fetch Error:", err);
      }
    };

    fetchRoomDetails();
  }, [id]); // Dependency array ensures this runs whenever the id changes

  const images = [
    "/images/WhatsApp Image 2024-11-05 at 20.44.16_171296f5.jpg",
    "/images/WhatsApp Image 2024-11-05 at 20.44.16_37e156be.jpg",
    "/images/WhatsApp Image 2024-11-05 at 20.44.17_10df680e.jpg",
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  // const handleBookNow = () => {
  //   if (room) {
  //     // Redirect to Booking page with room details in query parameters
  //     router.push({
  //       pathname: '/bookingonline',
  //       query: {
  //         roomId: room._id,
  //         roomTitle: room.title,
  //         roomPrice: room.price,
  //         roomDescription: room.description
  //       }
  //     });
  //   }
  // };
  const handleBookNow = () => {
    setShowModal(true); // Show the modal when Book Now is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleBookingSubmit = (details) => {
    console.log("Booking details submitted:", details);
    setShowModal(false); // Close the modal after booking submission
    // Here you can handle further booking logic, like sending data to an API
  };
  if (error) return <div>{error}</div>;
  if (!room) return <div>Loading...</div>;

  return (
    <div className="font-sans w-full">
      <div
        className="h-[400px] bg-cover bg-center text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/images/WhatsApp Image 2024-11-05 at 20.44.16_5e94e5d3.jpg')" }}
      >
        <h1 className="text-4xl font-bold">Room Details</h1>
        <div>
          <Link href="/" passHref>
            <span className="text-lg mt-2">Home /</span>
          </Link>
          <span className="text-lg mt-2">
            <Link href="/rooms"> Room Details</Link>
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center items-center bg-yellow-100 h-auto p-8">
        <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
          {/* Left Side: Image Carousel */}
          <div className="relative w-full md:w-1/2 bg-gray-200">
            <Image
              src={images[currentImageIndex] || "/images/fallback-image.jpg"} // Add a fallback image
              alt="Room Image"
              className="w-full h-full object-cover rounded-l-lg"
              layout="fill"
            />

            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            >
              &gt;
            </button>
          </div>

          {/* Right Side: Room Details */}
          <div className="w-full md:w-1/2 p-8">
          <h3 className="text-xl font-semibold w-full justify-between flex ">{room.title} <span>    <div className={` top-4 right-4 px-4 py-2 text-sm rounded-full ${
      room.available ? 'bg-green-500' : 'bg-red-500'
    } text-white`}>
      {room.available ? 'Available' : 'Not Available'}
    </div></span></h3>
            <p className="text-gray-700 mb-6">{room.description || "Description not available"}</p>
            <p className="text-lg font-semibold mb-4">Price: {room.price || "N/A"}</p>
            <p className="text-yellow-500 font-bold mb-6">Rating: {room.rating || "No rating"} ⭐</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700">
                {room.features && room.features.length > 0 ? (
                  room.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <li>No features available</li>
                )}
              </ul>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                {room.amenities && room.amenities.length > 0 ? (
                  room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaKey className="text-blue-500" /> {amenity}
                    </div>
                  ))
                ) : (
                  <p>No amenities available</p>
                )}
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Facilities</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                {room.facilities && room.facilities.length > 0 ? (
                  room.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaSwimmer className="text-blue-500" /> {facility}
                    </div>
                  ))
                ) : (
                  <p>No facilities available</p>
                )}
              </div>
            </div>

            {/* Cancellation Rules */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Cancellation Rules</h3>
              <p className="text-gray-700">Free Cancellation Before 2 Days of Check-in</p>
              <p className="text-gray-700">According to time at destination</p>
              <p className="text-red-500 font-semibold">No Refund after check-In</p>
            </div>

            {/* Booking Options */}
            <div className="flex flex-col gap-2">
              <button className="bg-blue-500 text-white font-semibold py-2 rounded-lg" onClick={handleBookNow} >
                Book - {room.price || "N/A"}
              </button>
              <button className="bg-transparent text-blue-500 font-semibold py-2 rounded-lg border border-blue-500">
                Save to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        isVisible={showModal}
        onClose={handleCloseModal}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
};

export default RoomDetailsPage;
