import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 89px 0 139px 0;
  row-gap: 139px;
`;

export const ErrorTitle = styled.h1`
  color: #ff6060;
  font-size: 20vw;
  font-weight: 700;
`;

export const ErrorText = styled.span`
  color: #ff6060;
  font-size: 2.5vw;
  font-weight: 500;
`;

export const ErrorLink = styled(Link)`
  color: #000000;
  font-size: 1.3vw;
  font-weight: 500;
`;