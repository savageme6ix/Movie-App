import MovieCard from "./Components/MovieCard";
import SearchComponent from "./Components/SearchComponent";

const Home = ({ search, setSearch, handleSearch, results, toggleFavorite, isFavorite }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Discover Movies</h1>
        <p>Search for your next favourite film or browse what's popular.</p>
      </div>
      <SearchComponent search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <div className="movieCard">
        {results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            date={movie.release_date}
            isFavorite={isFavorite(movie.id)}
            onToggleFavorite={() => toggleFavorite(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
