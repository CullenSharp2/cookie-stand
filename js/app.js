/*
    Date: 03.18.21
*/

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

function createCells(loops, tag, parent, text) {
    if (typeof (text) === "object") {
        for (let i = 0; i < loops; i += 1) {
            let newCell = document.createElement(tag);
            let newTextNode = document.createTextNode(text[i]);
            newCell.appendChild(newTextNode);
            parent.appendChild(newCell);
        }
    } else {
        for (let j = 0; j < loops; j += 1) {
            let newCell = document.createElement(tag);
            let newTextNode = document.createTextNode(text);
            newCell.appendChild(newTextNode);
            parent.appendChild(newCell);
        }
    }
}
// function createChild (tag, parent, text) {
//     const newElem = document.createElement(parent);
//     let newTextNode = document.createTextNode('text');
// }

CookieStandLocations.prototype.render = function (hours) {
    const tableRowElem = document.createElement('tr');
    let rowHeaderElem;
    let tableHeaderText;
    let tableDataElem;
    let tableDataText;
    let total = 0;

    //add row header
    rowHeaderElem = document.createElement('th');
    tableHeaderText = document.createTextNode(this.location);
    rowHeaderElem.appendChild(tableHeaderText);
    tableRowElem.appendChild(rowHeaderElem);

    // calculate total
    for (let i = 0; i < this.sales.length; i += 1) {
        total += this.sales[i];
    }

    // for loop to add sales data to table
    for (let j = 0; j < this.sales.length; j += 1) {
        tableDataElem = document.createElement('td');
        tableDataText = document.createTextNode(`${this.sales[j]} Cookies `);
        tableDataElem.appendChild(tableDataText);

        tableRowElem.appendChild(tableDataElem);
    }

    // add total to row
    tableDataElem = document.createElement('td');
    tableDataText = document.createTextNode(`${total} Cookies`);
    tableDataElem.appendChild(tableDataText);
    tableRowElem.appendChild(tableDataElem);

    tableElem.appendChild(tableRowElem);
}

const seattle = new CookieStandLocations('Seattle', 23, 65, 6.3);
const tokyo = new CookieStandLocations('Tokyo', 3, 24, 1.2);
const dubai = new CookieStandLocations('Dubai', 11, 38, 3.7);
const paris = new CookieStandLocations('Paris', 20, 38, 2.3);
const lima = new CookieStandLocations('Lima', 2, 16, 4.6);

function renderFooter(hours) {
    const tableRowElem = document.createElement('tr');
    let tableDataElem;
    let tableDataText;
    let tableHeaderText;
    let total = 0;

    let tableHeaderElem = document.createElement('th');
    tableHeaderText = document.createTextNode('Hourly Total');
    tableHeaderElem.appendChild(tableHeaderText);
    tableRowElem.appendChild(tableHeaderElem);

    for (let i = 0; i < hours.length; i += 1) {
        let hourlyTotal = 0;
        for (let j = 0; j < CookieStandLocations.cookieStands.length; j += 1) {
            hourlyTotal += CookieStandLocations.cookieStands[j].sales[i];
            total += hourlyTotal;
        }

        tableDataElem = document.createElement('td');
        tableDataText = document.createTextNode(`${hourlyTotal} Cookies`);
        tableDataElem.appendChild(tableDataText);

        tableRowElem.appendChild(tableDataElem);
    }
    tableDataElem = document.createElement('td');
    tableDataText = document.createTextNode(`${total} Cookies`);
    tableDataElem.appendChild(tableDataText);
    tableRowElem.append(tableDataElem);

    tableElem.appendChild(tableRowElem);
}

function renderTable(hours) {
    const tableRowElem = document.createElement('tr');
    const len = CookieStandLocations.cookieStands.length;
    let i = 0;

    let tableHeaderElem;
    let headerText;

    tableHeaderElem = document.createElement('th');
    tableRowElem.appendChild(tableHeaderElem);

    //add column headers
    createCells(hours.length, 'th', tableRowElem, hours);
    // for (let i = 0; i < hours.length; i += 1) {
    //     tableHeaderElem = document.createElement('th');
    //     headerText = document.createTextNode(hours[i]);
    //     tableHeaderElem.appendChild(headerText);
    //     tableRowElem.appendChild(tableHeaderElem);
    // }

    tableHeaderElem = document.createElement('th');
    headerText = document.createTextNode('Daily Total');
    tableHeaderElem.appendChild(headerText);
    tableRowElem.appendChild(tableHeaderElem);

    tableElem.appendChild(tableRowElem);

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