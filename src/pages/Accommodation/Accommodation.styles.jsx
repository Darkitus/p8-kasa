import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/ratingStar.svg";

export const AccommodationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

export const AccommodationInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 940px) {
    width: 100%;
    row-gap: 5px;
    align-self: flex-start;
  }
`;

export const AccommodationTitle = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ff6060;
  @media (max-width: 940px) {
    font-size: 18px;
`;

export const AccommodationLocation = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  @media (max-width: 940px) {
    font-size: 14px;
  }
`;

export const AccommodationTags = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0 24px 0;
  border-radius: 10px;
  @media (max-width: 940px) {
    margin: 10px 0 12px 0;
  }
`;

export const AccommodationTag = styled.span`
  padding: 3px 40px;
  background-color: #ff6060;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 25px;
  @media (max-width: 940px) {
    text-align: center;
    padding: 2.5px 14px;
    font-size: 10px;
    border-radius: 5px;
  }
`;

export const AccommodationHostInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20%;
  row-gap: 20px;
  align-self: flex-start;
  @media (max-width: 940px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 13px;
    align-items: center;
    align-self: flex-end;
    width: 100%;
  }
`;

export const AccommodationHost = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const HostName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HostFirstName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  @media (max-width: 940px) {
    font-size: 12px;
  }
`;

export const HostLastName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
  @media (max-width: 940px) {
    font-size: 12px;
  }
`;

export const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  @media (max-width: 940px) {
    width: 32px;
    height: 32px;
  }
`;

export const AccommodationRating = styled.div`
  display: flex;
  column-gap: 10px;
  @media (max-width: 940px) {
    column-gap: 5px;
  }
`;

export const StyledStar = styled(Star)`
  width: 30px;
  height: 30px;
  @media (max-width: 940px) {
    width: 18px;
    height: 18px;
  }
`;

export const DropdownList = styled.div`
  display: flex;
  column-gap: 76px;
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: 550px) {
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 27px;
  }
`;

export const DropdownTitle = styled.span`
  @media (max-width: 940px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 13px;
  }
`;

export const DropdownDescription = styled.p`
  @media (max-width: 940px) {
    font-size: 15px;
  }
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

export const DropdownEquipments = styled.li`
  list-style-type: none;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  @media (max-width: 940px) {
    font-size: 15px;
  }
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
