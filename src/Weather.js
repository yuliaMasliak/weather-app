import React, { useState } from "react";
import axios from "axios";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data);
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: "Wednesday 09:00",
    humidity: response.data.main.humidity,
    description: response.data.weather[0].main,
    icon: "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
    feelsLike: response.data.main.feels_like
  });
  }
   
if (weatherData.ready){
    return (
              <div className="Weather">
              <div className="formDiv">
          <form>
            <input className='searchInput' type="search" placeholder='Enter a city ...' />
            <input className='submitInput' type="submit" value="Search" />
          </form>
        </div>
        <div className='row'>
          <div className='col-3'>
            <p className="currentTemp">{Math.round(weatherData.temperature)} <span className="units">°C</span></p>
            <img src={weatherData.icon} alt="rain icon" width="80"/>   
            </div>
           
            <div className="col-3 mt-3">
              <ul>
                <li>Feels like: {Math.round(weatherData.feelsLike)}%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
              </div>
              <div className="col-2"></div>
              <div className="col-4 weekday"> <h1 className="mainCity">{props.city}</h1> 
               <p>{weatherData.date}<p>{weatherData.description}</p></p> 
              </div>
         </div>
   <div className="row">
   </div>
   </div>
    )} else {
      let apiKey = "52adb056d4c4b82cd7201506b279863f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return "Loading...";
    }
}