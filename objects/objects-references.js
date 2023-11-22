const myAccount = {
  name: 'Thurgood Jenkins',
  expenses: 0,
  income: 0,
};

const addIncome = (account, amount) => {
  account.income += amount;
};

const addExpense = (account, amount) => {
  account.expenses += amount;
};

const resetAccount = (account) => {
  account.income = 0;
  account.expenses = 0;
};

const getAccountSummary = (account) => {
  const balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 500);
addExpense(myAccount, 100);
addExpense(myAccount, 50);

// const accountSummary = getAccountSummary(myAccount);
// console.log(accountSummary);

// resetAccount(myAccount);
// accountSummary = getAccountSummary(myAccount);
// console.log(accountSummary);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
