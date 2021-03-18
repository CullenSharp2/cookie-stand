/*
    Date: 03.18.21
*/

'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElem = document.createElement('table');
const bodyElem = document.getElementById('body');

function addCookieStandHandler(event) {
    event.preventDefault();

    const location = event.target.location.value;
    const minCustomers = event.target.minCustomers.value;
    const maxCustomers = event.target.maxCustomers.value;
    const avgSales = event.target.avgSales.value;

    const newCookieStand = new CookieStandLocations(location, minCustomers, maxCustomers, avgSales);

    console.log(newCookieStand);

    tableElem.innerHTML = '';

    // render table function here

    event.target.reset();
}

const cookieStandForm = document.getElementById('cookieStand-form');
cookieStandForm.addEventListener('submit', addCookieStandHandler);

let CookieStandLocations = function (location, minCustomers, maxCustomers, avgSales) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;
    this.customers = [];
    this.sales = [];
    CookieStandLocations.testArr.push(this);
}

//rename me later
CookieStandLocations.testArr = [];

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
        this.sales.push(Math.floor(this.customers[i] * this.avgSales));
    }
}

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

    // generate customers/sales
    this.getCustomers(hours);
    this.getSales();

    // calculate total
    for (let j = 0; j < this.sales.length; j += 1) {
        total += this.sales[j];
    }

    // for loop to add sales data to table
    for (let i = 0; i < this.sales.length; i += 1) {
        tableDataElem = document.createElement('td');
        tableDataText = document.createTextNode(`${this.sales[i]} Cookies `);
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

function renderTable(hours) {
    const tableRowElem = document.createElement('tr');
    let tableHeaderElem;
    let headerText;

    tableHeaderElem = document.createElement('th');
    tableRowElem.appendChild(tableHeaderElem);

    //add time headers
    for (let i = 0; i < hours.length; i += 1) {
        tableHeaderElem = document.createElement('th');
        headerText = document.createTextNode(hours[i]);
        tableHeaderElem.appendChild(headerText);
        tableRowElem.appendChild(tableHeaderElem);
    }

    tableHeaderElem = document.createElement('th');
    headerText = document.createTextNode('Daily Total');
    tableHeaderElem.appendChild(headerText);
    tableRowElem.appendChild(tableHeaderElem);

    tableElem.appendChild(tableRowElem);
}

// render column headers
// add table to DOM
renderTable(hours);

// populate table with data
seattle.render(hours);
tokyo.render(hours);
dubai.render(hours);
paris.render(hours);
lima.render(hours);

function renderHourlyTotal(hours) {
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
        for (let j = 0; j < CookieStandLocations.testArr.length; j += 1) {
            hourlyTotal += CookieStandLocations.testArr[j].sales[i];
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

renderHourlyTotal(hours);

bodyElem.appendChild(tableElem);