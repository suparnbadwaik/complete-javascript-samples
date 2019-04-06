// ES 5
var name5 = 'SSB';
var age5 = 23;
name5 = 'John Smith';
console.log(name5); // John Smith


// ES 6
const name6 = 'SSB';
let age = 23;
name6 = 'John Smith';   // error - assignment to constant variable
console.log(name6);


// ES 5
// var => variables are function scoped and accessible inside of a function and not from outside
function driversLicense5(passedTest) {
    if(passedTest) {
        console.log(fName); // undefined - variable not defined/declared
        var fName = 'John';
        var lName = 'Smith';
        var dob = 1990;

        console.log(fName + ' - ' + dob);   // prints properly
    }
    console.log(lName);     // prints properly
}

driversLicense5(true);


// ES 6
// let, const => variables are block scoped
function driversLicense6(passedTest) {
    if(passedTest) {
        console.log(fName); // undefined - variable not defined/declared
        let fName = 'John';
        const dob = 1990;
        let lName = 'Smith';

        console.log(fName + ' - ' + dob);   // prints properly
    }
    console.log(lName);     // lName is undefined error. Declare in the function block to print the value
}

driversLicense6(true);



// ES 5
var i = 23;
for(var i=0; i<5; i++) {
    console.log(i);     // 0, 1, 2, 3, 4, 5
}
console.log(i);         // 5



// ES 6
let i = 23;
for(let i=0; i<5; i++) {
    console.log(i);     // 0, 1, 2, 3, 4
}
console.log(i);         // 23
