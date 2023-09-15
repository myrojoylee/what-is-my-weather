import WeatherFiveDay from "./WeatherFiveDay";
import WeatherToday from "./WeatherToday";

export default function Weather({ currentWeather, fiveDayWeather }) {
  return (
    <section className="weather-results">
      <WeatherToday currentWeather={currentWeather} />
      <WeatherFiveDay fiveDayWeather={fiveDayWeather} />
    </section>
  );
}
