// Type coercion - a string, a number, a boolean
// Loose equality with ==, won't take type into account and will coerce, so we won't want to ever use that

// console.log('5' + 5); -- Returns 55 via string concatenation
console.log('5' - 5); // Returns 0 now, hmmmmmm
console.log('5' === 5); // Strong equality (===), returns false

const value = true + 12;
const type = typeof value;
console.log(value, type);
