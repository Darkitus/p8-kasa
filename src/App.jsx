import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import headerLogo from "./assets/headerLogo.svg";
import footerLogo from "./assets/footerLogo.svg";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";
import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    <Router>
      <div className="bodyContainer">
        <header className="header">
          <img
            className="headerLogo" // Applique la classe headerLogo //
            src={headerLogo}
            alt="Logo Kasa"
          />
          <nav>
            <ul className="headerNav">
              <li>
                <NavLink
                  to="/" // Lien vers la page d'accueil //
                  className="navLink"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about" // Lien vers la page à propos //
                  className="navLink"
                >
                  À propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Route pour la page d'accueil */}
          <Route path="/about" element={<About />} />{" "}
          {/* Route pour la page à propos */}
          <Route path="/accommodation/:id" element={<Accommodation />} />{" "}
          {/* Route pour la page de logement */}
          <Route path="*" element={<Error />} />{" "}
          {/* Si aucune route ne correspond, affiche la page d'erreur */}
        </Routes>

        <footer className="footer">
          <img src={footerLogo} alt="Logo Kasa" />
          <span>© 2020 Kasa. All rights reserved</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;
