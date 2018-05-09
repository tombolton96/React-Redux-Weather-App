import * as types from './actionTypes';

export function receiveLocation(position) {
    return {type: types.RECEIVE_LOCATION, location: position.coords}
}

export function fetchLocation() {
    return dispatch => {
        const location = navigator.geolocation;
        location.getCurrentPosition(position => {
            console.log(position.coords);
            dispatch(receiveLocation(position));
        });    
    };
}