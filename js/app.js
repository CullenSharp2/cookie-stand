/*
    Date: 03.16.21

    Problem domain:
        Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.

        Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

        Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

            - The minimum number of customers per hour.
            - The maximum number of customers per hour.
            - The average number of cookies purchased per customer.
            
        Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

        Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

    Tasks:
    [x] Create new branch 
    [x] Replace object literals with constructors and instances
    [] Create a table to contain all the sales data by location.
    [] Declare the function to append table children as a method
    [] Render table headers/footers as a seperate function
*/

'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElem = document.createElement('table');
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

//store for later
// CookieStandLocations.prototype.render = function () {
//     //get reference to table element
//     //const tableElemRef = document.getElementById()

//     let tableDataElem;

// }

const seattle = new CookieStandLocations('Seattle', 23, 65, 6.3);
const tokyo = new CookieStandLocations('Tokyo', 3, 24, 1.2);
const dubai = new CookieStandLocations('Dubai', 11, 38, 3.7);
const paris = new CookieStandLocations('Paris', 20, 38, 2.3);
const lima = new CookieStandLocations('Lima', 2, 16, 4.6);

function renderTable(hours) {
    let tableRowElem = document.createElement('tr');
    let tableHeaderElem;
    let headerText;

    tableHeaderElem = document.createElement('th');
    tableRowElem.appendChild(tableHeaderElem);

    //add date headers
    for (let i = 0; i < hours.length; i += 1) {
        tableHeaderElem = document.createElement('th');
        headerText = document.createTextNode(hours[i]);
        tableHeaderElem.appendChild(headerText);
        tableRowElem.appendChild(tableHeaderElem);
    }

    tableElem.appendChild(tableRowElem);
}

renderTable(hours);
bodyElem.appendChild(tableElem);

// function render(cookieStand) {
//     
//     const newHeaderElem = document.createElement('h2');
//     const newUlElem = document.createElement('ul');
//     const newBoxElem = document.createElement('article');
//     const totalElem = document.createElement('li');

//     let newLiElem;
//     let total = 0;

//     bodyElem.appendChild(newBoxElem);

//     newBoxElem.appendChild(newHeaderElem);
//     newHeaderElem.textContent = cookieStand.location;

//     newBoxElem.appendChild(newUlElem);

//     cookieStand.getCustomers(hours)
//     cookieStand.getSales()

//     for (let i = 0; i < cookieStand.sales.length; i += 1) {
//         newLiElem = document.createElement('li');
//         newLiElem.textContent = `${hours[i]}: ${cookieStand.sales[i]} cookies`
//         newUlElem.appendChild(newLiElem);
//     }

//     for (let j = 0; j < cookieStand.sales.length; j += 1) {
//         total += cookieStand.sales[j];
//     }

//     newUlElem.appendChild(totalElem);
//     totalElem.textContent = `Total: ${total} cookies`;
// }

// render(seattle);
// render(tokyo);
// render(dubai);
// render(paris);
// render(lima);