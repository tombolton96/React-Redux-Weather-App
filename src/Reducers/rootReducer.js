import {combineReducers} from 'redux';
import weather from './weatherReducer';
import forecast from './forecastReducer';

const rootRedcuer = combineReducers({
    weather,
    forecast
});

export default rootRedcuer;