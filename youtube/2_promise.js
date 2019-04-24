// Promise takes a callback function which has 2 parameters viz resolve and reject
// resolve means that the promise is successful
// reject means that the promise is unsuccessful

/*
    USE 1 :
    Sometimes we need to execute a function once we get output from another function.
    Usually functions might contain http requests and can be asynchronous calls. 
    Thus we cannot guarentee the sequence of the function calls.

    In order to make sure that the functions even if asynchronous execute one after the other, we need to use promise.

    USE 2 :
    Can log errors easily using the catch block

    USE 3 :
    Can execute something once the needed asynchronous functions provide you the output

    USE 4 :
    Can execute something once one of the asynchronous functions provide you the output

    USE 5 :
    You need to perform some action (viz reject) if there is no error in the catch block but if the http request does not return proper data.
*/

/* BASIC PROMISE */
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    let isClean = false;
    isClean === true ? resolve('cleaned'): reject('not cleaned');

});

// execute the above promise
promiseToCleanTheRoom.then(function(fromResolve){
    console.log(`the room is ${fromResolve}`);
}).catch(function(fromReject) {
    console.log(`the room is ${fromReject}`);
});


/* COMPLEX PROMISE */
let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('Cleaned the room');
    });
};

let removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
        console.log(message);
        resolve(`${message}. Removed the garbage`);
    });
};

let winIcecream = (message) => {
    return new Promise((resolve, reject) => {
        resolve(`${message}. Won the icecream`);
    });
};

/* FINISH SOMETHING BEFORE STARTING SOMETHING */
cleanRoom().then(function(v_cleanRoom) {                // parameter passed using resolve in the promise
    return removeGarbage(v_cleanRoom);                  // returns promise
}).then(function(v_removeGarbage) {
    return winIcecream(v_removeGarbage);                // returns promise
}).then(function(v_winIcecream){
    console.log(`${v_winIcecream} Finished`);           // returns promise
});


/* FINISH EVERYTHING IN PARALLEL AND THEN DO SOMETHING */
Promise
.all([cleanRoom('TEST'), removeGarbage('TEST1'), winIcecream('TEST2')])
.then(function() {                                      // execute when all the promises are finished returned
    console.log('All finished parallely');
});


/* FINISH A SINGLE PROMISE AND THEN DO SOMETHING */
Promise
.race([cleanRoom(), removeGarbage(), winIcecream()])
.then(function() {                                      // execute when all the promises are finished returned
    console.log('One of them is finished');
});
