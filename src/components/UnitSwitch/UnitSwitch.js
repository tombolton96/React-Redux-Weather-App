import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './UnitSwitch.scss';
import * as unitActions from '../../Actions/unitActions';

const UnitSwitch = props => {
    const { unitActions, unit } = props;

    return (
        <div className='switch'>
            <div className='switchborder'>
                <button 
                    className={unit === 'celsius' ? 'buttonPressed' : ''} 
                    aria-label='celsius' 
                    onClick={unitActions.toCelsius}>&deg;C</button>

                <button 
                    className={unit === 'fahrenheit' ? 'buttonPressed' : ''} 
                    aria-label='fahrenheit' 
                    onClick={unitActions.toFahrenheit}>&deg;F</button>
            </div>
        </div>
    );
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