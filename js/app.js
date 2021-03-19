'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElem = document.createElement('table');
const bodyElem = document.getElementById('body');

let CookieStandLocations = function (location, minCustomers, maxCustomers, avgSales) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;
    this.customers = [];
    this.sales = [];

    CookieStandLocations.cookieStands.push(this);

    // generate customers/sales
    this.getCustomers(hours);
    this.getSales();
}

CookieStandLocations.cookieStands = [];

CookieStandLocations.prototype.getCustomers = function (hours) {
    for (let i = 0; i < hours.length; i += 1) {
        let max = this.maxCustomers;
        let min = this.minCustomers;
        let randomInt = Math.random() * (max - min) + min;
        this.customers.push(parseInt(randomInt));
    }
}

CookieStandLocations.prototype.getSales = function () {
    for (let i = 0; i < this.customers.length; i += 1) {
        this.sales.push(Math.floor(this.customers[i] * this.avgSales));
    }
}

function createChild (tag, parent, text) {
    const newElem = document.createElement(tag);
    let newTextNode = document.createTextNode(text);
    newElem.appendChild(newTextNode);
    parent.appendChild(newElem);
}

function createCells(loops, tag, parent, text) {
    if (typeof (text) === "object") {
        for (let i = 0; i < loops; i += 1) {
            createChild('td', parent, text[i]);
        }
    } else {
        for (let j = 0; j < loops; j += 1) {
            createChild('td', parent, text);
        }
    }
}


CookieStandLocations.prototype.render = function (hours) {
    const rowElem = document.createElement('tr');
    let total = 0;

    //add row header
    createChild('th', rowElem, this.location);

    // calculate total
    for (let i = 0; i < this.sales.length; i += 1) {
        total += this.sales[i];
    }

    // for loop to add sales data to table
    createCells(this.sales.length, 'td', rowElem, this.sales);

    // add total to row
    createChild('td', rowElem, `${total}`);

    tableElem.appendChild(rowElem);
}

const seattle = new CookieStandLocations('Seattle', 23, 65, 6.3);
const tokyo = new CookieStandLocations('Tokyo', 3, 24, 1.2);
const dubai = new CookieStandLocations('Dubai', 11, 38, 3.7);
const paris = new CookieStandLocations('Paris', 20, 38, 2.3);
const lima = new CookieStandLocations('Lima', 2, 16, 4.6);

function renderFooter(hours) {
    const rowElem = document.createElement('tr');
    let tableDataElem;
    let tableDataText;
    let total = 0;

    createChild('th', rowElem, 'Total by Column')

    for (let i = 0; i < hours.length; i += 1) {
        let hourlyTotal = 0;
        for (let j = 0; j < CookieStandLocations.cookieStands.length; j += 1) {
            hourlyTotal += CookieStandLocations.cookieStands[j].sales[i];
            total += hourlyTotal;
        }

        tableDataElem = document.createElement('td');
        tableDataText = document.createTextNode(`${hourlyTotal}`);
        tableDataElem.appendChild(tableDataText);

        rowElem.appendChild(tableDataElem);
    }
    createChild('td', rowElem, `${total} Cookies`);

    tableElem.appendChild(rowElem);
}

function renderTable(hours) {
    const rowElem = document.createElement('tr');
    const len = CookieStandLocations.cookieStands.length;
    let i = 0;

    createChild('th', rowElem, '');
    createCells(hours.length, 'th', rowElem, hours);
    createChild('th', rowElem, `Daily Total Sales`);

    tableElem.appendChild(rowElem);

    for (let j = 0; j < len; j += 1) {
        CookieStandLocations.cookieStands[j].render(hours);
    }

    renderFooter(hours);

    bodyElem.appendChild(tableElem);

    console.log(CookieStandLocations.cookieStands);
}

function addCookieStandHandler(event) {
    event.preventDefault();

    const location = event.target.location.value;
    const minCustomers = parseInt(event.target.minCustomers.value);
    const maxCustomers = parseInt(event.target.maxCustomers.value);
    const avgSales = parseInt(event.target.avgSales.value);

    const newCookieStand = new CookieStandLocations(location, minCustomers, maxCustomers, avgSales);

    tableElem.innerHTML = '';

    renderTable(hours);

    event.target.reset();
}

const cookieStandForm = document.getElementById('cookieStand-form');
cookieStandForm.addEventListener('submit', addCookieStandHandler);

renderTable(hours);