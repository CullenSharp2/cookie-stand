'use strict'

//assign objects here
const seattle = {
    location: 'Seattle',
    sales: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 47],
}

const tokyo = {
    location: 'Tokyo',
    sales: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 47],
}

const amman = {
    location: 'Amman',
    sales: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 47],
}

const bodyElem = document.getElementById('body');

function createCookieStand(cookieStand) {
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

    for (let i = 0; i < cookieStand.sales.length; i += 1) {
        newLiElem = document.createElement('li');
        newLiElem.textContent = `${hours[i]}: ${cookieStand.sales[i]} cookies`
        newUlElem.appendChild(newLiElem);
    }

    for (let j = 0; j < cookieStand.sales.length; j += 1) {
        total += cookieStand.sales[j];
    }

    newBoxElem.appendChild(totalElem);
    totalElem.textContent = `Total: ${total}`;
}

createCookieStand(seattle);
// createCookieStand(tokyo);
// createCookieStand(amman);