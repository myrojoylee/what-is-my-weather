import Header from "./components/Header";
import Weather from "./components/WeatherContainer";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Header />
      <Weather className="weather-container" />
      <Aside />
    </>
  );
}

export default App;
