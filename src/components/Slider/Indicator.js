import React from 'react';
import InidicatorBar from './IndicatorBar';

const Indicator = () => {
    return (
        <div className='indicator'>
            <InidicatorBar slideNo={0}/>
            <InidicatorBar slideNo={1}/>
            <InidicatorBar slideNo={2}/>
            <InidicatorBar slideNo={3}/>
            <InidicatorBar slideNo={4}/>
        </div>
    );
}

export default Indicator;