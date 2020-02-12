const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.get((err, results) => {
      if (err) { console.log(err); }
      res.json(results);
    });
  },
  post: (req, res) => {
    models.post((err, results) => {
      if (err) { console.log(err); }
      res.sendStatus(201);
    });
  },
  put: (req, res) => {
    models.put((err, results) => {
      if (err) { console.log(err); }
      res.sendStatus(200);
    });
  },
  delete: (req, res) => {
    models.delete((err, results) => {
      if (err) { console.log(err); }
      res.sendStatus(200);
    });
  },
};
