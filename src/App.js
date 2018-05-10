import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from './Actions/weatherActions';
import './index.scss';
import './App.scss';
import DayCard from './components/DayCard/DayCard';
import SearchBar from './components/SearchBar/SearchBar';
import Slider from './components/Carousel/Slider';

class App extends Component {
  constructor() {
    super();

    this.setBackground = this.setBackground.bind(this);

    this.state = {
      weather: {},
      forecast: [],
      isLoading: true
    };
  }

  componentWillMount() {
    this.props.weatherActions.fetchWeather();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      weather: newProps.weather,
      forecast: this.getDays(newProps.forecast),
      isLoading: false
    });
  }

  componentDidUpdate() {
    this.setBackground(this.state.weather.id);
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

  getDays(forecasts) {
    const midday = '12:00:00';
    const today = new Date().getDay();

    return forecasts.filter(forecast => {
      const day = new Date(forecast.date * 1000).getDay();
      return forecast.datestring.includes(midday) && !(day === today);
    });
  }

  render() {
    return this.state.isLoading? (<div>Loading...</div>) : (
      <div className="App">
        <SearchBar 
          className="searchbar" 
          parentCallback={this.props.weatherActions.search}/>

          <h2>{this.state.weather.city} <span>{this.state.weather.country}</span></h2>
        
          {/* <Slider> */}
            <DayCard weather={this.state.weather} />
            <DayCard weather={this.state.forecast[0]} />
            <DayCard weather={this.state.forecast[1]} />
            <DayCard weather={this.state.forecast[2]} />
            <DayCard weather={this.state.forecast[3]} />
          {/* </Slider> */}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    forecast: state.forecast
  };
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);