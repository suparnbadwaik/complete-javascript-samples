/////////////////////////////////////////
/////////////////////////////////////////
//// CLLOSURE
/////////////////////////////////////////
/////////////////////////////////////////

/*
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:
1. it has access to its own scope — variables defined between its curly brackets
2. it has access to the outer function’s variables
3. it has access to the global variables

The inner function has access to variables and parameters of the outer function
even after the inner function is returned
*/

/*
In the below function, the inner function is able to access the variables
of the outer function (myNumber and b). This is called as closure.
*/
function outer(myNumber) {
    var b = 10;
    function inner(myDate) {       // named function
          var a = 20; 
          console.log(myNumber);
          console.log(a+b);
          console.log(myDate);
     }
    return inner;
 }

 var test1 = outer(4);
 test1('April');

 // or

 outer(4)('April');

 function outer2(myNumber) {
    var b = 10;
    return function () {       // anonymous function
          var a = 20; 
          console.log(myNumber);
          console.log(a+b);
     }
 }