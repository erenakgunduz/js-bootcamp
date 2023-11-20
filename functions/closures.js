const createCounter = () => {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder with currying
const add = (a, b) => a + b; // Non-curried version
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));
const add100 = createAdder(100);
console.log(add100(-90));

// Tipper
const createTipper = (tip) => {
  return (amount) => {
    return amount * tip;
  };
};

const tip15 = createTipper(0.15);
const tip20 = createTipper(0.2);
console.log(tip15(100));
console.log(tip20(80));
