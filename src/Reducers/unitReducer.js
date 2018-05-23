import initialState from './initialState';
import { FAHRENHEIT, CELSIUS } from '../Actions/miscActionTypes';

export default function units(state = initialState.units, action) {
    let newState;
    switch(action.type) {
        case FAHRENHEIT:
            newState = action.unit;
            return newState;
        case CELSIUS:
            newState = action.unit;
            return newState;
        default:
            return state;
    }
}