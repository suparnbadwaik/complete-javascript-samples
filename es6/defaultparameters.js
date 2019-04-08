// Regular JS

function SmithPerson(fName, lName) {
    this.fName = fName;
    this.lName = lName; // gives undefined if not passed
}
var john = new SmithPerson('John');


function WadePerson(fName, lName) {
    lName === undefined ? lName='Wade' : lName=lName;
    this.fName = fName;
    this.lName = lName;
}
var matthew = new WadePerson('Matthew');    // works since undefined is handled



// ES 6
function StarkPerson(fName, lName='Stark') {
    this.fName = fName;
    this.lName = lName;
}
var brandon = new StarkPerson('Brandon');   // works because of the default parameter
