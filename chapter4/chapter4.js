// function
function hello(){ 
    console.log('Hello World');
}


// functions expressions
// assign anonymous function to a variable
const goodbye = function () {
  console.log('Bye');
};
goodbye();


// named function
const goodbye2 = function bye() {
    console.log('Bye');
};

// Every function has a property called name
goodbye.name;

seeya = goodbye;
seeya();        // same output as that of goodbye



// When the number of parameters can vary in a function
function findMean(...myargs) {
    for( const value of myargs) {
	console.log(value);
    }
}
findMean(1,2);
findMean(1,2,3,4,5);



// Default parameters
function hello(name='World') {
    console.log(`hello ${name}`);
 }
 
 hello();
 hello('Universe');
 

// Default parameters should always come after non default parameters

function discount(price, amount=10) {
	return price*amount;
}

discout(20);
discout(20, 15);



// Arrow functions
const square = x => x*x;		// no need to return for single line
const add = (x,y) => x + y;		// no need of parentheses
const hello = () => console.log('Hello');



///////// Hositing
// function is invoked at the start of the code
hoist();
// ....your code
function hoist() {
	console.log('Hoisting');
}



//////////// Variable hoisting
// variable declarations that use the var keyword are automatically moved to the top of the current scope
// error will be thrown if you try to access variables before they are declared if using 'let' and 'const'
console.log(name);
var name = 'Siri';
console.log(name);


// Function hoisting
hello();	// undefined
var hello = function() {
	// code
}

hello2();	// executes
function hello() {
	// code
}




//////////////////////
//// Callbacks
//////////////////////

// pass function as parameter and call that function
// The function wont work if the parameter isnt provided.
// You can also pass anonymous functions as callbacks
function sing(songName, callbackName) {
	console.log('I am singing the song');

	if(typeof(callback) === 'function') {
		callbackName();
	}
}




// // // Foreach
const colors = ['Red', 'Green', 'Blue'];
for(let i=0, max = colors.length; i< max; i++) {
  console.log(`Color ${i} - ${colors[i]}`);
}

// // You can also use foreach instead of for.
colors.forEach((color, index) => {
	console.log(`Color ${index} - ${color}`);
});

//// Reduce
// iterates over each value in an array but returns a single value
// used to calculate statistics such as averages from data stored in an array
[1,2,3,4,5].reduce( (acc,val) => prev + val );



/////////////////// Filter
// returns new array that only contains items from the original array that return true when passed to the callback
// filter parameter is the callback
const numbers = [ 2,7,6,5,23,12 ];
numbers.filter(x => x%2 === 0);		// [2,6,12]

const array = [0,1,'0', false, true, 'hello' ];
array.filter(Boolean);