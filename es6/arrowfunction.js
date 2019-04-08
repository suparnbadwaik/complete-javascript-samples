const years = [ 1990, 1965, 1982, 1937 ];

// ES 5
var age5 = years.map(function(el){
    return 2016 - el;
});
console.log(age5);


// ES 6
var age6 = years.map(el => 2016 - 16);
console.log(age6);


age6 = years.map((el, index) => `Age element ${index}: ${2016 - el}`);
console.log(age6);

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age ${index + 1} : ${2016 - el}`;
});



// ES 5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green')
                .addEventListener('click', function() {
                    alert('Green button is clicked');
                    // alert(`Position : ${this.position} and Color : ${this.color}`); // undefined
                    alert(`Position : ${self.position} and Color : ${self.color}`);
                });
    }
};

box5.clickMe();


// ES 6
var box6 = {
    color: 'blue',
    position: 1,
    clickMe: function() {
        document.querySelector('.blue')
                .addEventListener('click', () => {
                    alert('Blue button is clicked');
                    alert(`Position : ${this.position} and Color : ${this.color}`);
                });
    }
};

box6.clickMe();
