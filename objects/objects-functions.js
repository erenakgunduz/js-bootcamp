const someBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

const otherBook = {
  title: "A People's History",
  author: 'Howard Zinn',
  pageCount: 723,
};

const getSummary = (book) => {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

const bookSummary = getSummary(someBook);
const otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area

const tempConverter = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * (5 / 9);

  return {
    tempInF: `Temperature in °F: ${fahrenheit}`,
    tempInC: `Temperature in °C: ${Math.round(celsius)}`,
    tempInK: `Temperature in Kelvin: ${Math.round(celsius + 273.15)} K`,
  };
};

const exampconstemp = tempConverter(69);
console.log(exampconstemp);
