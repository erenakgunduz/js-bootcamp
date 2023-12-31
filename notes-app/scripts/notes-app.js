import { getSavedNotes, saveNotes, renderNotes } from './notes-functions.js';

// Query and remove
// const p = document.querySelector("p");
// p.remove();

// Query all and remove
// const ps = document.querySelectorAll("p");

// ps.forEach((p) => {
//   p.textContent = "*******";
//   p.remove();
//   console.log(p.textContent);
// });

let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited',
};

// const user = {
//   name: "Eren",
//   age: 20,
// };

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);
// const userJSON = localStorage.getItem("user");
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);

// localStorage.setItem("location", "Broward");
// console.log(localStorage.getItem("location"));
// localStorage.removeItem("location");
// localStorage.clear();

renderNotes(notes, filters);

// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new element from JavaScript";
// document.querySelector("body").appendChild(newParagraph);

document.querySelector('#create-note').addEventListener('click', () => {
  notes.push({
    id: crypto.randomUUID(),
    title: '',
    body: '',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  });
  saveNotes(notes);
  location.assign(`/notes-app/edit.html#${notes.at(-1).id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#sort-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
  notes = JSON.parse(e.newValue);
  renderNotes(notes, filters);
});
