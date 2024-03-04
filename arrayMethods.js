// Array.prototype.flatMap()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.flatMap((num) => num % 2 == 0 ? num : '');

console.log(result);

console.log(arr);

// Array.from()

var username = 'markaz';

const res = Array.from(username);

console.log(res);
console.log(res[5]);
console.log(username);

const answer = Array.from(arr, (x) => x * 2);
console.log(answer);

//Array.prototype.includes()


const array1 = [1, 2, 3];

console.log(array1.includes(2));

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('at'));

console.log(array1);
console.log(pets);



//Array.isArray()
console.log(Array.isArray([]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array(1, 2, 3, 4)));
console.log(Array.isArray(new Array('a', 'b', 'c', 'd')));
console.log(Array.isArray(Array.prototype));
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray('undefined'));
console.log(Array.isArray(new Uint8Array(32)));


//Array.prototype.join()


const array = [0, 1, 2, 3, 4, 5];

const string1 = array.join("");
console.log(string1);

const string2 = array.join(",");
console.log(string2);

const string3 = array.join(", ");
console.log(string3);

const string4 = array.join("@");
console.log(string4);


//Array.prototype.lastIndexOf()

let str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate"));

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;

//Array.prototype.push()

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);

console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

//Array.prototype.pop()

animals.pop();
console.log(animals);

//Array.prototype.reverse()

const array3 = [0, 1, 2, 3, 4, 5];

const reversedArr = array3.reverse();

console.log(reversedArr);
console.log(array3);

//Array.prototype.shift()

const array4 = [1, 2, 3];
const firstElement = array4.shift();
console.log(array4);
console.log(firstElement);

//Array.prototype.unshift()
const addedNum = 10;
array4.unshift(addedNum);
console.log(array4);

//Array.prototype.slice()
const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = FRUITS.slice(1, 3);
var fromTheEnd = FRUITS.slice(-3, -1);

console.log(citrus);
console.log(fromTheEnd);


//Array.prototype.some()
const arr1 = [ 1, 2, 3, 4, 5 ];

arr1.some(function(element) {
	return element < 3;
});

arr1.some((element) => {
	return element < 3
}); 

arr1.some((element) => element < 3); 


//Array.prototype.splice()

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);


months.splice(4, 1, 'May');
console.log(months);


