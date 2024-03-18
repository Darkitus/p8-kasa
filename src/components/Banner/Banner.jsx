import React from "react";
import * as S from "./Banner.styles";

const Banner = ({ bannerTitle, ...props }) => {
  return (
    <S.BannerContainer {...props}>
      <S.BannerImage {...props} />
      {bannerTitle && (
        <S.BannerTitle {...props}>{bannerTitle}</S.BannerTitle>
      )}{" "}
      {/* ^Si le titre existe sur la page où la bannière est affiché, alors il s'affiche */}
    </S.BannerContainer>
  );
};

export default Banner;
