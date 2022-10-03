import React, { useState } from "react";

export default function WeatherTemperature(props) { 
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    function fahrenheit() {
        return (props.celsius * 9) / 5 +32;
    }
   
    if (unit === "celsius") {
    return (
        <span className="currentTemp">{Math.round(props.celsius)} <span className="units">°C | <a href="/" onClick={convertToFahrenheit} className="unitsLink">°F</a></span>
        </span>
    )} else {
return (
        <span className="currentTemp">{Math.round(fahrenheit())} <span className="units"><a href="/" onClick={convertToCelsius} className="unitsLink">°C</a> | °F</span>
        </span>);

    }
}