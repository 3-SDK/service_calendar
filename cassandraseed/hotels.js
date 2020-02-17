const fs = require('fs');

const { performance } = require('perf_hooks');

const { generateHotelData } = require('./helpers.js');

const writeStream = fs.createWriteStream('./hotels.csv', 'utf8');
writeStream.write('id, hotel_name, views, max_1_person_rooms, max_2_person_rooms, max_3_person_rooms, max_4_person_rooms, site_name, 1_perRoom_price, 1_perRoom_discount, 2_perRoom_price, 2_perRoom_discount, 3_perRoom_price, 3_perRoom_discount, 4_perRoom_price, 4_perRoom_discount\n');

function writeTenMillionTimes(writer, data, encoding, callback) {
  let i = 10000000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(generateHotelData(10000000 - i), encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

const t0 = performance.now();

writeTenMillionTimes(writeStream, '', 'utf8', () => {
  const t1 = performance.now();
  console.log(`Generated data in: ${t1 - t0} milliseconds.`);
});
