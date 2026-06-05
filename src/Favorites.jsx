import MovieCard from "./Components/MovieCard";

const Favorites = ({ favorites, toggleFavorite, isFavorite }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Your Favourites</h1>
        <p>
          {favorites.length === 0
            ? "Movies you love will appear here."
            : `${favorites.length} saved movie${favorites.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <h2>No favourites yet</h2>
          <p>Tap the heart on any movie to save it here.</p>
        </div>
      ) : (
        <div className="movieCard">
          {favorites.map((movie) => (
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
      )}
    </div>
  );
};

export default Favorites;
