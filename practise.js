const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr5 = [11, 12, 13, 14, 15];
const strArr = ['a', 'p', 'p', 'l', 'e'];
const arr3 = arr1.concat(arr2);
const arr4 = arr1.concat(arr1);
const arr6 = arr1.concat(arr2, arr5);
const arr7 = arr1.concat(strArr);

// console.log(arr3);
// console.log(arr4);
// console.log(arr6);
// console.log(arr7);


const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

// console.log(alphaNumeric);

// const num1 = [[1]];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers);

// num1[0].push(4);

// console.log(numbers);



const obj1 = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
// const obj2 = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3,
//     [Symbol.isConcatSpreadable]: true
// };
// console.log([0].concat(obj1, obj2));
// // [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]

console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // ignored by concat() since length is 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]


const formatTurkishPhoneNumber = (input) => {
    console.log('i: ', input);
    const numbersOnly = input.replace(/\D/g, '');
    console.log('n: ', numbersOnly);
    const match = numbersOnly.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    return !match ? input : match.slice(1).filter(Boolean).join(' ');
};

const a = formatTurkishPhoneNumber('+sasasa902242202248sasasa')
console.log(a);