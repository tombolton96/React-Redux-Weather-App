import * as types from './weatherActionTypes';

function url(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
};

function searchUrl(city, country) {
    return country ? `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
};

function forecastUrl(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
};

function searchForecastUrl(city, country) {
    return country ? `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        : `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`; 
};

export function receiveWeather(data) {
    const weather = {
        id: data.weather[0].id,
        description: data.weather[0].description,
        temperature: data.main.temp,
        icon: data.weather[0].icon,
        date: data.dt,
        city: data.name,
        country: data.sys.country
    };
    return {type: types.RECEIVE_WEATHER, weather: weather};
}

export function receiveForecast(data) {
    console.log(data);

    const forecast = data.list.map(p => {
        return {
            date: p.dt,
            datestring: p.dt_txt,
            temperature: p.main.temp,
            description: p.weather[0].description,
            icon: p.weather[0].icon
        };
    });
    console.log(forecast);
    return {type: types.RECEIVE_FORECAST, forecast: forecast};
}

export function fetchWeather() {
    return dispatch => {
        const location = navigator.geolocation;
        location.getCurrentPosition(position => {
            
            fetch(url(position.coords.latitude, position.coords.longitude))
                .then(response => response.json())
                .then(json => dispatch(receiveWeather(json)))
                .catch(error => console.log(error));

            fetch(forecastUrl(position.coords.latitude, position.coords.longitude))
                .then(response => response.json())
                .then(json => dispatch(receiveForecast(json)))
                .catch(error => console.log(error));

        }, error => console.log(error));    
    };
}

export function search(city, country) {
    return dispatch => {
        fetch(searchUrl(city, country))
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json)))
            .catch(error => console.log(error));

        fetch(searchForecastUrl(city, country))
            .then(response => response.json())
            .then(json => dispatch(receiveForecast(json)))
            .catch(error => console.log(error));
    };
}