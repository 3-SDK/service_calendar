const faker = require('faker');

const fs = require('fs');

const { performance } = require('perf_hooks');

const write = fs.createWriteStream('./prices2.csv', 'utf8');
write.write('id, site_name, 1_perRoom_price, 1_perRoom_discount, hotel_id\n');

const generateData = (idx) => {
  return `${idx}, ${faker.internet.domainName()}, ${faker.random.number({ min: 0, max: 600 })}, ${faker.random.number({ min: 0, max: 400 })}, ${faker.random.number({ min: 1, max: 99999999 })}\n`
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
        ok = writer.write(data, encoding);
        data = generateData(10000000-i);
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
