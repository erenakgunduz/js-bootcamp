// Global ()
// -- Local ()
// ---- Local
// -- Local

// let myName = "Eren";

if (true) {
  // You can do this because they are in different scopes
  // let myName = "Iskender";

  if (true) {
    // Don't allow a local value to "leak" as a global definition
    // By using let here we bind it to this particular scope
    const myName = 'Uvuvwevwevwe';
    console.log(myName);
  }
}

if (true) {
  console.log(myName);
}
