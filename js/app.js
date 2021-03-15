'use strict'

const seattleCookieStand = {
    name: 'Seattle',
    time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookies: ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies'],
    total: "Total: 875 cookies"
}

const bodyElem = document.getElementById('body');
const newHeader = document.createElement('h2');
const newUl = document.createElement('ul');
const newBox = document.createElement('article');

bodyElem.appendChild(newBox);

newBox.appendChild(newHeader);
newHeader.textContent = seattleCookieStand.name;

newBox.appendChild(newUl);

for(let i = 0; i < seattleCookieStand.cookies.length; i += 1) {
    let newLi = document.createElement('li')
    newLi.textContent = `${seattleCookieStand.time[i]}: ${seattleCookieStand.cookies[i]}`
    newUl.appendChild(newLi);

    console.log(seattleCookieStand.time[i], seattleCookieStand.cookies[i], );
} 