
import React from 'react';

function newBooking() {

    const unitName = document.querySelector('#unitName')
    const timeStart = document.querySelector('#timeStart')
    const timeEnd = document.querySelector('#timeEnd')
    const tuesdayBooking1 =  document.querySelector('#tuesday-column')
    const dv = document.createElement("div");
    const dv2 = document.createElement("div");
    const dv3 = document.createElement("div");

    const node1 = document.createTextNode(unitName.value);
    const node2 = document.createTextNode(`${timeStart.options[timeStart.selectedIndex].text} - ${timeEnd.options[timeEnd.selectedIndex].text}`);

        dv.appendChild(node1);
        dv2.appendChild(node2);
        dv3.appendChild(dv);
        dv3.appendChild(dv2);
        dv3.className = "booking2";
        dv3.dataset.booking = "booked";
        dv3.style.gridRowStart = timeStart.value;
        dv3.style.gridRowEnd = timeEnd.value;
        tuesdayBooking1.appendChild(dv3);
  

}


function BookButton() {

  return (

    <button id="book-button" onClick={() => newBooking()}>Book</button>
  )
}

export default BookButton