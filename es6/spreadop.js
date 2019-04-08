function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);


// ES 5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// ES 6
const sum3 = addFourAges(...ages);
console.log(sum3);


var ages4 = [10,20];
function addTwoAges(a, b) {
    return a + b;
}
var sum4 = addTwoAges(...ages4);
console.log(sum4);



const arr1 = [ 'John', 'Jamie', 'Rob'];
const arr2 = [ 'Sansa', 'Tyrion' ];
const bigArr = [...arr1, ...arr2];
// or
// ..arr1 basically is replaced by values in that array
const bigArr2 = [...arr1, 'newValue', ...arr2];
console.log(bigArr);

