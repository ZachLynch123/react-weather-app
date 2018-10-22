import React, { Component } from 'react';
import key from './key';
import Current from './Current';
import Daily from './Daily';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      isLoaded: false,
    }
  }

   

componentDidMount() {
  fetch('https://api.darksky.net/forecast/' + key + '/36.0069352,-115.1530633', {
    mode: 'cors',
    headers: {"Access-Control-Allow-Origin": true}
  })
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded: true,
      weatherData: json,
    })
  });

}

  render() {

    let { isLoaded, weatherData } = this.state;

    if (!isLoaded) {
      return <div>Loading..</div>
    } else {
    return (
      <div className="App">
        <p>{weatherData.timezone}</p>
        <Current data={weatherData}/>
        {/* try a div inside a li to display 7 day. passing daily weather data in a for loop where i  is the day? */}
        <div className="daily-container">
          
        </div>
      </div>
    );
  }
}
}

export default App;
