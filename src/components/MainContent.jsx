import { useState, useEffect } from "react";
import { coordinateSearch, getFiveDayWeather, getWeather } from "../utils/API";
import Weather from "./WeatherContainer/index";

const MainContent = () => {
  // declare state variable, coordinates
  const [coordinates, setCoordinates] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [fiveDayWeather, setFiveDayWeather] = useState("");

  // we have an initial value upon loading
  useEffect(() => {
    searchCoordinates("Philadelphia");
  }, []);

  const searchCoordinates = async (query) => {
    const { data } = await coordinateSearch(query);
    setCoordinates(data[0]);

    searchWeather(data[0].lat, data[0].lon);
    searchForecast(data[0].lat, data[0].lon);
  };

  const searchWeather = async (lat, lon) => {
    const { data } = await getWeather(lat, lon);
    // console.log(data);
    setCurrentWeather(data);
  };

  const searchForecast = async (lat, lon) => {
    const { data } = await getFiveDayWeather(lat, lon);
    setFiveDayWeather(data.list.filter((e, i) => i % 8 === 0));
    // setFiveDayWeather(data);
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
    <main>
      <section className="searchNav">
        <form onSubmit={submitFormHandler}>
          <input
            id="search"
            type="text"
            value={searchCity}
            onChange={changeInputHandler}
          />
          <button type="submit">Search</button>
        </form>
      </section>
      <Weather
        currentWeather={currentWeather}
        fiveDayWeather={fiveDayWeather}
      />
    </main>
  );
};

export default MainContent;
