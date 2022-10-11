import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay (props) {
    return  (
        <div className="dayly-forecast">
        <div>{props.forecast[0].dt}</div>
     <div className="WeatherForecast-icon"><WeatherIcon code={props.forecast[0].weather[0].icon} size={30} /></div> 
     <div className="WeatherForecast-temp"><span className="WF-temp-max">{props.forecast[0].temp.max}</span><span className="WF-temp-min">{props.forecast[0].temp.min}</span></div></div>
    )
}