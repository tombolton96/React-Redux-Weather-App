import initialState from './initialState';
import { FETCH_LOCATION, RECEIVE_LOCATION } from '../Actions/locationActionTypes';

export default function location(state = initialState.location, action) {
    let newState;
    switch(action.type) {
        case FETCH_LOCATION:
            console.log('fetch location action');
            return action;
        case RECEIVE_LOCATION:
            console.log('receive location action');
            newState = {
                latitude: action.location.latitude,
                longitude: action.location.longitude
            };
            return newState;
        default:
            return state;
    }
}
