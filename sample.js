// http://codingheroes.io/resources/ for reference
// comparision operator
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);



////////////////////////////////////////
////////////////////////////////////////
// ternary operator
////////////////////////////////////////
////////////////////////////////////////
var age = 16;
age >= 18 ? console.log('Drinks beer') : console.log('Drinks juice');
var drink = age >= 18 ? 'beer' : 'juice';



////////////////////////////////////////
////////////////////////////////////////
// object
////////////////////////////////////////
////////////////////////////////////////
var john = {
	fName: 'John',
	lName: 'Smith',
	birthYear: 1990,
	calcAge: function (birthYr) {
		return 2018 - birthYr;
	},
	fullName: function() {
		return this.fName + ' ' + this.lName;
	}
}


var testObj = ['John','Smith',1990,'designer', false, 'blue'];
for (var i=0; i< testObj.length; i++) {
	if (typeof john[i] !== 'string') continue;
}


for (var i = testObj.length - 1; i  >= 0; i--) {
	console.log(testObj[i]);
}

var john = {
	fName: 'John Smith',
    age: '28',
	calcTips: function() {
        this.tips = [ 10, 20, 15 ];
        test = [1,2,3];
        console.log('calcTips called');
        console.log(test);
	}
}

john.calcTips();
console.log(john.tips);


var john = {
	fName: 'John Smith',
	age: '28',
	calcTips: function() {
		this.tips = [ 10, 20, 15 ];
		console.log('calcTips called');
	}
}

john.calcTips();
console.log(john.tips);





// EXECUTION OBJECT contains the following :
// a. Variable Object : Contains the following :
//  1. Objects (for each function) to hold function parameters
//  2. Properties that contain Function declaration. one to one
//  3. Properties for every variable defined in the function. Set as undefined.
// b. Scope Chaining : The variables of the inner function can access the variables of their parent scopes
// c. this : 


////////////////////////////////////////
////////////////////////////////////////
//// hoisting
////////////////////////////////////////
////////////////////////////////////////

////////////////////////////////////////
// function hoisting
////////////////////////////////////////
// only works for function declaration and not for function expressions
test1();    // works
function test1() {
    console.log('test1');
}

test2();    // does not work
var test2 = function() {
    console.log('test1');
}


////////////////////////////////////////
// variable hoisting
////////////////////////////////////////
console.log(age);           // undefined
var age = 28;
console.log(age);           // 28

console.log(testAge);       // testAge not defined

function foo() {
    var age = 35;
    console.log(age);
}

foo();                      // 35 (takes value from the local scope)
console.log(age);           // 28 (takes value from the outer scope)




////////////////////////////////////////
////////////////////////////////////////
// Scope Chaining
////////////////////////////////////////
////////////////////////////////////////
// DEMO FOR SCOPE CHAINING
// Note : Locally scoped variables are not visible to the parent scope


// Everything below is in Global Scope - VO Global
var a = 'hello';
first();

function first() {
    // Everything in this function is in Inner scope (Scope of first method) - VO first + VO Global
    var b = 'hi';
    second();
    
    function second() {
        // Everything in this function is in Inner scope (scope of second function) - VO second + VO first + VO Global
        var c = 'hey';

        // does not find variable 'a' in current scope so it searches in the parent scope
        // the parent scope - first searches 'a' but does not find it. So it looks on the parent scope
        // does not find variable 'b' in current scope so it searches in the parent scope
        console.log(a + b + c);
    }
}



////////////////////////////////////
////////////////////////////////////
// this keyword
////////////////////////////////////
////////////////////////////////////
console.log(this);                  // refers window object

// Note : Rule :
// When a regular function call takes place, this refers to global object.
// regular function call
function calculateAge(year) {
	// in a regular function call, this keyword points to the window object
	console.log(this);              // refers window object
}

// function expression
var john = {
	name: 'John',
	yearOfBith: 1990,
	calculateAge: function() {
        console.log(this);          // refers to john object
        
        function innerFunction() {
            console.log(this);      // refers to window object
        }
	}
}

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();		        // Mike's object
