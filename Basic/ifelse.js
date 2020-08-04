var num = 10
if (num < 10 ){
    console.log("hello")
}else if(num >= 10){
    console.log("sorry")
}else{
    console.log("unexpected")
}

//ternary and switch

var num =10;
num >= 9 ? console.log("greater") : console.log("smaller");

var answer = num >= 9 ? 'greater' : 'smaller';
console.log(answer);

//switch

var job = prompt("job bol ? engg yaa dr ");

switch(job){
	case 'engg':
	console.log("u are engg");
	break;
	case 'dr':
	console.log("u are dr");
	break;
}

// falsy values : undefined , 0 , null , nan , '';
 var height
 if(height){
 	console.log("declare");
 }
 else{
 	console.log("undeclare");
 }

 // use === to compare bc