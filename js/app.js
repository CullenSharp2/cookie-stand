'use strict'

const bodyElem = document.getElementById('body');
// let objList = []; // not in use

let CookieStandLocations = function (location, minCustomers, maxCutsomers, avgSales) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCutsomers = maxCutsomers;
    this.avgSales = avgSales;
    this.customers = [];
    this.sales = [];
}

CookieStandLocations.prototype.getCustomers = function (hours) {
    for (let i = 0; i < hours.length; i += 1) {
        let max = this.maxCutsomers;
        let min = this.minCustomers;
        let randomInt = Math.random() * (max - min) + min;
        this.customers.push(parseInt(randomInt));
    }
}

CookieStandLocations.prototype.getSales = function () {
    for (let i = 0; i < this.customers.length; i += 1) {
        this.sales.push(parseInt(this.customers[i] * this.avgSales));
    }
}

const seattle = new CookieStandLocations('Seattle', 23, 65, 6.3);
const tokyo = new CookieStandLocations('Tokyo', 3, 24, 1.2);
const dubai = new CookieStandLocations('Dubai', 11, 38, 3.7);
const paris = new CookieStandLocations('Paris', 20, 38, 2.3);
const lima = new CookieStandLocations('Lima', 2, 16, 4.6);


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

    cookieStand.getCustomers(hours)
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
render(dubai);
render(paris);
render(lima);