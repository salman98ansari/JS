//  spread =  used to split up any array element or object properties   ...
// Rest =  used to merge a list of function arguments into array

const number = [1, 2, 3];

const new_num = [...number, 4, ...number];

console.log(new_num);

const person = {
  name: "max",
};

const newperson = {
  ...person,
  age: 22,
};

console.log(newperson);

// Rest

const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));

// destructure array element object properties and store them in variable
// can also destucutyre single elements

const numbers = [1, 2, 3, 4, 5];
[num1, num2] = numbers;
console.log(num1, num2);
