import React, { Component } from 'react';
import { connect } from 'react-redux';

class Indicator extends Component {
    render() {
        const { sliderCount } = this.props;

        const style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '20px 10px'
        };
        const selected = {
            height: '1px',
            width: '100%',
            border: '1px solid rgba(255,255,255,1)',
            backgroundColor: 'rgba(190,190,190,1)'
        };
        const notSelected = {
            height: '1px',
            width: '100%',
            border: '1px solid rgba(190,190,190,0.3)',
            backgroundColor: 'rgba(190,190,190,0.3)'
        };

        return(
            <div style={style}>
                <div style={sliderCount === 0 ? selected : notSelected}></div>
                <div style={sliderCount === 1 ? selected : notSelected}></div>
                <div style={sliderCount === 2 ? selected : notSelected}></div>
                <div style={sliderCount === 3 ? selected : notSelected}></div>
                <div style={sliderCount === 4 ? selected : notSelected}></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sliderCount: state.sliderCount
    };
};

export default connect(mapStateToProps)(Indicator);