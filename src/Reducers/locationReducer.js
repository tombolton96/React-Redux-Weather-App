import initialState from './initialState';
import { FETCH_LOCATION, RECEIVE_LOCATION } from '../Actions/locationActionTypes';

export default function location(state = initialState.location, action) {
    let newState;
    switch(action.type) {
        case FETCH_LOCATION:
            return action;
        case RECEIVE_LOCATION:
            newState = action.location;
            return newState;
        // case SEARCH_LOCATION:
        //     return action;
        default:
            return state;
    }
}
