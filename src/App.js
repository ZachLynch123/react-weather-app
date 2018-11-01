import React, { Component } from 'react';
import key from './key';
import Current from './components/Current';
import Daily from './components/Daily';
import Test from './components/test';


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
      <div className="container">
        {<Current data={weatherData}/>
        /* try a div inside a li to display 7 day. passing daily weather data in a for loop where i  is the day? */}
        <div className="daily-container">
            <Daily day={weatherData.daily.data[0]} />
            <Daily day={weatherData.daily.data[1]} />
            <Daily day={weatherData.daily.data[2]} />
            <Daily day={weatherData.daily.data[3]} />
            <Daily day={weatherData.daily.data[4]} />
            <Daily day={weatherData.daily.data[5]} />
            <Daily day={weatherData.daily.data[6]} />
            }
            </div>
            <Test></Test>
      </div>
      </div>
    );}
  }
}

export default App;
