//TASK 1

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Delay completed');
    }, 1000)
})

function createDelay() {
    return promise;
}

// console.log(createDelay());


//TASK 2


// console.log(createDelay());


// createDelay().then((result) => {
//     console.log("Message received from the Promise");
// })


//TASK 3

function createDelay(message, delayTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Message: ' + message, 'Delay Time: ' + delayTime);
            resolve(message)
        }, delayTime)
    })
}

// console.log(createDelay('Delay Completed', 1000));
// console.log(createDelay('Delay Successfully Completed', 2000));

//TASK 4


// createDelay().catch(error => {
//     console.log('Error: Delay failed');
// })


//TASK 5

const arr = [
    createDelay('Delay Completed', 1000),
    createDelay('Delay Successfully Completed', 2000),
    createDelay('Delay Completed', 1000),
    createDelay('Delay Successfully Completed', 2000),
    createDelay('Delay Completed', 1000),
    createDelay('Delay Successfully Completed', 2000),
    createDelay('Delay Completed', 1000),
    createDelay('Delay Successfully Completed', 2000),
];

Promise.all(arr).then(values => {
    console.log(values);
})