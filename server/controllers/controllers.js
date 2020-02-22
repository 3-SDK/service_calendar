const models = require('../models');

// Promises

module.exports = {
  getHotelInfo: (req, res) => {
    console.log(req.params);
    models.getHotelInfo()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  getPrices: (req, res) => {
    console.log('Param: ', req.params);
    console.log('Query: ', req.query);
    console.log('URL', req.url);
    models.getPrices()
      .then((data) => {
        // res.json(data);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  updatePrices: (req, res) => {
    console.log(req.params);
    models.updatePrices()
      .then((data) => {
        // res.json(data);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  getBookings: (req, res) => {
    console.log(req.params);
    models.getBookings()
      .then((data) => {
        // res.json(data);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  getBookingsRooms: (req, res) => {
    console.log(req.params);
    models.getBookingsRooms()
      .then((data) => {
        // res.json(data);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  addBooking: (req, res) => {
    console.log(req.params);
    models.addBooking()
      .then((data) => {
        // res.json(data);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  deleteBooking: (req, res) => {
    console.log(req.params);
    models.deleteBooking()
      .then((data) => {
        // res.json(data);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
};

// Callbacks

// module.exports = {
//   get: (req, res) => {
//     models.get((err, results) => {
//       if (err) { console.log(err); }
//       res.json(results);
//     });
//   },
//   post: (req, res) => {
//     models.post((err, results) => {
//       if (err) { console.log(err); }
//       res.sendStatus(201);
//     });
//   },
//   put: (req, res) => {
//     models.put((err, results) => {
//       if (err) { console.log(err); }
//       res.sendStatus(200);
//     });
//   },
//   delete: (req, res) => {
//     models.delete((err, results) => {
//       if (err) { console.log(err); }
//       res.sendStatus(200);
//     });
//   },
// };
