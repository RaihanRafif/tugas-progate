const reverseString = (string) => {
    const strRev = string.split('').reverse().join('');
    console.log(strRev)
}

// reverseString("HALOHALO")

const fistBuzz = (angka) => {
    if (typeof angka !== 'number') {
        console.log("Bukan Angka");
        return;
    }

    if (angka % 3 === 0 && angka % 5 === 0) {
        console.log("FizzBuzz");
    } else if (angka % 3 === 0) {
        console.log("Fizz");
    } else if (angka % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log("bukan Fizz Buzz");
    }
};

// fistBuzz(30)

const secondLargest = (array) => {
    const sorted = array.sort()
    console.log(sorted[array.length - 2]);
}

// secondLargest([0, 6, 7, 2, 1, 6, 4, 8])

// ------------------------------------

let products = [
    { id: 1, name: 'Product A', price: 1000, points: 10 },
    { id: 2, name: 'Product B', price: 2000, points: 25 },
    { id: 3, name: 'Product C', price: 5000, points: 50 },
    { id: 4, name: 'Product D', price: 8000, points: 100 },
];

let availablePoints = 150;
let purchasedProducts = [];
let totalSpent = 0;

const getMaxPointsProduct = (data) => {
    if (data.length === 0) {
        return;
    }

    let maxPointsProduct = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i].points > maxPointsProduct.points) {
            maxPointsProduct = data[i];
        }
    }

    return maxPointsProduct;
};

// console.log(getMaxPointsProduct(products))

const calculateRemainingPoints = (balance, point) => {
    return balance - point.points;
}

// console.log("Calculate Remaining : ", calculateRemainingPoints(availablePoints, getMaxPointsProduct(products)));

const redeemProducts = (balance, products) => {
    if (products.length === 0) {
        return;
    }

    let productSorted = products.sort((a, b) => a.points - b.points);
    let productSortedReverse = productSorted.reverse()

    let productBought = []
    let balanceAmount = balance
    let balanceStatus = true
    let totalAmount = 0

    while (balanceStatus) {
        for (let index = 0; index < products.length; index++) {
            if (balanceAmount - productSortedReverse[index].points >= 0) {
                productBought.push(products[index])
                balanceAmount = balanceAmount - products[index].points
            }
        }

        let hasProductWithLowerPoints = products.some(product => product.points < balanceAmount);
        if (hasProductWithLowerPoints == false) {
            balanceStatus = false
        }
    }

    console.log("Product Yang Dibeli : ");
    productBought.map((item, index) => {
        console.log(`${index + 1}. ${item.name}`);
        totalAmount += item.points
    })

    console.log(`Total Harga : ${totalAmount}`);
}

redeemProducts(availablePoints, products)


