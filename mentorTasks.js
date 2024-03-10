//TASK 1
//* Verilen cumledeki sözlerin neçe herfli olmasını array formatinda veren bir funksiya yazın...
//? Input: "New Javascript Task"
//? Output: [3, 10, 4]

const sentence = "New Javascript Task";

const findLettersOfSentence = (sentence) => {
    return sentence.split(' ').map(word => word.length);
}

// console.log(findLettersOfSentence(sentence));

//TASK 2
//* Verilen arrayde cüt ededleri, eyni zamanda 1 ve 3`cü reqemleri veren bir funksiya yazın...
//? Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//? Output: [ 1, 2, 3, 4, 6, 8 ]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = [];

const findEvenNums = (array) => {
    newArr.push(array[0], array[2]);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 == 0) {
            newArr.push(element)
        }
    }
    return newArr.sort()
}

console.log(findEvenNums(arr));


//TASK 3

/* Verilen kitab obyektini bir arraya yigan funksiya yazin. Bu funksiya yeni kitab elave etmekle beraber cari kitablarin oldugu arrayi logda gostermelidir.
//?  Input: {
//?     title: "1984",
//?     author: "George Orwell",
//?     isbn: "9780451524935",
//?     genre: "Dystopian",
//?     price: 9.99,
//?     quantity: 20
//? }
//? Output: 1984 George Orwell 9780451524935 Dystopian 9.99 20 */

const allBooks = [];

const addNewBook = (
    title,
    author,
    isbn,
    genre,
    price,
    quantity) => {
    allBooks.push({
        'title': title,
        'author': author,
        'isbn': isbn,
        'genre': genre,
        'price': price,
        'quantity': quantity
    })

    return allBooks.map(book => {
        return book.title + ' ' + book.author + ' ' + book.isbn + ' ' + book.genre + ' ' + book.price + ' ' + book.quantity
    })

}

// console.log(addNewBook('1984', "George Orwell", "9780451524935", "Dystopian", 9.99, 20));
// console.log(addNewBook('20003', "George", "97", "Hello", 9.121212, 212121));

// console.log(allBooks);