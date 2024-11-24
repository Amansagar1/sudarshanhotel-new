"use client";
import React from 'react';
import Image from "next/image";
import cardData from "./Roomdetails.json"; 
import cardImage1 from "../../Components/Assets/img1.jpg";
import cardImage2 from "../../Components/Assets/img2.jpg";
import cardImage3 from "../../Components/Assets/img3.jpg";

// Background Image
import backgroundImage from "../../Components/Assets/logo (1).png";

const RoomsSuites = () => {
  const images = [cardImage1, cardImage2, cardImage3];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#ffa6005d] p-4 md:p-8 lg:p-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Transparent White Overlay */}
        <div className="absolute inset-0 bg-white opacity-50" />
      </div>

      {/* Content with Cards */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          SUDARSHAN&apos;S ROOMS & SUITES
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 px-2 md:px-0">
          Experience exceptional comfort and elegance with our specially designed rooms and suites. Each room promises a blend of luxurious comfort and thoughtful amenities, ensuring a perfect stay.
        </p>
        
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-[1200px]">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={images[index]}
              title={card.title}
              description={card.description}
              price={card.price}
              beds={card.beds}
              rating={card.rating}
              index={index}
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
      <div className="relative w-full h-48 md:h-64 overflow-hidden group">
        <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        {/* Price Tag */}
        <div className="absolute top-2 right-2 bg-yellow-600 text-white py-1 px-2 text-sm rounded">
          {price}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4 text-center">
        <p className="text-xs text-yellow-600 uppercase font-semibold">Luxury Room</p>
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        
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
