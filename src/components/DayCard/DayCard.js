import React, { Component } from 'react';
//Stylesheets
// import theme from '../../index.scss';
import './DayCard.scss';

class DayCard extends Component {
    constructor(props) {
        super(props);

        this.setUnits = this.setUnits.bind(this);

        this.state = {
                description: '',
                tempC: null,
                tempF: null,
                icon: '',
                day: '',
                units: props.unit
        };
    }

    componentWillReceiveProps(newProps) {
        newProps.weather ? this.setState({
            description: newProps.weather.description,
            tempC: newProps.weather.tempC,
            tempF: newProps.weather.tempF,
            icon: newProps.weather.icon,
            day: this.getDay(newProps.weather.date),
            units: newProps.unit
        })
        : this.setState({...this.state});
    }

    getDay(ms) {
        const day = new Date(ms * 1000).getDay();
        switch(day) {
            case 0:
                return 'Sunday';
                //eslint-disable-next-line
                // break;
            case 1:
                return 'Monday';
                //eslint-disable-next-line
                // break;
            case 2:
                return 'Tuesday';
                //eslint-disable-next-line
                // break;
            case 3:
                return 'Wednesday';
                //eslint-disable-next-line
                // break;
            case 4:
                return 'Thursday';
                //eslint-disable-next-line
                // break;
            case 5:
                return 'Friday';
                //eslint-disable-next-line
                // break;
            case 6:
                return 'Saturday';
                //eslint-disable-next-line
                // break;
            default:
                console.log('error loading date');
        }
    }

    setUnits() {
        switch(this.state.units) {
            case 'fahrenheit':
                return(<p style={{margin:'5%'}}>{this.state.tempF}&deg;F</p>);
                // break;
            case 'celsius':
            default:
                return(<p style={{margin:'5%'}}>{this.state.tempC}&deg;C</p>);
                // break;
        }
    }

    render() {
        const { day, icon, description } = this.state;

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

        return this.state.description ? (
            <div style={cardStyle}>
                <h3>{day}</h3>
                    <div style={tempStyle}>
                        {this.setUnits()}
                    </div>
                    <img src={`https://openweathermap.org/img/w/${icon}.png`} alt={description}/>
                    <p className='capitalise'>{description}</p>
            </div>) : (<h4>Please search for location</h4>);
    }
}

export default DayCard;