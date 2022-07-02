import { render } from "react-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {

  const[darkMode, setDarkMode] = useState(false)

 

  return (
    <div className="container">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
      <Main darkMode={darkMode} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
