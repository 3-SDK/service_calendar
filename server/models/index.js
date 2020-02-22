const db = require('../db/postgresql.js');

module.exports = {
  getHotelInfo: () => db.getHotelInfo(),
  getPrices: () => db.getPrices(),
  updatePrices: () => db.updatePrices(),
  getBookings: () => db.getBookings(),
  getBookingsRooms: () => db.getBookingsRooms(),
  addBooking: () => db.addBooking(),
  deleteBooking: () => db.deleteBooking(),
};
