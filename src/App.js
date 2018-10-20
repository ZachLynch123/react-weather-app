import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      isLoaded: false,
    }
  }


componentDidMount() {
  fetch('https://api.darksky.net/forecast/2cd94b53ee1806c983d10d877b5c94bd/37.8267,-122.4233', {
    mode: 'cors',
    headers: {"Access-Control-Allow-Origin": true}
  })
  .then(res => res.json())
  .then(json => {
    console.log(json);
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
        <p>timezone is {weatherData.timezone}</p>
      </div>
    );
  }
}
}

export default App;
