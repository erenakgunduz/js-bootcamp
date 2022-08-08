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

const notes = [
  {
    title: "My next trip",
    body: "Somewhere on a certain continent",
  },
  {
    title: "Habits to work on",
    body: "Time management, first and foremost",
  },
  {
    title: "Room modifications",
    body: "New larger bed",
  },
];

const filters = {
  searchText: "",
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector(".notes .note-list").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("li");
    noteEl.textContent = note.title;
    document.querySelector(".notes .note-list").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new element from JavaScript";
// document.querySelector("body").appendChild(newParagraph);

document.querySelector("#create-note").addEventListener("click", (e) => {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  console.log(e.target.value);
});
