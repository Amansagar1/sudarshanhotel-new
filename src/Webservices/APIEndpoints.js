
// const BASE_URL = "http://localhost:5000";



const EndPoints = {


    GET_ROOMSDETAILS: () =>
    `http://localhost:5000/api/roomdetails`,

    BOOKING_ROOMS: () => `http://localhost:5000/api/book`,

POST_ROOMS : () => `http://localhost:5000/api/rooms`,

GET_ROOMID: (_id) => ` http://localhost:5000/api/rooms/:${_id} `,

};

Object.freeze(EndPoints);

export default EndPoints;
