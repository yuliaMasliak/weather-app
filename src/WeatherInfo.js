import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
    return (
        <div className='row'>
          <div className='col-3'>
            <p className="currentTemp">{Math.round(props.data.temperature)} <span className="units">°C</span></p>
            <img src={props.data.icon} alt="rain icon" width="80"/>   
            </div>
           
            <div className="col-3 mt-3">
              <ul>
                <li>Feels like: {Math.round(props.data.feelsLike)}%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
              </div>
              <div className="col-2"></div>
              <div className="col-4 weekday"> <h1 className="mainCity">{props.data.city}</h1> 
               <FormattedDate date={props.data.date} />
               <p className="text-capitalize">{props.data.description}</p> 
              </div>
         </div>
    )
}