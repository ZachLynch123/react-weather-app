import React from 'react';
import '../CSS/Current.css';
import WeatherIcon from 'react-icons-weather';

const current = (props) => {
    console.log(props);

    const iconStyle = {
        fontSize: '5em',

    }

    return (
        <div className="current-container">
            <div>
                <h1 className="City">Las Vegas</h1>
            </div>
            <div className="content">
                <div class="degrees">
                    <h1 id="temp">{Math.floor(props.data.currently.temperature) + '\u00b0F'}</h1>
                </div>
                <WeatherIcon style={iconStyle} name="darksky" iconId={props.data.currently.icon} />
                <h1 id="desc">{props.data.currently.summary}</h1>
            </div>
        </div>
    );

}

export default current;