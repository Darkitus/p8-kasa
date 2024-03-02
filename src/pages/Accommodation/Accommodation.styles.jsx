import styled from "styled-components";

export const ColorBox = styled.input`
  background-color: blue;
`;

export const BorderBox = styled.div`
  // Création d'une boîte avec une bordure rouge //
  border: 1px solid red;
`;

export const SuperBorderBox = styled(BorderBox)`
  // SuperBorderBox hérite de BorderBox et remplace la couleur de la bordure //
  border: 5px solid green;
`;
