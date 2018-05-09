import {combineReducers} from 'redux';
import weather from './weatherReducer';

const rootRedcuer = combineReducers({
    weather
});

export default rootRedcuer;