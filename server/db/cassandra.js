const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'datacenter1',
  keyspace: 'ks1',
});

// Test
// const readItem = () => new Promise((resolve, reject) => {
//   resolve('Success');
//   reject('Failure');
// });

// Promises

const readItem = () => new Promise((resolve, reject) => {
  const query = '';
  client.execute(query, null, null, (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results);
    }
  });
});

const createItem = () => new Promise((resolve, reject) => {
  const query = '';
  client.execute(query, null, null, (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results);
    }
  });
});

const updateItem = () => new Promise((resolve, reject) => {
  const query = '';
  client.execute(query, null, null, (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results);
    }
  });
});

const deleteItem = () => new Promise((resolve, reject) => {
  const query = '';
  client.execute(query, null, null, (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results);
    }
  });
});

// Callbacks

// const readItem = () => {
//   const query = '';
//   client.execute(query)
//     .then((result) => { console.log(result); });
// };
// const createItem = () => {
//   const query = '';
//   client.execute(query)
//     .then((result) => { console.log(result); });
// };
// const updateItem = () => {
//   const query = '';
//   client.execute(query)
//     .then((result) => { console.log(result); });
// };
// const deleteItem = () => {
//   const query = '';
//   client.execute(query)
//     .then((result) => { console.log(result); });
// };

module.exports = {
  readItem,
  createItem,
  updateItem,
  deleteItem,
};
