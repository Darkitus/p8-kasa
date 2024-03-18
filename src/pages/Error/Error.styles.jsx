import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 89px 0 139px 0;
  row-gap: 139px;
  @media (max-width: 999px) {
    row-gap: 113px;
    margin: 89px 0 113px 0;
`;

export const ErrorTitle = styled.h1`
  color: #ff6060;
  font-size: 288px;
  font-weight: 700;
  @media (max-width: 1200px) {
    font-size: 192px;
  }
  @media (max-width: 999px) {
    font-size: 96px;
  }
`;

export const ErrorText = styled.span`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 999px) {
    font-size: 18px;
  }
`;

export const ErrorTextSmallScreen = styled(ErrorText)`
  display: none;
  @media (max-width: 375px) {
    display: block;
  }
`;

export const ErrorTextLargeScreen = styled(ErrorText)`
  @media (max-width: 375px) {
    display: none;
  }
`;

export const ErrorLink = styled(Link)`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 999px) {
    font-size: 14px;
  }
`;
