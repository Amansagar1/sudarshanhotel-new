"use client";
import React from 'react';
import roomsData from './rooms.json';
import Image from 'next/image';
import Link from 'next/link';

const RoomPage = () => {
  return (
    <div className="font-sans">

      {/* Top Section with Title */}
      <div
        className="h-[400px] bg-cover bg-center text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/images/WhatsApp Image 2024-11-05 at 20.44.16_5e94e5d3.jpg')" }}
      >
        <h1 className="text-4xl font-bold">Rooms & Suites</h1>
        <div>
          <Link href="/" passHref>
            <span className="text-lg mt-2">Home /</span>
          </Link>
          <span className="text-lg mt-2">
            <Link href="/rooms"> Rooms & Suites</Link>
          </span>
        </div>
      </div>

      {/* New Image Background Section */}
    

      {/* Room Cards Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Sudarshan&apos;s Rooms & Suites</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roomsData.rooms.map((room) => (
            <div key={room.id} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <Image
                src={room.image } // Fallback image if room.image is empty
                alt={room.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{room.title}</h3>
                <p className="text-gray-600 mt-1">{room.price}</p>
                <p className="text-yellow-500 mt-1">{'★'.repeat(room.rating)}</p>
                <p className="text-gray-700 mt-2">{room.description}</p>
              </div>
            <Link href="/rooms/viewrooms"> <button className='p-2 mt-4 bg-red-500 rounded text-white shadow-md'>View Rooms</button></Link> 
            </div>
          ))}
        </div>
      </section>

      {/* Extra Facilities Section */}
      <section className="py-12 px-6 bg-gray-800 text-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Resort’s Extra Facilities for Luxurious Life</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roomsData.facilities.map((facility, index) => (
            <div key={index} className="bg-gray-700 shadow-md rounded-lg overflow-hidden p-4">
              <Image
                src={facility.image || '/images/default-facility.jpg'} // Fallback image if facility.image is empty
                alt={facility.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{facility.title}</h3>
                <p className="text-gray-300 mt-2">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-12 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-2xl font-semibold">Contact with Us</h2>
        {/* Add contact form or details here */}
      </footer>
    </div>
  );
};

export default RoomPage;
