const myAge = 20;

// if (myAge >= 18) {
//   message = 'You can vote!';
// } else {
//   message = 'You cannot vote.';
// }

// Same thing as Python's conditional expression which would look like:
// message = "You can vote!" if my_age >= 18 else "You cannot vote."
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';

const showPage = () => 'Showing the page';
const showErrorPage = () => 'Showing the error page';
console.log(myAge >= 21 ? showPage() : showErrorPage());

const team = ['Me', 'Alper', 'Alperen', 'Batuhan'];
console.log(team.length > 4 ? 'Too many people' : `Team size: ${team.length}`);
