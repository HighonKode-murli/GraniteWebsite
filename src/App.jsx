import { Routes, Route, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import GoToTop from "./components/GoToTop";

function App() {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={theme === 'dark' ? 'dark-mode' : ''}>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
      <GoToTop/>
    </div>
  );
}

export default App;
