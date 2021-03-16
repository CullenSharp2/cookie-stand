'use strict'


let CookieStandLocations = function (location, minCustomers, maxCutsomers, avgSales) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCutsomers = maxCutsomers;
    this.avgSales = avgSales;
    this.customers = [];
    this.sales = [];
}

CookieStandLocations.prototype.getCustomers = function () {
    for (let k = 0; k < 14; k += 1) {
        let max = this.maxCutsomers;
        let min = this.minCustomers;
        let randomInt = Math.random() * (max - min) + min;
        this.customers.push(parseInt(randomInt));
    }
}

CookieStandLocations.prototype.getSales = function () {
    for (let k = 0; k < this.customers.length; k += 1) {
        this.sales.push(parseInt(this.customers[k] * this.avgSales));
    }
}

let seattle = new CookieStandLocations('Seattle', 23, 65, 6.3);
let tokyo = new CookieStandLocations('tokyo', 3, 24, 1.2);
// //assign objects here
// const seattle = {
//     location: 'Seattle',
//     minCustomers: 23,
//     maxCutsomers: 65,
//     avgSales: 6.3,
//     sales: [],
//     customers: [],
//     getSales: function () {
//         for (let k = 0; k < this.customers.length; k += 1) {
//             this.sales.push(parseInt(this.customers[k] * this.avgSales));
//         }
//     },
//     getCustomers: function () {
//         for (let k = 0; k < 14; k += 1) {
//             let max = this.maxCutsomers;
//             let min = this.minCustomers;
//             let randomInt = Math.random() * (max - min) + min;
//             this.customers.push(parseInt(randomInt));
//         }
//     },
// };

// const tokyo = {
//     location: 'Tokyo',
//     minCustomers: 3,
//     maxCutsomers: 24,
//     avgSales: 1.2,
//     sales: [],
//     customers: [],
//     getSales: function () {
//         for (let k = 0; k < this.customers.length; k += 1) {
//             this.sales.push(parseInt(this.customers[k] * this.avgSales));
//         }
//     },
//     getCustomers: function () {
//         for (let k = 0; k < 14; k += 1) {
//             let max = this.maxCutsomers;
//             let min = this.minCustomers;
//             let randomInt = Math.random() * (max - min) + min;
//             this.customers.push(parseInt(randomInt));
//         }
//     },
// };

// const dubai = {
//     location: 'Dubai',
//     minCustomers: 11,
//     maxCutsomers: 38,
//     avgSales: 3.7,
//     sales: [],
//     customers: [],
//     getSales: function () {
//         for (let k = 0; k < this.customers.length; k += 1) {
//             this.sales.push(parseInt(this.customers[k] * this.avgSales));
//         }
//     },
//     getCustomers: function () {
//         for (let k = 0; k < 14; k += 1) {
//             let max = this.maxCutsomers;
//             let min = this.minCustomers;
//             let randomInt = Math.random() * (max - min) + min;
//             this.customers.push(parseInt(randomInt));
//         }
//     },
// };

// const lima = {
//     location: 'Lima',
//     minCustomers: 2,
//     maxCutsomers: 16,
//     avgSales: 4.6,
//     sales: [],
//     customers: [],
//     getSales: function () {
//         for (let k = 0; k < this.customers.length; k += 1) {
//             this.sales.push(parseInt(this.customers[k] * this.avgSales));
//         }
//     },
//     getCustomers: function () {
//         for (let k = 0; k < 14; k += 1) {
//             let max = this.maxCutsomers;
//             let min = this.minCustomers;
//             let randomInt = Math.random() * (max - min) + min;
//             this.customers.push(parseInt(randomInt));
//         }
//     },
// };

// const paris = {
//     location: 'Paris',
//     minCustomers: 20,
//     maxCutsomers: 38,
//     avgSales: 2.3,
//     sales: [],
//     customers: [],
//     getSales: function () {
//         for (let k = 0; k < this.customers.length; k += 1) {
//             this.sales.push(parseInt(this.customers[k] * this.avgSales));
//         }
//     },
//     getCustomers: function () {
//         for (let k = 0; k < 14; k += 1) {
//             let max = this.maxCutsomers;
//             let min = this.minCustomers;
//             let randomInt = Math.random() * (max - min) + min;
//             this.customers.push(parseInt(randomInt));
//         }
//     },
// };

const bodyElem = document.getElementById('body');

function render(cookieStand) {
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    const newHeaderElem = document.createElement('h2');
    const newUlElem = document.createElement('ul');
    const newBoxElem = document.createElement('article');
    const totalElem = document.createElement('li');

    let newLiElem;
    let total = 0;

    bodyElem.appendChild(newBoxElem);

    newBoxElem.appendChild(newHeaderElem);
    newHeaderElem.textContent = cookieStand.location;

    newBoxElem.appendChild(newUlElem);

    cookieStand.getCustomers()
    cookieStand.getSales()

    for (let i = 0; i < cookieStand.sales.length; i += 1) {
        newLiElem = document.createElement('li');
        newLiElem.textContent = `${hours[i]}: ${cookieStand.sales[i]} cookies`
        newUlElem.appendChild(newLiElem);
    }

    for (let j = 0; j < cookieStand.sales.length; j += 1) {
        total += cookieStand.sales[j];
    }

    newUlElem.appendChild(totalElem);
    totalElem.textContent = `Total: ${total} cookies`;
}



render(seattle);
render(tokyo);
// render(dubai);
// render(paris);
// render(lima);