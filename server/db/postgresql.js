// const { Client } = require('pg');

// const client = new Client();
// client.connect();

// Promises

// Hotels
const getHotelInfo = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const getPrices = () => new Promise((resolve, reject) => {
  resolve('This works');
});

const updatePrices = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const getBookings = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const getBookingsRooms = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const addBooking = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const deleteBooking = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

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

module.exports = {
  getHotelInfo,
  getPrices,
  updatePrices,
  getBookings,
  getBookingsRooms,
  addBooking,
  deleteBooking,
};
