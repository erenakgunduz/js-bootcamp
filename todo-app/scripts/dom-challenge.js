const getItems = Array.from(document.querySelectorAll('ul > li'));
const itemsText = getItems.map((x) => x.textContent);

const findText = (list) => list.filter((results) => results.toLowerCase().includes('the'));

const foundItems = findText(itemsText);

const checkForMatch = (items, test) =>
  items.find((item) => item.toLowerCase() === test.toLowerCase());

// IIFE arrow function syntax
(() => {
  getItems.forEach((item) => {
    if (checkForMatch(foundItems, item.textContent)) {
      item.remove();
    }
  });
})();
