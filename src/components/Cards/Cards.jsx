import React from "react";
import * as S from "./Cards.styles";
import data from "../../assets/logements.json";

function Cards(props) {
  return (
    <S.CardContainer {...props}>
      {data.map((item) => (
        <S.StyledLink to={`/accommodation/${item.id}`} key={item.id}>
          <S.Cards src={item.cover} {...props} />
          <S.CardTitle>{item.title}</S.CardTitle>
        </S.StyledLink>
      ))}
      <S.InvisibleCard {...props} />
    </S.CardContainer>
  );
}

export default Cards;
