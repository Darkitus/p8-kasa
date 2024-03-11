import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/ratingStar.svg";

export const AccommodationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const AccommodationInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const AccommodationTitle = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ff6060;
`;

export const AccommodationLocation = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
`;

export const AccommodationTags = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0 24px 0;
  border-radius: 10px;
`;

export const AccommodationTag = styled.span`
  padding: 3px 40px;
  background-color: #ff6060;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 25px;
`;

export const AccommodationHostInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20%;
  row-gap: 20px;
  align-self: flex-start;
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
`;

export const HostLastName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #ff6060;
`;

export const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const AccommodationRating = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const StyledStar = styled(Star)`
  width: 30px;
  height: 30px;
`;

export const DropdownList = styled.div`
  display: flex;
  column-gap: 76px;
  width: 100%;
  margin-bottom: 50px;
`;

export const AccommodationEquipments = styled.li`
  list-style-type: none;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
`;
