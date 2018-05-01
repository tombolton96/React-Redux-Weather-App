import React, { Component } from 'react';
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
                icon: props.weather.icon
            }
        };
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
                <p>{this.state.weather.temperature} &deg;C</p>
                <img src={`http://openweathermap.org/img/w/${this.state.weather.icon}.png`} alt={this.state.weather.description}/>
                <p>{this.state.weather.description}</p>
            </div>
        );
    }
}

export default DayCard;