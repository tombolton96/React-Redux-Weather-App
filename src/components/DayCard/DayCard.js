import React, { Component } from 'react';
// import theme from '../../index.scss';
import './DayCard.scss';

class DayCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: {
                description: '',
                temperature: undefined,
                icon: ''
            },
            day: ''
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            weather: {
                description: newProps.weather.description,
                temperature: newProps.weather.temperature,
                icon: newProps.weather.icon
            },
            day: this.getDay(newProps.date)
        });
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

    render() {
        return(
            <div className='container'>
                <h3>{this.state.day}</h3>
                <div className="temp">
                    <p>{this.state.weather.temperature}&deg;C</p>
                </div>
                <img src={`https://openweathermap.org/img/w/${this.state.weather.icon}.png`} alt={this.state.weather.description}/>
                <p className='capitalise'>{this.state.weather.description}</p>
            </div>
        );
    }
}

export default DayCard;