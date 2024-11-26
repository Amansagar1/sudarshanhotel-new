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
    popular: { superDeluxe: false, available: false, bestRatings: false },
    room: { available: false, booked: false, deluxe: false, superDeluxe: false },
    propertyType: { hotels: false, homestays: false },
    facilities: { parking: false, restaurant: false, petsAllowed: false },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRoomsDetails();
        if (data?.result && Array.isArray(data.result)) {
          setRooms(data.result);
          setFilteredRooms(data.result);
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
      const { popular, room, propertyType, facilities } = filters;

      if (popular.superDeluxe) filtered = filtered.filter((r) => r.title.includes("Super Deluxe"));
      if (popular.available) filtered = filtered.filter((r) => r.status === "available");
      if (popular.bestRatings) filtered = filtered.filter((r) => r.rating >= 4);

      if (room.available) filtered = filtered.filter((r) => r.status === "available");
      if (room.booked) filtered = filtered.filter((r) => r.status === "booked");
      if (room.deluxe) filtered = filtered.filter((r) => r.title.includes("Deluxe"));
      if (room.superDeluxe) filtered = filtered.filter((r) => r.title.includes("Super Deluxe"));

      if (propertyType.hotels) filtered = filtered.filter((r) => r.propertyType === "Hotel");
      if (propertyType.homestays) filtered = filtered.filter((r) => r.propertyType === "Homestay");

      if (facilities.parking) filtered = filtered.filter((r) => r.features.includes("Parking"));
      if (facilities.restaurant) filtered = filtered.filter((r) => r.features.includes("Restaurant"));
      if (facilities.petsAllowed) filtered = filtered.filter((r) => r.features.includes("Pets allowed"));

      setFilteredRooms(filtered);
    };
    applyFilters();
  }, [filters, rooms]);

  const toggleFilter = (category, filter) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [filter]: !prev[category][filter] },
    }));
  };

  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <section className="h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/images/img2.jpg')" }}>
        <h1 className="text-4xl font-bold">Rooms & Suites</h1>
        <nav className="text-lg mt-2">
          <Link href="/" className="hover:underline">
            Home /
          </Link>
          <Link href="/rooms" className="hover:underline">
            Rooms & Suites
          </Link>
        </nav>
      </section>

      {/* Content Section */}
      <div className="flex flex-wrap p-5 ">
        {/* Filters */}
        <aside className={`p-4 bg-gray-100 transition-all duration-300 w-full md:w-1/4 ${filterVisible ? "block" : "hidden"} md:block`}>
          <h2 className="text-2xl font-semibold mb-4">Filter by</h2>
          {renderFilterSection("Popular Filters", filters.popular, "popular", toggleFilter)}
          {renderFilterSection("Room Filters", filters.room, "room", toggleFilter)}
          {renderFilterSection("Property Type", filters.propertyType, "propertyType", toggleFilter)}
          {renderFilterSection("Facilities", filters.facilities, "facilities", toggleFilter)}
        </aside>

        {/* Rooms */}
        <main className="w-full md:w-3/4 p-6">
          <h2 className="text-3xl font-semibold mb-6">Available Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <RoomCard key={room._id} room={room} />
              ))
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
  <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col">
    <Image
      src={room.image || "/images/img1.jpg"}
      alt={room.title}
      width={500}
      height={300}
      className="w-full h-[200px] object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold flex justify-between items-center">
        {room.title}
        <span className={`text-xs px-2 py-1 rounded-full ${room.available ? "bg-green-500" : "bg-red-500"} text-white`}>
          {room.available ? "Available" : "Booked"}
        </span>
      </h3>
      <p className="text-gray-700 mt-2">{room.description || "No description available."}</p>
      <p className="text-yellow-500 mt-2">{Array(room.rating).fill("★").join("")}</p>
      <Link href={`/rooms/${room._id}`} className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        View Room
      </Link>
    </div>
  </div>
);

export default RoomPage;
