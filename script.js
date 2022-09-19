const bookBtn = document.querySelector('#book-button')
const unitName = document.querySelector('#unitName')
const timeStart = document.querySelector('#timeStart')
const timeEnd = document.querySelector('#timeEnd')
const tuesdayBooking1 =  document.querySelector('#tue-book-1')
const dv = document.createElement("div");
const dv2 = document.createElement("div");


bookBtn.addEventListener("click", newBooking);
      function newBooking() {

    const node1 = document.createTextNode(`${unitName.value}`);
    const node2 = document.createTextNode(`${timeStart.options[timeStart.selectedIndex].text} - ${timeEnd.options[timeEnd.selectedIndex].text}`);
       
if (timeEnd.value < timeStart.value) {
    console.log("ok");
location.reload();
} else console.log(timeEnd.value, timeStart.value)


      }