CREATE TABLE hotels (
  id SERIAL PRIMARY KEY,
  hotel_name VARCHAR(255),
  views INTEGER,
  one_person_max_rooms INTEGER,
  two_person_max_rooms INTEGER,
  three_person_max_rooms INTEGER,
  four_person_max_rooms INTEGER
);

CREATE TABLE partners (
  id SERIAL PRIMARY KEY,
  one_person_room_price INTEGER,
  one_person_room_discounted_price INTEGER,
  one_person_partner_names TEXT [],
  two_person_room_price INTEGER,
  two_person_room_discounted_price INTEGER,
  two_person_partner_names TEXT [],
  three_person_room_price INTEGER,
  three_person_room_discounted_price INTEGER,
  three_person_partner_names TEXT [],
  four_person_room_price INTEGER,
  four_person_room_discounted_price INTEGER,
  four_person_partner_names TEXT [],
  hotel_id INTEGER REFERENCES hotels(id)
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  hotel_id INTEGER,
  booked_start_date VARCHAR(50),
  booked_end_date VARCHAR(50),
  person_room_type INTEGER,
  booked_rooms INTEGER
);

ALTER TABLE bookings
ADD CONSTRAINT fk_hotel FOREIGN KEY (hotel_id) REFERENCES hotels (id);
-- ALTER TABLE bookings ADD PRIMARY KEY(id);

-- Temporary Tables to import data
CREATE TABLE hotels_import (
  id INTEGER PRIMARY KEY,
  hotel_name VARCHAR(255),
  views INTEGER,
  one_person_max_rooms INTEGER,
  two_person_max_rooms INTEGER,
  three_person_max_rooms INTEGER,
  four_person_max_rooms INTEGER,
  one_person_room_price INTEGER,
  one_person_room_discounted_price INTEGER,
  one_person_partner_names TEXT [],
  two_person_room_price INTEGER,
  two_person_room_discounted_price INTEGER,
  two_person_partner_names TEXT [],
  three_person_room_price INTEGER,
  three_person_room_discounted_price INTEGER,
  three_person_partner_names TEXT [],
  four_person_room_price INTEGER,
  four_person_room_discounted_price INTEGER,
  four_person_partner_names TEXT []
);

CREATE TABLE bookings_import (
  id SERIAL,
  hotel_id INTEGER,
  booked_start_date VARCHAR(50),
  booked_end_date VARCHAR(50),
  person_room_type INTEGER,
  booked_rooms INTEGER
);

  -- viewing_hotel TEXT []


-- Old table
-- CREATE TABLE partners (
--   id INTEGER PRIMARY KEY,
--   site_name VARCHAR(255),
--   one_person_room_price INTEGER,
--   one_person_room_discounted_price INTEGER,
--   two_person_room_price INTEGER,
--   two_person_room_discounted_price INTEGER,
--   three_person_room_price INTEGER,
--   three_person_room_discounted_price INTEGER,
--   four_person_room_price INTEGER,
--   four_person_room_discounted_price INTEGER,
--   hotel_id INTEGER REFERENCES hotels(id)
-- );