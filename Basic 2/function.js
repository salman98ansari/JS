function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);



function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');



//function statement and expressions..

var calculate = function(score, outof){
	var percentage =(score/outof)*100;
	return percentage;
}
console.log(`my percentage is: ${calculate(60, 100)}`)

//

var added = function(num1, num2 = 0){
    return num1 + num2
}

console.log(added("salman"));