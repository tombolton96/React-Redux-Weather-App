import React, {Component} from 'react';
import './IntraDayTable.scss';

class IntraDayTable extends Component {
    constructor(props) {
        super(props);

        this.setUnits = this.setUnits.bind(this);

        this.state = {
            data: [],
            units: props.unit
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            data: newProps.data,
            units: newProps.unit
        });
    }

    setUnits(tempC, tempF, i) {
        switch(this.state.units) {
            case 'fahrenheit':
                return <div id={`temp_${i}`} key={`${i}.${tempF}`}>{tempF}&deg;F</div>;
            case 'celsius':
            default:
                return <div id={`temp_${i}`} key={`${i}.${tempC}`}>{tempC}&deg;C</div>;
        }
    }

    getTimes(intraDayArray) {
        return intraDayArray.map((obj, i) => {
            const date = new Date(obj.date*1000);
            const hr = `0${date.getHours()}`;
            const min = `0${date.getMinutes()}`;

            return (
                <div id={`time_${i}`} key={obj.date} style={{fontWeight:'bold'}}>{hr.slice(-2)}:{min.slice(-2)}</div>
            );
        });
    }

    getTemps(intraDayArray) {
        return intraDayArray.map((obj, i) => this.setUnits(obj.tempC, obj.tempF, i));
    }

    getIcons(intraDayArray) {
        return intraDayArray.map((obj, i) => {
            return (
                <div id={`icon_${i}`} key={`${i}.${obj.tempC}`}>
                    <img 
                        width='50px' 
                        height='50px' 
                        src={`https://openweathermap.org/img/w/${obj.icon}.png`} 
                        alt={obj.description}
                    />
                </div> 
            );
        });
    }

    getHumidity(intraDayArray) {
        return intraDayArray.map((obj, i) => {
            return (
                <div id={`hum_${i}`} key={`${i}.${obj.humidity}`}>
                    {/* <i style={{color:'navy'}} className='fa fa-tint'>
                        <span style={{fontFamily:'raleway', color:'#fff'}}>{obj.humidity}%</span>
                    </i> */}
                    <span style={{fontFamily:'raleway', color:'#fff'}}>{obj.humidity}% 
                        <span style={{color:'#000080', fontWeight:'bold'}}> Humidity</span>
                    </span>
                </div>
            );
        });
    }

    getWind(intraDayArray) {
        return intraDayArray.map((obj, i) => {
            const speed = obj.wind.speed;
            const deg = <i style={{transform:`rotate(${parseInt(obj.wind.deg, 0)}deg)`}} className='fa fa-arrow-circle-down'></i>;

            return (
                <div id={`wind_${i}`} key={`${i}.${obj.wind.deg}`}>
                    {deg} {speed} <span style={{fontSize:'0.6em'}}>m/s</span>
                </div>
            );
        });
    }

    render() {
        const { data } = this.state;

        return data.length ? (
            <div className='wrapper'>
                        {this.getTimes(data)}
                        {this.getIcons(data)}
                        {this.getTemps(data)}
                        {this.getHumidity(data)}
                        {this.getWind(data)}
                {this.props.children}
            </div>
        ) : <div>There is currently no data to display for this day</div>;
    }
}

export default IntraDayTable;