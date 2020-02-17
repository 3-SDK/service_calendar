CREATE KEYSPACE calendar WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true'

-- CREATE TABLE hotels (
--   id int PRIMARY KEY,
--   hotel_name text,
--   views int,
--   1_person_max_rooms int,
--   2_person_max_rooms int,
--   3_person_max_rooms int,
--   4_person_max_rooms int,
--   site_name text,
--   1_person_room_price int,
--   1_person_room_discounted_price int,
--   1_person_partner_names set<text>,
--   2_person_room_price int,
--   2_person_room_discounted_price int,
--   2_person_partner_names set<text>,
--   3_person_room_price int,
--   3_person_room_discounted_price int,
--   3_person_partner_names set<text>,
--   4_person_room_price int,
--   4_person_room_discounted_price int,
--   4_person_partner_names set<text>,
-- );

CREATE TABLE bookings (
  id int,
  hotel_id int,
  booked_start_date date,
  booked_end_date date,
  person_room_type int,
  booked_rooms int,
);

-- Different names
CREATE TABLE hotels (
  id int PRIMARY KEY,
  hotel_name text,
  views int,
  one_person_max_rooms int,
  two_person_max_rooms int,
  three_person_max_rooms int,
  four_person_max_rooms int,
  one_person_room_price int,
  one_person_room_discounted_price int,
  one_person_partner_names set<text>,
  two_person_room_price int,
  two_person_room_discounted_price int,
  two_person_partner_names set<text>,
  three_person_room_price int,
  three_person_room_discounted_price int,
  three_person_partner_names set<text>,
  four_person_room_price int,
  four_person_room_discounted_price int,
  four_person_partner_names set<text>,
);

  -- one_person_max_rooms, two_person_max_rooms, three_person_max_rooms, four_person_max_rooms, site_name, one_person_room_price, one_person_room_discounted_price, one_person_partner_names, two_person_room_price, two_person_room_discounted_price, two_person_partner_names, three_person_room_price, three_person_room_discounted_price, three_person_partner_names, four_person_room_price, four_person_room_discounted_price, four_person_partner_names