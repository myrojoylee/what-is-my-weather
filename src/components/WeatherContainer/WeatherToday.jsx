export default function WeatherToday({ currentWeather }) {
  const data = currentWeather;
  //   console.log(data);

  // formats unix timestamp
  const formatDate = (unixDate) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleDateString("en-US");
  };

  return (
    <article className="weather-today">
      {data ? (
        <>
          <div className="weather-today-header">
            <h3>{data.name}</h3>
            <p>{formatDate(data.dt)}</p>
            {data.weather[0] ? (
              <>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                />
              </>
            ) : null}
          </div>
          <div className="weather-today-stats">
            <p>Temp: {data.main.temp} ℉</p>
            <p>Wind: {data.wind.speed} MPH</p>
            <p>Humidity: {data.main.humidity} %</p>
          </div>
        </>
      ) : null}
    </article>
  );
}
