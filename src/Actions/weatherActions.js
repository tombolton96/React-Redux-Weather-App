import * as types from './weatherActionTypes';
import { SEARCHING } from './miscActionTypes';
import { receiveLocation } from './locationActions';

const key = process.env.REACT_APP_API_KEY;

function url(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${key}`;
};

function searchUrl(city, country) {
    return country ? `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${key}`
        : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`;
};

function forecastUrl(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${key}`;
};

function searchForecastUrl(city, country) {
    return country ? `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${key}`
        : `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${key}`; 
};

function convertToFahrenheit(temp) { 
    return (temp * 1.8) + 32; 
}

export function receiveWeather(data) {

    console.log(data);

    sessionStorage.setItem('latitude', data.coord.lat);
    sessionStorage.setItem('longitude', data.coord.lon);

    const weather = data.weather ? {
        id: data.weather[0].id,
        description: data.weather[0].description,
        tempC: Math.round(data.main.temp*10)/10,
        tempF: Math.round(convertToFahrenheit(data.main.temp)*10)/10,
        icon: data.weather[0].icon,
        date: data.dt,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        humidity: data.main.humidity
    } : {id:800};
    return {type: types.RECEIVE_WEATHER, weather};
}

export function receiveForecast(data) {
    const forecast = data.list.map(p => {
        return {
            date: p.dt,
            datestring: p.dt_txt,
            tempC: Math.round(p.main.temp*10)/10,
            tempF: Math.round(convertToFahrenheit(p.main.temp)*10)/10,
            description: p.weather[0].description,
            humidity: p.main.humidity,
            wind: {
                speed: Math.round(p.wind.speed*10)/10,
                deg: p.wind.deg
            },
            icon: p.weather[0].icon
        };
    });
    return {type: types.RECEIVE_FORECAST, forecast};
}

export function fetchWeather(lat, lon) {

    return dispatch => {
            
            fetch(url(lat, lon))
                .then(response => response.json())
                .then(json => dispatch(receiveWeather(json)))
                .catch(error => console.log(error));

            fetch(forecastUrl(lat, lon))
                .then(response => response.json())
                .then(json => dispatch(receiveForecast(json)))
                .catch(error => console.log(error));
    };
}

export function search(city, country) {
    return dispatch => {

        dispatch(searching(true));

        fetch(searchUrl(city, country))
            .then(response => {
                if(response.status === 404) {
                    alert(response.statusText);
                    dispatch(searching(false));
                } else {
                    return response.json();
                }
            })
            .then(json => {
                dispatch(receiveLocation(json.coord.lon, json.coord.lat));
                dispatch(receiveWeather(json));
            })
            .catch(error => console.log(error));

        fetch(searchForecastUrl(city, country))
            .then(response => response.json())
            .then(json => dispatch(receiveForecast(json)))
            .then(() => dispatch(searching(false)))
            .catch(error => console.log(error));
    };
}

export function searching(bool) {
    return {type: SEARCHING, searching:bool};
}