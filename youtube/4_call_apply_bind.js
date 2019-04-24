/*
    CALL, APPLY, BIND
    They let you borrow functionalities from other objects
*/

/* CALL */
/*
    Takes in an object and any number of other parameters
    Can be applied to method of any object.

    USE 1 :
    Apply Array (or any object) functionality to any other object which does not have the functionality.
    as in Example 2

    USE 2 :
    When you are not using classes and using function constructors, you want to call base constructor from sub constructor,
    as in Example 3

*/
/* EXAMPLE 1 */
let add = function(c) {
    console.log(this.a + this.b + c);
};
let obj = { a: 1, b: 2 };
add.call(obj, 3);                               // call add on obj. o/p : 1+2+3=6


/* EXAMPLE 2 */
let argsToArray = function() {
    console.log(arguments);                     // arguments is a inbuilt variable.  o/p:  1,2,3
    console.log([].slice.call(arguments));      // get an actual array
};
argsToArray(1,2,3);


/* EXAMPLE 3 */
let mammal = function(legs) {
    this.legs = legs;
};
let cat = function(legs, isDomesticated) {
    mammal.call(this, legs);
    this.isDomesticated = isDomesticated;
};
let lion = new cat(4, false);



/* APPLY */
/*
    USE 1 :
    Similar to call, but instead of passing arguments, we pass an array and then it converts into arguments as in Example 1
*/

/* EXAMPLE 1 */
let numArray = [1,2,3];
console.log(Math.min(1,2,3));                       // 1
console.log(Math.min.apply(null, numArray));        // 1



/* BIND */
/*
    Similar to call and apply but it binds functionality to the object
*/

/* EXAMPLE 1 */
let button = function(content) {
    this.content = content;
};
button.prototype.click = function() {
    console.log(`${this.content} clicked`);
}

let newButton = new button('add');
let boundButton = newButton.click;
boundButton();                          // undefined. since this cannot be refered here.
boundButton = newButton.click.bind(newButton);
boundButton();                          // add clicked


/* EXAMPLE 2 */
let myObj = {
    asyncGet(cb) {
        cb();
    },
    parse() {
        console.log('parse called');
    },
    render() {
        this.asyncGet(function() {
            this.parse();                   // undefined - if we do not use bind, since here is the scope of asyncGet function
        }.bind(this));
    }
}

myObj.render();
