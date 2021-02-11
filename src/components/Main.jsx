import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import About from "../pages/About";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Nav from "./Nav";

const Main = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.theme}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
      </Switch>
    </div>
  );
};

export default Main;
