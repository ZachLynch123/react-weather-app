import React, { Component } from 'react';
import key from './key';
import Current from './components/Current';
import Daily from './components/Daily';
import { Container, Col, Row } from 'reactstrap';


class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      isLoaded: false,
    }
  }


  componentDidMount() {
    this.latitude = this.props.location.latitude;
    this.longitude = this.props.location.longitude;

    fetch('https://api.darksky.net/forecast/' + key + '/' + this.latitude + ',' + this.longitude, {
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
      <Container>
        <Row className="row-eq-height">
          <Col>
            <img src="https://cdn.dribbble.com/users/324739/screenshots/1931921/landscape-loop-final.gif" alt=""></img>
          </Col>
          <Col>
          <Current data={weatherData} location={this.props.location}/>
          <Row>
            <Col>
            <Daily day={weatherData.daily.data[0]} />
            </Col>
            <Col>
            <Daily day={weatherData.daily.data[1]} />
            </Col>
            <Col>
            <Daily day={weatherData.daily.data[2]} />
            </Col>
            <Col>
            <Daily day={weatherData.daily.data[3]} />
            </Col>
            <Col>
            <Daily day={weatherData.daily.data[4]} />
            </Col>
            <Col>
            <Daily day={weatherData.daily.data[5]} />
            </Col>
            <Col>
            <Daily day={weatherData.daily.data[6]} />
            </Col>
          </Row>
          </Col>
          </Row>
      </Container>
      </div>
    );}
  }
}

export default App;
