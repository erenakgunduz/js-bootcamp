// Primitives: string, number, boolean, null, undefined
// The first three are actually implemented as objects but null and undefined are purely primitive, can never be objects
// Everything else is an object type, and thus an instance of the applicable prototype and all that it inherits

// Object: myObject --> Object.prototype --> null (chain ends)
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> you get the idea
// String, Number, Boolean also have their prototypes which inherit from Object, makes sense

// Normally you never do it like this, we use the literal syntax and this is basically what JS does behind the scenes
const product = new Object({ name: 'cassava' });

const team = ['Luke', 'Madison'];
// hasOwnProperty -- a method of the Object prototype
console.log(team.hasOwnProperty('filter'));

const getScore = () => 100;
console.log(getScore);

const aProduct = 'aku';
console.log(aProduct);
const otherProduct = new String('computer');
console.log(otherProduct);

Object.prototype.someNewMethod = () => 'This is the NEW function';

console.log(product.someNewMethod());
console.log(product);
