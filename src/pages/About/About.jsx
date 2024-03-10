import React from "react";
import * as S from "./About.styles";
import aboutImage from "../../assets/aboutImage.png";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";

function About() {
  return (
    <>
      <Banner
        bannerImage={aboutImage}
        bannerImageStyle={{ filter: "brightness(70%)" }} // J'ai ajouté ce props pour changer la luminosité de l'image sur cette page uniquement
      />
      <S.DropdownList>
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
        toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </S.DropdownList>
    </>
  );
}

export default About;
