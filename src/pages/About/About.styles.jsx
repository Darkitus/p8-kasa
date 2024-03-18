import styled from "styled-components";

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 38px;
  row-gap: 30px;
  @media (max-width: 999px) {
    margin-bottom: 19px;
    row-gap: 20px;
  }
`;

export const DropdownTitle = styled.span`
  @media (max-width: 999px) {
    font-size: 18px;
  }
  @media (max-width: 540px) {
    font-size: 13px;
  }
`;

export const DropdownDescription = styled.p`
  @media (max-width: 999px) {
    font-size: 12px;
  }
`;
