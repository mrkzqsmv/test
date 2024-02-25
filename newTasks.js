//* Verilen reqemin uzunlugu qeder random parollar generate eden bir funksiya yaziriq.
//! Sifrenin yaradilmasinda verilen herf ve simbollardan istifade olunmalidir.
//? ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+


//PASSWORD LENGTH - passwordun uzunulugudur
// const generateRandomPasswords = (passwordLength) => {
//     let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
//     //new password - yeni password
//     let newPassword = '';
//     //for ile password length qeder islem davam edir
//     for (let i = 0; i < passwordLength; i++) {
//         //her defe symbol random bir char almaq ucun istifade olunur
//         //Math.floor ile tam eded goturur
//         let randomIndex = Math.floor(Math.random() * symbols.length);
//         //char at ile birlesdiririk
//         newPassword += symbols.charAt(randomIndex)
//     }
//     console.log(newPassword);
// }

// generateRandomPasswords(10)


// const fruits = ["apple", "banana", "orange", "grape", "strawberry", "kiwi", "pineapple", "watermelon"];

// const randomFruit = () => {
//     const randomIndex = Math.floor(Math.random() * fruits.length)
//     console.log(fruits[randomIndex]);
// }

// randomFruit()

// const numbers = [1, 2.5, 3, 4.7, 5, 6.2, 7];
// //Output: [3, 5, 6]

// const kesrEdedler = numbers.filter((num) => {
//     return !Number.isInteger(num)

// }).map(e => {
//     return Math.round(e)
// });

// console.log(kesrEdedler);





//* Verilen Username 5 herfden kicik veya 15 herfden boyukdurse ve herf ile reqemlerden ibaret deyilse ve istifadeci adi reqem ile baslayirsa false qaytarir.
//* Diger hallarda ise istifadeci adi qebul edilecek.
//? Hint: herf ve reqemlerden ibaret olub olmamasini bu regex kodu ile yoxlamaq olar: /^[a-zA-Z0-9]+$/

const regex = /^[a-zA-Z0-9]+$/g;

function checkUsername(username) {
    if (username.length < 5 || username.length > 15) {
        return false;
    }

    if (regex.test(username)) {
        return false;
    }

    if (parseInt(username[0])) {
        return false;
    }

    return true;
}


console.log(checkUsername('Markaz'));