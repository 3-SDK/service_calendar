const faker = require('faker');

// Generate random number between min and max
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ///////////////////////////////////////// CASSANDRA ///////////////////////////////////////////

// ========= Hotels table: Hotel data for Cassandra ========= //

// Hotel info
const hotelInfo = () => `${faker.lorem.word()}|${getRandomIntInclusive(0, 1000)}`;

// Room capacities
const roomCapacity = () => `${getRandomIntInclusive(0, 100)}|${getRandomIntInclusive(0, 100)}|${getRandomIntInclusive(0, 100)}|${getRandomIntInclusive(0, 100)}`;

// Partner names
const siteNames = () => `{${faker.internet.domainName()}, ${faker.internet.domainName()}, ${faker.internet.domainName()}, ${faker.internet.domainName()}, ${faker.internet.domainName()}}`;

// ---- PRICING ---- //
// Prices for 1 person per room
const onePerson = () => `${getRandomIntInclusive(0, 100)}|${getRandomIntInclusive(0, 90)}|${siteNames()}`;

// Prices for 2 person per room
const twoPerson = () => `${getRandomIntInclusive(0, 150)}|${getRandomIntInclusive(0, 120)}|${siteNames()}`;

// Prices for 3 person per room
const threePerson = () => `${getRandomIntInclusive(0, 200)}|${getRandomIntInclusive(0, 160)}|${siteNames()}`;

// Prices for 4 person per room
const fourPerson = () => `${getRandomIntInclusive(0, 250)}|${getRandomIntInclusive(0, 200)}|${siteNames()}`;

// Room pricing
const partnerPricing = () => `${onePerson()}|${twoPerson()}|${threePerson()}|${fourPerson()}|${siteNames()}`;

// ////// Generate all data ////////////////////
const generateHotelData = (idx) => `${idx}|${hotelInfo()}|${roomCapacity()}|${partnerPricing()}\n`;

// ========= Bookings table: Bookings data for Cassandra ========= //

// Booked dates for room
const bookedDates = () => {
  const startMonth = getRandomIntInclusive(1, 12);
  let year = getRandomIntInclusive(2020, 2021);
  let day;

  // Generate day based on month
  const generateDay = (month) => {
    if (month === 2) {
      if (year === 2020) {
        day = getRandomIntInclusive(1, 29);
      } else {
        day = getRandomIntInclusive(1, 28);
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      day = getRandomIntInclusive(1, 30);
    } else {
      day = getRandomIntInclusive(1, 31);
    }
  };

  generateDay(startMonth);

  // Pad the month and day if needed
  let strDay = day.toString().padStart(2, '0');
  let strMonth = startMonth.toString().padStart(2, '0');
  const startDate = `${year}-${strMonth}-${strDay}`;

  // If year is 2020, change to 2021 and generate months and days based on current year
  let endMonth;
  if (year === 2020) {
    year = 2021;
    endMonth = getRandomIntInclusive(1, 12);
    generateDay(endMonth);
  } else {
    // Same year, generate previous month and above
    endMonth = getRandomIntInclusive(startMonth, 12);
    // Make sure you don't generate a day before the previous day
    const previousDay = day;
    generateDay(endMonth);
    day = getRandomIntInclusive(previousDay, day);
  }

  // Pad the month and day if needed
  strDay = day.toString().padStart(2, '0');
  strMonth = endMonth.toString().padStart(2, '0');

  const endDate = `${year}-${strMonth}-${strDay}`;

  return `${startDate}, ${endDate}`;
};

// Type of room booked
const roomInfo = () => `${getRandomIntInclusive(1, 4)}|${getRandomIntInclusive(0, 100)}`;

const generateBookingData = (idx) => `${idx}|${getRandomIntInclusive(1, 99999999)}|${bookedDates()}|${roomInfo()}\n`;

module.exports = {
  generateHotelData,
  generateBookingData,
};
