import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 43px;
  width: 100%;
  height: 223px;
`;

export const BannerImage = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
  box-shadow: ${(props) =>
    props.$shadow ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
`;

export const BannerTitle = styled.h1`
  color: #ffffff;
  position: absolute;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
