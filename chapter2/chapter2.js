var myname = "Suparn";
console.log(myname.includes('z'));

// Template literal
const ios = 'Siri';
console.log(`Hello ${ios}!`);


typeof NaN;         // number
typeof null;        // object
typeof undefined;   // undefined

console.log('hello' * 5);                // NaN

// Check if value is a number
Number.isFinite(42);        // true
Number.isFinite(1/0);       // false
Number.isFinite(-Infinity); // false
Number.isFinite(NaN);       // false


const answer = '5' * 1; // 5

String(3);              // '3'
3 + '';                 // '3'

// 
10..toString(2);        // '1010'

// parseInt and Number
const address = '221B Baker Street';
parseInt(address, 10);  // 221
Number(address);        // NaN
Number('23');           // 23
Number.isInteger(5);    // true
Number.isInteger(4.2);  // false
Number.isNaN(NaN);      // true
Number.isNaN(5);        // false
isNaN(5);               // false


// Null and undefined
console.log(10 + null);         // 10 since null behaves like 0
console.log(10 + undefined);    // NaN since undefined is not a number
console.log(null == undefined); // true


Boolean('hello');           // true
Boolean(0);                 // false
console.log(!0);            // true
console.log(!'0');          // false
console.log(!'Hello');      // false
console.log(!!'Hello');     // true


// Equality Operators
// Soft Equality
" " == 0;                   // true
" " == "0";                 // false
"1" == true;                // true
"2" == true;                // false

// Hard Equality
const answer2 = '5';
console.log(answer2 == 5);  // true
console.log(answer2 === 5); // false
null === undefined;         // false



// Final
const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);