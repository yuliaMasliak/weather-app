import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay (props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
      }
    
      function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
      }
    
      function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }
    return  (
        <div className="dayly-forecast">
        <div className="WeatherForecast-day">{day()}</div>
     <div className="WeatherForecast-icon"><WeatherIcon code={props.data.weather[0].icon} size={30} /></div> 
     <div className="WeatherForecast-temp"><span className="WF-temp-max">{maxTemperature()}</span><span className="WF-temp-min">{minTemperature()}</span></div></div>
    )
}