// Lexical scoping (static scope)
// Global scope -- Defined outside of all code blocks
// Local scope -- Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global scope (varOne)
// --Local scope (varTwo)
// ----Local scope (varFour)
// --Local scope (varThree)

const varOne = 'varOne';

if (true) {
  console.log(varOne);
  const varTwo = 'varTwo';
  console.log(varTwo);

  if (true) {
    const varFour = 'varFour';
  }
}

if (true) {
  const varThree = 'varThree';
}

console.log(varTwo);
