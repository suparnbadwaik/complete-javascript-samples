// ES 5
(function() {
    var c = 3;
})();

console.log(c);     // undefined since c is private


// ES 6
{
    const a = 1;
    let b = 2;
    var x = 5;
}

console.log(a + b); // undefined since let and const are block scoped
console.log(x);     // 5 since var is function scoped not blocked scoped