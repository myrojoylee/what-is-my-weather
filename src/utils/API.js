import axios from "axios";

export const coordinateSearch = (query) =>
  axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=021e75b0e3380e236b4ff6031ae2dde4`
  );

export const getWeather = (lat, lon) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=021e75b0e3380e236b4ff6031ae2dde4&units=imperial`
  );
