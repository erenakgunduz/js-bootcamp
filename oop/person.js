// Prototypal inheritance
// Employee.prototype --> Person.prototype --> Object.prototype --> null

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

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const names = name.split(' ');
    const [firstName, lastName] = names; // Destructuring assignment
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio = () => `${this.fullName} is a ${this.position}`;

  getYearsLeft = () => 65 - this.age;
}

const me = new Person('Eren', 'Akgündüz', 20, ['music', 'geography']);
me.fullName = 'Greatest Ever';
console.log(me.getBio());

const person2 = new Employee('Skepta', 'Adenuga', 40, 'MC', ['go on then', 'fashion']);
console.log(person2.getYearsLeft());
console.log(person2.getBio());

class Student extends Person {
  constructor(firstName, lastName, age, major, grade) {
    super(firstName, lastName, age);
    this.major = major;
    this.grade = grade;
  }

  getBio() {
    const intro = `${this.firstName}, who studies ${this.major.toLowerCase()},`;
    if (this.grade >= 0 && this.grade < 70) {
      return `${intro} is failing the class`;
    }
    if (this.grade <= 100 && this.grade >= 70) {
      return `${intro} is passing the class`;
    }
    return `I don't know wtf ${this.firstName} is doing`;
  }

  updateGrade(change) {
    this.grade += change;
  }
}

const johnCena = new Student('John', 'Cena', 25, 'Thuganomics', 100);
console.log(johnCena.getBio());
johnCena.updateGrade(-40);
console.log(johnCena.getBio());
