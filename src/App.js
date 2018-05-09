import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from './Actions/weatherActions';
// import * as weatherActions from './Actions/weatherActions';
import './index.scss';
import './App.scss';
import DayCard from './components/DayCard/DayCard';
import SearchBar from './components/SearchBar/SearchBar';
import Slider from './components/Carousel/Slider';
import Location from './components/Location/Location';

class App extends Component {
  constructor() {
    super();

    // this.getPosition = this.getPosition.bind(this);
    this.setBackground = this.setBackground.bind(this);
    this.getSearchData = this.getSearchData.bind(this);

    this.state = {
      location: {
        latitude: undefined,
        longitude: undefined,
        city: '',
        country: ''
      },
      weather: {
        id: 0,
        description: '',
        temperature: 0,
        icon: ''
      },
      date: ''
    };
  }

  componentWillMount() {
    // this.getPosition();
    this.props.weatherActions.fetchWeather();
    // this.props.weatherActions.fetchWeather(this.state.latitude, this.state.longitude);
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     location: newProps.location,
  //     weather: newProps.weather
  //   });
  // }

  componentDidUpdate() {
    this.setBackground(this.state.weather.id);
  }

  // getPosition(position) {
  //   // let lat = position.coords.latitude,
  //   //     lon = position.coords.longitude;

  //   // this.setState({
  //   //   location: {
  //   //     latitude: lat,
  //   //     longitude: lon
  //   //   }
  //   // });

  //   let url = this.createWeatherUrl(null, null, process.env.REACT_APP_API_KEY);

  //   fetch(url)
  //     .then(results => {
  //       if (results.status !== 200) {
  //         console.log(`There was a problem. Status code: ${results.status}`)
  //       } 
  //        return results.json();
  //     }).then(data => {

  //       this.setState({
  //         location: {
  //           ...this.state.location,
  //           city: data.name,
  //           country: data.sys.country
  //         },
  //         weather: {
  //           id: data.weather[0].id,
  //           description: data.weather[0].description,
  //           temperature: Math.round(data.main.temp * 10)/10,
  //           icon: data.weather[0].icon
  //         },
  //         date: data.dt
  //       });
  //     }).catch(err => console.log(err));
  // }

  createWeatherUrl(latitude, longitude, key) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`;
  }

  getSearchData(city, country) {

    function createSearchUrl(city, country, key) {
      return country ? `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${key}` 
        : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`;
    }

    let url = createSearchUrl(city, country, process.env.REACT_APP_API_KEY);

    fetch(url)
      .then(results => {
        if (results.status !== 200) {
          console.log(`There was a problem. Status code: ${results.status}`)
        } 
         return results.json();
      }).then(data => {

        this.setState({
          location: {
            ...this.state.location,
            city: data.name,
            country: data.sys.country
          },
          weather: {
            id: data.weather[0].id,
            description: data.weather[0].description,
            temperature: Math.round(data.main.temp * 10)/10,
            icon: data.weather[0].icon
          },
          date: data.dt
        });
      }).catch(err => console.log(err));
  }

  createForecastUrl(latitude, longitude, key) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`;
  }

  setBackground(id) {

    let first = String(id).charAt(0);

    switch(true) {
      case first === '2':
        document.body.className = 'storm';
        break;
      case first === '3' || first === '5':
        document.body.className = 'rain';
        break;
      case first === '6':
        document.body.className = 'snow';
        break;
      case first=== '7':
        document.body.className = 'mist';
        break;
      case id === 800:
        document.body.className = 'clear';
        break;
      case id === 801:
        document.body.className = 'few';
        break;
      case id === 802:
        document.body.className = 'scattered';
        break;
      case id === 803 || id === 804:
        document.body.className = 'broken';
        break;
      default:
        document.body.className = 'dark';
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
    return(
      <div className="App">
        <SearchBar 
          className="searchbar" 
          parentCallback={this.getSearchData}/>

          <h2>{this.state.location.city} <span>{this.state.location.country}</span></h2>
        
        {/* <Slider>
           <DayCard
            weather={this.state.weather} 
            date={this.state.date}/>

          <DayCard
            weather={{
              description: 'weather',
              temperature: 2,
              icon: '01d'
              }}
              date={10000}/>
          
          <DayCard
            weather={{
              description: 'weather',
              temperature: 3,
              icon: '01d'
              }}
              date={10000}/>

          <DayCard
            weather={{
              description: 'weather',
              temperature: 4,
              icon: '01d'
              }}
              date={10000}/>

          <DayCard
            weather={{
              description: 'weather',
              temperature: 5,
              icon: '01d'
              }}
              date={10000}/>
        </Slider> */}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location,
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch)
    // weatherActions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);