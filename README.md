# Project Name

## API

### GET
```
GET /hotels/:id
<!-- curl http://localhost:1128/hotels/2 -->

Request Body: None.

Response: {
  name: Revolution,
  views: 10,
  1_person_max_rooms: 20,
  2_person_max_rooms: 30,
  3_person_max_rooms: 40,
  4_person_max_rooms: 50,
  availability_start_date: 2/15/20,
  availability_end_date: 2/17/20,
}
```
### POST
```
POST /hotels/:id
<!-- curl -X POST http://localhost:1128/hotels/2 -->
Request Body: None.

Response: HTTP/1.1 200 OK
```
### PUT
```
PUT /hotels/:id
<!-- curl -X PUT http://localhost:1128/hotels/2 -->

Request Body: None

Reponse: HTTP/1.1 200 OK
```
### DELETE
```
DELETE /hotels/:id
<!-- curl -X DELETE http://localhost:1128/hotels/2 -->

Request Body: None

Reponse: HTTP/1.1 200 OK
```

## Pricing
### GET
```
GET /hotels/:id/prices/
<!-- curl http://localhost:1128/hotels/prices/3 -->

Request Body: None.

Response = {
  site_name: Revolution,
  1_person_rooms_price: 100,
  1_person_rooms_discounted_price: null,
  2_person_rooms_price: 150,
  2_person_rooms_discounted_price: 130,
  3_person_rooms_price: 170,
  3_person_rooms_discounted_price: null,
  4_person_rooms_price: 200,
  4_person_rooms_discounted_price: 180
}
```

## Bookings
### GET
```
GET /hotels/:id/bookings/
<!-- curl http://localhost:1128/hotels/bookings/3 -->

Response Body: None.

Response = {
  hotel_id: 5,
  booked_start_date: 2/15/20,
  booked_end_date: 2/20/20,
  person_room_type: 1,
  booked_rooms: 2
}
```