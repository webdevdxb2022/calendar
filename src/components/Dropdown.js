
import React from 'react'
import { useState } from 'react';


function Dropdown() {

const unitOptions = [
    {value: '', text: '--Choose an Unit--'},
    {value: 'KBZ 65', text: 'KBZ 65'},
    {value: 'MOI 71', text: 'MOI 71'},
    {value: 'PSG 92', text: 'PSG 92'},
  ];

const [selected, setSelected] = useState(unitOptions[0].value);

const handleChange = event => {
const timeStart = document.querySelector('#timeStart');

    setSelected(event.target.value);
    if (event.target.value!=="") {timeStart.removeAttribute('disabled');}
    else { alert('Please select a Unit!')}
  };
  return (
    <select id="unitName" value={selected} onChange={handleChange} >
        {unitOptions.map(unitOption => (
            <option key={unitOption.value} value={unitOption.value}>
                {unitOption.text}
            </option>
        ))}
    </select>
  )
}

export default Dropdown