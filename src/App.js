import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
  
  <div className="App">
  <div className="container">
  <Weather defaultCity="Oslo" />
      <footer className="author">
     
      This project was coded by Yulia Masliak and is open-sourced on <span>
            <a href="https://github.com/yuliaMasliak/weather-react" > GitHub</a></span> and hosted on <span>
            <a href="https://flourishing-croissant-d90f66.netlify.app/" > Netlify</a></span> 
    </footer>
     </div>
     </div>
  );
}

export default App;
