//// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);     // 46
console.log(b);     // 23


//// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;    // no new object is created. Only a new reference to obj1 is created
obj1.age = 30;

console.log(obj1.age);  // 30
console.log(obj2.age);  // 30


//// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'New York'
};

function change(a, b) {
    a = 30;
    b.city = 'California';
}

change(age, obj);

console.log(age);       // 27   (primitive)
console.log(obj.city);  // California   (object)
