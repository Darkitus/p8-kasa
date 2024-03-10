import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./Accommodation.styles";
import Carousel from "../../components/Carousel/Carousel";
import accommodationsData from "../../assets/logements.json";
import Dropdown from "../../components/Dropdown/Dropdown";

function Accommodation() {
  const { id } = useParams(); // Récupération de l'id du logement depuis l'URL
  const accommodation = accommodationsData.find((item) => item.id === id); // Récupération des données du logement en fonction de l'id
  const [firstName, lastName] = accommodation.host.name.split(" "); // Pour séparer le prénom et le nom de famille du host

  const renderStars = () => {
    return [...Array(5)].map(
      (
        _, // underscore pour ignorer le premier paramètre
        index
      ) => (
        <S.StyledStar
          key={index} // Clé unique pour chaque étoile
          fill={index < accommodation.rating ? "#FF6060" : "#E3E3E3"} // Remplissage de l'étoile en fonction de la note
        />
      )
    );
  };

  return (
    <S.AccommodationContainer>
      <Carousel id={id} />
      <S.AccommodationInfos>
        <S.AccommodationTitle>{accommodation.title}</S.AccommodationTitle>
        <S.AccommodationLocation>
          {accommodation.location}
        </S.AccommodationLocation>
        <S.AccommodationTags>
          {accommodation.tags.map((tag) => (
            <S.AccommodationTag key={tag}>{tag}</S.AccommodationTag> // Clé unique pour chaque tag
          ))}
        </S.AccommodationTags>
      </S.AccommodationInfos>
      <S.AccommodationHostInfos>
        <S.AccommodationHost>
          <S.HostName>
            <S.HostFirstName>{firstName}</S.HostFirstName>
            <S.HostLastName>{lastName}</S.HostLastName>
          </S.HostName>
          <S.HostImage
            src={accommodation.host.picture}
            alt={accommodation.host.name}
          />
        </S.AccommodationHost>
        <S.AccommodationRating>{renderStars()}</S.AccommodationRating>
      </S.AccommodationHostInfos>
      <S.DropdownList>
        <Dropdown title="Description" content={accommodation.description} />
        <Dropdown
          title="Équipements"
          content={
            <ul>
              {accommodation.equipments.map((equipment, index) => (
                <S.AccommodationEquipments key={index}>
                  {equipment}
                </S.AccommodationEquipments>
              ))}
            </ul>
          }
        />
      </S.DropdownList>
    </S.AccommodationContainer>
  );
}

export default Accommodation;
