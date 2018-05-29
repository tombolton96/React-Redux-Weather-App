import React, { Component } from 'react';
import { connect } from 'react-redux';
import './indicator.scss';

class Indicator extends Component {
    render() {
        const { sliderCount } = this.props;

        return(
            <div className='indicator'>
                <div className={sliderCount === 0 ? 'selected' : 'notselected'}></div>
                <div className={sliderCount === 1 ? 'selected' : 'notselected'}></div>
                <div className={sliderCount === 2 ? 'selected' : 'notselected'}></div>
                <div className={sliderCount === 3 ? 'selected' : 'notselected'}></div>
                <div className={sliderCount === 4 ? 'selected' : 'notselected'}></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sliderCount: state.sliderCount
    };
}

export default connect(mapStateToProps)(Indicator);