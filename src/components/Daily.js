import React from 'react';
import '../CSS/Daily.css';
import WeatherIcons from 'react-weathericons';


const daily = (props) => {
    let timeStamp = props.day.time;
    let a = new Date(timeStamp * 1000);
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

    return (
        <div className="daily-container">
        <div className="seven-day">
            <h1>{days[a.getDay()]}</h1>
            <WeatherIcons name="cloud" size="3x" />
            <h1>{Math.floor(props.day.apparentTemperatureHigh)}</h1>
            <h1>{Math.floor(props.day.apparentTemperatureLow)}</h1>
        </div>
        </div>
    );
    
}

export default daily;