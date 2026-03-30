
const SearchComponent = ({search,setSearch,handleSearch}) => {
  return (
    <div className="searchContainer">
        <input 
            placeholder="Search a movie"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
        />
        <button onClick={handleSearch} onKeyDown={(e) => { if(e.key === 'Enter') handleSearch() }}>Search</button>
    </div>
  )
}

export default SearchComponent