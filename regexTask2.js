//PHONE NUMBER VALIDATION WITH REGEX
const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
const phoneNum = '+994503575344';

const validateUserPhoneNumber = (phoneNum) => {
    if (phoneNum.match(phoneNumberRegex)) {
        return 'TRUE PHONE NUMBER';
    } else {
        return 'FALSE PHONE NUMBER';
    }
}

const phoneNumber = validateUserPhoneNumber(phoneNum);

// console.log(phoneNumber);



//EMAIL
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const emailAddress = 'markazgasimov@gmail.com';

const validateUserEmailAddress = (emailAddress) => {
    if (emailAddress.match(emailRegex)) {
        return 'TRUE EMAIL ADDRESS';
    } else {
        return 'FALSE EMAIL ADDRESS';
    }
}

const email = validateUserEmailAddress(emailAddress);

// console.log(email);


//PASSWORD
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const userPassword = 'Markaz1234567.';

const validateUserPassword = (userPassword) => {
    if (userPassword.match(passwordRegex)) {
        return 'TRUE PASSWORD';
    } else {
        return 'FALSE PASSWORD';
    }
}

const password = validateUserPassword(userPassword);

// console.log(password);

//NAME
const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
const userName = 'Markaz';

const validateUserName = (userName) => {
    if (userName.match(nameRegex)) {
        return 'TRUE USERNAME';
    } else {
        return 'FALSE USERNAME';
    }
}

const username = validateUserName(userName);

// console.log(username);

//AGE
const ageRegex = /^(1[89]|[2-9]\d)$/gm;
const validateAge = (age) => {
    if (age.match(ageRegex)) {
        return 'TRUE AGE';
    } else {
        return 'FALSE AGE';
    }
}

const age = validateAge('20');

// console.log(age);