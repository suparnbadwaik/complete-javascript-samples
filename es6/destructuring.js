// ES 5
var john = [ 'John', 26 ];
var name = john[0];         // John
var age = john[1];          // 26




// ES 6
const [name, age] = ['John', 26];
console.log(name);          // John
console.log(age);           // 26   

const obj = {
    fName: 'John',
    lName: 'Smith'
};

const{fName, lName} = obj;
console.log(fName);         // John
console.log(lName);         // 26


// Use Alias
const {fName: firstName, lName: lastName} = obj;
console.log(firstName);     // John
console.log(lastName);      // 26


// create from function
function calcRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, year];
}

const[totalAge, retirementAge] = calcRetirement(1990);
console.log(totalAge);
console.log(retirementAge);

