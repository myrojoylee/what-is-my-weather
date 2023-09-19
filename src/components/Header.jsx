import SearchBar from "./SearchBar";
import wmwIcon from "../assets/whats-my-weather-icon.png";
import cloudsVid from "../assets/cloud-loops.mp4";

export default function Header({
  submitFormHandler,
  searchCity,
  changeInputHandler,
}) {
  return (
    <header>
      <video autoPlay loop muted id="cloud-loop">
        <source src={cloudsVid} type="video/mp4" />
      </video>
      <section className="header-detail">
        <article className="main-title">
          <img className="wmw-icon" src={wmwIcon} />
          <h1>What's My Weather?</h1>
        </article>
        <SearchBar
          submitFormHandler={submitFormHandler}
          searchCity={searchCity}
          changeInputHandler={changeInputHandler}
        />
      </section>
    </header>
  );
}
