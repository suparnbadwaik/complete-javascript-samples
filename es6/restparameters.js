/*
If there are undefined number of parameters that need to be passed to a function,
you dont need to specify the parameters and pass them in the function.

We use the 'arugments' variable.
*/

// ES 5
function isFullAge5() {
    console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments);

    // var argsArr = Array.prototype.slice.call(arguments, 1);  // array starts with index 1
    argsArr.forEach(function(cur) {
        console.log(2019 - cur);
    });
}

isFullAge5(23, 35, 45);     // prints the arguments in the form of array
isFullAge5(12, 15, 12, 26, 44, 23);



// ES 6
function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => (2016 - cur) >= 18);
}

isFullAge6(23, 35, 45);     // prints the arguments in the form of array
isFullAge6(12, 15, 12, 26, 44, 23);