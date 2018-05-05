import React, { Component } from 'react';
import './index.scss';
import './App.scss';
import DayCard from './components/DayCard/DayCard';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();

    this.getLocation = this.getLocation.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.setBackground = this.setBackground.bind(this);

    this.state = {
      location: {
        latitude: undefined,
        longitude: undefined,
        city: '',
        country: ''
      },
      weather: {
        description: '',
        temperature: 0,
        icon: ''
      },
      date: '',
      isLoading: true
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  componentDidUpdate() {
    this.setBackground(this.state.weather.description);
  }

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

    let url = this.createWeatherUrl(lat, lon, process.env.REACT_APP_API_KEY);

    fetch(url)
      .then(results => {
        if (results.status !== 200) {
          console.log(`There was a problem. Status code: ${results.status}`)
        } 
         return results.json();
      }).then(data => {
        console.log(data);

        this.setState({
          location: {
            ...this.state.location,
            city: data.name,
            country: data.sys.country
          },
          weather: {
            description: data.weather[0].description,
            temperature: data.main.temp,
            icon: data.weather[0].icon
          },
          date: data.dt,
          isLoading: false
        });
      }).catch(err => console.log(err));
  }

  createWeatherUrl(latitude, longitude, key) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`;
  }

  createForecastUrl(latitude, longitude, key) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`;
  }

  setBackground(weather) {
    switch(weather) {
      case 'clear sky':
        document.body.className = 'clear';
        break;
      case 'few clouds':
        document.body.className = 'few';
        break;
      case 'scattered clouds':
        document.body.className = 'scattered';
        break;
      case 'broken clouds':
        document.body.className = 'broken';
        break;
      case 'shower rain':
      case 'rain':
        document.body.className = 'rain';
        break;
      case 'thunderstorm':
        document.body.className = 'storm';
        break;
      case 'snow':
        document.body.className = 'snow';
        break;
      case 'mist':
        document.body.className = 'mist';
        break;
      default:
        break;
    }
  }

  showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable")
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out")
        break;
      case error.UNKNOWN_ERROR:
      default:
        console.log("An unknown error occurred")
        break;
    }
  }

  render() {
    return this.state.isLoading 
    ? (<div>Loading...</div>) 
    : (
      <div className="App">
      <SearchBar className="searchbar"/>
      <h2>{this.state.location.city}, {this.state.location.country}</h2>
        <DayCard
          weather={this.state.weather}
          date={this.state.date}/>
      </div>
    );
  }
}

export default App;