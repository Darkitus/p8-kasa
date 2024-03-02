import React from "react";
import * as S from "./Cards.styles";
import data from "../../assets/logements.json";

function Cards() {
  const handleClick = (item) => {
    console.log(`Vous avez cliqué sur ${item.title}`);
  };

  return (
    <S.CardContainer>
      {data.map((item) => (
        <S.Cards key={item.id} onClick={() => handleClick(item)}>
          <S.CardTitle>{item.title}</S.CardTitle>
        </S.Cards>
      ))}
      <S.InvisibleCard />
    </S.CardContainer>
  );
}

export default Cards;
