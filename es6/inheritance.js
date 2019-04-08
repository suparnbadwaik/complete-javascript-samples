// ES 5
var Person5 = function(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}
Person5.prototype.getFullName = function() {
    console.log(this.fName + this.lName);
}

var Athelete5 = function(fName, lName, sport, rank) {
    Person5.call(this, fName, lName);
    this.sport = sport;
    this.rank = rank;
}

Athelete5.prototype = Object.create(Person5.prototype);
var johnAthlete5 = new Athelete5('John', 'Snow', 'Sword fight', 1);
johnAthlete5.getFullName();