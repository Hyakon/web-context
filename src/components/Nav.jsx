import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Nav = () => {
  const theme = useContext(ThemeContext);
  return (
    <nav>
      <button onClick={theme.changeTheme}>Night mode</button>
      <Link to="/">Home</Link>
      <Link to="/about">L'Agence</Link>
      <Link to="/works">Projets</Link>
    </nav>
  );
};

export default Nav;
