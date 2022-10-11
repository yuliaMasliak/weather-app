import React from "react";

export default function WeatherTemperature(props) { 
    return (
        <span className="currentTemp">{Math.round(props.celsius)} <span className="units">°C </span>
        </span>)
}