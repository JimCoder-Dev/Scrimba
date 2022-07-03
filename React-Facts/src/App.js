import { render } from "react-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {

  const[darkMode, setDarkMode] = useState(false)

 
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
      <Main darkMode={darkMode} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
