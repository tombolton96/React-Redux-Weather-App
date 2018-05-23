import {combineReducers} from 'redux';
import weather from './weatherReducer';
import forecast from './forecastReducer';
import sliderCount from './sliderReducer';
import searching from './searchingReducer';
import units from './unitReducer';

const rootRedcuer = combineReducers({
    weather,
    forecast,
    sliderCount,
    searching,
    units
});

export default rootRedcuer;