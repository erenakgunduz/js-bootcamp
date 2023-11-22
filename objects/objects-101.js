const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

const me = {
  name: 'Eren',
  age: 19,
  location: 'İzmir',
};

console.log(`\n${me.name} is ${me.age} and is from ${me.location}`);

me.age = 20;

console.log(`\n${me.name} is ${me.age} and is from ${me.location}`);
