import {combineReducers} from 'redux';
import location from './locationReducer';
import weather from './weatherReducer';

const rootRedcuer = combineReducers({
    location,
    weather
});

export default rootRedcuer;