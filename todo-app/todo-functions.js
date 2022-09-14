// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
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
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Display summary
const getSummary = (todos) => {
  const pendingTodos = document.createElement("h2");
  if (todos.length === 1) {
    pendingTodos.textContent = "You have one todo left";
  } else {
    pendingTodos.textContent = `You have ${todos.length} todos left`;
  }
  document.querySelector("header").appendChild(pendingTodos);
};

// Generate DOM render
const generateTodoDOM = (render) => {
  document.querySelector(".todos .todo-list").innerHTML = "";
  render.forEach((todo) => {
    const toDoList = document.createElement("li");
    const checkBox = document.createElement("input");
    const toDoListText = document.createElement("span");
    const rmButton = document.createElement("button");

    // Specifying and appending the relevant elements
    checkBox.setAttribute("type", "checkbox");
    toDoList.appendChild(checkBox);

    toDoListText.textContent = todo.text;
    toDoList.appendChild(toDoListText);

    rmButton.textContent = "x";
    toDoList.appendChild(rmButton);

    document.querySelector(".todos .todo-list").appendChild(toDoList);
  });
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = (list) => {
    return list.filter((item) => {
      return item.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
  };

  const getPendingTodos = todos.filter((todo) => {
    return !todo.completed;
  });

  document.querySelector("header").innerHTML = "<h1>Todo App</h1>";
  getSummary(filteredTodos(getPendingTodos));

  // Render based on current state of checkbox at time of function call
  // Which is every keystroke of search box due to event listener
  if (filters.hideCompleted.checked) {
    generateTodoDOM(filteredTodos(getPendingTodos));
  } else {
    generateTodoDOM(filteredTodos(todos));
  }

  // Also need event listener here to respond to every change to checkbox state
  document.querySelector("#hide-completed").addEventListener("change", (e) => {
    if (e.target.checked) {
      return generateTodoDOM(filteredTodos(getPendingTodos));
    } else {
      return generateTodoDOM(filteredTodos(todos));
    }
  });
};
