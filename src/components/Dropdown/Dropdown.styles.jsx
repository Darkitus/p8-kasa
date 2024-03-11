import { styled, keyframes } from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 81%;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ff6060;
  padding: 10px 15px;
  border-radius: 5px;
  z-index: 1;
`;

export const DropdownTitle = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
`;

export const DropdownArrow = styled.img`
  height: 32px;
  width: 32px;
  transition: transform 0.3s ease-in-out;
  &.open {
    transform: rotate(-180deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-80px);
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
    transform: translateY(-80px);
  }
`;

export const DropdownContent = styled.div`
  display: flex;
  background: var(--Gray, rgba(246, 246, 246, 0.45));
  border-radius: 5px;
  padding: 25px 20px 20px 20px;
  font-size: 18px;
  font-weight: 400;
  z-index: 0;
  &.open {
    animation: ${fadeIn} 0.5s ease-out forwards;
  }
  &.close {
    animation: ${fadeOut} 0.5s ease-out forwards;
  }
`;
