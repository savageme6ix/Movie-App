import Header from "./Components/Header";
import SearchComponent from "./Components/SearchComponent";
import MovieCard from "./Components/MovieCard";
import { useState, useEffect } from "react";
const App = () => {
  const [results , setResults ] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchMovie() {
  //  Determine which URL to use
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${search}`;
  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`;

  const url = search.length > 0 ? searchUrl : popularUrl;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }

    const data = await response.json();
    setResults(data.results);
    
  } catch (error) {
    console.error("Fetch error", error.message);
  }
}

  useEffect(()=>{
      fetchMovie()
  },[])
  

  return (
    <div>
      <Header />
      <SearchComponent
        search={search}
        setSearch={setSearch}
        handleSearch={fetchMovie}
      />
      <div className="movieCard">
      {results.map((movie)=>(
        <MovieCard 
          key={movie.id}
          title={movie.title}
          image={movie.poster_path}
          date={movie.release_date}
        />
      ))}
      </div>
    </div>
  )
}

export default App