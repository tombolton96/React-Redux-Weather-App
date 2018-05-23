import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UnitSwitch extends Component {
    // constructor() {
    //     super();

    // }

    switchStyle = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin:'10px'
    };

    buttonStyle = {
        margin:'0 5px',
        textAlign: 'center',
        border: '1px solid #fff'
    };

    render() {
        return(
            <div style={this.switchStyle}>
                <div onClick={this.props.changeUnits.toCelsius} style={this.buttonStyle}>&deg;C</div>
                <div onClick={this.props.changeUnits.toFahrenheit} style={this.buttonStyle}>&deg;F</div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    
};

export default UnitSwitch;