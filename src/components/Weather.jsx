import { useState, useEffect } from "react";
import { coordinateSearch, getWeather } from "../utils/API";

const Weather = () => {
  // declare state variable, coordinates
  const [coordinates, setCoordinates] = useState({});
  const [searchCity, setSearchCity] = useState("");
  //   const [currentWeather, setCurrentWeather] = useState("");

  //   we have an initial value upon loading
  //   useEffect(() => {
  //     searchCoordinates(searchCity);
  //   }, []);

  const searchCoordinates = async (query) => {
    const { data } = await coordinateSearch(query);
    setCoordinates(data[0]);
  };

  const searchWeather = async (lat, lon) => {
    const { data } = await getWeather(lat, lon);
    console.log(data);
    setCurrentWeather(data);
  };

  const changeInputHandler = async (e) => {
    // console.log(e.target.value);
    setSearchCity(e.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    searchCoordinates(searchCity);
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <input
          id="search"
          type="text"
          value={searchCity}
          onChange={changeInputHandler}
        />
        <button type="submit">Search</button>
      </form>
      <h4>
        <p>city: {coordinates?.name}</p>
        <p>lat: {coordinates?.lat}</p>
        <p>lon: {coordinates?.lon}</p>
      </h4>
    </div>
  );
};

export default Weather;
