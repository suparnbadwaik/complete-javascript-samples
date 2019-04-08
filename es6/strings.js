let fName = 'John';
let lName = 'Smith';

// ES 5
console.log('Name ' + fName + ' ' + lName);


// ES 6
console.log(`Name ${fName} ${lName}`);


const n = `${fName} ${lName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${fName}`.repeat(5));
