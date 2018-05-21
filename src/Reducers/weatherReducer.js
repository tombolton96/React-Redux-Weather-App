import initialState from './initialState';
import { FETCH_WEATHER, RECEIVE_WEATHER, SEARCH_WEATHER } from '../Actions/weatherActionTypes';

export default function weather(state = initialState.weather, action) {
    let newState;
    switch(action.type) {
        case FETCH_WEATHER:
            return action;
        case RECEIVE_WEATHER:
            newState = action.weather;
            return newState;
        case SEARCH_WEATHER:
            return action;
        default:
            return state;
    }
}
