import React, { Component } from 'react';
import nighttheme from '../../nightTheme.scss';
import './DayCard.scss';

class DayCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: {
                city: '',
                country: ''
            },
            weather: {
                description: props.weather.description,
                temperature: props.weather.temperature,
                minTemp: props.weather.minTemp,
                maxTemp: props.weather.maxTemp,
                icon: props.weather.icon
            },
            date: this.getDate(props.date),
            day: this.getDay(props.date)
        };
    }

    getDate(ms) {
        return new Date(ms * 1000).toLocaleDateString();
      }

    getDay(ms) {
        const day = new Date(ms * 1000).getDay();

        switch(day) {
            case 0:
                return 'Sunday';
                break;
            case 1:
                return 'Monday';
                break;
            case 2:
                return 'Tuesday';
                break;
            case 3:
                return 'Wednesday';
                break;
            case 4:
                return 'Thursday';
                break;
            case 5:
                return 'Friday';
                break;
            case 6:
                return 'Saturday';
                break;
            default:
                console.log('error loading date');
        }
    }

    // componentWillReceiveProps(newProps) {
    //     this.setState({
    //         // location: {
    //         //     city: newProps.currentLocation.city,
    //         //     country: newProps.currentLocation.country
    //         // },
    //         weather: {
    //             description: newProps.weather.description,
    //             temperature: newProps.weather.temperature
    //         }
    //     });
    // }

    render() {
        return(
            <div className="container">
                <h3>{this.state.day}</h3>
                {/* <p>{this.state.date}</p> */}
                <div className="temp">
                    <p className="minmax">{this.state.weather.maxTemp} </p> 
                    <p>{this.state.weather.temperature}&deg;C</p>
                    <p className="minmax"> {this.state.weather.minTemp}</p>
                </div>
                <img src={`https://openweathermap.org/img/w/${this.state.weather.icon}.png`} alt={this.state.weather.description}/>
                <p className="capitalise">{this.state.weather.description}</p>
            </div>
        );
    }
}

export default DayCard;