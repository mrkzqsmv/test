//TASK 1
//PART 1

sum = 0;

function calculateSum(array) {
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

var sumOfArray = calculateSum([1, 2, 3, 4, 5]);

console.log('Sum Of Array is' + ' ' + sumOfArray);

//PART 2
var counter = 0;

while (counter < 5) {
    counter++;
    console.log(counter);
}

console.log('---------');

//PART 3
var countDown = 5;

do {
    countDown--;
    console.log(countDown);
} while (countDown > 0);


//PART 4
function evaluateGrade(grade) {
    if (grade >= 60) {
        console.log('PASSED');
    } else {
        console.log('FAILED');
    }
}


evaluateGrade(32);
evaluateGrade(60);
evaluateGrade(63);