const MovieCard = ({ image, title, date, isFavorite, onToggleFavorite }) => {
  const year = date ? date.split("-")[0] : "N/A";

  return (
    <div className="card">
      <section className="card-image-wrapper">
        <img
          src={
            image
              ? `https://image.tmdb.org/t/p/w500${image}`
              : "https://via.placeholder.com/500x750/1a1a2e/e94560?text=No+Image"
          }
          alt={title}
          loading="lazy"
        />
        <button
          className={`heart-btn ${isFavorite ? "heart-btn--active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
        >
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
      <footer>
        <h3>{title}</h3>
        <span className="card-year">{year}</span>
      </footer>
    </div>
  );
};

export default MovieCard;
