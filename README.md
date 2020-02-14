# Project Name

## API

### GET
```
GET /hotels/calendar/:id
curl http://localhost:1128/hotels/calendar/2

Response: {
  view: Number,
  lowest_priced_days: [Number],
  prices_id: Number,
}
```
### POST
```
POST /hotels/calendar/:id
curl -X POST http://localhost:1128/hotels/calendar/2
```
### PUT
```
PUT /hotels/calendar/:id
curl -X PUT http://localhost:1128/hotels/calendar/2
```
### DELETE
```
DELETE /hotels/calendar/:id
curl -X DELETE http://localhost:1128/hotels/calendar/2
```

### GET
```
GET /hotels/calendar/prices/:id
curl http://localhost:1128/hotels/calendar/prices/3

Response = {
  site_name: String,
  small_room: Number,
  small_price: Number,
  small_discounted_price: Number,
  medium_room: Number,
  medium_price: Number,
  medium_discounted_price: Number,
  large_room: Number,
  large_price: Number,
  large_discounted_price: Number,
}
```