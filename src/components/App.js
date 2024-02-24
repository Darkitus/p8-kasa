import logo from "../assets/logo.svg";
import "../styles/App.css";

function App() {
  const accomodations = [
    {
      id: 1,
      title: "Logement 1",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Logement 2",
      description: "Description 2",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Logement 3",
      description: "Description 3",
      image: "https://via.placeholder.com/150",
    },
  ];

  const Cards = accomodations.map((accomodation) => {
    // Pour chaque élément de la liste, retourne un élément //
    return (
      <div key={accomodation.id}>
        <h2>{accomodation.title}</h2>
        <p>{accomodation.description}</p>
        <img src={accomodation.image} alt={accomodation.title} />
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test2</h1>
        <div>{Cards}</div> {/* Affiche les éléments de la liste */}
      </header>
    </div>
  );
}

export default App;
