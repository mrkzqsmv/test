//TASK 2
//PART 1
const color = 'red';

switch (color) {
    case 'red':
        console.log('Stop');
        break;
    case 'green':
        console.log('Go');
        break;
    case 'yellow':
        console.log('Caution');
        break;
    default:
        console.log('Unknown color');
        break;
}



//PART 2
const matrix = [
    [10, 20],
    [50, 40]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        console.log(matrix[i][j]);
    }
}

//PART 3
const product = {
    name: "PHONE",
    price: 2999.99,
    inStock: false
}



for (let productProperty in product) {
    if (product.hasOwnProperty(productProperty)) {
        console.log(productProperty + ": " + product[productProperty]);
    }
}

//PART 4
if (product.price < 50 && product.inStock === true) {
    console.log('Available');
} else {
    console.log('Unavailable');
}