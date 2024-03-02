import React from "react";
import * as S from "./About.styles";
import aboutImage from "../../assets/aboutImage.png";

function About() {
  return (
    <>
      {/* Voir si il est possible de réutiliser la banner de l'accueil */}
      <S.AboutImage src={aboutImage} />
      {/* Mettre le dropsdown ici */}
    </>
  );
}

export default About;
