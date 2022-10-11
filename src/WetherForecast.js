import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
   
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse (response){
   setForecast(response.data.daily);
  setLoaded(true);
  
}

if (loaded) {
   return (
    <div className="col">
    <WeatherForecastDay data={forecast[0]}/>  
    </div>
   ) 
} else {
   let apiKey="082d3d02ffdb12f2fd9b259e2ced1d0d";
   let latitude = props.coordinates.lat;
   let longitude = props.coordinates.lon;

   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   
   axios.get(apiUrl).then(handleResponse);

    return null;
}}