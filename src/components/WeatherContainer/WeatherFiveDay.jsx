export default function WeatherFiveDay({ fiveDayWeather }) {
  const data = fiveDayWeather;

  // converst unix timestamp
  const formatDate = (unixDate) => {
    let date = new Date(unixDate * 1000);
    return date.toLocaleDateString("en-US");
  };

  return (
    <>
      <h3>5-Day Forecast</h3>
      <article className="five-day-forecast">
        {data
          ? data.map((day, index) => (
              <div key={index} className="weather-card">
                <p>{formatDate(day.dt)}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                />
                <p>Temp: {day.main.temp} ℉</p>
                <p>Wind: {day.wind.speed} MPH</p>
                <p>Humidity: {day.main.humidity} %</p>
              </div>
            ))
          : null}
      </article>
    </>
  );
}
