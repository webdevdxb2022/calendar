
import React from 'react'
import { useState } from 'react';


function RangeDropdown() {

            const rangeOptions = [
                {value: '', text: '--Choose a Range--'},
                {value: 'WAS IFMR 100M', text: 'WAS IFMR 100M'},
                {value: 'NAS IFMR 100M', text: 'NAS IFMR 100M'},
                {value: 'SAB IFMR 100M', text: 'SAB IFMR 100M'},
                {value: 'ASG MTR 400M', text: 'ASG MTR 400M'}
  ];

const [selected, setSelected] = useState(rangeOptions[0].value);

const handleChange = event => {


    setSelected(event.target.value);

  };
  return (
    <select id="rangeName" value={selected} onChange={handleChange} >
        {rangeOptions.map(rangeOption => (
            <option key={rangeOption.value} value={rangeOption.value}>
                {rangeOption.text}
            </option>
        ))}
    </select>
  )
}

export default RangeDropdown