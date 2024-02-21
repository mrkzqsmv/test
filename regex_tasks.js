//TASK 1

const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

const regexText = /Spain/g;

const findedWords = text.match(regexText);

// console.log(findedWords);

//TASK 2
const searchText = /rain/g;

const searchTexts = text.matchAll(searchText);

for (const searchText of searchTexts) {
    console.log(searchText);
}

//TASK 3

const modifiedText = text.replace('Spain', 'France');

console.log(modifiedText);

//TASK 4

const modifiedText2 = text.replaceAll('rain', 'sun');

console.log(modifiedText2);

//TASK 5

const searchText2 = /plain/g;

const findedWords2 = text.search(searchText2);

console.log(findedWords2);