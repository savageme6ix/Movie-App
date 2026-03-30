import Header from "./Components/Header";
import SearchComponent from "./Components/SearchComponent";
import MovieCard from "./Components/MovieCard";

const App = () => {
  async function fetchMovie() {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`);

      if(!response.ok){
        const message = `An error occurred: ${response.status}`
        throw new Error (message);
      }
      const data = await response.json();
      console.log(data);

    } catch (error){
      console.error("Fetch error" , error.message)
    }
  }
  fetchMovie();

  return (
    <div>
      <Header />
      <SearchComponent />
      <MovieCard />
    </div>
  )
}

export default App