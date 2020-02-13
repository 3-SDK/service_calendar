const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'datacenter1',
  keyspace: 'ks1',
});

const readItem = () => {
  const query = '';
  client.execute(query)
    .then((result) => { console.log(result); });
};
const createItem = () => {
  const query = '';
  client.execute(query)
    .then((result) => { console.log(result); });
};
const updateItem = () => {
  const query = '';
  client.execute(query)
    .then((result) => { console.log(result); });
};
const deleteItem = () => {
  const query = '';
  client.execute(query)
    .then((result) => { console.log(result); });
};

module.exports = {
  readItem,
  createItem,
  updateItem,
  deleteItem,
};
