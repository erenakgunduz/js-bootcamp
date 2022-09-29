const square = (num) => num * num;

const squareLong = (num) => {
  return num ** 2;
};

console.log(square(5));

const people = [
  {
    name: 'Eren',
    age: 20,
  },
  {
    name: 'Junior',
    age: 40,
  },
  {
    name: 'Dan',
    age: 23,
  },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const age20 = people.find((person) => person.age === 20);
console.log(age20.name);
