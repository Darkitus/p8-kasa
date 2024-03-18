import React from "react";
import * as S from "./About.styles";
import aboutImage from "../../assets/aboutImage.png";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";

function About() {
  const bannerProps = {
    $bannerContainerMarginBottom999px: "19px",
    $bannerImage: aboutImage,
    $bannerImageBrightness: "70%",
    $bannerImageBorderRadius999px: "10px",
  };

  const dropdownProps = {
    $containerWidth999px: "100%",
    $headerBorderRadius: "5px",
    $headerHeight999px: "30px",
    $headerPadding999px: "0 10px",
    $titleFontSize: "24px",
  };

  return (
    <>
      <Banner {...bannerProps} />
      <S.DropdownList>
        <Dropdown
          {...dropdownProps}
          title={<S.DropdownTitle>Fiabilité</S.DropdownTitle>}
          content={
            <S.DropdownDescription>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </S.DropdownDescription>
          }
        />
        <Dropdown
          {...dropdownProps}
          title={<S.DropdownTitle>Respect</S.DropdownTitle>}
          content={
            <S.DropdownDescription>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </S.DropdownDescription>
          }
        />
        <Dropdown
          {...dropdownProps}
          title={<S.DropdownTitle>Service</S.DropdownTitle>}
          content={
            <S.DropdownDescription>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </S.DropdownDescription>
          }
        />
        <Dropdown
          {...dropdownProps}
          title={<S.DropdownTitle>Sécurité</S.DropdownTitle>}
          content={
            <S.DropdownDescription>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </S.DropdownDescription>
          }
        />
      </S.DropdownList>
    </>
  );
}

export default About;
