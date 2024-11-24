"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Images for the carousel
import bgImage1 from "../../Components/Assets/img1.jpg";
import bgImage2 from "../../Components/Assets/img2.jpg";
import bgImage3 from "../../Components/Assets/img3.jpg";

const images = [bgImage1, bgImage2, bgImage3];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slide */}
      <div className="relative w-full h-full transition-opacity duration-1000 ease-in-out">
        {/* Black Transparent Backdrop */}
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>

        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full fade-animation" // Added fade-animation class for smooth image transitions
        />

        {/* Text Overlay with Animation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 p-4 slide-animation">
          <h1 className="text-6xl font-bold mb-4">
            Experience Unmatched Luxury at Hotel Sudarshan
          </h1>
          <p className="text-4xl mb-6">
            A Premier Destination for Comfort, Elegance, and Serenity
          </p>
          <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded">
            Discover Our Rooms and Services
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 z-20"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 z-20"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-yellow-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
