import React from "react";
import * as S from "./Error.styles";

function Error() {
  return (
    <S.ErrorContainer>
      <S.ErrorTitle>404</S.ErrorTitle>
      <S.ErrorTextLargeScreen>
        Oups! La page que vous demandez n'existe pas.
      </S.ErrorTextLargeScreen>
      <S.ErrorTextSmallScreen>
        Oups! La page que
        <br />
        vous demandez n'existe pas.
      </S.ErrorTextSmallScreen>
      <S.ErrorLink to="/">Retourner sur la page d’accueil</S.ErrorLink>
    </S.ErrorContainer>
  );
}

export default Error;
