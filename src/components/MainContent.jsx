import { useState, useEffect } from "react";
import { coordinateSearch, getFiveDayWeather, getWeather } from "../utils/API";
import Weather from "./WeatherContainer/index";
import SearchHistory from "./SearchHistory";

const MainContent = () => {
  // declare state variable, coordinates
  const [coordinates, setCoordinates] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [fiveDayWeather, setFiveDayWeather] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  // we have an initial value upon loading
  useEffect(() => {
    searchCoordinates("Philadelphia");
  }, []);

  // helps render our quick search list at load
  useEffect(() => {
    if (localStorage.getItem("weatherSearch") !== null) {
      setSearchHistory(JSON.parse(localStorage.getItem("weatherSearch")));
    }
  }, []);

  const searchCoordinates = async (query) => {
    const { data } = await coordinateSearch(query);
    setCoordinates(data[0]);

    searchWeather(data[0].lat, data[0].lon);
    searchForecast(data[0].lat, data[0].lon);
  };

  const searchWeather = async (lat, lon) => {
    const { data } = await getWeather(lat, lon);
    setCurrentWeather(data);
  };

  const searchForecast = async (lat, lon) => {
    const { data } = await getFiveDayWeather(lat, lon);
    setFiveDayWeather(data.list.filter((e, i) => i % 8 === 0));
  };

  // capture what's typed in search bar
  const changeInputHandler = async (e) => {
    let city = e.target.value;
    // console.log(city.charAt(0).toUpperCase() + city.slice(1));
    setSearchCity(city.charAt(0).toUpperCase() + city.slice(1));
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (searchCity) {
      searchCoordinates(searchCity);

      let tempSearchHistory = [];
      // if there is something in storage, retrieve it first, push new data in, and set new updated array to storage
      if (localStorage.getItem("weatherSearch") !== null) {
        tempSearchHistory = JSON.parse(localStorage.getItem("weatherSearch"));
        if (!tempSearchHistory.includes(searchCity)) {
          tempSearchHistory.unshift(searchCity);
        }
        setSearchHistory(tempSearchHistory);
        localStorage.setItem(
          "weatherSearch",
          JSON.stringify(tempSearchHistory)
        );
      }
      // if storage is empty, set array to storage
      else {
        tempSearchHistory.push(searchCity);
        setSearchHistory(tempSearchHistory);
        localStorage.setItem(
          "weatherSearch",
          JSON.stringify(tempSearchHistory)
        );
      }
    }
  };

  const clearHistory = (e) => {
    e.preventDefault();
    localStorage.clear();
    setSearchHistory([]);
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
            placeholder="Enter city name"
          />
          <button type="submit">Search</button>
        </form>
        <SearchHistory searchHistory={searchHistory} />
        <button onClick={clearHistory}>Clear Search History</button>
      </section>

      <Weather
        currentWeather={currentWeather}
        fiveDayWeather={fiveDayWeather}
      />
    </main>
  );
};

export default MainContent;
