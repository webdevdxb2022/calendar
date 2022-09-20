
import React from 'react';


function newBooking() {

    const unitName = document.querySelector('#unitName')
    const dayName = document.querySelector('#dayName')
    const timeStart = document.querySelector('#timeStart')
    const timeEnd = document.querySelector('#timeEnd')
    const mondayBooking =  document.querySelector('#monday-column')
    const tuesdayBooking =  document.querySelector('#tuesday-column')
    const wednesdayBooking =  document.querySelector('#wednesday-column')
    const thursdayBooking =  document.querySelector('#thursday-column')
    const fridayBooking =  document.querySelector('#friday-column')
    const saturdayBooking =  document.querySelector('#saturday-column')
    const sundayBooking =  document.querySelector('#sunday-column')
    const dv = document.createElement("div");
    const dv2 = document.createElement("div");
    const dv3 = document.createElement("div");

    const node1 = document.createTextNode(unitName.value);
    const node2 = document.createTextNode(`${timeStart.options[timeStart.selectedIndex].text} - ${timeEnd.options[timeEnd.selectedIndex].text}`);

        dv.appendChild(node1);
        dv2.appendChild(node2);
        dv3.appendChild(dv);
        dv3.appendChild(dv2);
        if (unitName.value==="MAINTENANCE") {
          dv3.className = "booking3";
        }
        else if (timeStart.value < 10) {
          dv3.className = "booking1";
        } else { dv3.className = "booking2"; }
       
        dv3.dataset.booking = "booked";
        dv3.style.gridRowStart = timeStart.value;
        dv3.style.gridRowEnd = timeEnd.value;
        if (dayName.value==="Monday") {
          mondayBooking.appendChild(dv3);
        } else if (dayName.value==="Tuesday") {
          tuesdayBooking.appendChild(dv3);
        } else if (dayName.value==="Wednesday") {
          wednesdayBooking.appendChild(dv3);
        } else if (dayName.value==="Thursday") {
          thursdayBooking.appendChild(dv3);
        } else if (dayName.value==="Friday") {
          fridayBooking.appendChild(dv3);
        } else if (dayName.value==="Saturday") {
          saturdayBooking.appendChild(dv3);
        } else {
          sundayBooking.appendChild(dv3);
        }
        
  

}


function BookButton() {

  return (

    <button id="book-button" onClick={() => newBooking()}>Book</button>
  )
}

export default BookButton