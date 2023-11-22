let myNotes = [
  {
    title: 'My next trip',
    body: 'Somewhere on a certain continent',
  },
  {
    title: 'Habits to work on',
    body: 'Time management, first and foremost',
  },
  {
    title: 'Room modifications',
    body: 'New larger bed',
  },
];

const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

const findNote = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex((note) => {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const findNotes = (notes, query) => {
  return notes.filter((note) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(myNotes, 'bed'));

const note1 = findNote(myNotes, 'other room modifications');
console.log(note1);

console.log(myNotes.pop());
myNotes.push('My new note');

console.log(myNotes.shift());
myNotes.unshift('My first note');

myNotes.splice(1, 1, 'This is the new second item');

myNotes[2] = 'This is the new note 3';

// The order of the default parameters for this callback function
// Item, index, array (the whole list at its state in the iteration)
myNotes.forEach((x, bruh) => {
  console.log(bruh);
  console.log(x);
});

console.log(myNotes.length);

// Using the for loop
for (let count = 0; count <= 2; count++) {
  console.log(count);
}

for (let count = 2; count >= 0; count--) {
  console.log(count);
}

for (let count = 0; count < myNotes.length; count++) {
  console.log(myNotes[count]);
}

for (let count = myNotes.length - 1; count >= 0; count--) {
  console.log(myNotes[count]);
}

// Will only find a match if exact same location in memory, not like this where the content is identical
console.log(
  myNotes.indexOf({
    title: 'Habits to work on',
    body: 'Time management, first and foremost',
  })
);
// False, as this demonstrates
console.log({} === {});

// Works for primitive types as seen here but not as useful
myNotes.push('Testing');
console.log(myNotes.indexOf('Testing'));

// This will now be true
const someObject = {};
const otherObject = someObject;
console.log(someObject === otherObject);

myNotes = [
  {
    title: 'My next trip',
    body: 'Somewhere on a certain continent',
  },
  {
    title: 'Habits to work on',
    body: 'Time management, first and foremost',
  },
  {
    title: 'Room modifications',
    body: 'New larger bed',
  },
];
// This is the behavior we actually want
const index = myNotes.findIndex((note) => {
  return note.title === 'Habits to work on';
});

console.log(index);
sortNotes(myNotes);
console.log(myNotes);
