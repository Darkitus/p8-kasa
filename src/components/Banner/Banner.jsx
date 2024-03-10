import React from "react";
import * as S from "./Banner.styles";

const Banner = (props) => {
  const showTitle = props.bannerTitle ? true : false;
  return (
    <S.BannerContainer>
      <S.BannerImage
        src={props.bannerImage}
        style={props.bannerImageStyle}
        $shadow={props.shadow}
      />
      {showTitle && <S.BannerTitle>{props.bannerTitle}</S.BannerTitle>}
    </S.BannerContainer>
  );
};

export default Banner;
