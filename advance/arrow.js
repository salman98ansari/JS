/*
const hello =function(name){
	return "hey there " + name;
}


const hello = (name) =>{
	return "hey there  "+ name
}


console.log(hello("salman"));
*/

const toDos = [{
    title: "Buy Bread",
    isDone: false,
    notDone: false,
},{
    title: "Go to Gym",
    isDone: false,
    notDone: true,
},{
    title: "Record Game",
    isDone: true,
    notDone: false,
},{
    title: "play game",
    isDone: true,
    notDone: true,
}, {
    title: "hello world",
    isDone: true,
    notDone: false,
}, {
    title: "im a winner",
    isDone: true,
    notDone: true,
}]

/*
// method 1
const fun =(toDos) => {
	let store =[]
	for (i=0; i< toDos.length ; i++){
		if(toDos[i].isDone !== true){
			store.push(toDos[i])
		}
	}
	return store;
}

console.log(fun(toDos));

*/


/*
//method2
const value = toDos.filter((todo) => todo.isDone === true)
console.log(value)


const x= value.forEach((todo , index) => {
	console.log(todo.title);
})
*/

const list ={
	price :800,
	weight: 400,
	mydes :function(){
		return this.price
	}
}

console.log(list.mydes())