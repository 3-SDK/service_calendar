const fs = require('fs');

const { performance } = require('perf_hooks');

const { generateHotelData } = require('./helpers.js');

const writeStream = fs.createWriteStream('./hotels.csv', 'utf8');
writeStream.write('id, hotel_name, views, one_person_max_rooms, two_person_max_rooms, three_person_max_rooms, four_person_max_rooms, site_name, one_person_room_price, one_person_room_discounted_price, one_person_partner_names, two_person_room_price, two_person_room_discounted_price, two_person_partner_names, three_person_room_price, three_person_room_discounted_price, three_person_partner_names, four_person_room_price, four_person_room_discounted_price, four_person_partner_names\n');

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
