CREATE TABLE hotel (
  id,
  hotel_name,
  views,
  availibility_start_date,
  availibility_end_date,
  1_person_max_rooms,
  2_person_max_rooms,
  3_person_max_rooms,
  4_person_max_rooms,
);

CREATE TABLE partners (
  id,
  site_name,
  1_person_room_price,
  1_person_room_discounted_price,
  2_person_room_price,
  2_person_room_discounted_price,
  3_person_room_price,
  3_person_room_discounted_price,
  4_person_room_price,
  4_person_room_discounted_price,
  hotel_id,
)

CREATE TABLE bookings (
  id,
  hotel_id,
  booked_start_date,
  booked_end_date,
  person_room_type,
  booked_rooms,
)