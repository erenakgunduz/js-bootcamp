const todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: document.getElementById('hide-completed'),
};

renderTodos(todos, filters);

// Listens for filter text change
document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Listens for form submission and appends new todo to list
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  pushTodos(todos, e);
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.newTodoText.value = '';
});
