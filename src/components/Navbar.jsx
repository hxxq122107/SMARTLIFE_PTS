import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="navbar">
      <div className="navbar-brand">SmartLife App</div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/tips">Tips</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/about">About</Link>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
