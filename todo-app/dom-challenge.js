const getItems = Array.from(document.querySelectorAll('ul > li'));
const itemsText = getItems.map((x) => x.textContent);

const findText = (list) => {
  return list.filter((results) => {
    return results.toLowerCase().includes('the');
  });
};

const foundItems = findText(itemsText);

const checkForMatch = (items, test) => {
  return items.find((item) => {
    return item.toLowerCase() === test.toLowerCase();
  });
};

const removeItems = () => {
  getItems.forEach((item) => {
    if (checkForMatch(foundItems, item.textContent)) {
      item.remove();
    }
  });
};

removeItems();
