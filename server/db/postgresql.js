const { Client } = require('pg');

const client = new Client();
client.connect();

const readItem = () => {
  client.query();
};
const createItem = () => {
  client.query();
};
const updateItem = () => {
  client.query();
};
const deleteItem = () => {
  client.query();
};

module.exports = {
  readItem,
  createItem,
  updateItem,
  deleteItem,
};
