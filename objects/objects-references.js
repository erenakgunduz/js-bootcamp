let myAccount = {
  name: "Thurgood Jenkins",
  expenses: 0,
  income: 0,
};

let addIncome = (account, amount) => {
  account.income = account.income + amount;
};

let addExpense = (account, amount) => {
  account.expenses = account.expenses + amount;
};

let resetAccount = (account) => {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = (account) => {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 500);
addExpense(myAccount, 100);
addExpense(myAccount, 50);

// let accountSummary = getAccountSummary(myAccount);
// console.log(accountSummary);

// resetAccount(myAccount);
// accountSummary = getAccountSummary(myAccount);
// console.log(accountSummary);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
