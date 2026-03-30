import MovieCard from "./Components/MovieCard";
import SearchComponent from "./Components/SearchComponent";

const Home = ({search,setSearch,handleSearch,results}) => {
      
   return (
    <div>
      <SearchComponent
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
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

export default Home