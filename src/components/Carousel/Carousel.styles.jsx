import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 25px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  border-radius: 25px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 415px;
  object-fit: cover;
  border-radius: 25px;
  @media (max-width: 550px) {
    height: 255px;
  }
`;

export const PrevButton = styled(LeftArrow)`
  position: absolute;
  left: 20px;
  z-index: 1;
  cursor: pointer;
  @media (max-width: 550px) {
    height: 24px;
    width: 24px;
  }
`;

export const NextButton = styled(RightArrow)`
  position: absolute;
  right: 20px;
  z-index: 1;
  cursor: pointer;
  @media (max-width: 550px) {
    height: 24px;
    width: 24px;
  }
`;

export const ImageCounter = styled.span`
  position: absolute;
  bottom: 25px;
  left: 50%;
  color: white;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 550px) {
    display: none;
  }
`;
