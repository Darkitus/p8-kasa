import React from "react";
import * as S from "./Error.styles";

function Error() {
  return (
    <S.ErrorContainer>
      <S.ErrorTitle>404</S.ErrorTitle>
      <S.ErrorText>Oups! La page que vous demandez n'existe pas.</S.ErrorText>
      <S.ErrorLink to="/">Retourner sur la page d’accueil</S.ErrorLink>
    </S.ErrorContainer>
  );
}

export default Error;
