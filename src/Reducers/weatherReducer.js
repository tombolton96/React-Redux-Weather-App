import initialState from './initialState';
import { FETCH_WEATHER, RECEIVE_WEATHER, SEARCH_WEATHER } from '../Actions/weatherActionTypes';

export default function weather(state = initialState.weather, action) {
    let newState;
    switch(action.type) {
        case FETCH_WEATHER:
            console.log('fetch weather action');
            return action;
        case RECEIVE_WEATHER:
            console.log('receive weather action');
            newState = action.weather;
            return newState;
        case SEARCH_WEATHER:
            console.log('search weather action');
            return action;
        default:
            return state;
    }
}
