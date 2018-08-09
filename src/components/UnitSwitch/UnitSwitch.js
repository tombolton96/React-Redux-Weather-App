import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './UnitSwitch.scss';
import * as unitActions from '../../Actions/unitActions';

const UnitSwitch = props => {
    const { unitActions, unit } = props;

    return (
        <div className="switchOuter">
            &deg;C
                <label className="switch">
                    <input type="checkbox"
                        checked={unitActions.celsius}
                        onClick={ () => unit === 'fahrenheit' ? unitActions.toCelsius() : unitActions.toFahrenheit() } />
                    <span className="slider round"></span>
                </label>
            &deg;F
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