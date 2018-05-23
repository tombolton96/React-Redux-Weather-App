import * as types from './searchingActionTypes';

export function toFahrenheit() {
    return {type: types.FAHRENHEIT, unit: 'fahrenheit'};
}

export function toCelsius() {
    return {type: types.CELSIUS, unit: 'celsius'};
}