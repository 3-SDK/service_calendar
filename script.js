import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 650,
  duration: '1m30s',
};

export default function () {
  // POST /hotels/1/bookings
  const rnd = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const url = 'http://localhost:1128/hotels/1/bookings';

  const payload = {
    hotelID: 1, startDate: '1010-01-01', endDate: '1010-02-02', roomType: rnd(1, 4), rooms: rnd(1, 10),
  };

  const params = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

  const res = http.post(url, payload, params);
  sleep(1);

  check(res, {
    'status was 200': (r) => r.status === 201,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
}

// export default function () {
// GET /hotels/1
// const res = http.get('http://localhost:1128/hotels/1');
// sleep(1);

// check(res, {
//   'status was 200': (r) => r.status === 200,
//   'transaction time OK': (r) => r.timings.duration < 200,
// });
// }
