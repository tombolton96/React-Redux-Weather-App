import React, { Component } from 'react';

class DayCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: undefined,
            longitude: undefined
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            latitude: newProps.currentLocation.latitude,
            longitude: newProps.currentLocation.longitude
        });
    }

    render() {
        return(
            <div>
                Latitude: {this.state.latitude}<br/>
                Longitude: {this.state.longitude}
            </div>
        );
    }
}

export default DayCard;