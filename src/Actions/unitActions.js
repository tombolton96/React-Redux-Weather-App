import * as types from './miscActionTypes';

export function toFahrenheit() {
    return {type: types.FAHRENHEIT, unit: 'fahrenheit'};
}

export function toCelsius() {
    return {type: types.CELSIUS, unit: 'celsius'};
}