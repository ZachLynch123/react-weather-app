import React from 'react';
import '../CSS/Daily.css';
import WeatherIcon from 'react-icons-weather';


const daily = (props) => {
    let timeStamp = props.day.time;
    let a = new Date(timeStamp * 1000);
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    // clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night

    return (
        <div className="seven-day">
            <h1>{days[a.getDay()]}</h1>
            <WeatherIcon name="darksky" iconId={props.day.icon}  />
            <h1>{Math.floor(props.day.apparentTemperatureHigh)}</h1>
            <h1>{Math.floor(props.day.apparentTemperatureLow)}</h1>
        </div>
    );
    
}

export default daily;