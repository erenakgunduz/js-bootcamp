// 1. You can't define a variable more than once
let petName = "Hal";

// Now we've defined petName, so you can't then do this:
// let petName = "Spot";

// This, however, you absolutely can do, changing the value of a variable that you already defined -- and it's VERY common
petName = "Spot";

console.log(petName);

// 2. There are rules related to variable names

let test_ = 2;
let result = 3 + 4;

// 3. Variable names cannot be reserved keywords
// let let = 12 -- not gonna work
