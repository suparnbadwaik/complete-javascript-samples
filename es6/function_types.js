/* APPROACH 1 - USING FUNCTION */
/* APPROACH 1.1 - CONSTRUCTOR FUNCTION */
function Apple(type) {
    this.type = type;
    this.color = 'red';
    this.getInfo = getAppleInfo;
}

// This is issue since the method will be created in global namespace thus creating conflicts
function getAppleInfo() {
    console.log(`${this.color} - getAppleInfo called`);
}


/* APPROACH 1.2 */
function Apple(type) {
    this.type = type;
    this.color = 'pink';

//// The below method is created evertime a new object is created
    this.getInfo = function() {
        console.log(`${this.color} - getAppleInfo called`);
    }
}


/* APPROACH 1.3 */
function Apple(type) {
    this.type = type;
    this.color = "green";
}

Apple.prototype.getInfo = function() {
    console.log(`${this.color} is of type ${this.type}`);
}



/* APPROACH 2 - USING OBJECT LITERAL */
var apple = {
    type: 'Kashmiri',
    color: 'Red',
    getInfo: function() {
        console.log(`${this.color} is of type ${this.type}`);
    }
}
apple.getInfo();



/* APPROACH 3 - USING SINGLETON AS A FUNCTION */
var apple = new function () {
    this.type = 'Canadian';
    this.color = 'Greenish';
    this.getInfo = function() {
        console.log(`${this.color} is of type ${this.type}`);
    }
}
apple.getInfo();




/* ES6 STYLE */

class Apple {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    getInfo = () => {
        console.log(`${this.color} is of type ${this.type}`);
    }

    getTypeInfo() {
        console.log(`getTypeInfo ${this.type}`);
    }

    getColorInfo() {
        var self = this;
        function testColor() {
            console.log(`testColor ${self.color}`);
        }
        testColor();
    }

    getMyColor = () => {
        var self = this;
        function testMyColor() {
            console.log(`testThis ${self.color}`);
        }
        testMyColor();
    }

    static myStaticMethod() {
        console.log('myStaticMethod()');
    }
}

class KashmiriApple extends Apple {
    constructor(type, color) {
        super(type, color);
    }

    getName(){
        return super.getName() +"  - called base class function from child class.";
    }
}


var kashApple = new KashmiriApple('Italian', 'Grey');
kashApple.getInfo();

console.log(`typeof kashApple is ${typeof kashApple}`);
console.log(`Is kashApple instanceof Apple ? ${kashApple instanceof Apple}`);

var apple = new Apple('Canadian', 'Purple');
apple.getInfo();
apple.getTypeInfo();
apple.getColorInfo();
apple.getMyColor();
Apple.myStaticMethod();

// var apple = new Apple('Kashmiri');
// apple.color = 'reddish';
// apple.getInfo();
