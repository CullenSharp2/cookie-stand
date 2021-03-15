'use strict'

//assign objects here
const seattle = {
    location: 'Seattle',
    sales: [],
    customers: [],
    getSales: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.sales.push(parseInt(randomInt));
        }
    },
    getCustomers: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.customers.push(parseInt(randomInt));
        }
    },
};

const tokyo = {
    location: 'Tokyo',
    sales: [],
    customers: [],
    getSales: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.sales.push(parseInt(randomInt));
        }
    },
    getCustomers: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.customers.push(parseInt(randomInt));
        }
    },
};

const dubai = {
    location: 'Dubai',
    sales: [],
    customers: [],
    getSales: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.sales.push(parseInt(randomInt));
        }
    },
    getCustomers: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.customers.push(parseInt(randomInt));
        }
    },
};

const lima = {
    location: 'Lima',
    sales: [],
    customers: [],
    getSales: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.sales.push(parseInt(randomInt));
        }
    },
    getCustomers: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.customers.push(parseInt(randomInt));
        }
    },
};

const paris = {
    location: 'Paris',
    sales: [],
    customers: [],
    getSales: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.sales.push(parseInt(randomInt));
        }
    },
    getCustomers: function (min, max) {
        for (let k = 0; k < 14; k += 1) {
            let randomInt = Math.random() * (max - min) + min;
            this.customers.push(parseInt(randomInt));
        }
    },
};

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

    cookieStand.getSales(1, 100);

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
render(dubai);
render(paris);
render(lima);