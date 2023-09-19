export default function WeatherFiveDay({ fiveDayWeather }) {
  const data = fiveDayWeather;

  // converst unix timestamp
  const formatDate = (unixDate) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleDateString("en-US");
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
    <>
      <article className="five-day-forecast-wrapper">
        <h3>5-Day Forecast</h3>
        <div className="five-day-forecast">
          {data
            ? data.map((day, index) => (
                <div key={index} className="weather-card">
                  <p>{formatDate(day.dt)}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  />
                  <p>Temp: {Math.round(day.main.temp)} &deg;F</p>
                  <p>Wind: {day.wind.speed} MPH</p>
                  <p>Humidity: {day.main.humidity} %</p>
                </div>
              ))
            : null}
        </div>
      </article>
    </>
  );
}
