let isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
  console.log("Account is locked.");
} else if (userRole === "admin") {
  console.log("Welcome, admin.");
} else {
  console.log("Welcome!");
}

// Challenge area (Florida version)

let temp = 78;

if (temp <= 70) {
  console.log("It's freezing outside!");
} else if (temp >= 90) {
  console.log("It's miserable outside!");
} else {
  console.log("We vibin");
}
