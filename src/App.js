import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeContext from "./context/ThemeContext";
import { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Router className="pls">
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: () =>
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")),
        }}
      >
        <Main />
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
