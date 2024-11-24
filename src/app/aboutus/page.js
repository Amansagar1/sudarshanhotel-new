"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import teamMembers from "./teamMembers.json";
import clientFeedback from "./clientFeedback.json";


const Aboutus = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center w-full justify-center bg-[#ffa6005d]">
      {/* Banner Section */}
      <div className="w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/img5.jpg')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <div className="">
            <Link href="/" passHref>
              <span className="text-lg mt-2">Home /</span>
            </Link>
            <span className="text-lg mt-2">
              <Link href="/aboutus"> About Us</Link>
            </span>
          </div>
        </div>
      </div>

      {/* Hotel Introduction Section */}
      <div className="flex items-center justify-center px-10 py-16 bg-white gap-40  border border-b-2 ">
        <div className="relative flex items-center justify-center">
          <div className="bg-yellow-600 w-[550px] h-[576px] shadow-lg">
            <div className="absolute p-6 w-[600px]">
              <Image
                src="/images/img4.jpg"
                alt="Luxury Hotel Room"
               width={400}
               height={400}
                className="shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pl-10">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Luxury Hotel and Resort
          </p>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Hotel Sudarshan - Best Luxury Stay in Ayodhya, INDIA
          </h2>
          <p className="text-gray-600 mb-8">
            Located in the heart of Ayodhya, Hotel Sudarshan offers the finest in luxury, comfort, and exceptional hospitality. With world-class amenities, expansive rooms, and impeccable service, we ensure every guest feels at home during their stay. Whether you&apos;re here for business or leisure, Hotel Sudarshan provides an unforgettable experience with breathtaking views and exquisite dining.
          </p>
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
          <button className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 transition duration-300">
            More About
          </button>
        </div>
      </div>

      

      {/* Team Members Section */}
      <div className="py-16 ">
        <h3 className="text-3xl font-semibold text-center mb-6">Meet the Expert Members</h3>
        <p className="text-center text-gray-600 mb-12">
          Our team is committed to providing each guest with a warm welcome and exceptional service to ensure a delightful stay.
        </p>
        <div className="flex justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full shadow-lg"/>
              <h4 className="text-lg font-semibold mt-4">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Feedback Section */}
      <div className="bg-gray-100 py-16 w-full">
        <h3 className="text-3xl font-semibold text-center mb-6">Client Feedback</h3>
        <div className="flex justify-center gap-6">
          {clientFeedback.map((feedback, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="text-yellow-500 mb-2">
                {"★".repeat(feedback.rating)}{"☆".repeat(5 - feedback.rating)}
              </p>
              <p className="text-gray-700 mb-4">{feedback.feedback}</p>
              <h5 className="font-semibold">{feedback.name}</h5>
              <p className="text-sm text-gray-500">{feedback.location}</p>
            </div>
          ))}
        </div>
      </div>
{/* Mission, Vision, and Values Section */}
<div className="w-full px-10 py-16  shadow-md text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Mission, Vision, and Values</h3>
        <p className="text-gray-600 mb-8">
          At Hotel Sudarshan, our mission is to provide exceptional hospitality with personalized service to each guest, ensuring they feel at home. Our vision is to be the preferred luxury hotel in Ayodhya, recognized for quality and unique guest experiences. We value integrity, respect, and dedication to quality in all aspects of our service.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
            <p className="text-gray-600">
              To offer a unique blend of luxury, comfort, and cultural heritage, ensuring every guest enjoys a memorable experience with our exceptional services.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
            <p className="text-gray-600">
              To be a leader in hospitality, creating a trusted brand known for its commitment to high-quality service and customer satisfaction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Our Values</h4>
            <p className="text-gray-600">
              Respect, integrity, and a dedication to excellence are at the heart of our operations, guiding us in every interaction with our guests and team.
            </p>
          </div>
        </div>
      </div>
      {/* Additional Information */}
      <div className="w-full px-10 py-16 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-semibold p-4 text-white ">A Rich Legacy of Hospitality</h3>
      <div className="flex gap-10 p-4 justify-center items-center w-full">
      <p className="text-white w-1/2 flx-wrap">
          Established to create a sanctuary of comfort and refinement, Sudarshan Hotel has earned a reputation for excellence in the hospitality industry. From our elegant rooms to our top-tier amenities, every element of our hotel has been designed to provide guests with an extraordinary experience.
        </p>
        <p className="text-white w-1/2 flx-wrap">
          Experience our premium services, including a world-class restaurant, an inviting lounge, and personalized concierge assistance. Our rooms are designed with both luxury and practicality in mind, ensuring that every stay with us is as comfortable as it is memorable.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Aboutus;
