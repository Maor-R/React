import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Header = () => {
  const {
    btnText,
    btnColor,
    btnBGColor,
    changeDayNight
  } = useGlobalContext();

  const updateStatus = ()=>{
    changeDayNight();
  }

  return (
    <nav className="navbar" >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <button style={{backgroundColor:btnBGColor, color:btnColor}} onClick={updateStatus}>{btnText}</button>
    </nav>
  );
};
export default Header;
