'use strict'

//assign objects here
const seattle = {
    location: 'Seattle',
    sales: [],
}

const tokyo = {
    location: 'Tokyo',
    sales: [],
}

const amman = {
    location: 'Amman',
    sales: [],
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

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

    //populate sales array with random numbers
    for (let k = 0; k < 14; k += 1) {
        let randomInt = 0;
        randomInt = getRandomInt(100);
        cookieStand.sales.push(randomInt);
    }

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
render(amman);