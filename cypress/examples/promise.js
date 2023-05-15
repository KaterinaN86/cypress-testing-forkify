//declaring promise variable (class Promise instance)
let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        //Returns 'Promise Fulfilled' when promise is fulfilled.
        resolve("Promise Fulfilled");
    } else {
        //Returns 'Promise not fulfilled' when promise is rejected.
        reject("Promise not fulfilled");
    }
});
//By using the "then" key word a promise is resolved ("then" method always returns a promise, that has three possible states: pending, fulfilled or rejected), it will either be fulfilled or rejected. Parameter "message" is the result of the resolve or reject methods, depending on the defined condition. The first block in the then function is executed if the promise is fulfilled while the catch block will be executed it the promise was rejected.
promise
    .then((message) => {
        console.log(message + ", promise has passed!");
    })
    .catch((message) => {
        console.log(message + ", promise has failed");
    });
