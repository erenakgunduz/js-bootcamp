const restaurant = {
  name: 'Halim Usta',
  guestCapacity: 35,
  guestCount: 0,
  checkAvailability: function (partySize) {
    const seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount += partySize;
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
