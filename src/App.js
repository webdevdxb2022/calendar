
import './App.css';
import Dropdown from './components/Dropdown'
import StartTimeDropDown from './components/StartTimeDropDown';
import EndTimeDropDown from './components/EndTimeDropDown';
import BookButton from './components/BookButton';
import DayDropdown from './components/DayDropDown';
import RangeDropdown from './components/RangeDropdown';


const App = () => {

        function undo() {
            const item = document.querySelectorAll('[data-booking="booked"]');
           item[item.length - 1].remove();
           
        }
const title = document.querySelector('.booking-title')
const rangeName = document.querySelector('#rangeName')

console.log(title.innerHTML, rangeName.value)
      
  return (
    <div className="App">
      <div className="container">
         <div className="title">
            <div className="booking-title">NAS 100M IFMR</div>
        </div>

        <div className="days">
            <div className="day-column">
                <div className="day-column-title">Time</div>
                <div className="day-column-time">
                    <div className="time">0400</div>
                </div>
                <div className="day-column-time">
                    <div className="time">0500</div>
                </div>
                <div className="day-column-time">
                    <div className="time">0600</div>
                </div>
                <div className="day-column-time">
                    <div className="time">0700</div>
                </div>
                <div className="day-column-time">
                    <div className="time">0800</div>
                </div>
                <div className="day-column-time">
                    <div className="time">0900</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1000</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1100</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1200</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1300</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1400</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1500</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1600</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1700</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1800</div>
                </div>
                <div className="day-column-time">
                    <div className="time">1900</div>
                </div>
                <div className="day-column-time">
                    <div className="time">2000</div>
                </div>
                <div className="day-column-time">
                    <div className="time">2100</div>
                </div>
                <div className="day-column-time">
                    <div className="time">2200</div>
                </div>
                <div className="day-column-time">
                    <div className="time">2300</div>
                </div>
            </div>
            <div id="monday-column" className="day-column">
                <div className="day-column-title">Monday</div>
            </div>
            <div id="tuesday-column"  className="day-column">
                <div className="day-column-title">Tuesday</div>
                <div id="tue-booking1"></div>
            </div>
            <div id="wednesday-column"  className="day-column">
                <div className="day-column-title">Wednesday</div>
            </div>
            <div id="thursday-column"  className="day-column">
                <div className="day-column-title">Thursday</div>
            </div>
            <div id="friday-column"  className="day-column">
                <div className="day-column-title">Friday</div>
            </div>
            <div id="saturday-column"  className="day-column">
                <div className="day-column-title">Saturday</div>
            </div>
            <div id="sunday-column"  className="day-column">
                <div className="day-column-title">Sunday</div>
            </div>
        </div>
        <div className="booking-window">
          <div className="book2">
                <RangeDropdown />
                <DayDropdown />
                <Dropdown />
                <StartTimeDropDown />
                <EndTimeDropDown />
                <BookButton />       
          </div>
          <div><button onClick={() => undo()}>Undo</button></div>

        </div>  


      </div>  


    </div>
  );
}

export default App;
