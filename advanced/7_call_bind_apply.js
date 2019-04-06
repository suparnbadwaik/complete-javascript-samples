////////////////////////////////////
////////////////////////////////////
//// CALL, BIND, APPLY
////////////////////////////////////
////////////////////////////////////

var john = {
    name: 'John',
    age: 26,
    presentation: function (style, timeOfDay) {
        console.log(this.name + " - " + style + " - " + timeOfDay);
    }
}

var emily = {
    name: 'Emily',
    age: 28
}

john.presentation('style1', 'Noon');


// call function
john.presentation.call(emily, 'style1', 'evening');

// can be used like this also
// but wont work with the presentation method
// john.presentation.apply(emily, ['friendly', 'noon']);


// bind function
// the 2nd and 3rd line is called caering i.e.
// creating function from another function based with some parameter preset
var johnFriendly = john.presentation.bind(emily, 'friendly');
johnFriendly('morning');
johnFriendly('night');


