import {combineReducers} from 'redux';
import location from './locationReducer';

const rootRedcuer = combineReducers({
    location
});

export default rootRedcuer;