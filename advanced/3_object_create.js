/////////////////////////////////////////////
/////////////////////////////////////////////
//// Object create
/////////////////////////////////////////////
/////////////////////////////////////////////

/*
Object.create creaets objects that inherit directly from the object that we passed in the first argument.
In function constructor, the new object inherits from the constructors prototype property
Object.create allows us to directly specify which object should be a prototype.
Function constructor is a more popular one though
*/

var Person = {
     calculateAge: function () {
        console.log(this.name);
     }
};

var john = Object.create(Person);
john.name = 'John';
john.age = 28;

var mark = Object.create(Person, {
    name: { value: 'Mark'},
    age: { value: 28 }
});