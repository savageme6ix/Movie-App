import Header from "./Components/Header";
import SearchComponent from "./Components/SearchComponent";
import MovieCard from "./Components/MovieCard";
import { useState, useEffect } from "react";
const App = () => {
  const [results , setResults ] = useState([]);

  async function fetchMovie() {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`);

      if(!response.ok){
        const message = `An error occurred: ${response.status}`
        throw new Error (message);
      }
      const data = await response.json();
      setResults(data.results);

    } catch (error){
      console.error("Fetch error" , error.message)
    }
  }

  useEffect(()=>{
    fetchMovie()
  },[])
  

  return (
    <div>
      <Header />
      <SearchComponent />
      {results.map((movie)=>(
        <MovieCard 
          key={movie.id}
          title={movie.title}
          image={movie.poster_path}
          date={movie.release_date}
        />
      ))}
    </div>
  )
}

export default App