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
                return <td key={`${i}.${tempF}`}>{tempF}&deg;F</td>;
            case 'celsius':
            default:
                return <td key={`${i}.${tempC}`}>{tempC}&deg;C</td>;
        }
    }

    getTimes(intraDayArray) {
        return intraDayArray.map((obj) => {
            const date = new Date(obj.date*1000);
            const hr = `0${date.getHours()}`;
            const min = `0${date.getMinutes()}`;

            return (
                <td key={obj.date} style={{fontWeight:'bold'}}>{hr.slice(-2)}:{min.slice(-2)}</td>
            );
        });
    }

    getTemps(intraDayArray) {
        return intraDayArray.map((obj, index) => this.setUnits(obj.tempC, obj.tempF, index));
    }

    getIcons(intraDayArray) {
        return intraDayArray.map((obj, index) => {
            return (
                <td key={`${index}.${obj.tempC}`}>
                    <img 
                        width='50px' 
                        height='50px' 
                        src={`https://openweathermap.org/img/w/${obj.icon}.png`} 
                        alt={obj.description}
                    />
                </td> 
            );
        });
    }

    getHumidity(intraDayArray) {
        return intraDayArray.map((obj, index) => {
            return (
                <td key={`${index}.${obj.humidity}`}>
                    <i style={{color:'navy'}} className='fa fa-tint'>
                        <span style={{fontFamily:'raleway', color:'#fff'}}>{obj.humidity}%</span>
                    </i>
                </td>
            );
        });
    }

    getWind(intraDayArray) {
        return intraDayArray.map((obj, index) => {
            const speed = obj.wind.speed;
            const deg = <i style={{transform:`rotate(${parseInt(obj.wind.deg, 0)}deg)`}} className='fa fa-arrow-circle-down'></i>;

            return (
                <td key={`${index}.${obj.wind.deg}`}>
                    {deg} {speed}
                </td>
            );
        });
    }

    render() {
        const { data } = this.state;

        return data.length ? (
            <div className='wrapper'>
                <table style={{borderCollapse:'collapse', width: '100%'}}>
                    <tbody>
                        <tr>{this.getTimes(data)}</tr>
                        <tr>{this.getIcons(data)}</tr>
                        <tr>{this.getTemps(data)}</tr>
                        <tr>{this.getHumidity(data)}</tr>
                        <tr>{this.getWind(data)}</tr>
                    </tbody>
                </table>
                {this.props.children}
            </div>
        ) : <div>There is currently no data to display for this day</div>;
    }
}

export default IntraDayTable;