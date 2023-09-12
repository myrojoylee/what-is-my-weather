import { useState, useEffect } from "react";
import { coordinateSearch, getWeather } from "../utils/API";

const Aside = () => {
  // declare state variable, coordinates
  const [coordinates, setCoordinates] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");

  //   we have an initial value upon loading
  //   useEffect(() => {
  //     searchCoordinates(searchCity);
  //   }, []);

  const searchCoordinates = async (query) => {
    const { data } = await coordinateSearch(query);
    setCoordinates(data[0]);

    searchWeather(data[0].lat, data[0].lon);
  };

  const searchWeather = async (lat, lon) => {
    const { data } = await getWeather(lat, lon);
    console.log(data);
    setCurrentWeather(data);
  };

  // capture what's typed in search bar
  const changeInputHandler = async (e) => {
    setSearchCity(e.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    searchCoordinates(searchCity);
  };

  return (
    <aside>
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
    </aside>
  );
};

export default Aside;
