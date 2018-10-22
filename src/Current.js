import React from 'react';

const current = (props) => {
    console.log(props);

    return (
        <div className="current-container">
            <div>
                <h2 className="City">Vegas i guess</h2>
            </div>
            <div className="content">
                <div className="cloud"></div>
                <div className="cloud"></div>
                <div class="degrees">
                    <h1 id="temp">{props.data.currently.temperature}</h1>
                    <span>&#176</span>
                </div>
                <h3 id="desc">{props.data.currently.summary}</h3>
            </div>
        </div>
    );

}

export default current;