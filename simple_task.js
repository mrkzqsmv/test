//Task 1
// const student = {
//     name: 'Richard Kalehoff',
//     surname: 'Kalehoff',
//     age: 35,
//     location: {
//         city: 'Miami',
//         state: 'FL',
//         country: 'USA'
//     },
//     skills: ['JavaScript', 'HTML', 'CSS']
// };

// var studentName = student.name;
// var studentSurname = student.surname;
// var studentAge = student.age;
// var studentLocation = student.location;
// var studentCity = student.location.city;
// var studentState = student.location.state;
// var studentCountry = student.location.country;
// var studentSkills = student.skills;
// var studentSkills1 = student.skills[0];
// var studentSkills2 = student.skills[1];
// var studentSkills3 = student.skills[2];



// studentName = 'Markaz';
// studentSurname = 'Gasimov';
// studentAge = 20;
// studentLocation = 'Azerbaijan';
// studentCity = 'Sumgait';
// studentState = 'Sumgait';
// studentCountry = 'Azerbaijan';
// studentSkills = ['Flutter', 'Dart', 'Java'];
// studentSkills1 = 'Flutter';
// studentSkills2 = 'Dart';
// studentSkills3 = 'Java';

// console.log(studentName);
// console.log(studentSurname);
// console.log(studentAge);
// console.log(studentLocation);
// console.log(studentCity);
// console.log(studentState);
// console.log(studentSkills1);
// console.log(studentSkills2);
// console.log(studentSkills3);

// const { name: ad } = student;
// const { surname: soyad } = student;
// const { age: yas } = student;
// const { location: yer } = student;
// const { city: seher } = student.location;
// const { state: rayon } = student.location;
// const { country: olke } = student.location;
// const { skills: bacariq } = student;
// const { 0: bacariq0 } = student.skills;
// const { 1: bacariq1 } = student.skills;
// const { 2: bacariq2 } = student.skills;

// console.log(ad);
// console.log(soyad);
// console.log(yas);
// console.log(yer);
// console.log(seher);
// console.log(rayon);
// console.log(olke);
// console.log(bacariq);

// const newObj = {
//     ...student,
// };

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(letters[0]);

// const [a, b, c, d, e, f, g, h, i, j] = arr;

// console.log(a);

// const [x, y, z, ...rest] = arr;

// // --------------------------------------------------
// //Task 2
//     // Part 1
const studentProfile = {
    name: 'Richard Kalehoff',
    age: 35,
    course: 3,
    hobbies: ['playing piano', 'writing code']
};  


console.log(studentProfile);

delete studentProfile.course;

console.log(studentProfile);


// Part 2 - 1

const { name: studentName, age } = studentProfile;

console.log(studentName);
console.log(age);
//Part 2 - 2

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);
console.log(second); 
console.log(rest); 

// Part 3
//Part 3 - 1
const grades = [85, 92, 78, 95];
console.log(grades);
console.log(grades[0]);
console.log(grades[1]);

//Part 4
//Part 4 - 1
const additionalInfo = {
    address: 'Aliyar ALiyev Street',
    phoneNum: '123456789'
};


const completeProfile = {
    ...studentProfile,
    ...additionalInfo
};

