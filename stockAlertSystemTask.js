//TASK 1
//PART 1
const stocks = [{
    'symbol': 'AAPL',
    'price': 150.25,
    'sector': 'Technology'
  },
  {
    'symbol': 'MSFT',
    'price': 290.50,
    'sector': 'Technology'
  },
  {
    'symbol': 'GOOGL',
    'price': 2800.75,
    'sector': 'Technology'
  },
  {
    'symbol': 'AMZN',
    'price': 3200.00,
    'sector': 'Technology'
  },
  {
    'symbol': 'TSLA',
    'price': 900.45,
    'sector': 'Automotive'
  },
  {
    'symbol': 'F',
    'price': 10,
    'sector': 'Automotive'
  },
  {
    'symbol': 'GM',
    'price': 65.30,
    'sector': 'Automotive'
  },
  {
    'symbol': 'NVDA',
    'price': 280.80,
    'sector': 'Technology'
  },
  {
    'symbol': 'AMD',
    'price': 120.20,
    'sector': 'Technology'
  },
  {
    'symbol': 'BABA',
    'price': 160.50,
    'sector': 'E-Commerce'
  },
  {
    'symbol': 'JD',
    'price': 85.75,
    'sector': 'E-Commerce'
  },
  {
    'symbol': 'WMT',
    'price': 140.35,
    'sector': 'Retail'
  },
  {
    'symbol': 'TGT',
    'price': 225.80,
    'sector': 'Retail'
  },
  {
    'symbol': 'KO',
    'price': 60.10,
    'sector': 'Beverages'
  },
  {
    'symbol': 'PEP',
    'price': 155.40,
    'sector': 'Beverages'
  }
];

//PART 2
let thirdStockPrice = stocks[2].price;
let updateStockPrice = () => {
  let percentage = (thirdStockPrice * 10) / 100;
  setInterval(() => {
    thirdStockPrice += percentage;
    console.log(thirdStockPrice);
  }, 1000);
}

updateStockPrice();

//PART 3
const filterMethod = stocks.filter((element) => {
  if (element.sector == 'E-Commerce') {
    let eCommerceStocks = element.sector;
    return eCommerceStocks
  }
});

console.log(filterMethod);

//PART 4
let alertSystem = () => {
  for (let i = 0; i < stocks.length; i++) {
    const currentStock = stocks[i];
    if (currentStock.price > 200.80) {
      setTimeout(() => {
        console.log(currentStock.sector + ' ' + currentStock.price);
      }, 2000);
    }
  }
}

alertSystem()


//TASK 2
const usersData = [{
    'username': 'john_doe',
    'password': 'jd@1234'
  },
  {
    'username': 'alice_smith',
    'password': 'as@5678'
  },
  {
    'username': 'bob_jones',
    'password': 'bj@91011'
  },
  {
    'username': 'emma_wilson',
    'password': 'ew@121314'
  },
  {
    'username': 'mike_brown',
    'password': 'mb@151617'
  },
  {
    'username': 'sarah_taylor',
    'password': 'st@181920'
  },
  {
    'username': 'chris_miller',
    'password': 'cm@212223'
  },
  {
    'username': 'lisa_jackson',
    'password': 'lj@242526'
  },
  {
    'username': 'kevin_white',
    'password': 'kw@272829'
  },
  {
    'username': 'jessica_roberts',
    'password': 'jr@303132'
  }
];


let filterExample = () => {
  return usersData.filter((element) => {
    if (element.username.length > 10) {
      console.log('OKAY');
    } else {
      console.log('NO');
    }
  });
}

filterExample()


let findExample = () => {
  return usersData.find((e) => {
    return e.username.startsWith == 'a';
  })
}

console.log(findExample());

let findIndexExample = () => {
  return usersData.findIndex((e) => {
    return e.password.length > 5;
  });
};

console.log(findIndexExample());