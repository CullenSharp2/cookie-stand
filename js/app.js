'use strict'

//assign objects here
const seattle = {
    location: 'Seattle',
    time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    cookies: ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies', '875 cookies'],
}

const tokyo = {
    location: 'Tokyo',
    time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
    cookies: ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies', '875 cookies'],
}

const bodyElem = document.getElementById('body');

function createCookieStand(cookieStand) {
    const newHeader = document.createElement('h2');
    const newUl = document.createElement('ul');
    const newBox = document.createElement('article');
    let newLi;

    bodyElem.appendChild(newBox);

    newBox.appendChild(newHeader);
    newHeader.textContent = cookieStand.location;

    newBox.appendChild(newUl);

    for (let i = 0; i < cookieStand.cookies.length; i += 1) {
        newLi = document.createElement('li');
        newLi.textContent = `${cookieStand.time[i]}: ${cookieStand.cookies[i]}`
        newUl.appendChild(newLi);

        console.log(cookieStand.time[i], cookieStand.cookies[i], );
    }
}

createCookieStand(seattle);
createCookieStand(tokyo);