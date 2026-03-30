import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Components/Header"
import { useState, useEffect } from "react"
const App = () => {
  const [results , setResults ] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMovie = async (query = '') => {
  // If query is empty, get popular. If not, search.
    const url = query 
      ? `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`;
    
    const res = await fetch(url);
    const data = await res.json();
    setResults(data.results);
  };

  const goHome = () => {
    setSearch('');      // 1. Clear the text box
    fetchMovie('');     // 2. Load the popular movies again
  };

  useEffect(() => { fetchMovie(); }, []);

  return (
    <>
    <Header onHomeClick={goHome}/>
    <Routes>
      <Route path="/" element={<Home 
        results={results}
        search={search}
        setSearch={setSearch}
        handleSearch={()=>fetchMovie(search)}
      />} />
    </Routes>
    </>
  )
}

export default App