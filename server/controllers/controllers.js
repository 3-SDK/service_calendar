const models = require('../models');

// Promises

module.exports = {
  get: (req, res) => {
    console.log(req.params);
    models.get()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  post: (req, res) => {
    models.post()
      .then((data) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  put: (req, res) => {
    models.put()
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  delete: (req, res) => {
    models.delete()
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getPrices: (req, res) => {
    models.getPrices()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
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
