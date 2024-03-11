import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 92%;
  height: 100%;
  background-color: #f6f6f6;
  border-radius: 25px;
  justify-items: center;
  padding: 43px 50px 50px 50px;
  margin: 0 50px 50px 0;
  gap: 50px 50px;
`;

export const StyledLink = styled(Link)`
  position: relative;
  height: 340px;
  border-radius: 10px;
  text-decoration: none;
`;

export const Cards = styled.img`
  display: flex;
  height: 340px;
  width: 340px;
  border-radius: 10px;
  object-fit: cover;
`;

export const InvisibleCard = styled.div`
  flex: 0 0 30%;
  visibility: hidden;
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
