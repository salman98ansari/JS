function myfun(names) {
  console.log(names);
}

myfun("Salman ansari");

// normal function

const myarrow = (names, age) => {
  console.log(names, age);
};

myarrow("Salmon", 22);

// arrow functions

// const multiply = (number) => {
//   return number * number;
// };
const multiply = (number) => number * number; // shortform

console.log(multiply(5));
