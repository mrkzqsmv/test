//OBJECT.ASSIGN METHOD
const first = {
    a: 1,
    b: 2,
};
const second = {
    b: 6,
    c: 9,
    d: 10.,
};

const returnedTarget = Object.assign(first, second);

console.log(returnedTarget);
console.log(returnedTarget === second);


const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);
console.log(me); //{}
// me.name = 'Markaz';
// me.isHuman = true;
// me.printIntroduction();

// console.log(Object.hasOwn(person, 'isHuman'));
// console.log(Object.hasOwn(person, 'is'));

console.log(Object.is(me, {}));

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.seal(person));