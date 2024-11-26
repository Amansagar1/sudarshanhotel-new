"use client";
import React from 'react';
import Image from "next/image";
import cardData from "./Roomdetails.json"; // Import the JSON data

// Background Image
const RoomsSuites = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#ffa6005d] p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src='/images/logo.png'
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Transparent White Overlay */}
        <div className="absolute inset-0 bg-white opacity-50" />
      </div>

      {/* Content with Cards */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          SUDARSHAN&apos;S ROOMS & SUITES
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 px-4 sm:px-0">
          Experience exceptional comfort and elegance with our specially designed rooms and suites. Each room promises a blend of luxurious comfort and thoughtful amenities, ensuring a perfect stay.
        </p>
        
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}  // Use image from JSON data
              title={card.title}
              description={card.description}
              price={card.price}
              beds={card.beds}
              rating={card.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ image, title, description, price, beds, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full border">
      {/* Card Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden group">
        <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500">
          <Image
            src={image}  // Render image passed from props
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        {/* Price Tag */}
        <div className="absolute top-2 right-2 bg-yellow-600 text-white py-1 px-2 text-xs sm:text-sm rounded">
          {price}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4 sm:p-6 text-center">
        <p className="text-xs sm:text-sm text-yellow-600 uppercase font-semibold">Luxury Room</p>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">{description}</p>
        
        {/* Beds and Rating */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <span className="flex items-center text-gray-500">
            🛏️ {beds} {beds > 1 ? "beds" : "bed"}
          </span>
          <span className="flex items-center text-yellow-500">
            {"★".repeat(rating)}{" "}
            <span className="text-gray-400">({rating} / 5)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomsSuites;
