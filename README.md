# Project Name

## Table of Contents
1. [API](#API)
    * [Hotels](#Hotels)
    * [Pricing](#Pricing)
    * [Bookings](#Bookings)

## API

## Hotels
### GET
```
GET /hotels/:id
# Get information about the hotel based on id. Default is 2-person room.

Request Body: None.

Response: {
  id: 1,
  hotel_name: Revolution,
  views: 10,
  one_person_max_rooms: 20,
  two_person_max_rooms: 30,
  three_person_max_rooms: 40,
  four_person_max_rooms: 50,
  two_person_room_price: 150,
  two_person_room_discounted_price: 120,
  two_person_partner_names: ['domain.com', 'domain.com', 'domain.com', 'domain.com', 'domain.com']
}
```
### POST
```
POST /hotels/:id

Request Body: None.

Response: HTTP/1.1 200 OK
```
### PUT
```
PUT /hotels/:id/views
# Update the view counter and add viewer for visiting the page.

Request Body: {
  ipv4: '172.0.0.1'
}

Reponse: HTTP/1.1 200 OK
```
### DELETE
```
DELETE /hotels/:id/views
# Delete the viewer and update view counter

Request Body: {
  ipv4: '172.0.0.1'
}

Reponse: HTTP/1.1 200 OK
```

## Pricing
### GET
```
GET /hotels/:id/prices/room?type='room-type'
# Get pricing for certain room type in hotel.

Request Body: None.

Response = {
  one_person_rooms_price: 100,
  one_person_rooms_discounted_price: 80,
  one_person_partner_names: ['domain.com', 'domain.com', 'domain.com', 'domain.com', 'domain.com']
}
```
## PUT
```
PUT /hotels/:id/prices/room?type='room-type'
# Update partner pricing for certain room type hotel

Request Body: {
  pricing: 100
}

Reponse: HTTP/1.1 200 OK
```

## Bookings
### GET
```
GET /hotels/:id/bookings/
# Get booking information about hotel.

Request Body: None.

Response = [
  {
  hotel_id: 5,
  booked_start_date: "2020-2-15",
  booked_end_date: "2020-2-20",
  person_room_type: 1,
  booked_rooms: 2
  },
  {
  hotel_id: 5,
  booked_start_date: "2020-2-16",
  booked_end_date: "2020-2-20",
  person_room_type: 2,
  booked_rooms: 4
  },
  {
  hotel_id: 5,
  booked_start_date: "2020-2-13",
  booked_end_date: "2020-2-20",
  person_room_type: 3,
  booked_rooms: 3
  },
  {
  hotel_id: 5,
  booked_start_date: "2020-2-11",
  booked_end_date: "2020-2-20",
  person_room_type: 4,
  booked_rooms: 1
  }
]
```
### GET
```
GET /hotels/:id/bookings/room?type='room-type'
# Get booking information about a certain room type in hotel.

Request Body: None.

Response: {
  hotel_id: 2814539,
  booked_start_date: "2021-08-16",
  booked_end_date: "2021-10-11",
  person_room_type: 1,
  booked_rooms: 10
}
```
### POST
```
POST /hotels/:id/bookings/

Request Body: {
  hotel_id: 6,
  booked_start_date: "2021-03-16",
  booked_end_date: "2021-3-11",
  person_room_type: 1,
  booked_rooms: 2
}

Reponse: HTTP/1.1 200 OK
```
### DELETE
```
DELETE /hotels/:id/bookings/

Request Body: None.

Reponse: HTTP/1.1 200 OK
```