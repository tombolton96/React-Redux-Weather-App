import React, { Component } from 'react';
import './App.css';
import DayCard from './components/DayCard/DayCard';

class App extends Component {
  constructor() {
    super();

    this.getLocation = this.getLocation.bind(this);
    this.getPosition = this.getPosition.bind(this);

    this.state = {
      location: {
        latitude: undefined,
        longitude: undefined
      }
    };
  }

  // componentDidMount() {
  //   this.getLocation();
  // }

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition, this.showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  }

  getPosition(position) {
    let lat = position.coords.latitude,
        lon = position.coords.longitude;

    this.setState({
      location: {
        latitude: lat,
        longitude: lon
      }
    });
    // let url = createWeatherUrl(lat, lon);
    // console.log('url:', url);
  }

  showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getLocation}>Get Location</button>
        <DayCard currentLocation={this.state.location}/>
      </div>
    );
  }
}

export default App;