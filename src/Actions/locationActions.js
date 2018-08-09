import * as types from './locationActionTypes';
import { fetchWeather } from './weatherActions';

export function receiveLocation(lon, lat) {

    const location = {
        longitude: lon,
        latitude: lat
    };
    return {type: types.RECEIVE_LOCATION, location};
}

export function fetchLocation() {
    return dispatch => {
        const location = navigator.geolocation;
        location.getCurrentPosition(position => {
            dispatch(receiveLocation(position.coords.longitude, position.coords.latitude));
            dispatch(fetchWeather(position.coords.latitude, position.coords.longitude));

        }, error => {
            console.error(error);
        });
    };
}