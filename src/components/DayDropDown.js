
import React from 'react'
import { useState } from 'react';


function DayDropdown() {

const dayOptions = [
    {value: '', text: '--Choose a Day--'},
    {value: 'Monday', text: 'Monday'},
    {value: 'Tuesday', text: 'Tuesday'},
    {value: 'Wednesday', text: 'Wednesday'},
    {value: 'Thursday', text: 'Thursday'},
    {value: 'Friday', text: 'Friday'},
    {value: 'Saturday', text: 'Saturday'},
    {value: 'Sunday', text: 'Sunday'}
  ];

const [selectedDay, setSelectedDay] = useState(dayOptions[0].value);

const handleChange = event => {

    setSelectedDay(event.target.value);
    console.log(setSelectedDay)

  };
  return (
    <select id="dayName" value={selectedDay} onChange={handleChange} >
        {dayOptions.map(dayOption => (
            <option key={dayOption.value} value={dayOption.value}>
                {dayOption.text}
            </option>
        ))}
    </select>
  )
}

export default DayDropdown