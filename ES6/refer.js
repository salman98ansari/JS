const number = 1;
const num2 = number;

// no , strings  , booleans and al this are primitives

// const person = {
//   name: "salman",
// };

// const secondperson = person;
// console.log(secondperson);

// output
// { name: 'salman' }

// arrrays and objects are references types and we cant copy thats why use spread

const person = {
  name: "salman",
};

const secondperson = {
  ...person,
  age: "122",
};

person.name = "Ansari";

console.log(person);
console.log(secondperson);
