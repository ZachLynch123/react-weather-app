import React from 'react';
import '../CSS/Daily.css';


const daily = (props) => {
    console.log(props);
    return (
        <div className="daily-container">
        <div className="seven-day">
            <h1>{Math.floor(props.day.apparentTemperatureHigh)}</h1>
            <h1>{Math.floor(props.day.apparentTemperatureLow)}</h1>
        </div>
        </div>
    );
    
}

export default daily;