export default function SearchHistory({ searchHistory }) {
  const searchWeather = (e) => {
    e.preventDefault();
    alert("search weather!");
  };
  return (
    <section className="search-history-wrapper">
      {searchHistory?.map((city, index) => (
        <button key={index} className="search-term" onClick={searchWeather}>
          {city}
        </button>
      ))}
    </section>
  );
}
