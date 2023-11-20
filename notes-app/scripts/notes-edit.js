import { generateLastEdited } from './imports.js';
import { getSavedNotes, saveNotes, removeNote } from './notes-functions.js';

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const updatedElement = document.querySelector('#updated-at');
const noteID = location.hash.substring(1);

let notes = getSavedNotes();

const noteMatch = (myNotes) => myNotes.find((note) => note.id === noteID);

let note = noteMatch(notes);

const initialize = (myNote) => {
  if (!myNote) {
    location.assign('/notes-app/index.html');
  }

  titleElement.value = myNote.title;
  updatedElement.textContent = generateLastEdited(myNote.updatedAt);
  bodyElement.value = myNote.body;
};

initialize(note);

titleElement.addEventListener('input', (e) => {
  note.title = e.target.value;
  note.updatedAt = new Date().getTime();
  saveNotes(notes);
  initialize(note);
});

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updatedAt = new Date().getTime();
  saveNotes(notes);
  initialize(note);
});

removeElement.addEventListener('click', () => {
  removeNote(notes, note.id);
  saveNotes(notes);
  location.assign('/notes-app/index.html');
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = noteMatch(notes);
    initialize(note);
  }
});
