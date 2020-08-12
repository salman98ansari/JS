var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1970
};


//object borrowing ....
mike.calculateAge = john.calculateAge;
mike.calculateAge();