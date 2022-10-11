import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
   function HandleResponse (response){}
let apiKey="52adb056d4c4b82cd7201506b279863f";
let lat = props.coordinates.lat;
let lon = props.coordinates.lon;

   let apiUrl=`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${6}&appid=${apiKey}`

axios.get(apiUrl).then(HandleResponse);

   return (
    <div className="col dayly-forecast">
    <div>Mon</div>
     <div className="WeatherForecast-icon"><WeatherIcon code="01d" size={30} /></div> 
     <div className="WeatherForecast-temp"><span className="WF-temp-max">23</span><span className="WF-temp-min">17</span></div>  
    </div>
   ) 
}