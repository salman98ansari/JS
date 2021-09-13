// blueprint of objectss

class Human {
  constructor() {
    this.gender = "Male ";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Salman Ansari";
  }

  printMyname() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyname();
person.printGender(); // in this case we have to call super constructorr

// properties and methodss
