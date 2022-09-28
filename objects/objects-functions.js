let someBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

let otherBook = {
  title: "A People's History",
  author: 'Howard Zinn',
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(someBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area

const tempConverter = (fahrenheit) => {
  let celsius = (fahrenheit - 32) * (5 / 9);

  return {
    tempInF: `Temperature in °F: ${fahrenheit}`,
    tempInC: `Temperature in °C: ${Math.round(celsius)}`,
    tempInK: `Temperature in Kelvin: ${Math.round(celsius + 273.15)} K`,
  };
};

let exampleTemp = tempConverter(69);
console.log(exampleTemp);
