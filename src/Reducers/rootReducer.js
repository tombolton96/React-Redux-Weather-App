import {combineReducers} from 'redux';
import weather from './weatherReducer';
import forecast from './forecastReducer';
import sliderCount from './sliderReducer';
import searching from './searchingReducer';

const rootRedcuer = combineReducers({
    weather,
    forecast,
    sliderCount,
    searching
});

export default rootRedcuer;