//TASK 1
//PART 1
let day = 3;
let dayOfWeek;

switch (day) {
    case 1:
        dayOfWeek = "Monday - Study Javascript";
        break;
    case 2:
        dayOfWeek = "Tuesday - Go to University";
        break;
    case 3:
        dayOfWeek = "Wednesday - Play game";
        break;
    case 4:
        dayOfWeek = "Thursday - Write code";
        break;
    case 5:
        dayOfWeek = "Friday - Write homework";
        break;
    case 6:
        dayOfWeek = "Saturday - Do exercise";
        break;
    case 7:
        dayOfWeek = "Sunday - Make some food";
        break;
    default:
        dayOfWeek = "Invalid day";
}

console.log(dayOfWeek);


//PART 2
const numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    var sum = sum + numbers[index];
}

console.log(sum);

//PART 3
const fruits = ['Apple', 'banana', 'Cherry'];
for (let index = 0; index < fruits.length; index++) {
    var currentFruit = fruits[index];
    console.log(currentFruit + ' ' + currentFruit.length);
}

//PART 4
const students = {
    name: 'Markaz Gasimov',
    grade: '87'
}

if (students.grade >= 60) {
    console.log(students.name + ' ' + 'passed the exam');
} else {
    console.log(students.name + ' ' + 'failed the exam');
}