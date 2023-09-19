export default function SearchBar({
  submitFormHandler,
  searchCity,
  changeInputHandler,
}) {
  return (
    <section className="searchNav">
      <form onSubmit={submitFormHandler}>
        <input
          id="search"
          type="text"
          value={searchCity}
          onChange={changeInputHandler}
          placeholder="Enter city name"
        />
        <button type="submit">Go</button>
      </form>
    </section>
  );
}
