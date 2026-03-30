import {Link} from "react-router-dom";

const Header = ({onHomeClick}) => {
  return (
    <nav className='headerContainer'>
        <h4>Movie App</h4>
        <Link to="/" onClick={onHomeClick}>Home</Link>
        <a>Favourites</a>
    </nav>
  )
}

export default Header