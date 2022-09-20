import React from 'react'
import { useState } from 'react';


function EndTimeDropDown() {

const endTimeOptions = [
    {value: '', text: '--end Time--'},
    {value: '2', text: '0400'},
    {value: '3', text: '0500'},
    {value: '4', text: '0600'},
    {value: '5', text: '0700'},
    {value: '6', text: '0800'},
    {value: '7', text: '0900'},
    {value: '8', text: '1000'},
    {value: '9', text: '1100'},
    {value: '10', text: '1200'},
    {value: '11', text: '1300'},
    {value: '12', text: '1400'},
    {value: '13', text: '1500'},
    {value: '14', text: '1600'},
    {value: '15', text: '1700'},
    {value: '16', text: '1800'},
    {value: '17', text: '1900'},
    {value: '18', text: '2000'},
    {value: '19', text: '2100'},
    {value: '20', text: '2200'},
    {value: '21', text: '2300'},
  ];

const [selected, setSelected] = useState(endTimeOptions[0].value);

const handleChange = event => {
    const bookBtn = document.querySelector('#book-button')
    setSelected(event.target.value);
    bookBtn.removeAttribute('disabled');

  };
  return (
    <select disabled id="timeEnd" value={selected} onChange={handleChange} >
        {endTimeOptions.map(endTimeOption => (
            <option key={endTimeOption.value} value={endTimeOption.value}>
                {endTimeOption.text}
            </option>
        ))}
    </select>
  )
}

export default EndTimeDropDown