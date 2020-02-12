const express = require('express');

const app = express();
const parser = require('body-parser');
const db = require('./db.js');
const router = require('./routes.js');

app.use(parser.urlencoded({ extended: true }));

app.use('/hotels', router);

app.use(express.static(__dirname + '/../client/dist'));

// app.use('/:id/', express.static(__dirname + '/../client/dist'));

// app.get('/hotels', (req, res) => {
//   return db.getLocations()
//     .then((locations) => {
//       res.send(locations);
//     });
// });

// app.get('/hotels/:id/', (req, res) => {
//   let id = parseInt(req.params.id);
//   return db.getLocations({ id:id })
//     .then((location) => {
//       res.send(location);
//     });
// });

app.listen(1128, () => {
  console.log('Listening on Chickin App');
});
