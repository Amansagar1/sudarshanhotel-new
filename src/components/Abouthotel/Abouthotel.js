"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import SideImage from "../Assets/WhatsApp Image 2024-11-05 at 20.44.17_10df680e.jpg"; // Image for About Section

const AboutHotel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center justify-center px-10 py-16 bg-white gap-40">
      {/* Left Side: Image with Background */}
      <div className="relative flex items-center justify-center">
        <div className="bg-yellow-600 w-[550px] h-[576px] shadow-lg">
          <div className="absolute p-6 w-[600px]">
            <Image
              src={SideImage}
              alt="Luxury Hotel Room"
              className="shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side: Text and Stats */}
      <div className="pl-10">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
          Luxury Hotel and Resort
        </p>

        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Hotel Sudarshan - Best Luxury Stay in Ayodhya, INDIA
        </h2>

        <p className="text-gray-600 mb-8">
          Located in the heart of Ayodhya, Hotel Sudarshan offers the finest in luxury, comfort, and exceptional hospitality. With world-class amenities, expansive rooms, and impeccable service, we ensure every guest feels at home during their stay. Whether you're here for business or leisure, Hotel Sudarshan provides an unforgettable experience with breathtaking views and exquisite dining.
        </p>

        {/* Stats */}
        <div className="flex items-center mb-8">
          <div className="mr-12 text-center">
            <span className="text-4xl font-semibold text-gold">17+</span>
            <p className="text-gray-500">Luxury Rooms</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-semibold text-gold">4.9</span>
            <p className="text-gray-500">Customer Ratings</p>
          </div>
        </div>

        {/* More About Button */}
        <button className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 transition duration-300">
          More About
        </button>
      </div>
    </div>
  );
};

export default AboutHotel;
