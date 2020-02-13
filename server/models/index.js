const db = require('../db/cassandra.js');

module.exports = {
  get: () => db.readItem(),
  post: () => db.createItem(),
  put: () => db.updateItem(),
  delete: () => db.deleteItem(),
};
