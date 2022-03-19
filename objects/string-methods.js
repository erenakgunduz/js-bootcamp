let myName = "  Eren  ";

// Length property
console.log(myName.length);

// Convert to uppercase
console.log(myName.toUpperCase());

// Convert to lowercase
console.log(myName.toLowerCase());

// Includes method
let password = "abc123asdf098";
console.log(password.includes("password"));

// Trim
console.log(myName.trim());

// Challenge area

const isValidPassword = (password) => {
  // if (password.length > 8 && !password.includes("password")) {
  //   return true;
  // } else {
  //   return false;
  // }
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abcnssf%$%&^#"));
console.log(isValidPassword("dfasfasfmnamdpasswordsdfg"));
