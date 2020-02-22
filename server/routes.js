const router = require('express').Router();
const controller = require('./controllers/controllers.js');

// Connect controller methods to their corresponding routes

// Hotels
router.get('/:id', controller.getHotelInfo);

// router.post('/:id', controller.post);

// router.put('/:id', controller.put);

// router.delete('/:id', controller.delete);

// Partner prices
router.get('/:id/prices/room?', controller.getPrices);

router.put('/:id/prices/room?', controller.updatePrices);

// Bookings
router.get('/:id/bookings/', controller.getBookings);

router.get('/:id/bookings/room?', controller.getBookingsRooms);

router.post('/:id/bookings/', controller.addBooking);

router.delete('/:id/bookings/', controller.deleteBooking);

module.exports = router;
