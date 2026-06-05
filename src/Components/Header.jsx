import { NavLink } from "react-router-dom";

const Header = ({ onHomeClick }) => {
  return (
    <nav className="headerContainer">
      <div className="header-brand">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
        </svg>
        <h4>Movie App</h4>
      </div>
      <div className="header-links">
        <NavLink to="/" onClick={onHomeClick} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/favourites" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Favourites
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
