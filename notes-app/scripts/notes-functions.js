import { generateLastEdited } from './imports.js';

// Read existing notes from localStorage
export function getSavedNotes() {
  const notesJSON = localStorage.getItem('notes');
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
}

// Save notes to localStorage
export function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Remove a note from the list
export function removeNote(notes, id) {
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a');
  const textEl = document.createElement('p');
  const statusEl = document.createElement('p');

  // Set up note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }
  textEl.classList.add('list-item__title');
  noteEl.appendChild(textEl);

  // Set up link
  noteEl.setAttribute('href', `/notes-app/edit.html#${note.id}`);
  noteEl.classList.add('list-item');
  // Set up status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add('list-item__subtitle');
  noteEl.appendChild(statusEl);

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
export function renderNotes(notes, filters) {
  const notesElement = document.querySelector('.notes .note-list');
  const myNotes = sortNotes(notes, filters.sortBy);
  const filteredNotes = myNotes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesElement.innerHTML = '';

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note);
      notesElement.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No notes to show';
    emptyMessage.classList.add('empty-message');
    notesElement.appendChild(emptyMessage);
  }
}
