"use client";
import React, { useEffect, useState } from "react";
import { getAllRoomsDetails } from "../../Webservices/ManagementAPIController";
import FilterSidebar from "../../components/Rooms/FilterSidebar";
import HeaderBanner from "../../components/Rooms/HeaderBanner";
import RoomCard from "../../components/Rooms/RoomCard";

const RoomPage = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  // const [filterVisible, setFilterVisible] = useState(false);
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
    availability: { available: false, booked: false },
    rating: { oneStar: false, twoStars: false, threeStars: false, fourStars: false, fiveStars: false },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRoomsDetails();
        if (data?.result && Array.isArray(data.result)) {
          const processedRooms = data.result.map((room) => ({
            ...room,
            size: room.title.includes("Deluxe") ? 150 : room.title.includes("Super Deluxe") ? 180 : room.title.includes("Family") ? 250 : 0,
            maxOccupancy: room.title.includes("Family") ? 4 : room.title.includes("Super Deluxe") ? 3 : 2,
            bedType: room.title.includes("Family") ? "1 double bed + 1 single bed" : "1 double bed",
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

      // Apply each filter
      if (size.small) filtered = filtered.filter((r) => r.size <= 180);
      if (size.medium) filtered = filtered.filter((r) => r.size > 180 && r.size <= 250);
      if (size.large) filtered = filtered.filter((r) => r.size > 250);
      if (occupancy.single) filtered = filtered.filter((r) => r.maxOccupancy === 1);
      if (occupancy.double) filtered = filtered.filter((r) => r.maxOccupancy === 2);
      if (occupancy.family) filtered = filtered.filter((r) => r.maxOccupancy >= 4);
      if (propertyType.hotels) filtered = filtered.filter((r) => r.propertyType === "Hotel");
      if (propertyType.homestays) filtered = filtered.filter((r) => r.propertyType === "Homestay");
      if (availability.available) filtered = filtered.filter((r) => r.available === true);
      if (availability.booked) filtered = filtered.filter((r) => r.available === false);
      if (rating.oneStar) filtered = filtered.filter((r) => r.rating === 1);
      if (rating.twoStars) filtered = filtered.filter((r) => r.rating === 2);
      if (rating.threeStars) filtered = filtered.filter((r) => r.rating === 3);
      if (rating.fourStars) filtered = filtered.filter((r) => r.rating === 4);
      if (rating.fiveStars) filtered = filtered.filter((r) => r.rating === 5);
      Object.keys(amenities).forEach((amenity) => {
        if (amenities[amenity]) filtered = filtered.filter((r) => r.features.includes(amenity));
      });

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
    <div>
      <HeaderBanner title="Rooms & Suites" backgroundImage="/images/img2.jpg" />
      <div className="flex flex-wrap p-5">
        <FilterSidebar filters={filters} toggleFilter={toggleFilter} />
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

export default RoomPage;
