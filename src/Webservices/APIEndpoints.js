
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ;



const EndPoints = {


    GET_ROOMSDETAILS: () =>
        BASE_URL+ `/api/roomdetails`,

    BOOKING_ROOMS: () => BASE_URL+`/api/book`,

POST_ROOMS : () =>BASE_URL+ `/api/rooms`,

GET_ROOMID: (_id) =>BASE_URL+ `/api/rooms/:${_id} `,

};

Object.freeze(EndPoints);

export default EndPoints;
