import initialState from './initialState';
import { RECEIVE_FORECAST } from '../Actions/weatherActionTypes';

export default function forecast(state = initialState.forecast, action) {
    let newState;
    switch(action.type) {
        case RECEIVE_FORECAST:
            newState = action.forecast;
            return newState;
        default:
            return state;
    }
}
