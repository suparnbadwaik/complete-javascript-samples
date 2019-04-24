/* HIGHER ORDER FUNCTIONS OR CALLBACKS */
/*
    Its kind of passing function as an argument to another function.
*/

/*
    USE 1 :
    Call a function, once a function is executed, internally and dynamically based on the user input or the result

    USE 2 :

*/

/* EXAMPLE 1 */
let x = function() {
    console.log(`callback function called`);
};

let y = function(callback) {                // call the function
    console.log(`main function called`);
    callback();
}

y(x);


/* EXAMPLE 2 */
let calcEx = function(num1, num2, calcType) {
    if(calcType === 'add') {
        return num1 + num2;
    } else if(calcType === 'sub') {
        return num1 - num2;
    }
}
console.log(calcEx(5, 3, 'add'));

//// Make the above function more abstract
let add = function(num1, num2) {
    return num1 + num2;
}

let sub = function(num1, num2) {
    return num1 - num2;
}

let calcAbs = function(num1, num2, callback) {
    // check - in case some pass string or any other garbage value, we get undefined
    if(typeof callback === 'function') {
        return callback(num1, num2); 
    } else {
        return 'You passed an incorrect value';
    }
}

var incorrectValue;
console.log(calcAbs(1,2, incorrectValue));
console.log(calcAbs(6, 3, add));
console.log(calcAbs(7,4, function(a,b){
    return a * b;
}));



/* EXAMPLE 3 */
var myArr = [
    {   num: 5, str: 'apple' },
    {   num: 7, str: 'cabbage' },
    {   num: 1, str: 'ban' }
];

myArr.sort(function(val1, val2) {
    if (val1.str > val2.str) {
        return -1;
    } else {
        return 1;
    }
});
