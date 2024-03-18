import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./Accommodation.styles";
import Carousel from "../../components/Carousel/Carousel";
import accommodationsData from "../../assets/logements.json";
import Dropdown from "../../components/Dropdown/Dropdown";

function Accommodation() {
  const { id } = useParams(); // Récupération de l'id du logement depuis l'URL
  const navigate = useNavigate(); // Hook de navigation
  const accommodation = accommodationsData.find((item) => item.id === id); // Récupération des données du logement en fonction de l'id

  useEffect(() => {
    if (!accommodation) {
      navigate("/non-existent-route"); // Redirection vers la page d'erreur si le logement n'existe pas
    }
  }, [accommodation, navigate]);

  if (!accommodation) {
    return null;
  }

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

  const dropdownProps = {
    $headerBorderRadius: "15px",
    $containerWidth550px: "100%",
    $headerBorderRadius550px: "5px",
    $headerHeight550px: "30px",
    $headerPadding550px: "0 10px",
    $titleFontSize: "18px",
    $arrowHeight550px: "24px",
    $arrowWidth550px: "24px",
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
        <Dropdown
          {...dropdownProps}
          title={<S.DropdownTitle>Description</S.DropdownTitle>}
          content={
            <S.DropdownDescription>
              {accommodation.description}
            </S.DropdownDescription>
          }
        />
        <Dropdown
          {...dropdownProps}
          title={<S.DropdownTitle>Équipements</S.DropdownTitle>}
          content={
            <ul>
              {accommodation.equipments.map((equipment, index) => (
                <S.DropdownEquipments key={index}>
                  {equipment}
                </S.DropdownEquipments>
              ))}
            </ul>
          }
        />
      </S.DropdownList>
    </S.AccommodationContainer>
  );
}

export default Accommodation;
