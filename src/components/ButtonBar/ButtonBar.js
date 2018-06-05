import React, { Component } from 'react';
import { connect } from 'react-redux';

class ButtonBar extends Component {
    constructor(props) {
        super(props);

        this.setHome = this.setHome.bind(this);
    }

    setHome() {
        localStorage.setItem('latitude', this.props.location.latitude);
        localStorage.setItem('longitude', this.props.location.longitude);

        alert('Set as home location');
    }

    render() {
        return (
            <div>
                <button onClick={this.props.home} aria-label="home" className="fa fa-home"></button>
                <button onClick={this.setHome}  aria-label="set_home" className="fa fa-map-pin"></button>
                <button onClick={this.props.fetch} aria-label="location" className="fa fa-compass"></button>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        location: state.location
    };
}

export default connect(mapStateToProps)(ButtonBar);