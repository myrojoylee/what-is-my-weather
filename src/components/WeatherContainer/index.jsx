import WeatherFiveDay from "./WeatherFiveDay";
import WeatherToday from "./WeatherToday";

export default function Weather({ currentWeather }) {
  return (
    <section className="weather-results">
      <WeatherToday currentWeather={currentWeather} />
      <WeatherFiveDay />
    </section>
  );
}
