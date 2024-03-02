import React from "react";
import * as S from "./Banner.styles";
import bannerImage from "../../assets/bannerImage.png";

function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerImage src={bannerImage} />
      <S.BannerTitle>Chez vous, partout et ailleurs</S.BannerTitle>
    </S.BannerContainer>
  );
}

export default Banner;
