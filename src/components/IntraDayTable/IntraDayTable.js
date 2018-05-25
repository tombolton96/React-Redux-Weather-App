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
        return intraDayArray.map((obj, i) => {
            const time = new Date(obj.date*1000).toLocaleTimeString();

            return(
                <tr key={i} style={{width:'100%'}}>
                    <td style={{fontWeight:'bold'}}>{time.substring(0, time.length-3)}</td>
                    {this.setUnits(obj.tempC, obj.tempF)}
                    <td className='capitalise'>{obj.description}</td>
                    <td><img width='30px' height='30px' src={`https://openweathermap.org/img/w/${obj.icon}.png`} alt={obj.description}/></td>
                </tr>
            );
        });
    }

    render() {
        const { data } = this.state;

        const wrapperStyle = {
            margin: '5%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        };

        return data.length ? (
            <div style={wrapperStyle}>
                <table style={{borderCollapse:'collapse', width: '100%'}}>
                    <tbody>
                        {this.getRows(data)}    
                    </tbody>
                </table>
                {this.props.children}
            </div>
        ) : <div>There is currently no data to display for this day</div>;
    }
}

export default IntraDayTable;