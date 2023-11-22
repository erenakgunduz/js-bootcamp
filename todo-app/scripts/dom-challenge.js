const listItems = document.querySelectorAll('ul > li');

listItems.forEach((item) => {
  if (item.textContent.toLowerCase().includes('the')) {
    item.remove();
  }
});
