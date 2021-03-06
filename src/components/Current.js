import React from 'react';
import '../CSS/Current.css';
import WeatherIcon from 'react-icons-weather';

const current = (props) => {


    return (
        <div className="current-container">
            <div>
                <h1 className="City">Currently</h1>
            </div>
            <div className="content">
                <div class="degrees">
                    <h1 id="temp">{Math.floor(props.data.currently.temperature) + '\u00b0F'}</h1>
                </div>
                <WeatherIcon name="darksky" iconId={props.data.currently.icon} />
                <h1 id="desc">{props.data.currently.summary}</h1>
            </div>
        </div>
    );

}

export default current;