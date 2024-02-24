import React from "react";
import * as S from "./Accommodation.styles";

const Accommodation = (props) => {
  const [isAccommodationVisible, setIsAccommodationVisible] = // Valeur de l'état, Setter de la valeur //
    React.useState(false); // Etat de l'élément par défaut //
  return (
    <>
      <button
        onClick={() => setIsAccommodationVisible(!isAccommodationVisible)} // Au click sur le bouton, inverse la valeur de l'état //
      >
        Test
      </button>
      <>
        <S.ColorBox /> {/*Importation de la couleur bleue */}
        {isAccommodationVisible && (
          <S.BorderBox>{props.accommodationData}</S.BorderBox> // Si l'état est vrai, affiche la bordure rouge //
        )}
      </>
    </>
  );
};

export default Accommodation;
