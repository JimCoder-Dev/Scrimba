import navbarIcon from "../images/react-icon-small.png";

function Navbar(props) {
    function toggleDarkMode(){
        props.setDarkMode(!props.darkMode)
    }

  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav--logo_icon" src={navbarIcon} />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
