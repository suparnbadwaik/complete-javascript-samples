// If you look at the proto, its of type object

// ES 5
var Person5 = function(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}

Person5.prototype.getFullName = function() {
    console.log(this.fName + ' ' + this.lName);
}
var john5 = new Person5('John', 'Snow');

// ES 6
class Person6 {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    getFullName() {
        console.log(this.fName + ' ' + this.lName);
    }

    static greeting() {
        console.log('Hello');
    }
}
Person6.greeting();
