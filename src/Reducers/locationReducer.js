import initialState from './initialState';
import { FETCH_LOCATION, RECEIVE_LOCATION } from '../Actions/actionTypes';

export default function location(state = initialState.location, action) {
    let newState;
    switch(action.type) {
        case FETCH_LOCATION:
            console.log('fetch location action');
            return action;
        case RECEIVE_LOCATION:
            newState = action.location;
            console.log('receive location action');
            return newState;
        default:
            return state;
    }
}
