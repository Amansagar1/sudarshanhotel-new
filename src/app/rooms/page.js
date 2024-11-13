"use client"
import React, { useEffect, useState } from 'react';
import { getAllRooms } from '../../Webservices/managementAPIController';
import Image from 'next/image';
import Link from 'next/link';

const RoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch rooms data when the component mounts
    getAllRooms()
      .then((data) => {
        if (data.result) {
          setRooms(data.result); // Store the fetched room data in state
        } else {
          setError('Failed to fetch rooms.');
        }
      })
      .catch((err) => {
        setError('Error fetching rooms data.');
        console.error(err);
      });
  }, []);

  if (error) {
    return <div>{error}</div>; // Handle error state
  }

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

      {/* Room Cards Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Sudarshan&apos;s Rooms & Suites</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div key={room._id} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <Image
                src={room.image}
                alt={room.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{room.title}</h3>
                <p className="text-gray-600 mt-1">{room.price ? `$${room.price}` : 'Price not available'}</p>
                <p className="text-yellow-500 mt-1">{'★'.repeat(room.rating)}{'☆'.repeat(5 - room.rating)}</p>
                <p className="text-gray-700 mt-2">{room.description}</p>
              </div>
              <Link href={`/rooms/${room._id}`} passHref>
                <button className="p-2 mt-4 bg-red-500 rounded text-white shadow-md">View Room</button>
              </Link>
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
