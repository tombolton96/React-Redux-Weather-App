import React, {Component} from 'react';
import './IntraDayTable.scss';

class IntraDayTable extends Component {
    constructor(props) {
        super(props);

        this.setUnits = this.setUnits.bind(this);
        this.getRows = this.getRows.bind(this);

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

    setUnits(tempC, tempF) {
        switch(this.state.units) {
            case 'fahrenheit':
                return(<td>{tempF}&deg;F</td>);
            case 'celsius':
            default:
                return(<td>{tempC}&deg;C</td>);
        }
    }

    getRows(intraDayArray) {
        
    }

    getTimes(intraDayArray) {
        return intraDayArray.map((obj) => {
            const date = new Date(obj.date*1000);
            const hr = `0${date.getHours()}`;
            const min = `0${date.getMinutes()}`;

            return (
                <td style={{fontWeight:'bold'}}>{hr.slice(-2)}:{min.slice(-2)}</td>
            );
        });
    }

    getTemps(intraDayArray) {
        return intraDayArray.map((obj) => this.setUnits(obj.tempC, obj.tempF));
    }

    getDescriptions(intraDayArray) {
        return intraDayArray.map((obj) => {
            return (
                <td className='capitalise'>{obj.description}</td>
            );
        });
    }

    getIcons(intraDayArray) {
        return intraDayArray.map((obj) => {
            return (
                <td><img width='30px' height='30px' src={`https://openweathermap.org/img/w/${obj.icon}.png`} alt={obj.description}/></td> 
            );
        });
    }

    getHumidity(intraDayArray) {
        return intraDayArray.map((obj) => {
            return (
                <td><i style={{color:'navy'}} className='fa fa-tint'><span style={{fontFamily:'raleway', color:'#fff'}}>{obj.humidity}%</span></i></td>
            );
        });
    }

    getWind(intraDayArray) {
        return intraDayArray.map((obj) => {
            const speed = obj.wind.speed;
            const deg = <i style={{transform:`rotate(${parseInt(obj.wind.deg, 0)}deg)`}} className='fa fa-arrow-circle-up'></i>;

            return (
                <td>
                    {deg} {speed}
                </td>
            );
        });
    }

    render() {
        const { data } = this.state;

        return data.length ? (
            <div className='outer'>
                <div className='wrapper'>
                    <table style={{borderCollapse:'collapse', width: '100%'}}>
                        <tbody>
                            {/* {this.getRows(data)} */}
                            <tr>{this.getTimes(data)}</tr>
                            <tr>{this.getIcons(data)}</tr>
                            <tr>{this.getTemps(data)}</tr>
                            <tr>{this.getHumidity(data)}</tr>
                            <tr>{this.getWind(data)}</tr>
                            {/* <tr>{this.getDescriptions(data)}</tr> */}
                        </tbody>
                    </table>
                    {this.props.children}
                </div>
            </div>
        ) : <div>There is currently no data to display for this day</div>;
    }
}

export default IntraDayTable;