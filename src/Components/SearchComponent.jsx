
const SearchComponent = ({search,setSearch,handleSearch}) => {
  return (
    <div className="searchContainer">
        <input 
            placeholder="Search a movie"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchComponent