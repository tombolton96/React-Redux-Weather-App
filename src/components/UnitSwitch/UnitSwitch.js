import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as unitActions from '../../Actions/unitActions';

class UnitSwitch extends Component {
    render() {
        const { unitActions, unit } = this.props;

        const switchStyle = {
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            margin:'10px'
        };
        
        const buttonPressed = {
            border: '2px inset rgba(255,255,255, 0.5)',
            background: 'linear-gradient(to bottom right, rgba(190,190,190,0.5), rgba(190,190,190,0.3))',
            color: 'rgb(190,190,190)'
        };

        return (
            <div style={switchStyle}>
                <button 
                    style={unit === 'celsius' ? buttonPressed : {}} 
                    aria-label='celsius' 
                    onClick={unitActions.toCelsius}>&deg;C</button>

                <button 
                    style={unit === 'fahrenheit' ? buttonPressed : {}} 
                    aria-label='fahrenheit' 
                    onClick={unitActions.toFahrenheit}>&deg;F</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
};

function mapDispatchToProps(dispatch) {
    return {
        unitActions: bindActionCreators(unitActions, dispatch)        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitSwitch);