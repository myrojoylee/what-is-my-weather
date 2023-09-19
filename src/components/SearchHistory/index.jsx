export default function SearchHistory({
  searchHistory,
  searchWeatherFromButton,
  clearHistory,
}) {
  return (
    <section className="search-history-wrapper">
      {searchHistory.length ? (
        <>
          <h4>Previously Searched:</h4>
          <div className="search-history-list">
            {searchHistory?.map((city, index) => (
              <button
                key={index}
                className="search-term"
                onClick={searchWeatherFromButton}
              >
                {city}
              </button>
            ))}
          </div>
          <button className="clear-history" onClick={clearHistory}>
            Clear Search History
          </button>
        </>
      ) : (
        <h4>Nothing Searched Yet</h4>
      )}
    </section>
  );
}
