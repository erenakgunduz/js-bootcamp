// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  return notesJSON ? JSON.parse(notesJSON) : [];
};

// Save notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('li');
  const textEl = document.createElement('a');
  const button = document.createElement('button');

  // Set up remove note button
  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Set up note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }
  textEl.setAttribute('href', `/notes-app/edit.html#${note.id}`);
  noteEl.appendChild(textEl);

  return noteEl;
};

// Sort notes by one of three ways
const sortNotes = (notes, sort) => {
  if (sort === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      }
      if (a.updatedAt < b.updatedAt) {
        return 1;
      }
      return 0;
    });
  }
  if (sort === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });
  }
  if (sort === 'alphabetical') {
    // Comparison operators flipped to achieve standard alphabetical order (A -> Z)
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  return notes;
};

// Render application notes
function renderNotes(notes, filters) {
  const myNotes = sortNotes(notes, filters.sortBy);
  const filteredNotes = myNotes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  document.querySelector('.notes .note-list').innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    document.querySelector('.notes .note-list').appendChild(noteEl);
  });
}
