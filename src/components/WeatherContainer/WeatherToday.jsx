export default function WeatherToday({ currentWeather }) {
  const data = currentWeather;
  //   console.log(data);

  // formats unix timestamp
  const formatDate = (unixDate) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleDateString("en-US");
  };

  const getDayName = (unixDate) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  const formatTime = (unixDate) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <article className="weather-today">
      {data ? (
        <>
          <div className="weather-today-header">
            <h3>{data.name.toUpperCase()}</h3>
            <p>
              Today is {getDayName(data.dt)}, {formatDate(data.dt)}
            </p>
          </div>
          <div className="weather-today-highlight">
            <p>Current Weather</p>
            <p>{formatTime(data.dt)}</p>
            <div className="weather-today-temp-icon">
              <p>{Math.round(data.main.temp)} ℉</p>
              {data.weather[0] ? (
                <>
                  <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="weather-today-stats">
            <p>{data.weather[0].main}</p>
            <p>Wind: {data.wind.speed} MPH</p>
            <p>Humidity: {data.main.humidity} %</p>
          </div>
        </>
      ) : null}
    </article>
  );
}
