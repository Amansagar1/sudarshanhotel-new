"use client";
import React, { useEffect, useState } from 'react';
import { getAllRoomsDetails } from '../../Webservices/ManagementAPIController';
import Image from 'next/image';
import Link from 'next/link';

const RoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const [filteredRooms, setFilteredRooms] = useState([]);
  
  // States for filters
  const [popularFilters, setPopularFilters] = useState({
    superDeluxe: false,
    available: false,
    bestRatings: false,
  });
  const [roomFilters, setRoomFilters] = useState({
    available: false,
    booked: false,
    deluxe: false,
    superDeluxe: false,
  });
  const [propertyType, setPropertyType] = useState({
    hotels: false,
    homestays: false,
  });
  const [facilities, setFacilities] = useState({
    parking: false,
    restaurant: false,
    petsAllowed: false,
  });

  useEffect(() => {
    // Fetch rooms data when the component mounts
    getAllRoomsDetails()
      .then((data) => {
        if (data && data.result && Array.isArray(data.result)) {
          setRooms(data.result); // Store the fetched room data in state
          setFilteredRooms(data.result); // Initial filtered data
        } else {
          setError('Failed to fetch rooms data.');
        }
      })
      .catch((err) => {
        setError('Error fetching rooms data.');
        console.error(err);
      });
  }, []);

  // Update filtered rooms based on selected filters
  useEffect(() => {
    let updatedRooms = rooms;

    // Apply popular filters
    if (popularFilters.superDeluxe) {
      updatedRooms = updatedRooms.filter(room => room.title.includes("Super Deluxe"));
    }
    if (popularFilters.available) {
      updatedRooms = updatedRooms.filter(room => room.status === "available");
    }
    if (popularFilters.bestRatings) {
      updatedRooms = updatedRooms.filter(room => room.rating >= 4);
    }

    // Apply room filters
    if (roomFilters.available) {
      updatedRooms = updatedRooms.filter(room => room.status === "available");
    }
    if (roomFilters.booked) {
      updatedRooms = updatedRooms.filter(room => room.status === "booked");
    }
    if (roomFilters.deluxe) {
      updatedRooms = updatedRooms.filter(room => room.title.includes("Deluxe"));
    }
    if (roomFilters.superDeluxe) {
      updatedRooms = updatedRooms.filter(room => room.title.includes("Super Deluxe"));
    }

    // Apply property type filters
    if (propertyType.hotels) {
      updatedRooms = updatedRooms.filter(room => room.propertyType === "Hotel");
    }
    if (propertyType.homestays) {
      updatedRooms = updatedRooms.filter(room => room.propertyType === "Homestay");
    }

    // Apply facilities filters
    if (facilities.parking) {
      updatedRooms = updatedRooms.filter(room => room.features.includes("Parking"));
    }
    if (facilities.restaurant) {
      updatedRooms = updatedRooms.filter(room => room.features.includes("Restaurant"));
    }
    if (facilities.petsAllowed) {
      updatedRooms = updatedRooms.filter(room => room.features.includes("Pets allowed"));
    }

    setFilteredRooms(updatedRooms);
  }, [popularFilters, roomFilters, propertyType, facilities, rooms]);

  // Checkbox change handlers for each filter
  const handlePopularFilterChange = (filter) => {
    setPopularFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const handleRoomFilterChange = (filter) => {
    setRoomFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const handlePropertyTypeChange = (type) => {
    setPropertyType((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleFacilitiesChange = (facility) => {
    setFacilities((prev) => ({ ...prev, [facility]: !prev[facility] }));
  };

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

      {/* Sidebar Filter Section */}
      <div className="flex w-full justify-center p-10">
        <aside className="w-1/6 p-4 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Filter by</h2>
          <div>
            <h3 className="font-semibold text-lg">Popular filters</h3>
            <ul className="space-y-2 mt-2">
              <li><input type="checkbox" onChange={() => handlePopularFilterChange('superDeluxe')} /> Super Deluxe Room</li>
              <li><input type="checkbox" onChange={() => handlePopularFilterChange('available')} /> Available</li>
              <li><input type="checkbox" onChange={() => handlePopularFilterChange('bestRatings')} /> Best Ratings</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Room filter</h3>
            <ul className="space-y-2 mt-2">
              <li><input type="checkbox" onChange={() => handleRoomFilterChange('available')} /> Available</li>
              <li><input type="checkbox" onChange={() => handleRoomFilterChange('booked')} /> Booked</li>
              <li><input type="checkbox" onChange={() => handleRoomFilterChange('deluxe')} /> Deluxe Rooms</li>
              <li><input type="checkbox" onChange={() => handleRoomFilterChange('superDeluxe')} /> Super Deluxe Room</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Property type</h3>
            <ul className="space-y-2 mt-2">
              <li><input type="checkbox" onChange={() => handlePropertyTypeChange('hotels')} /> Hotels</li>
              <li><input type="checkbox" onChange={() => handlePropertyTypeChange('homestays')} /> Homestays</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Facilities</h3>
            <ul className="space-y-2 mt-2">
              <li><input type="checkbox" onChange={() => handleFacilitiesChange('parking')} /> Parking</li>
              <li><input type="checkbox" onChange={() => handleFacilitiesChange('restaurant')} /> Restaurant</li>
              <li><input type="checkbox" onChange={() => handleFacilitiesChange('petsAllowed')} /> Pets allowed</li>
            </ul>
          </div>
        </aside>

        {/* Main Room Listing Section */}
        <main className="w-3/4 p-6">
          <h2 className="text-3xl font-semibold mb-4">Sudarshan's Rooms & Suites</h2>
          <div className="space-y-6">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <div key={room._id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row p-4 w-full h-[300px]">
                  {/* Room Image */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={room.image || '/images/WhatsApp Image 2024-11-05 at 20.44.17_10df680e.jpg'} // Fallback if no image is provided
                      alt={room.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex-1 w-full">
 
                  {/* Room Details */}
                 
                       {/* Available Badge */}

                    <h3 className="text-xl font-semibold w-full justify-between flex ">{room.title} <span>    <div className={` top-4 right-4 px-4 py-2 text-sm rounded-full ${
      room.available ? 'bg-green-500' : 'bg-red-500'
    } text-white`}>
      {room.available ? 'Available' : 'Not Available'}
    </div></span></h3>
                    <p className="text-gray-600 mt-1">{room.price || 'Price not available'}</p>
                    <p className="text-yellow-500 mt-1">
                      {'★'.repeat(room.rating)}{'☆'.repeat(5 - room.rating)}
                    </p>
                    <p className="text-gray-700 mt-2">{room.description || 'Description not available'}</p>
                    <ul className="text-gray-600 mt-2">
                      {room.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                    <Link href={`/rooms/${room._id}`} passHref>
                      <button className="p-2 mt-4 bg-blue-500 rounded text-white shadow-md">View Room</button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">No rooms available.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoomPage;
