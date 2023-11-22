const restaurant = {
  name: 'Halim Usta',
  guestCapacity: 35,
  guestCount: 0,
  checkAvailability(partySize) {
    const seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty(partySize) {
    this.guestCount += partySize;
  },
  removeParty(partySize) {
    this.guestCount -= partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
