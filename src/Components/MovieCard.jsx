
const MovieCard = ({key,image,title,date}) => {
  return (
    
    <div className="card">
        <section>
            <img src={`https://image.tmdb.org/t/p/w500${image}`}/>
        </section>
        <footer>
            <h3>{title}</h3>
            <h5>{date}</h5>
        </footer>
    </div>
  )
}

export default MovieCard