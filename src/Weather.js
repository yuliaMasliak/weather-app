import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherForecast from "./WetherForecast";


export default function Weather (props) {
  const [city, setCity] = useState(props.defaultCity)
  const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response) {
  
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    feelsLike: response.data.main.feels_like,
    date: new Date(response.data.dt * 1000)
  });
  
   }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search(){
    const apiKey = "52adb056d4c4b82cd7201506b279863f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
   
if (weatherData.ready){
    return (
              <div className="Weather">
              <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <input className='searchInput' type="search" placeholder='Enter a city ...' autoFocus="on" onChange={handleCityChange} />
            <input className='submitInput' type="submit" value="Search" />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
   <div>
   <WeatherForecast coordinates={weatherData.coordinates}/>
   </div>
   </div>
    );} else {
      search();
      return "Loading...";
    }
}