import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import Header from "./Components/Header";
import { useState, useEffect } from "react";

const App = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchMovie = async (query = "") => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    setResults(data.results);
  };

  const goHome = () => {
    setSearch("");
    fetchMovie("");
  };

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.id === movie.id);
      if (exists) return prev.filter((f) => f.id !== movie.id);
      return [
        ...prev,
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
        },
      ];
    });
  };

  const isFavorite = (id) => favorites.some((f) => f.id === id);

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const sharedProps = { toggleFavorite, isFavorite };

  return (
    <>
      <Header onHomeClick={goHome} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              results={results}
              search={search}
              setSearch={setSearch}
              handleSearch={() => fetchMovie(search)}
              {...sharedProps}
            />
          }
        />
        <Route
          path="/favourites"
          element={<Favorites favorites={favorites} {...sharedProps} />}
        />
      </Routes>
    </>
  );
};

export default App;
