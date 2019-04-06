//////////////////////////////////////
//////////////////////////////////////
//// FIRST CLASS FUNCTIONS
//////////////////////////////////////
//////////////////////////////////////
/*
1. Function is an instance of Object type.
2. Function behaves like any other object.
3. Function can be stored in a variable.
4. Function can be passed as an argument.
5. Function can be returned from another function.
*/

var years = [ 1990, 1995, 1937, 2005, 1998 ];

//// Pass as argument
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0;i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2019 - el;
}

var ages = arrayCalc(years, calcAge);
console.log(ages);




//// return function
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', what is UX ?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log(name + ', what is your subject ?');
		}
	} else {
			return function(name) {
			console.log(name + ', what is your profile ?');
		}
	}
}


var teacherQ = interviewQuestion('teacher');    // returns function. Thus, teacherQ = function(name) { ... }
teacherQ('John');   // John, what is your subjet ?

interviewQuestion('designer')('Mark');  // Mark, what is UX ?