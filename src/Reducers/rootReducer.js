import {combineReducers} from 'redux';
import weather from './weatherReducer';
import location from './locationReducer';
import forecast from './forecastReducer';
import sliderCount from './sliderReducer';
import searching from './searchingReducer';
import units from './unitReducer';

const rootRedcuer = combineReducers({
    weather,
    location,
    forecast,
    sliderCount,
    searching,
    units
});

export default rootRedcuer;