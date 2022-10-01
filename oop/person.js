// Prototypal inheritance

// Now restructured using class syntax
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }

  setName(fullName) {
    const names = fullName.split(' ');
    const [firstName, lastName] = names; // Destructuring assignment
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const me = new Person('Eren', 'Akgündüz', 20, ['music', 'geography']);
me.setName('Greatest Ever');
console.log(me.getBio());

const person2 = new Person('Skepta', 'Adenuga', 40, ['go on then', 'fashion']);
console.log(person2.getBio());
