"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getRoomDetailsById } from "../../../Webservices/ManagementAPIController";
import { FaKey, FaSwimmer } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "../../../components/RoomBooking/BookingPopup";

const RoomDetailsPage = () => {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        if (id) {
          const data = await getRoomDetailsById(id);
          if (data && data.result) {
            setRoom(data.result);
          } else {
            setError("Room not found.");
          }
        }
      } catch (err) {
        setError("Error fetching room details.");
        console.error("Fetch Error:", err);
      }
    };

    fetchRoomDetails();
  }, [id]);

  const images = room?.images || [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleBookNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBookingSubmit = async (formData) => {
    const bookingData = {
      ...formData,
      roomId: room._id,
      roomTitle: room.title,
      roomPrice: room.price,
    };

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      if (data.success) {
        console.log("Booking confirmed:", data);
      } else {
        console.error("Booking failed:", data.message);
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };

  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!room) return <div className="text-center">Loading...</div>;

  return (
    <div className="font-sans w-full">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url('/images/img2.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{room.title}</h1>
          <div className="text-lg mt-4">
          <Link href="/" className="hover:underline">
            Home /
          </Link>
            <span className="text-lg mt-2">
            <Link href="/rooms" className="hover:underline">
            Rooms & Suites
          </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center items-center bg-yellow-100 h-auto p-8">
        <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
          {/* Left: Image Carousel */}
          <div className="relative w-full md:w-1/2 bg-gray-200 h-[400px] md:h-auto">
            <Image
              src={images[currentImageIndex] || "/images/img1.jpg"}
              alt="Room Image"
              className="w-full h-full object-cover rounded-l-lg"
              layout="fill"
              objectFit="cover"
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

          {/* Right: Room Details */}
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-xl font-semibold w-full justify-between flex">
              {room.title}
              <span>
                <div
                  className={`top-4 right-4 px-4 py-2 text-sm rounded-full ${
                    room.available ? "bg-green-500" : "bg-red-500"
                  } text-white`}
                >
                  {room.available ? "Available" : "Not Available"}
                </div>
              </span>
            </h3>
            <p className="text-gray-700 mb-6">{room.description || "Description not available"}</p>
            <p className="text-lg font-semibold mb-4">Price: ₹{room.price || "N/A"}</p>
            <p className="text-yellow-500 font-bold mb-6">
              Rating: {room.rating || "No rating"} ⭐
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700">
                {room.features?.length ? (
                  room.features.map((feature, index) => <li key={index}>{feature}</li>)
                ) : (
                  <li>No features available</li>
                )}
              </ul>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                {room.amenities?.length ? (
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
                {room.facilities?.length ? (
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

            {/* Booking Options */}
            <div className="flex flex-col gap-2">
              <button
                className="bg-blue-500 text-white font-semibold py-2 rounded-lg"
                onClick={handleBookNow}
              >
                Book - ₹{room.price || "N/A"}
              </button>
              <button className="bg-transparent text-blue-500 font-semibold py-2 rounded-lg border border-blue-500">
                Save to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isVisible={showModal}
        onClose={handleCloseModal}
        onSubmit={handleBookingSubmit}
        roomDetails={room}
      />
    </div>
  );
};

export default RoomDetailsPage;
