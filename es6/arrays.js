const boxes = document.querySelectorAll('.box');


// ES 5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(curr){
    curr.style.backgroundColor = 'dodgerblue';
});


// ES 6
var boxesArr6 = Array.from(boxes);      // convert to array
boxesArr6.forEach(curr => curr.style.backgroundColor = 'green');


// ES 6
// New in ES 6 => for of loop
for (const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue;
    }
    curr.style.backgroundColor = 'yellow';
}


// ES 5
var ages5 = [ 12, 17, 8, 21, 14, 11 ];

// map function returns an array by performing operations on the object
var full = ages5.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));        // 3
console.log(ages5[full.indexOf(true)]); // 21

// ES 6
var ages6 = [ 12, 17, 8, 21, 14, 11 ];

// New method in ES 6
console.log(ages6.findIndex(cur => cur >= 18));      // 3
console.log(ages6.find(cur => cur >= 18));           // 21

