const models = require('../models');

// Promises

module.exports = {
  getHotelInfo: (req, res) => {
    models.getHotelInfo(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  getPrices: (req, res) => {
    const { id } = req.params;
    const param = req.query.type;

    models.getPrices(id, param)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  updatePrices: (req, res) => {
    const { id } = req.params;
    const param = Number(req.query.type);
    const { price } = req.body;
    models.updatePrices(id, param, price)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  getBookings: (req, res) => {
    const { id } = req.params;
    models.getBookings(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  getBookingsRooms: (req, res) => {
    const { id } = req.params;
    const param = Number(req.query.type);
    models.getBookingsRooms(id, param)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  addBooking: (req, res) => {
    console.log(req.body);
    models.addBooking(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
  deleteBooking: (req, res) => {
    models.deleteBooking(req.params)
      .then(() => {
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
