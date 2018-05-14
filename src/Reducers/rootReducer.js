import {combineReducers} from 'redux';
import weather from './weatherReducer';
import forecast from './forecastReducer';
import sliderCount from './sliderReducer';

const rootRedcuer = combineReducers({
    weather,
    forecast,
    sliderCount
});

export default rootRedcuer;