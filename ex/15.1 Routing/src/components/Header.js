import { NavLink } from "react-router-dom";


function Header () {
 

  return (
    <nav className="navbar" >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
    </nav>
  );
};
export default Header;
