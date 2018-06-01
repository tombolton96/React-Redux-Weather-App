import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//actions
import * as weatherActions from './Actions/weatherActions';
//stylesheets
import './index.scss';
import './App.scss';
//components
import DayCard from './components/DayCard/DayCard';
import IntraDayTable from './components/IntraDayTable/IntraDayTable';
import SearchBar from './components/SearchBar/SearchBar';
import Slider from './components/Slider/Slider';
import Searching from './components/Searching/Searching';
import UnitSwitch from './components/UnitSwitch/UnitSwitch';
import Indicator from './components/Slider/Indicator';

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

  componentWillMount = () => this.props.weatherActions.fetchWeather();

  componentWillReceiveProps(newProps) {
    this.setState({
      weather: newProps.weather,
      forecast: newProps.forecast,
      isLoading: false,
      searching: newProps.searching
    });
  }

  componentDidUpdate = () => this.setBackground(this.state.weather.id);

  setBackground(id) {
    let first = String(id).charAt(0);
    switch(true) {
      case first === '2':
        document.body.className = 'storm';
        break;
      case first === '3':
      case first === '5':
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

  getSunTimes = time => {
    const hr =`0${new Date(time * 1000).getHours()}`;
    const min = `0${new Date(time * 1000).getMinutes()}`;

    return `${hr.slice(-2)}:${min.slice(-2)}`;
  };

  render() {
    const { weather, forecast, isLoading, searching } = this.state;

    const { weatherActions, units } = this.props;

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

    return isLoading ? (<div className='loading'>Loading...</div>)
      : (<div style={appStyle}>

          <div style={searching ? {display:'block'} : {display:'none'}} className='searchingContainer'>
            <Searching/>
          </div>

          <div style={searching ? {filter: 'blur(2px)'} : {}}>

            <SearchBar searchAction={weatherActions.search}/>
            <UnitSwitch unit={units}/>

            <h2 style={headerStyle}>
              {weather.city} <span style={{fontSize:'40%'}}>{weather.country}</span>
            </h2>

            <Indicator />

            <Slider arrows={true}>
              <DayCard weather={weather} unit={units} />
              <DayCard weather={this.getDays(forecast)[0]} unit={units} />
              <DayCard weather={this.getDays(forecast)[1]} unit={units} />
              <DayCard weather={this.getDays(forecast)[2]} unit={units} />
              <DayCard weather={this.getDays(forecast)[3]} unit={units} />
            </Slider>

            <Slider arrows={false}>
              <IntraDayTable data={intraDay[0]} unit={units}>
                <div style={{textAlign:'center'}}>
                  <p><span style={{fontWeight:'bold'}}>Sunrise</span> {this.getSunTimes(weather.sunrise)}</p>
                  <p><span style={{fontWeight:'bold'}}>Sunset</span> {this.getSunTimes(weather.sunset)}</p>
                </div>
              </IntraDayTable>
              <IntraDayTable data={intraDay[1]} unit={units}/>
              <IntraDayTable data={intraDay[2]} unit={units}/>
              <IntraDayTable data={intraDay[3]} unit={units}/>
              <IntraDayTable data={intraDay[4]} unit={units}/>
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
    searching: state.searching,
    units: state.units
  };
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
