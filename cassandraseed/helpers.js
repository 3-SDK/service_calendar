const faker = require('faker');

// Generate random number between min and max
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

////////////////////////////////////////////////////////////// CASSANDRA //////////////////////////////////////////////////////////////

// ========= Hotels table: Hotel data for Cassandra ========= //

// Hotel info
const hotelInfo = () => {
  return `${faker.lorem.word()}, ${getRandomIntInclusive(0, 1000)}`
}

// Room capacities
const roomCapacity = () => {
  return `${getRandomIntInclusive(0, 100)}, ${getRandomIntInclusive(0, 100)}, ${getRandomIntInclusive(0, 100)}, ${getRandomIntInclusive(0, 100)}`
}

// ---- PRICING ---- //
// Prices for 1 person per room
const onePerson = () => {
  return `${getRandomIntInclusive(0, 100)}, ${getRandomIntInclusive(0, 90)}`
}

// Prices for 2 person per room
const twoPerson = () => {
  return `${getRandomIntInclusive(0, 150)}, ${getRandomIntInclusive(0, 120)}`
}

// Prices for 3 person per room
const threePerson = () => {
  return `${getRandomIntInclusive(0, 200)}, ${getRandomIntInclusive(0, 160)}`
}

// Prices for 4 person per room
const fourPerson = () => {
  return `${getRandomIntInclusive(0, 250)}, ${getRandomIntInclusive(0, 200)}`
}

// Room pricing
const partnerPricing = () => {
  return `${onePerson()}, ${twoPerson()}, ${threePerson()}, ${fourPerson()}`
}
// ========= Bookings table: Bookings data for Cassandra ========= //
//////// Generate all data ////////////////////
const generateHotelData = (idx) => {
  return `${idx}, ${hotelInfo()}, ${roomCapacity()}, ${faker.internet.domainName()}, ${partnerPricing()}\n`
}

// ========= Bookings table: Bookings data for Cassandra ========= //

// Booked dates for room
const bookedDates = () => {
  let startMonth = getRandomIntInclusive(1, 12);
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
  }

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
    let previousDay = day;
    generateDay(endMonth);
    day = getRandomIntInclusive(previousDay, day);
  }

  // Pad the month and day if needed
  strDay = day.toString().padStart(2, '0');
  strMonth = endMonth.toString().padStart(2, '0');

  const endDate = `${year}-${strMonth}-${strDay}`;

  return `${startDate}, ${endDate}`;
}

// Type of room booked
const roomInfo = () => {
  return `${getRandomIntInclusive(1, 4)}, ${getRandomIntInclusive(0, 100)}`
}

const generateBookingData = (idx) => {
  return `${idx}, ${getRandomIntInclusive(1, 99999999)}, ${bookedDates()}, ${roomInfo()}\n`
}

module.exports = {
  generateHotelData,
  generateBookingData,
}
