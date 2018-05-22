import React, {Component} from 'react';
import './IntraDayTable.scss';

class IntraDayTable extends Component {
    constructor() {
        super();

        this.getRows = this.getRows.bind(this);

        this.state = {
            data: []
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({data: newProps.data});
    }

    getRows(intraDayArray) {
        return intraDayArray.map((obj, i) => {
            const time = new Date(obj.date*1000).toLocaleTimeString();

            return(
                <tr key={i}>
                    <td className='time'>{time.substring(0, time.length-3)}</td>
                    <td>{obj.temperature}&deg;C</td>
                    <td className='capitalise'>{obj.description}</td>
                    <td><img src={`https://openweathermap.org/img/w/${obj.icon}.png`} alt={obj.description}/></td>
                </tr>
            );
        });
    }

    render() {
        const { data } = this.state;

        return data.length ? (
            <div className="tablewrapper">
                <table>
                    <tbody>
                        {this.getRows(data)}    
                    </tbody>
                </table>
            </div>
        ) : <div>There is currently no data to display for this day</div>;
    }
}

export default IntraDayTable;