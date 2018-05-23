import React from 'react';

const UnitSwitch = (props) => {

    const { changeUnits, unit } = props;

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

    return(
        <div style={switchStyle}>
            <button 
                style={unit === 'celsius' ? buttonPressed : {}} 
                aria-label='celsius' 
                onClick={changeUnits.toCelsius}>&deg;C</button>

            <button 
                style={unit === 'fahrenheit' ? buttonPressed : {}} 
                aria-label='fahrenheit' 
                onClick={changeUnits.toFahrenheit}>&deg;F</button>
        </div>
    );
}

export default UnitSwitch;