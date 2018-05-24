import React from 'react';

const Indicator = props => {
    const selected = {

    };
    const notSelected = {
        height: '1px',
        backgroundColor: 'rbgba(190,190,190,0.3)'
    };

    return(
        <div>
            <div style={notSelected}>1</div>
            <div style={notSelected}>2</div>
            <div style={notSelected}>3</div>
            <div style={notSelected}>4</div>
            <div style={notSelected}>5</div>
        </div>
    );
}

export default Indicator;