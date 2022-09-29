import React from "react";
import './App.css';

function App() {
  return (
  <div className="project">
    <div className="App">
      <div className="container">
        <div className="formDiv">
          <form>
            <input className='searchInput' type="search" placeholder='Enter a city ...' />
            <input className='submitInput' type="submit" value="Search" />
          </form>
        </div>
        <div className='row'>
          <div className='col-3'>
            <p className="currentTemp">17 <span className="units">°C</span></p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="rain icon" width="80"/>   
            </div>
           
            <div className="col-3 mt-3">
              <ul>
                <li>Precipitation: 60%</li>
                <li>Humidity: 94%</li>
                <li>Wind: 14 km/h</li>
              </ul>
              </div>
              <div className="col-2"></div>
              <div className="col-4 weekday"> <h1 className="mainCity">Kyiv</h1> 
 <p>Wednesday<br/>Showers in places</p> 
  </div>
  </div>
   <div className="row">
   </div>
   </div>
      </div>
      <footer className="author">
     
      This project was coded by Yulia Masliak and is open-sourced on <span>
            <a href="https://github.com/yuliaMasliak/weather-react" > GitHub</a></span> and hosted on <span>
            <a href="https://flourishing-croissant-d90f66.netlify.app/" > Netlify</a></span> 
    </footer>
     </div>
  );
}

export default App;
