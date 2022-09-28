const notes = [
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
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = (notes, query) => {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, "bed"));

// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex((note) => {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const note = findNote(notes, "other room modifications");
// console.log(note);

// console.log(notes.pop());
// notes.push("My new note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 1, "This is the new second item");

// notes[2] = "This is the new note 3";

// The order of the default parameters for this callback function
// Item, index, array (the whole list at its state in the iteration)
// notes.forEach((x, bruh) => {
//   console.log(bruh);
//   console.log(x);
// });

// console.log(notes.length);
// console.log(notes);

// Using the for loop
// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }

// for (let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count]);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }

// Will only find a match if exact same location in memory, not like this where the content is identical
// console.log(
//   notes.indexOf({
//     title: "Habits to work on",
//     body: "Time management, first and foremost",
//   })
// );
// False, as this demonstrates
// console.log({} === {});

// Works for primitive types as seen here but not as useful
// notes.push("Testing");
// console.log(notes.indexOf("Testing"));

// This will now be true
// let someObject = {};
// let otherObject = someObject;
// console.log(someObject === otherObject);

// This is the behavior we actually want
// const index = notes.findIndex((note) => {
//   return note.title === "Habits to work on";
// });
// console.log(index);

sortNotes(notes);
console.log(notes);
