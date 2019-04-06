// // Refer the file below since it will load after the body has been loaded

/////////////////////////////////////
// // Example 1
/////////////////////////////////////
const btn1 = document.getElementById("btnLink");
btn1.addEventListener('click', function() {
	alert('Hello');
});



/////////////////////////////////////
// Example 2
/////////////////////////////////////
const btn = document.getElementById("btnLink");
const rainbow = ['red', 'orange', 'yellow', 'red', 'green', 'blue'];

function change() {
	var randomNumber = Math.random();
	var colorIndex = Math.floor(6 * randomNumber);
	console.log(randomNumber + " - " + colorIndex);
	document.body.style.background = rainbow[colorIndex];
}

btn.addEventListener('click', change);


//declare variables together
var test1, test2;

// type coercion
// automatic conversion of variable types as needed
var name = 'John';
var age = 28;
console.log(name + ' ' + age);