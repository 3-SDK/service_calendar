const fs = require('fs');

const { performance } = require('perf_hooks');

const { generateBookingData } = require('./helpers.js');

const writeStream = fs.createWriteStream('./bookings.csv', 'utf8');
writeStream.write('id, hotel_id, booked_start_date, booked_end_date, person_room_type, booked_rooms\n');

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
        ok = writer.write(generateBookingData(10000000 - i), encoding);
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
