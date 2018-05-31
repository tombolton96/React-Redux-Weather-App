import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './UnitSwitch.scss';
import * as unitActions from '../../Actions/unitActions';

class UnitSwitch extends Component {
    render() {
        const { unitActions, unit } = this.props;

        return (
            <div className='switch'>
                <button 
                    className={unit === 'celsius' ? 'buttonPressed' : ''} 
                    aria-label='celsius' 
                    onClick={unitActions.toCelsius}>&deg;C</button>

                <button 
                    className={unit === 'fahrenheit' ? 'buttonPressed' : ''} 
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