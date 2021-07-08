import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backgorud_Map_Menu_marketplace.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 812px;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TotalValue = styled.h2`
  align-items: center;
  background-color: #eb6d03;
  border-radius: 0 25px 25px 0;
  border: 3px solid #fff;
  border-left: none;
  color: #fff;
  display: flex;
  font-size: 18px;
  height: 45px;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
`;

export const PlayngTime = styled.button`
  align-items: center;
  background-color: #eb6d03;
  border-radius: 25px 0 0 25px;
  color: #fff;
  display: flex;
  font-size: 18px;
  height: 45px;
  justify-content: flex-start;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
`;

export const HeaderImg = styled.img`
  padding-right: 5px;
  width: 18px;
`;

export const ContainerButtonTime = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 10px;
  width: 100%;
`;

export const TimeButton = styled.button`
  background-color: transparent;
  align-items: center;
  border-radius: 50px;
  display: flex;
  height: 25px;
  justify-content: center;
  margin: 0 5px;
  width: 25px;
`;
export const ImpotEx = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  padding-top: 10px;
  width: 100%;
`;
export const ImpExButton = styled.button`
  background-color: #eb6d03;
  color: #fff;
  align-items: center;
  border-radius: 50px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 10px 25px;
  width: 100px;
  &:first-child {
    margin-bottom: 10px;
  }
`;
export const ContainerMenu = styled.button`
  align-items: center;
  background-color: #eb6d03;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  width: 100%;

  > img {
    width: 50px;
  }
`;
