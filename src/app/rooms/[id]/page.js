"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Correct way to access dynamic params
import { getAllRooms } from '../../../Webservices/ManagementAPIController'; // Update the path if necessary

const RoomDetailsPage = () => {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();  // Access dynamic route params here

  useEffect(() => {
    if (id) {
      // Fetch the room details based on the `id` in the URL
      getAllRooms()
        .then((data) => {
          const selectedRoom = data.result.find((room) => room._id === id);
          if (selectedRoom) {
            setRoom(selectedRoom);
          } else {
            setError('Room not found');
          }
        })
        .catch((err) => {
          setError('Error fetching room details');
          console.error(err);
        });
    }
  }, [id]);  // Re-run when the `id` changes (URL changes)

  if (error) {
    return <div>{error}</div>;
  }

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-sans">
      <div className="h-[400px] bg-cover bg-center text-white flex flex-col justify-center items-center" style={{ backgroundImage: `url(${room.image})` }}>
        <h1 className="text-4xl font-bold">{room.title}</h1>
        <p className="text-xl mt-2">{room.description}</p>
      </div>

      <div className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Room Details</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
          <h3 className="text-xl font-semibold">{room.title}</h3>
          <p className="text-gray-600 mt-1">{room.price ? `$${room.price}` : 'Price not available'}</p>
          <p className="text-yellow-500 mt-1">{'★'.repeat(room.rating)}{'☆'.repeat(5 - room.rating)}</p>
          <p className="text-gray-700 mt-2">{room.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
