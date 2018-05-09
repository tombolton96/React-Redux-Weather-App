import * as types from './weatherActionTypes';

function url(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
};

export function receiveWeather(data) {
    const weather = {
        id: data.weather[0].id,
        description: data.weather[0].description,
        temperature: Math.round(data.main.temp * 10)/10,
        icon: data.weather[0].icon,
        date: data.dt,
        city: data.name,
        country: data.sys.country
    };
    return {type: types.RECEIVE_WEATHER, weather: weather}
}

export function fetchWeather() {
    return dispatch => {
        const location = navigator.geolocation;
        location.getCurrentPosition(position => {
            console.log(position.coords);
            
            fetch(url(position.coords.latitude, position.coords.longitude))
                .then(response => response.json())
                .then(json => dispatch(receiveWeather(json)));

        }, error => console.log(error));    
    };
}