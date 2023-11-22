const products = [];
const product = products[0];

// Truthy - Values that resolve to true in bool context
// Falsy - Values that resolve to false in bool context
// Examples of falsy values:
// false (duh)
// the int 0
// an empty string
// null and undefined
// NaN - not a number, returned from invalid math

console.log(product ? 'Product found' : 'Product not found');
