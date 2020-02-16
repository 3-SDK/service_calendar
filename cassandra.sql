CREATE KEYSPACE calendar WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true'

CREATE TABLE hotels (
  id int,
  hotel_name text,
  views int,
  availibility_start_date date,
  availibility_end_date date,
  1_person_max_rooms int,
  2_person_max_rooms int,
  3_person_max_rooms int,
  4_person_max_rooms int,
);

CREATE TABLE 1_person_room (
  id int,
  site_name text,
  1_person_room_price int,
  1_person_room_discounted_price int,
  hotel_id int,
);

CREATE TABLE 2_person_room (
  id int,
  site_name text,
  2_person_room_price int,
  2_person_room_discounted_price int,
  hotel_id int,
);

CREATE TABLE 3_person_room (
  id int,
  site_name text,
  3_person_room_price int,
  3_person_room_discounted_price int,
  hotel_id int,
);

CREATE TABLE 4_person_room (
  id int,
  site_name text,
  3_person_room_price int,
  3_person_room_discounted_price int,
  hotel_id int,
);

CREATE TABLE bookings (
  id int,
  hotel_id int,
  booked_start_date date,
  booked_end_date date,
  person_room_type int,
  booked_rooms int,
);