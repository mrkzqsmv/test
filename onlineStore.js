//CUSTOMERS DATA

const customers = [{
        id: 1,
        name: 'Bob',
        email: 'bob@example.com',
        location: {
            city: 'Paris',
            country: 'France'
        }
    },
    {
        id: 2,
        name: 'Alice',
        email: 'alice@example.com',
        location: {
            city: 'New York',
            country: 'USA'
        }
    },
    {
        id: 3,
        name: 'Charlie',
        email: 'charlie@example.com',
        location: {
            city: 'London',
            country: 'UK'
        }
    },
    {
        id: 4,
        name: 'David',
        email: 'david@example.com',
        location: {
            city: 'Tokyo',
            country: 'Japan'
        }
    },
    {
        id: 5,
        name: 'Eve',
        email: 'eve@example.com',
        location: {
            city: 'Berlin',
            country: 'Germany'
        }
    },
    {
        id: 6,
        name: 'Frank',
        email: 'frank@example.com',
        location: {
            city: 'Rome',
            country: 'Italy'
        }
    },
    {
        id: 7,
        name: 'Grace',
        email: 'grace@example.com',
        location: {
            city: 'Sydney',
            country: 'Australia'
        }
    },
    {
        id: 8,
        name: 'Henry',
        email: 'henry@example.com',
        location: {
            city: 'Toronto',
            country: 'Canada'
        }
    },
    {
        id: 9,
        name: 'Ivy',
        email: 'ivy@example.com',
        location: {
            city: 'Seoul',
            country: 'South Korea'
        }
    },
    {
        id: 10,
        name: 'Jack',
        email: 'jack@example.com',
        location: {
            city: 'Mumbai',
            country: 'India'
        }
    }
];


//ORDER ID

const orders = [{
        orderId: 101,
        customerId: 1,
        product: 'Dizüstü Bilgisayar',
        quantity: 1,
        price: 1200
    },
    {
        orderId: 102,
        customerId: 2,
        product: 'Akıllı Telefon',
        quantity: 2,
        price: 800
    },
    {
        orderId: 103,
        customerId: 3,
        product: 'Tablet',
        quantity: 1,
        price: 500
    },
    {
        orderId: 104,
        customerId: 4,
        product: 'Kulaklık',
        quantity: 3,
        price: 50
    },
    {
        orderId: 105,
        customerId: 5,
        product: 'Oyun Konsolu',
        quantity: 1,
        price: 400
    },
    {
        orderId: 106,
        customerId: 6,
        product: 'Kamera',
        quantity: 1,
        price: 600
    },
    {
        orderId: 107,
        customerId: 7,
        product: 'Kablosuz Hoparlör',
        quantity: 2,
        price: 100
    },
    {
        orderId: 108,
        customerId: 8,
        product: 'Harici Sabit Disk',
        quantity: 1,
        price: 150
    },
    {
        orderId: 109,
        customerId: 9,
        product: 'Yazıcı',
        quantity: 1,
        price: 200
    },
    {
        orderId: 110,
        customerId: 10,
        product: 'Kulaklık Standı',
        quantity: 3,
        price: 20
    }
];

//TASK 1

const allCustomersEmails = customers.map(e => {
    return e.email
})

// console.log(allCustomersEmails);

//TASK 2

const highPriceOrders = orders.filter(e => {
    if (e.price > 1000) {
        return e.price
    }
})

// console.log(highPriceOrders);

//TASK 3

const aliceCustomer = customers.find(e => {
    if (e.name == 'Alice') {
        console.log(e);
    }
})

// console.log(aliceCustomer);

//TASK 4

const findOrderById = orders.findIndex(e => {
    if (e.orderId == 102) {
        return e
    }
})

// console.log(findOrderById);

//TASK 5

const isCustomerUSA = customers.some(e => {
    if (e.location.country == 'USA') {
        return true
    }
})

// console.log(isCustomerUSA);

//TASK 6

// orders.forEach(e => {
//     console.log(`Order ${e.orderId} by ${e.customerId}: ${e.quantity} * ${e.product} for ${e.price} each`);
// })


//TASK 7

const sortedCustomers = customers.slice().sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
});

// console.log(sortedCustomers);