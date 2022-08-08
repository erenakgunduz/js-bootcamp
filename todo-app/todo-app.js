// Simple solution to DOM challenge
// const listItems = document.querySelectorAll("ul > li");

// listItems.forEach((item) => {
//   if (item.textContent.toLowerCase().includes("the")) {
//     item.remove();
//   }
// });

let todos = [];

const filters = {
  searchText: "",
  hideCompleted: document.getElementById("hide-completed"),
};

// Check for existing saved data
const todosJSON = localStorage.getItem("todos");
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

// Filters and renders list
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

  const pendingTodos = document.createElement("h2");
  if (filteredTodos(getPendingTodos).length === 1) {
    pendingTodos.textContent = `You have one todo left`;
  } else {
    pendingTodos.textContent = `You have ${
      filteredTodos(getPendingTodos).length
    } todos left`;
  }
  document.querySelector("header").appendChild(pendingTodos);

  const renderedTodos = (render) => {
    document.querySelector(".todos .todo-list").innerHTML = "";
    render.forEach((todo) => {
      const toDoList = document.createElement("li");
      toDoList.textContent = todo.text;
      document.querySelector(".todos .todo-list").appendChild(toDoList);
    });
  };

  // Render based on current state of checkbox at time of function call
  // Which is every keystroke of search box due to event listener below
  if (filters.hideCompleted.checked) {
    renderedTodos(filteredTodos(getPendingTodos));
  } else {
    renderedTodos(filteredTodos(todos));
  }

  // Also need event listener here to respond to every change to checkbox state
  document.querySelector("#hide-completed").addEventListener("change", (e) => {
    if (e.target.checked) {
      return renderedTodos(filteredTodos(getPendingTodos));
    } else {
      return renderedTodos(filteredTodos(todos));
    }
  });
};

renderTodos(todos, filters);

// Listens for filter text change
document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Listens for form submission and appends new todo to list
document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.elements.newTodoText.value.trim().length > 0) {
    todos.push({
      text: e.target.elements.newTodoText.value.trim(),
      completed: false,
    });
  }
  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos(todos, filters);
  return (e.target.elements.newTodoText.value = "");
});
