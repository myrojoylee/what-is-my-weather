import axios from "axios";

export const coordinateSearch = (query) =>
  axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );

export const getWeather = (lat, lon) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=Imperial`
  );

export const getFiveDayWeather = (lat, lon) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=Imperial`
  );
