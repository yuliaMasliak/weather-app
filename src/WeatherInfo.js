import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
    return (
        <div className='row'>
          <div className='col-5'>
          <div className="currentTemp">
           <WeatherIcon code={props.data.icon} />
            <WeatherTemperature celsius={props.data.temperature} />

            
          </div>
          </div>
           
            <div className="col-3 mt-3">
              <ul>
                <li>Feels like: {Math.round(props.data.feelsLike)}%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
              </div>
              <div className="col-4 weekday"> <h1 className="mainCity">{props.data.city}</h1> 
               <FormattedDate date={props.data.date} />
               <p className="text-capitalize">{props.data.description}</p> 
              </div>
         </div>
    )
}