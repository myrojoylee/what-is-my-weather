import { useState, useEffect } from "react";
import { coordinateSearch, getWeather } from "../utils/API";
import Weather from "./WeatherContainer/index";

const MainContent = () => {
  // declare state variable, coordinates
  const [coordinates, setCoordinates] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");

  // we have an initial value upon loading
  useEffect(() => {
    searchCoordinates("Philadelphia");
  }, []);

  const searchCoordinates = async (query) => {
    const { data } = await coordinateSearch(query);
    setCoordinates(data[0]);

    searchWeather(data[0].lat, data[0].lon);
  };

  const searchWeather = async (lat, lon) => {
    const { data } = await getWeather(lat, lon);
    // console.log(data);
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
      <Weather currentWeather={currentWeather} />
    </main>
  );
};

export default MainContent;
