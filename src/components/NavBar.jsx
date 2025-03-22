import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "/assets/logo.png";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        // After scrolling 100px
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`navbar flex justify-between items-center shadow-md ${
          theme === "dark" ? "dark-navbar" : ""
        }`}
      >
        {/* Logo Section */}
        <div className="logo text-left">
          <img id="logo-img" src={logo} alt="logo" />
        </div>

        {/* Navbar Links - Desktop */}
        <ul
          className={`navbar-list desktop-menu flex space-x-8 text-lg font-semibold ${
            mobileMenuOpen ? "active" : ""
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </NavLink>
          </li>
        </ul>

        {/* Actions Section (Contact Button + Theme Toggle) */}
        <div className="navbar-actions">
          {/* Dark Mode Toggle */}
          <button
            className={`theme-toggle ${theme === "dark" ? "dark" : "light"}`}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Hamburger Menu for Mobile */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          {/* "Contact Us" Button */}
          <NavLink
            to="/contact"
            className="navbar-button bg-yellow-500 text-white font-bold py-3 px-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-menu-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "mobile-nav-link active-mobile-link"
                    : "mobile-nav-link"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "mobile-nav-link active-mobile-link"
                    : "mobile-nav-link"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "mobile-nav-link active-mobile-link"
                    : "mobile-nav-link"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
