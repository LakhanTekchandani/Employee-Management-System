import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

 const handleLogout = () => {
  localStorage.removeItem("token");
  setIsMenuOpen(false);
  navigate("/");
};
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-wrap">
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="navbar-header">
          <NavLink to="/dashboard" className="brand" aria-label="EMS dashboard" onClick={closeMenu}>
            <span className="brand-mark">E</span>
            <span className="brand-text">EMS</span>
          </NavLink>

          <button
            className="hamburger-btn"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="nav-content">
          <div className="nav-links">
            <NavLink to="/dashboard" className="nav-link" onClick={closeMenu}>
              Dashboard
            </NavLink>
            <NavLink to="/employees" className="nav-link" onClick={closeMenu}>
              Employees
            </NavLink>
            <NavLink to="/add-employee" className="nav-link" onClick={closeMenu}>
              Add Employee
            </NavLink>
          </div>

          <button className="logout-btn" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;