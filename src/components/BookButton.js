
import React from 'react';

function newBooking() {

    const bookBtn = document.querySelector('#book-button')
    const unitName = document.querySelector('#unitName')
    const timeStart = document.querySelector('#timeStart')
    const timeEnd = document.querySelector('#timeEnd')
    const tuesdayBooking1 =  document.querySelector('#tuesday-column')
    const dv = document.createElement("div");
    const dv2 = document.createElement("div");

    const node1 = document.createTextNode(`${unitName.value}`);
    const node2 = document.createTextNode(`${timeStart.options[timeStart.selectedIndex].text} - ${timeEnd.options[timeEnd.selectedIndex].text}`);

        dv.appendChild(node1);
        dv.appendChild(node2);
        tuesdayBooking1.appendChild(dv);
        dv.className = "booking1";
        dv.id = unitName.value + timeStart.value + timeEnd.value;
        dv.dataset.bookingItem = "booked";
        dv.style.gridRowStart = timeStart.value;
        dv.style.gridRowEnd = timeEnd.value;
        const divId =  document.getElementById(dv.id);
        console.log(timeStart.value, timeEnd.value, dv.id, divId);

}


function BookButton() {

  return (

    <button id="book-button" onClick={() => newBooking()}>Book</button>
  )
}

export default BookButton