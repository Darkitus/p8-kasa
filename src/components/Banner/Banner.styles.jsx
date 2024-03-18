import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: relative;
  margin-bottom: 43px;
  width: 100%;
  height: clamp(
    111px,
    30vw,
    223px
  ); // Utilise clamp pour définir une taille minimale et maximale pour la bannière
  @media (max-width: 999px) {
    margin-bottom: ${(props) => props.$bannerContainerMarginBottom999px}
`;

export const BannerImage = styled.img.attrs((props) => ({
  src: props.$bannerImage,
}))`
  position: absolute;
  border-radius: 25px;
  width: 100%;
  height: clamp(
    111px,
    30vw,
    100%
  ); // Utilise clamp pour définir une taille minimale et maximale pour la bannière
  object-fit: cover;
  box-shadow: ${(props) =>
    props.$bannerImageShadow ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
  filter: brightness(${(props) => props.$bannerImageBrightness || "100%"});
  @media (max-width: 999px) {
    border-radius: ${(props) => props.$bannerImageBorderRadius999px};
  }
`;

export const BannerTitle = styled.h1`
  color: #ffffff;
  position: absolute;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 940px) {
    font-size: ${(props) => props.$titleFontSize940px};
  }
  @media (max-width: 730px) {
    font-size: ${(props) => props.$titleFontSize730px};
  }
  @media (max-width: 440px) {
    max-width: ${(props) => props.$titleMaxWidth440px};
    left: ${(props) => props.$titlePositionLeft440px};
  }
`;
