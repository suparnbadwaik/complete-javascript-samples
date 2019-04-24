/* CLOSURE */

/*
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
    The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

    Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.

    Closures can do more than just read their outer functions’ local variables — they can overwrite them, too.

    Namespacing private functions
    Many object-oriented languages provide the ability to declare methods as either public or private. JavaScript doesn’t have this functionality built in, but it does allow to emulate this functionality through the use of closures, which is known as the module pattern.

    Technically, if you are accessing any variable from outside the scope of that function, its a closure.
    passed variable is not declared inside the function.
    The function will try to find the passed variable in the upper scope and up till the function finds the variable.
    If it cannot find the variable, it will be "undefined"

    USE 1 : To solve the problem of lexical scoping
    Javascript has a problem of Lexical scoping. With Lexical scoping, the variable defined in the upper case is automatically accessible to the below scope.
    What if in Example 3, you move the function somewhere else but variable i is at the same place. Follow Example 4 for this scenario.

*/
var passed = 3;
var addTo = function() {
    var inner = 2;
    return passed + inner;
}


// to check if the function is a closure
// check in the console for function scope
console.dir(addTo);         // 3

var passed = 4;

console.dir(addTo);         // 4
console.log(addTo(3));



/* EXAMPLE 2 */
var addTo = function(passed) {      // outer function
    var add = function(inner) {     // inner function
        return passed + inner;      // uses outer function variable
    }
    return add;
}

console.dir(addTo(3));              // contains closure. inner is undefined
var addThree = new addTo(3);        // inner undefined
var addFour = new addTo(4);         // inner undefined

console.dir(addThree);              // closure 3 (passed)
console.dir(addFour);               // closure 4 (passed)

console.log(addThree(1));           // 3 (passed) + 1 (inner). addThree returns a function which takes 1 parameter.
console.log(addFour(2));            // 4 (passed) + 2 (inner)


/* EXAMPLE 3 */
let i = 1;

const f = () => {
    console.log(i);                 // access outer variable
}
f();                                // call f



/* EXAMPLE 4 */
if(true) {
    let i = 1;

    const f = () => {
        console.log(i);             // access outer variable
    }
}
f();                                // error since function is not in scope and declared using const. so lets change and declare the function outside

let f;
if(true) {
    let i = 1;

    f = () => {
        console.log(i);             // access outer variable
    }
}
console.log(i);                     // error
f();                                // works
