
// const BASE_URL = "http://localhost:5000";



const EndPoints = {
    GET_ROOMS: () =>
     `http://localhost:5000/api/rooms`,

    GET_ROOMSDETAILS: () =>
    `http://localhost:5000/api/roomdetails`,

    BOOKING_ROOMS: () => `http://localhost:5000/api/book`,


};

Object.freeze(EndPoints);

export default EndPoints;
