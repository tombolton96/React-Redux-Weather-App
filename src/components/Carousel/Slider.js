import React, { Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../Actions/weatherActions';
import DayCard from '../DayCard/DayCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import './slider.scss'; 

class Slider extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
        count: 0,
        weather: {},
        forecast: [],
        isLoading: true,
        current: {
            display: 'flex'
        },
        style: {
            display:'none'
        }
    };
  }

  componentWillMount() {
    this.props.weatherActions.fetchWeather();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
        ...this.state,
      weather: newProps.weather,
      forecast: this.getDays(newProps.forecast),
      isLoading: false
    });
  }  

  next() {
      this.state.count === 4
      ? this.setState({...this.state})
      : this.setState({ 
        ...this.state,  
        count: (5 + this.state.count + 1) % 5
    });
  }

  prev() {
    this.state.count === 0 
    ? this.setState({...this.state})
    : this.setState({ 
        ...this.state,
        count: this.state.count - 1
    });
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

    const {current, style} = this.state;

    return this.state.isLoading ? (<div>Loading...</div>) : (
        <div className="wrapper">
            <div style={this.state.count === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}><LeftArrow previousSlide={this.prev} /></div>
            <div className="slider"  >
                {/* {this.state.count === 1 ? this.props.children[0] : null}
                {this.state.count === 1 ? this.props.children[1] : null}
                {this.state.count === 1 ? this.props.children[2] : null}
                {this.state.count === 1 ? this.props.children[3] : null}
                {this.state.count === 1 ? this.props.children[4] : null} */}
                <div style={this.state.count === 0 ? current : style}><DayCard weather={this.state.weather} /></div>
                <div style={this.state.count === 1 ? current : style}><DayCard weather={this.state.forecast[0]} /></div>
                <div style={this.state.count === 2 ? current : style}><DayCard weather={this.state.forecast[1]} /></div>
                <div style={this.state.count === 3 ? current : style}><DayCard weather={this.state.forecast[2]} /></div>
                <div style={this.state.count === 4 ? current : style}><DayCard weather={this.state.forecast[3]} /></div>
            </div>
            <div style={this.state.count === 4 ? {visibility: 'hidden'} : {visibility: 'visible'}}><RightArrow nextSlide={this.next} /></div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Slider);