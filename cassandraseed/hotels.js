const faker = require('faker');

const fs = require('fs');

const { performance } = require('perf_hooks');

const write = fs.createWriteStream('./hotels.csv', 'utf8');
write.write('id, hotel_name, views, max_1_person_rooms, max_2_person_rooms, max_3_person_rooms, max_4_person_rooms\n');

const generateData = (idx) => {
  return `${idx}, ${faker.lorem.word()}, ${faker.random.number({ min: 0, max: 1000 })}, ${faker.random.number({ min: 0, max: 100 })}, ${faker.random.number({ min: 0, max: 100 })}, ${faker.random.number({ min: 0, max: 100 })}, ${faker.random.number({ min: 0, max: 100 })}\n`
}

function writeTenMillionTimes(writer, data, encoding, callback) {
  var i = 10000000;
  write();
  function write() {
    var ok = true;
    do {
      i -= 1;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        data = generateData(10000000-i);
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

const t0 = performance.now();

writeTenMillionTimes(write, '', 'utf8', () => { 
  const t1 = performance.now();
  console.log("Generated data in: " + (t1 - t0) + " milliseconds.");
});