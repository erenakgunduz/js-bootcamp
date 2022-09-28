const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteID = location.hash.substring(1);

let notes = getSavedNotes();

const noteMatch = (myNotes) => {
  return myNotes.find((note) => {
    return note.id === noteID;
  });
};

let note = noteMatch(notes);

const initialize = (myNote) => {
  if (myNote === undefined) {
    location.assign('/notes-app/index.html');
  }

  titleElement.value = myNote.title;
  bodyElement.value = myNote.body;
};

initialize(note);

titleElement.addEventListener('input', (e) => {
  note.title = e.target.value;
  saveNotes(notes);
});

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value;
  saveNotes(notes);
});

removeElement.addEventListener('click', () => {
  removeNote(note.id);
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
