import React, { Component } from 'react';
// import theme from '../../index.scss';
import './DayCard.scss';

class DayCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
                description: '',
                temperature: undefined,
                icon: '',
                day: ''
        };
    }

    componentWillReceiveProps(newProps) {
        newProps.weather ? this.setState({
            description: newProps.weather.description,
            temperature: newProps.weather.temperature,
            icon: newProps.weather.icon,
            day: this.getDay(newProps.weather.date)
        })
        : this.setState({...this.state});
    }

    getDay(ms) {
        const day = new Date(ms * 1000).getDay();
        switch(day) {
            case 0:
                return 'Sunday';
                //eslint-disable-next-line
                break;
            case 1:
                return 'Monday';
                //eslint-disable-next-line
                break;
            case 2:
                return 'Tuesday';
                //eslint-disable-next-line
                break;
            case 3:
                return 'Wednesday';
                //eslint-disable-next-line
                break;
            case 4:
                return 'Thursday';
                //eslint-disable-next-line
                break;
            case 5:
                return 'Friday';
                //eslint-disable-next-line
                break;
            case 6:
                return 'Saturday';
                //eslint-disable-next-line
                break;
            default:
                console.log('error loading date');
        }
    }

    render() {
        const cardStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        };

        const tempStyle = {
            fontSize: '1.5em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        };

        return this.state.temperature ? (
            <div style={cardStyle}>
                <h3>{this.state.day}</h3>
                    <div style={tempStyle}>
                        <p style={{margin:'5%'}}>{this.state.temperature}&deg;C</p>
                    </div>
                    <img src={`https://openweathermap.org/img/w/${this.state.icon}.png`} alt={this.state.description}/>
                    <p className='capitalise'>{this.state.description}</p>
            </div>) : (<h4>Please search for location</h4>);
    }
}

export default DayCard;