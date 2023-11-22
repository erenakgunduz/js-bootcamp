const getTip = (amount) => {
  of amount === 'number') {
    return amount * 0.25;
  }
  throw TypeError(`Expected number, got ${typeof amount}`);
};

try {
  const result = getTip(true);
  console.log(result);
} catch (TypeError) {
  console.log('Ran catch block');
}
