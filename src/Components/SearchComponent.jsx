
const SearchComponent = ({search,setSearch}) => {
  return (
    <div className="searchContainer">
        <input 
            placeholder="Search a movie"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
        />
        <button>Search</button>
    </div>
  )
}

export default SearchComponent