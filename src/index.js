import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ceci est un exemple de code pour le router
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Accommodation from "./pages/Accommodation/Accommodation";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         {/* <Route path="/about" element={<About />} /> */}
//         <Route
//           path="/accomodation"
//           element={<Accommodation accommodationData="accomodationDataSample" />}
//         />
//         {/* <Route path="/error" element={<Error />} /> */}
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
