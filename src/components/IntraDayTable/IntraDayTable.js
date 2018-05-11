import React, {Component} from 'react';
import './IntraDayTable.scss';

class IntraDayTable extends Component {
    constructor() {
        super();

        this.state = {
            today: [],
            secondDay: [],
            thirdDay: [],
            fourthDay: [],
            fifthDay: []
        };
    }

    componentWillReceiveProps(newProps) {
        const dayData = this.getDayData(newProps.data); 
        this.setState({
            today: dayData[0],
            secondDay: dayData[1],
            thirdDay: dayData[2],
            fourthDay: dayData[3],
            fifthDay: dayData[4]
        });
    }

    getDayData(intraDayData) {
        const today = new Date().getDay();
        const days = [];

        for(let i=0; i<5; i++) {
            days[i] = intraDayData.filter(item => {
                return new Date(item.date * 1000).getDay() === (7 + today + i)%7;
            });
        }
        return days;
    }

    render() {
        return(
            <div className="tablewrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Temp.</th>
                            <th>Weather</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                            <td>12:00</td>
                            <td>12&deg;C</td>
                            <td>Clear Sky</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IntraDayTable;