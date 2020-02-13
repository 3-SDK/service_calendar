const { Client } = require('pg');

const client = new Client();
client.connect();

// Promises

const readItem = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const createItem = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const updateItem = () => new Promise((resolve, reject) => {
  client
    .query('')
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

const deleteItem = () => new Promise((resolve, reject) => {
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
  readItem,
  createItem,
  updateItem,
  deleteItem,
};
