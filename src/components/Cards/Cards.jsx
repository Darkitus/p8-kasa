import React from "react";
import * as S from "./Cards.styles";
import data from "../../assets/logements.json";

function Cards() {
  return (
    <S.CardContainer>
      {data.map((item) => (
        <S.StyledLink to={`/accommodation/${item.id}`} key={item.id}>
          <S.Cards>
            <S.CardTitle>{item.title}</S.CardTitle>
          </S.Cards>
        </S.StyledLink>
      ))}
      <S.InvisibleCard />
    </S.CardContainer>
  );
}

export default Cards;
