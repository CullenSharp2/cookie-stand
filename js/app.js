'use strict'

const seattleCookieStand = {
    name: 'Seattle',
    time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookies: ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies'],
    total: "Total: 875 cookies"
}

const bodyElem = document.getElementById('body');
const newHeader = document.createElement('h1');
const newUl = document.createElement('ul');
const newli = document.createElement('li');

bodyElem.appendChild(newHeader);
newHeader.textContent = seattleCookieStand.name;


// for(let i = 0; i < 15; i += 1) {
    // 
// } 