const myName = '  Eren  ';

// Length property
console.log(myName.length);

// Convert to uppercase
console.log(myName.toUpperCase());

// Convert to lowercase
console.log(myName.toLowerCase());

// Includes method
const password = 'abc123asdf098';
console.log(password.includes('password'));

// Trim
console.log(myName.trim());

// Challenge area

const isValidPassword = (passwd) => passwd.length > 8 && !passwd.includes('password');

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abcnssf%$%&^#'));
console.log(isValidPassword('dfasfasfmnamdpasswordsdfg'));
