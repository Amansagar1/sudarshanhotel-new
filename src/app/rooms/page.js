/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { getAllRoomsDetails } from "../../Webservices/ManagementAPIController";
import Image from "next/image";
import Link from "next/link";

const RoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    size: { small: false, medium: false, large: false },
    occupancy: { single: false, double: false, family: false },
    propertyType: { hotels: false, homestays: false },

    amenities: {
      airConditioning: false,
      housekeeping: false,
      wifi: false,
      intercom: false,
      smartTv: false,
      fan: false,
      geyser: false,
      toiletries: false,
      hotColdWater: false,
      coffeeKettle: false,
      sofa: false,
      safety: false,
      breakfast: false,
    },
    availability: { available: false, booked: false }, // added availability filter
    rating: { oneStar: false, twoStars: false, threeStars: false, fourStars: false, fiveStars: false }, // added rating filter
  });
  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRoomsDetails();
        if (data?.result && Array.isArray(data.result)) {
          const processedRooms = data.result.map((room) => ({
            ...room,
            size: room.title.includes("Deluxe")
              ? 150
              : room.title.includes("Super Deluxe")
                ? 180
                : room.title.includes("Family")
                  ? 250
                  : 0,
            maxOccupancy: room.title.includes("Family")
              ? 4
              : room.title.includes("Super Deluxe")
                ? 3
                : 2,
            bedType: room.title.includes("Family")
              ? "1 double bed + 1 single bed"
              : "1 double bed",
          }));
          setRooms(processedRooms);
          setFilteredRooms(processedRooms);
        } else {
          setError("Failed to fetch rooms data.");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching rooms data.");
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...rooms];
      const { size, occupancy, propertyType, availability, rating, amenities } = filters;
  
      // Size Filter
      if (size.small) filtered = filtered.filter((r) => r.size <= 180);
      if (size.medium) filtered = filtered.filter((r) => r.size > 180 && r.size <= 250);
      if (size.large) filtered = filtered.filter((r) => r.size > 250);
  
      // Occupancy Filter
      if (occupancy.single) filtered = filtered.filter((r) => r.maxOccupancy === 1);
      if (occupancy.double) filtered = filtered.filter((r) => r.maxOccupancy === 2);
      if (occupancy.family) filtered = filtered.filter((r) => r.maxOccupancy >= 4);
  
      // Property Type Filter
      if (propertyType.hotels) filtered = filtered.filter((r) => r.propertyType === "Hotel");
      if (propertyType.homestays) filtered = filtered.filter((r) => r.propertyType === "Homestay");

      // Availability Filter
      if (availability.available) filtered = filtered.filter((r) => r.available === true);
      if (availability.booked) filtered = filtered.filter((r) => r.available === false);
  
      // Rating Filter
      if (rating.oneStar) filtered = filtered.filter((r) => r.rating === 1);
      if (rating.twoStars) filtered = filtered.filter((r) => r.rating === 2);
      if (rating.threeStars) filtered = filtered.filter((r) => r.rating === 3);
      if (rating.fourStars) filtered = filtered.filter((r) => r.rating === 4);
      if (rating.fiveStars) filtered = filtered.filter((r) => r.rating === 5);
  
      // Amenities Filter
      Object.keys(amenities).forEach((amenity) => {
        if (amenities[amenity]) {
          filtered = filtered.filter((r) => r.features.includes(amenity));
        }
      });
  
      setFilteredRooms(filtered);
    };
    applyFilters();
  }, [filters, rooms]);  const toggleFilter = (category, filter) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [filter]: !prev[category][filter] },
    }));
  };

  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="font-sans">
      {/* Hero Section */}

      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url('/images/img2.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Rooms & Suites</h1>
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

    

      {/* Content Section */}
      <div className="flex flex-wrap p-5">
        {/* Filters */}
        <aside
          className={`p-4 bg-gray-100 transition-all duration-300 w-full md:w-1/4 ${filterVisible ? "block" : ""} md:block`}
        >
          <h2 className="text-2xl font-semibold mb-4">Filter by</h2>
        
          {renderFilterSection("Occupancy", filters.occupancy, "occupancy", toggleFilter)}
          {renderFilterSection("Property Type", filters.propertyType, "propertyType", toggleFilter)}
          {renderFilterSection("Availability", filters.availability, "availability", toggleFilter)}
          {renderFilterSection("Rating", filters.rating, "rating", toggleFilter)}
        
        </aside>

        {/* Rooms */}
        <main className="w-full md:w-3/4 p-6">
          <h2 className="text-3xl font-semibold mb-6">Available Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => <RoomCard key={room._id} room={room} />)
            ) : (
              <p className="col-span-full text-center text-gray-600">No rooms available.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

const renderFilterSection = (title, filters, category, toggleFilter) => (
  <div className="mb-6">
    <h3 className="font-semibold text-lg">{title}</h3>
    <ul className="space-y-2 mt-2">
      {Object.keys(filters).map((filter) => (
        <li key={filter}>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={filters[filter]}
              onChange={() => toggleFilter(category, filter)}
              className="form-checkbox"
            />
            <span className="capitalize">{filter.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
          </label>
        </li>
      ))}
    </ul>
  </div>
);

const RoomCard = ({ room }) => (
  <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col group relative">
    <Image
      src={room.image || "/images/img1.jpg"}
      alt={room.title}
      width={500}
      height={300}
      className="w-full h-[200px] object-cover"
    />
    <div className="p-4">
    <div className="text-xl font-semibold flex justify-between items-center">
  {room.title}
  <span
    className={`text-xs px-2 py-1 rounded-full ${room.available ? "bg-green-500" : "bg-red-500"} text-white`}
  >
    {room.available ? "Available" : "Booked"}
  </span>
</div>
<p className="text-yellow-500 mt-2">{Array(room.rating).fill("★").join("")}</p>


      {/* Always Visible Room Details */}
      <div className="text-sm flex flex-col gap-2">
        {/* Description */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Description :</h1>
          <h1>{room.description}</h1>
        </div>

        {/* Size */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Size :</h1>
          <h1>{`${room.size} sq ft`}</h1>
        </div>

        {/* Max Occupancy */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Max Occupancy :</h1>
          <h1>{room.maxOccupancy}</h1>
        </div>

        {/* Bed Type */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Bed Type :</h1>
          <h1>{room.bedType}</h1>
        </div>

        {/* Features */}
        <div className="truncate flex gap-2">
          <h1 className="font-semibold">Features :</h1>
          <h1>{room.features.join(", ")}</h1>
        </div>
      </div>


      {/* Hover Reveal - Full Details */}
      <div className="absolute  bottom-16 left-0 bg-black bg-opacity-80 w-full  p-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity ">
      <div className="font-bold pb-5">Title: <h1 className="text-[14px]">{room.title}</h1></div>
        <div className="font-bold pb-5">Description: <h1 className="text-[14px]">{room.description}</h1></div>
        <h4 className="font-semibold">Room Details:</h4>
        <ul className="list-disc ml-5 text-white">
          <li >Size: {room.size} sq ft</li>
          <li>Maximum Occupancy: {room.maxOccupancy}</li>
          <li>Bed Type: {room.bedType}</li>
          <li>Features: {room.features.join(", ")}</li>
        </ul>
      </div>

      {/* <p className="text-yellow-500 mt-2">{Array(room.rating).fill("★").join("")}</p> */}
      <Link
        href={`/rooms/${room._id}`}
        className="block mt-4 text-center  bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        View Room
      </Link>
    </div>
  </div>
);

export default RoomPage;
