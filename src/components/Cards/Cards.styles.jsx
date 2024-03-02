import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 92%;
  height: 100%;
  background-color: #f6f6f6;
  border-radius: 25px;
  justify-items: center;
  padding: 43px 50px 50px 50px;
  margin: 0 50px 50px 0;
  row-gap: 50px;
`;

export const Cards = styled.div`
  display: flex;
  flex: 0 0 30%;
  height: 340px;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(191, 80, 80, 1) 0%,
    rgba(255, 96, 96, 1) 61%
  );
`;

export const InvisibleCard = styled.div`
  flex: 0 0 30%;
  visibility: hidden;
`;

export const CardTitle = styled.h2`
  display: flex;
  align-self: flex-end;
  padding: 0 20px 0 20px;
  color: #ffffff;
  font-size: 1.3vw;
  font-weight: 700;
  min-height: 4.5vw;
`;
