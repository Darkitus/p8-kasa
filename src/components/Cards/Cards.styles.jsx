import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  background-color: ${(props) => props.$cardContainerBackgroundColor};
  border-radius: 25px;
  justify-items: center;
  padding: ${(props) => props.$cardContainerPadding};
  gap: ${(props) => props.$cardContainerGap};
  margin-bottom: ${(props) => props.$cardContainerMarginBottom};
  @media (max-width: 859px) {
  }
  @media (max-width: 590px) {
    background-color: ${(props) =>
      props.$cardContainerBackgroundColorWidth590px};
    gap: ${(props) => props.$cardContainerGap590px};
    padding: ${(props) => props.$cardContainerPadding590px};
    margin-bottom: ${(props) => props.$cardContainerMarginBottom590px};
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  border-radius: 10px;
  text-decoration: none;
`;

export const Cards = styled.img`
  display: flex;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 1350px) {
    width: ${(props) => props.$cardsWidth1350px};
    height: ${(props) => props.$cardsHeight1350px};
  }
  @media (max-width: 859px) {
    height: ${(props) => props.$cardsHeight590px};
`;

export const InvisibleCard = styled.div`
  width: 340px;
  visibility: hidden;
  @media (max-width: 1399px) {
    display: ${(props) => props.$invisibleCardDisplayNone1399px};
  }
  @media (min-width: 1790px) {
    display: ${(props) => props.$invisibleCardDisplayNone1790px};
  }
`;

export const CardTitle = styled.h2`
  position: absolute;
  bottom: 20px;
  padding: 0 10px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Ombre portée pour rendre le texte plus lisible sur certaines images
`;
