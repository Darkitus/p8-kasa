import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import headerLogoDesktop from "./assets/headerLogoDesktop.svg";
import headerLogoMobile from "./assets/headerLogoMobile.svg";
import footerLogo from "./assets/footerLogo.svg";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";
import Error from "./pages/Error/Error.jsx";

//// CECI EST UN EXEMPLE
// function App() {
//   const accomodations = [
//     {
//       id: 1,
//       title: "Logement 1",
//       description: "Description 1",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       title: "Logement 2",
//       description: "Description 2",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       title: "Logement 3",
//       description: "Description 3",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   const Cards = accomodations.map((accomodation) => {
//     // Pour chaque élément de la liste, retourne un élément //
//     return (
//       <div key={accomodation.id}>
//         <h2>{accomodation.title}</h2>
//         <p>{accomodation.description}</p>
//         <img src={accomodation.image} alt={accomodation.title} />
//       </div>
//     );
//   });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Test2</h1>
//         <div>{Cards}</div> {/* Affiche les éléments de la liste */}
//       </header>
//     </div>
//   );
// }
//// AU DESSUS C'EST UN EXEMPLE

function App() {
  return (
    <Router>
      <div className="bodyContainer">
        <header className="header">
          <img
            className="headerLogoDesktop" // Applique la classe headerLogoDesktop //
            src={headerLogoDesktop}
            alt="Logo Kasa"
          />
          <img
            className="headerLogoMobile" // Applique la classe headerLogoMobile //
            src={headerLogoMobile}
            alt="Logo Kasa"
          />
          <nav>
            <ul className="headerNav">
              <li>
                <NavLink
                  to="/" // Lien vers la page d'accueil //
                  className="navLink"
                  activeclassname="active" // Si la route est active, applique la classe active //
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about" // Lien vers la page à propos //
                  className="navLink"
                  activeclassname="active" // Si la route est active, applique la classe active //
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
