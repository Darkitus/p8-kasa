import { styled, keyframes } from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 81%;
  height: 100%;
  @media (max-width: 999px) {
    width: ${(props) => props.$containerWidth999px};
  }
  @media (max-width: 550px) {
    width: ${(props) => props.$containerWidth550px};
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ff6060;
  padding: 10px 15px;
  border-radius: ${(props) => props.$headerBorderRadius};
  z-index: 1;
  @media (max-width: 999px) {
    height: ${(props) => props.$headerHeight999px};
    padding: ${(props) => props.$headerPadding999px};
  }
  @media (max-width: 550px) {
    height: ${(props) => props.$headerHeight550px};
    padding: ${(props) => props.$headerPadding550px};
  }
`;

export const DropdownTitle = styled.span`
  color: #ffffff;
  align-self: center;
  font-size: ${(props) => props.$titleFontSize};
  font-weight: 700;
`;

export const DropdownArrow = styled.img`
  align-self: center;
  height: 32px;
  width: 32px;
  cursor: pointer;
  @media (max-width: 999px) {
    height: ${(props) => props.$arrowHeight999px};
    width: ${(props) => props.$arrowWidth999px};
  }
  @media (max-width: 550px) {
    height: ${(props) => props.$arrowHeight550px};
    width: ${(props) => props.$arrowWidth550px};
  }
  transition: transform 0.3s ease-in-out;
  &.open {
    transform: rotate(-180deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 0;
  }
  to {
    padding-top: 0;
    padding-bottom: 0;
    height: 0;
    opacity: 0;
    transform: translateY(-60px);
  }
`;

export const DropdownContent = styled.div`
  display: flex;
  background: var(--Gray, rgba(246, 246, 246, 0.45));
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  font-size: 18px;
  font-weight: 400;
  z-index: 0;
  &.open {
    animation: ${fadeIn} 0.3s ease-out forwards;
  }
  &.close {
    animation: ${fadeOut} 0.3s ease-out forwards;
  }
`;
