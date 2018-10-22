import React from 'react';
import '../CSS/Current.css';

const current = (props) => {
    console.log(props);

    return (
        <div className="current-container">
            <div>
                <h1 className="City">Vegas i guess</h1>
            </div>
            <div className="content">
                <div className={props.data.currently.icon}></div>
                <div class="degrees">
                    <h1 id="temp">{Math.floor(props.data.currently.temperature) + '\u00b0F'}</h1>
                </div>
                <h1 id="desc">{props.data.currently.summary}</h1>
            </div>
        </div>
    );

}

export default current;