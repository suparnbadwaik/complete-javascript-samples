/////////////////////////////////////////////
/////////////////////////////////////////////
////    PROTOTYPE
/////////////////////////////////////////////
/////////////////////////////////////////////
/*Other than primitives like Number, String, Booleans, Undefined, Null, everything is an object in JS.
Javascript is a prototype based language. Inheritance is possible using something called as Prototype.
Every JS object has a Prototype property which makes inheritance possible.
Every object that we create is an instance of Object constructor which has a bunch of properties and 
can be accessed by the instance object.
*/


// // function constructor
// var Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// }
// var john = new Person('john smith', 28);
// console.log(john.name);


//// In Javascript a class is usually called as the constructor or prototype
// // 	Inheritance
// // Constructor
// Person {
// 	name,
// 	yrOfBirth,
// 	job,
// 	calculateAge()
// }

// // Constructor
// Sportsman {
// 	noOfMedals,
// 	isInTeam()
// }

// // After Inheritance, the Sportsman constructor actually becomes as below
// // This is possible with something called as the Prototype
// Sportsman {
// 	name,
// 	yrOfBirth,
// 	job,
// 	calculateAge(),
// 	noOfMedals,
// 	isInTeam()
// }


/* 
Prototype is thus a property that comes with all javascript objects. It is only not found in null.

If any instance of person or the sportsman class wants to access the respective functions of the class
 the instance must add that function in the "prototype" property
 Also, the Person classes prototype is actually the prototype of all of its instances
 The persons prototype property is the prototype of all of its instances
 The Person object is an instance of an even bigger constructor viz the Object's object. Thus the Person object and all of its instances can use the methods of the Object's prototype
    instance of Class	=> Constructor/Class	=> Object constructor

 When a method is called, javascript looks for that method in that class.
 If javascript does not find the method, it moves up in the hierarchy and tried to find this method (instance -> class -> Object)
 This continues till there is no prototype in the hierarchy which is null. 
 This is also called as prototype chaining.

If you view the john object in the console, you will find that there are 2 prototypes,
One for Person and Other for Object. 
Thus an instance always contains prototype for Object since its always a parent class
and other for the classes its inheriting from.

Summary - Prototypes :
Every js object has a prototype property which makes inhertiance possible in js.
The prototype property of an object is where we put methods and properties that we want other objects to inherit.
The constructors prototype property is not the protptype of constructor itself, its the prototype of ALL instances created through it.
When a certain method or property is called, the search starts in the object itself and if cannot be found search moves on to objects prototype until the method is found.


*/

// Demo
var john = {
    name: 'John',
    birth: 1990,
    job: 'teacher',
}

var Person = function (name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2019 - this.birth);
    }
}

Person.prototype.testMethod = function() {
    console.log(this.name);
}

Person.prototype.testProperty = 'This is test property to test inheritance';

var john = new Person('John', 1990, 'teacher');
john.calculateAge();    // john is instance of Person constructor

var mark = new Person('Mark', 1980, 'architect');

john.testMethod();
mark.testMethod();
console.log(john.testProperty);
console.log(mark.testProperty);

console.log(john.__proto__ == Person.prototype);
console.log("job is own prop : " + john.hasOwnProperty('job'));    // from Object prototype
console.log("testProperty is own prop : " + john.hasOwnProperty('testProperty')); // added to Persons prototype
console.log("john instance of Person : " + john instanceof Person);


//// Almost everything is ab object
// try creating the below and check if it has prototype
var x = [1,2,3];