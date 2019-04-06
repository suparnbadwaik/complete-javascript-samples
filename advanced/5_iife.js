///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//// IMMEDIATELY INVOKED FUNCTION EXPRESSION
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// Normal way to call the function when it gets created
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

/*
    Problems with the above approach :
    If the purpose is to hide the score variable from the outside,
    which means creating a private variable, then we dont need top declare a function and then call it.
    We can use IIFE instead. Thus, we can no longer access the score variable from outside.
*/

(function () {  // create anonymous function
    var score = Math.random() * 10;
    console.log(score >= 5);
})();   // invoke the function


/*
    Javascript will think that the below is a function declaration.
    But since it does not have any name, it will throw an error.
    So, we need to trick the parser that it is an expression and not declaration.
    So wrap it in brackets. Use () to invoke the function.
*/
// // function () {

// // }



//// Pass parameter
(function(myNumber) {
    console.log(myNumber);
}) (5);