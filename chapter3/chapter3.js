////////////////////////////////////
// Arrays
////////////////////////////////////

const myArray = [];
const myArray = new Array();	// using constructor
const heroes = [];
heroes[0];		// undefined
heroes[0] = 'Batman';
heroes[1] = 'Spiderman';
heroes;

const num = [1, 2, 3, 4, 6];
const mixedArray = [1, [], 'two', 'three', 4];	// types can be different in an array
console.log(num);

//Remove item
// delete remotes an item from an array
delete num[3];		// removes 4 (only value. index remains)
console.log(num);
typeof [];		    // object


//////////////////////////////
// Properties and Methods
//////////////////////////////
num.length;			        // get length of the array
num[num.length - 1];		// get last value

num.pop();	        // return last item of array and then delete it
num.shift();	    // return first item of array and then delete it
num.push('Thor');   // add item to the last of array
num.unshift('Cap'); // add item to beginning of the array

num.concat(['Ant', 'Vision']);  // creates another array combining the 2 arrays
num = num.concat(['Iron']);     // changes the num array

num.join();		    // turns the array into a string (separated by commas)
num.join(' & ');	// turns the array into a string (separated by &)


num.slice(2,4);	//removes items. starts at index 2. item with index 4 is not included.
num.splice(3,1, 'Winter Soldier');	// removes items. adds Winter soldier at its place

// Use splice instead of delete since delete leaves undefined value

num.sort();
num.reverse();

num.indexOf('Winter Soldier');		// returns -2 if value is not in array
num.includes('Winter Soldier');		// true


const coordinates = [[1,3], [4,6]]; // declare multi dimensional array
coordinates[0][0];      // first value of first array
coordinates[1][0];		// first value of second array
coordinates[0][1];		// second value of first array




////////////////////////////////////
// Loops
////////////////////////////////////

if (condition) {

} else {

}


// ternary operator
// condition ? (code to run if condition is true):(code to run if condition is false)
console.log(`n is a ${ (n%2===0)? 'even': 'odd' } number`);


// switch
// clean code as compared to if
switch (number) {
    case 1: 
      console.log('One');
      break;
    case 2:
      console.log('Two');
      break;
    default:
      console.log('Three');
      break;
  }
  
  
  // while
  let bottles = 10;
  while (bottles > 0) {
      console.log('bottles');
      bottles--;
  }
  
  
  // do while
  do {
      bottles --;
  } while(bottles > 0)


const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
let score = 0;

for(const[question, answer] of quiz) {
    const response = prompt(question);

    if (response === answer) {
        alert('Correct answer');
        score++;
    } else {
        alert('Wrong answer');
    }
}

