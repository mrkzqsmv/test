const englishWords = ['say', 'make', 'do', 'wrap', 'let'];

const [first, second, ...rest] = englishWords;

console.log(first);
console.log(second);
console.log(rest);

console.log(englishWords.length);

console.log(typeof englishWords);

//Task 1
//Part 1
const numbers = [10, 20, 30, 40, 50];
const [firstNumber, secondNumber] = numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(numbers);

//Part 2
var myString = 'Markaz';
var myNumber = 20;
var myboolean = true;

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myboolean);

//Part 3
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);
console.log(firstNumber != secondNumber);
console.log(firstNumber !== secondNumber);
console.log(firstNumber < secondNumber);
console.log(firstNumber > secondNumber);
console.log(firstNumber <= secondNumber);
console.log(firstNumber >= secondNumber);

//Part 4
if (firstNumber % 2 == 0 && firstNumber > 0) {
    console.log('First number is positive and even');
}

if (firstNumber % 2 == 0 || firstNumber > 0) {
    console.log('First number is either even or positive');
}

if (firstNumber > 0) {
    console.log('First number is not negative');
}