var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);
// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // upddate in last..
console.log(names);

//more arrays


const number = [1,2,3,4,5,6,7,8,9,0]
console.log(number)
console.log(number[0])
console.log(number[1])
console.log(number.length)
console.log(number[number.length -1])

console.log(`we have ${number.length} number`)



//diferent data types

var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));
// if not found it will give output -1..

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


//array operations


const toDos = []
toDos.unshift("Buy breads")
toDos.unshift("watch TV")
toDos.unshift("to to gym")

toDos.forEach(function(todo, index){
    console.log(`your task No ${index + 1} is: ${todo}`)
})




