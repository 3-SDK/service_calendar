// const getHotelInfo = () => new Promise((resolve, reject) => {
//   resolve('Success');
// });

const db = require('../db/postgresql.js');

// Helpers
const determineRoomType = (param) => {
  let roomType;

  if (param === '1') {
    roomType = 'one';
  } else if (param === '2') {
    roomType = 'two';
  } else if (param === '3') {
    roomType = 'three';
  } else if (param === '4') {
    roomType = 'four';
  }

  return roomType;
};

// Hotels
const getHotelInfo = (id) => new Promise((resolve, reject) => {
  const queryStr = `SELECT hotels.id, hotel_name, views, one_person_max_rooms, \
                  two_person_max_rooms, three_person_max_rooms, four_person_max_rooms, \
                  two_person_room_price, two_person_room_discounted_price, two_person_partner_names \
                  FROM hotels INNER JOIN partners ON hotels .id = partners.hotel_id WHERE hotels.id = ${id};`;
  db
    .query(queryStr)
    .then((res) => resolve(res.rows))
    .catch((err) => reject(err));
});

const getPrices = (id, param) => new Promise((resolve, reject) => {
  const roomType = determineRoomType(param);

  const queryStr = `SELECT ${roomType}_person_room_price, ${roomType}_person_room_discounted_price, \
                    ${roomType}_person_partner_names FROM partners WHERE hotel_id = ${param};`;
  db
    .query(queryStr)
    .then((res) => resolve(res.rows))
    .catch((err) => reject(err));
});

const updatePrices = (id, param, value) => new Promise((resolve, reject) => {
  const roomType = determineRoomType(param);

  const queryStr = `UPDATE partners SET ${roomType}_person_room_price = ${value} WHERE hotel_id = ${id};`;

  db
    .query(queryStr)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const getBookings = (id) => new Promise((resolve, reject) => {
  const queryStr = `SELECT * FROM bookings WHERE hotel_id = ${id};`;

  db
    .query(queryStr)
    .then((res) => resolve(res.rows))
    .catch((err) => reject(err));
});

const getBookingsRooms = (id, param) => new Promise((resolve, reject) => {
  const queryStr = `SELECT * FROM bookings WHERE hotel_id = ${id} AND person_room_type = ${param};`;

  db
    .query(queryStr)
    .then((res) => resolve(res.rows))
    .catch((err) => reject(err));
});

const addBooking = (params) => new Promise((resolve, reject) => {
  const {
    hotelID, startDate, endDate, roomType, rooms,
  } = params;

  const queryStr = `INSERT INTO bookings (hotel_id, booked_start_date, booked_end_date, person_room_type, booked_rooms) \
                    VALUES (${hotelID}, '${startDate}', '${endDate}', ${Number(roomType)}, ${Number(rooms)});`;

  db
    .query(queryStr)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const deleteBooking = (params) => new Promise((resolve, reject) => {
  const { id, bookID } = params;

  const queryStr = `DELETE FROM bookings WHERE id = ${Number(bookID)} AND hotel_id = ${Number(id)};`;

  db
    .query(queryStr)
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

module.exports = {
  getHotelInfo,
  getPrices,
  updatePrices,
  getBookings,
  getBookingsRooms,
  addBooking,
  deleteBooking,
};

// Callbacks

// const readItem = () => {
//   client.query();
// };
// const createItem = () => {
//   client.query();
// };
// const updateItem = () => {
//   client.query();
// };
// const deleteItem = () => {
//   client.query();
// };
