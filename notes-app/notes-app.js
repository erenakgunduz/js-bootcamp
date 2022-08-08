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

let notes = [];

const filters = {
  searchText: "",
};

// Check for existing saved data
const notesJSON = localStorage.getItem("notes");

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

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

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector(".notes .note-list").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("li");

    if (note.title.length > 0) {
      noteEl.textContent = note.title;
    } else {
      noteEl.textContent = "Unnamed note";
    }

    document.querySelector(".notes .note-list").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new element from JavaScript";
// document.querySelector("body").appendChild(newParagraph);

document.querySelector("#create-note").addEventListener("click", (e) => {
  notes.push({ title: "", body: "" });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value);
});
