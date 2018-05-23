import initialState from './initialState';
import { SEARCHING } from '../Actions/miscActionTypes';

export default function searching(state = initialState.searching, action) {
    let newState;
    switch(action.type) {
        case SEARCHING:
            newState = action.searching;
            return newState;
        default:
            return state;
    }
}
