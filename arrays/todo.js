const toDoList = [
  { text: 'Çöpü çıkar', completed: true },
  { text: 'Make breakfast', completed: true },
  { text: 'Buy item', completed: false },
  { text: 'Update Swift', completed: false },
  { text: 'Exit house', completed: true },
];

const deleteTodo = (list, title) => {
  const itemIndex = list.findIndex((item) => {
    return item.text.toLowerCase() === title.toLowerCase();
  });
  if (itemIndex > -1) {
    list.splice(itemIndex, 1);
  }
};

const getPendingTodos = (list) => {
  return list.filter((item) => {
    return !item.completed;
  });
};

const sortTodos = (list) => {
  return list.sort((a, b) => {
    // My solution (because true > false):
    // if (a.completed > b.completed) {
    //   return 1;
    // } else if (b.completed > a.completed) {
    //   return -1;
    if (!a.completed && b.completed) {
      return -1;
    }
    if (!b.completed && a.completed) {
      return 1;
    }
    return 0;
  });
};

console.log(typeof deleteTodo); // Defined as function
console.log(typeof itemIndex); // Inside scope (not hoisted), undefined globally

console.log(false < true);
sortTodos(toDoList);
console.log(toDoList);

console.log(getPendingTodos(toDoList));

deleteTodo(toDoList, 'buy item');
console.log(toDoList);

toDoList.splice(2, 1);
toDoList.push('Drive car');
toDoList.shift();

const announce = `\nYou have ${toDoList.length} todos:`;

console.log(announce);
toDoList.forEach((item, i) => {
  console.log(`${i + 1}. ${item}`);
});

console.log(announce);
for (let count = 0; count < toDoList.length; count++) {
  console.log(`${count + 1}. ${toDoList[count]}`);
}
