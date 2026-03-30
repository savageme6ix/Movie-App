import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className='headerContainer'>
        <h4>Movie App</h4>
        <Link to="/">Home</Link>
        <a>Favourites</a>
    </nav>
  )
}

export default Header