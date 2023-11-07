const account = {
  owner: 'Andrew',
  expenses: [],
  incomes: [],
  addExpense(description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  addIncome(description, amount) {
    this.incomes.push({ description: description, amount: amount });
  },
  getAccountSummary() {
    let totalExpenses = 0;
    let totalIncome = 0;

    // My solution, likely not ideal here
    // for (let count = 0; count < this.expenses.length; count++) {
    //   totalExpenses += this.expenses[count].amount;
    // }
    // His, probably the best option
    this.expenses.forEach((expense) => {
      totalExpenses += expense.amount;
    });
    this.incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    const balance = totalIncome - totalExpenses;
    return `${this.owner} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);

console.log(account.expenses);
console.log(account.getAccountSummary());
