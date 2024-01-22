//Task 2
const scores = [1, 2, 3, 4, 5];

const [firstScore, secondScore, ...rest] = scores;

console.log(firstScore);
console.log(secondScore);
console.log(rest);

const student = {
    name: 'Markaz',
    age: 20,
    isEnrolled: true,
};

const {
    name: ad,
    age
} = student;

console.log(ad);
console.log(age);

//Part 2
console.log(scores.length);


//Part 3
console.log(firstScore + secondScore);
console.log(firstScore - secondScore);

console.log(firstScore > 0);
console.log(firstScore < 0);

console.log(student.age > 18 && ((firstScore + secondScore) / 2) > 70);
console.log(student.age > 16 || ((firstScore + secondScore) / 2) > 70);


if (student.isEnrolled == true) {
    console.log(!student.isEnrolled);
}