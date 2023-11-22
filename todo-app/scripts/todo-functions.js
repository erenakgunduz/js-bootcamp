// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
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

  if (todoIndex > -1) todos.splice(todoIndex, 1);
};

// Toggle checkbox for a todo
const toggleTodo = (id, e) => {
  const todoToggle = todos.find((todo) => todo.id === id);

  if (todoToggle) todoToggle.completed = !todoToggle.completed;
  e.target.checked = todoToggle.completed;
};

// Display summary
const getSummary = (todos) => {
  const pendingTodos = document.querySelector('.list-title');
  const plural = todos.length === 1 ? '' : 's';
  pendingTodos.textContent = `You have ${todos.length} to-do${plural} left`;
};

// Generate DOM render
const generateTodoDOM = (render) => {
  document.querySelector('.todos .todo-list').innerHTML = '';
  render.forEach((todo) => {
    const toDoList = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkBox = document.createElement('input');
    const toDoListText = document.createElement('span');
    const rmButton = document.createElement('button');

    // Checkbox functionality
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = todo.completed;
    containerEl.appendChild(checkBox);
    checkBox.addEventListener('change', (e) => {
      toggleTodo(todo.id, e);
      saveTodos(todos);
      renderTodos(todos, filters);
    });

    // Todo text to be rendered
    toDoListText.textContent = todo.text;
    containerEl.appendChild(toDoListText);

    // Set up container
    toDoList.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    toDoList.appendChild(containerEl);

    // Remove button functionality
    rmButton.textContent = 'remove';
    rmButton.classList.add('button', 'button--text');
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
  const emptyMessage = document.querySelector('.empty-message');
  const emptyText = 'No to-dos to show';

  getSummary(filteredTodos(getPendingTodos));

  // Render based on current state of checkbox at time of function call
  // Which is every keystroke of search box due to event listener
  if (filters.hideCompleted.checked) {
    generateTodoDOM(filteredTodos(getPendingTodos));
    emptyMessage.textContent = filteredTodos(getPendingTodos).length < 1 ? emptyText : '';
  } else {
    generateTodoDOM(filteredTodos(todos));
    emptyMessage.textContent = filteredTodos(todos).length < 1 ? emptyText : '';
  }

  // Also need event listener here to respond to every change to checkbox state
  document.querySelector('#hide-completed').addEventListener('change', (e) => {
    if (e.target.checked) {
      emptyMessage.textContent = filteredTodos(getPendingTodos).length < 1 ? emptyText : '';
      return generateTodoDOM(filteredTodos(getPendingTodos));
    }
    emptyMessage.textContent = filteredTodos(todos).length < 1 ? emptyText : '';
    return generateTodoDOM(filteredTodos(todos));
  });
}
