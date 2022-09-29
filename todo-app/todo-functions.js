// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  return todosJSON ? JSON.parse(todosJSON) : [];
};

// Append a new incomplete todo item
const pushTodos = (todos, e) => {
  if (e.target.elements.newTodoText.value.trim().length > 0) {
    todos.push({
      id: crypto.randomUUID(),
      text: e.target.elements.newTodoText.value.trim(),
      completed: false,
    });
  }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove a todo from the list
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle checkbox for a todo
const toggleTodo = (id, e) => {
  const todoToggle = todos.find((todo) => todo.id === id);

  if (todoToggle) {
    todoToggle.completed = !todoToggle.completed;
  }
  e.target.checked = todoToggle.completed;
};

// Display summary
const getSummary = (todos) => {
  const pendingTodos = document.createElement('h2');
  if (todos.length === 1) {
    pendingTodos.textContent = 'You have one todo left';
  } else {
    pendingTodos.textContent = `You have ${todos.length} todos left`;
  }
  document.querySelector('header').appendChild(pendingTodos);
};

// Generate DOM render
const generateTodoDOM = (render) => {
  document.querySelector('.todos .todo-list').innerHTML = '';
  render.forEach((todo) => {
    const toDoList = document.createElement('li');
    const checkBox = document.createElement('input');
    const toDoListText = document.createElement('span');
    const rmButton = document.createElement('button');

    // Checkbox functionality
    checkBox.setAttribute('type', 'checkbox');
    toDoList.appendChild(checkBox);
    checkBox.checked = todo.completed;
    checkBox.addEventListener('change', (e) => {
      toggleTodo(todo.id, e);
      saveTodos(todos);
      renderTodos(todos, filters);
    });

    // Todo text to be rendered
    toDoListText.textContent = todo.text;
    toDoList.appendChild(toDoListText);

    // Remove button functionality
    rmButton.textContent = 'x';
    toDoList.appendChild(rmButton);
    rmButton.addEventListener('click', () => {
      removeTodo(todo.id);
      saveTodos(todos);
      renderTodos(todos, filters);
    });

    document.querySelector('.todos .todo-list').appendChild(toDoList);
  });
};

// Render application todos based on filters
function renderTodos(todos, filters) {
  const filteredTodos = (list) =>
    list.filter((item) => item.text.toLowerCase().includes(filters.searchText.toLowerCase()));

  const getPendingTodos = todos.filter((todo) => !todo.completed);
  document.querySelector('header').innerHTML = '<h1>Todo App</h1>';
  getSummary(filteredTodos(getPendingTodos));

  // Render based on current state of checkbox at time of function call
  // Which is every keystroke of search box due to event listener
  if (filters.hideCompleted.checked) {
    generateTodoDOM(filteredTodos(getPendingTodos));
  } else {
    generateTodoDOM(filteredTodos(todos));
  }

  // Also need event listener here to respond to every change to checkbox state
  document.querySelector('#hide-completed').addEventListener('change', (e) => {
    return e.target.checked
      ? generateTodoDOM(filteredTodos(getPendingTodos))
      : generateTodoDOM(filteredTodos(todos));
  });
}
