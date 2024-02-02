//TASK 1
//PART 1 

const greet = (name, greeting = 'Hello') => {
    return greeting + ' ' + name;
}


console.log(greet('Markaz', 'Good Morning'));
console.log(greet('Markaz'));

//PART 2
const factorial = (num) => {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
};

console.log(factorial(5));

//PART 3
let sumAll = (...arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4, 5));

//PART 4

const firstArrowFunc = () => {
    console.log('This is the first arrow function');
    secondArrowFunc();
}

const secondArrowFunc = () => {
    console.log('This is the second arrow function');
    thirdArrowFunc();
}

const thirdArrowFunc = () => {
    console.log('This is the third arrow function');
    fourthArrowFunc();
}

const fourthArrowFunc = () => {
    console.log('This is the fourth arrow function');
}


firstArrowFunc();