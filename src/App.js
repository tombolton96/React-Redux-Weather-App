import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from './Actions/weatherActions';
import './index.scss';
import './App.scss';
import DayCard from './components/DayCard/DayCard';
import IntraDayTable from './components/IntraDayTable/IntraDayTable';
import SearchBar from './components/SearchBar/SearchBar';
import Slider from './components/Slider/Slider';
import Searching from './components/Searching/Searching';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      forecast: [],
      isLoading: true,
      searching: false
    };
  }

  componentWillMount() {
    this.props.weatherActions.fetchWeather();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      weather: newProps.weather,
      forecast: newProps.forecast,
      isLoading: false,
      searching: newProps.searching
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

  getDayData(intraDayData) {
    const today = new Date().getDay();
    const days = [];

    for(let i=0; i<5; i++) {
        days[i] = intraDayData.filter(item => {
            return new Date(item.date * 1000).getDay() === (7 + today + i)%7;
        });
    }
    return days;
  }

  getDays(forecasts) {
    const midday = '12:00:00';
    const today = new Date().getDay();

    return forecasts.filter(forecast => {
      const day = new Date(forecast.date * 1000).getDay();
      return forecast.datestring.includes(midday) && !(day === today);
    });
  }

  getSunTimes(time) {
    return new Date(time * 1000).toLocaleTimeString();  
  }

  render() {
    const { weather, forecast, isLoading, searching } = this.state,
          { weatherActions } = this.props;
    const intraDay = this.getDayData(forecast);

    const appStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      margin: '0'
    };

    const headerStyle = {
      textAlign:'center',
      fontSize:'2em'
    };
    
    return isLoading ? (<div className='loading'>Loading...</div>) : (
      <div style={appStyle}>
        <div style={searching ? {display:'block'} : {display:'none'}} className='searchingContainer'><Searching/></div>
        
        <div style={searching ? {filter: 'blur(2px)'} : {}}>
          <SearchBar parentCallback={weatherActions.search}/>
          
          <h2 style={headerStyle}>{weather.city} <span style={{fontSize:'40%'}}>{weather.country}</span></h2>
        
          <Slider arrows={true}>
            <DayCard weather={weather} />
            <DayCard weather={this.getDays(forecast)[0]} />
            <DayCard weather={this.getDays(forecast)[1]} />
            <DayCard weather={this.getDays(forecast)[2]} />
            <DayCard weather={this.getDays(forecast)[3]} />
          </Slider>

          <Slider arrows={false}>
            <IntraDayTable data={intraDay[0]}>
              <div style={{textAlign:'center'}}>
                <p><span style={{fontWeight:'bold'}}>Sunrise</span> {this.getSunTimes(weather.sunrise)}</p>
                <p><span style={{fontWeight:'bold'}}>Sunset</span> {this.getSunTimes(weather.sunset)}</p>
              </div>
            </IntraDayTable>
            <IntraDayTable data={intraDay[1]}/>
            <IntraDayTable data={intraDay[2]}/>
            <IntraDayTable data={intraDay[3]}/>
            <IntraDayTable data={intraDay[4]}/>              
          </Slider>
        </div>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    forecast: state.forecast,
    searching: state.searching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);