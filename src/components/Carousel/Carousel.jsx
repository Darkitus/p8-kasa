import React, { useState } from "react";
import * as S from "./Carousel.styles";
import accommodationsData from "../../assets/logements.json";

const Carousel = ({ id }) => {
  const accommodation = accommodationsData.find((item) => item.id === id); // On récupère les données du logement correspondant à l'id
  const images = accommodation.pictures; // On récupère les images du logement
  const [currentIndex, setCurrentIndex] = useState(0); // On utilise un state pour stocker l'index de l'image actuelle

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0); // Si on est à la dernière image, on revient à la première
    } else {
      setCurrentIndex(currentIndex + 1); // Sinon, on passe à l'image suivante
    }
  };

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1); // Si on est à la première image, on revient à la dernière
    } else {
      setCurrentIndex(currentIndex - 1); // Sinon, on passe à l'image précédente
    }
  };

  return (
    <S.CarouselContainer>
      <S.ImageContainer>
        {images.length > 1 && ( // On affiche les flèches de navigation uniquement s'il y a plus d'une image
          <S.PrevButton onClick={prevImage}>Précédent</S.PrevButton>
        )}
        <S.CarouselImage src={images[currentIndex]} alt="Carrousel" />
        {images.length > 1 && (
          <S.NextButton onClick={nextImage}>Suivant</S.NextButton>
        )}
        {images.length > 1 && ( // On affiche le compteur d'images uniquement s'il y a plus d'une image
          <S.ImageCounter>
            {currentIndex + 1}/{images.length}
          </S.ImageCounter>
        )}
      </S.ImageContainer>
    </S.CarouselContainer>
  );
};

export default Carousel;
