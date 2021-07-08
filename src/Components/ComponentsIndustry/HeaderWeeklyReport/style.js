import styled from "styled-components";

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
  background-color: #666;
  border-radius: 0 25px 25px 0;
  color: #2afaa5;
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

export const TitleContent = styled.div`
  align-items: center;
  background-color: #fa821f;
  color: #fff;
  display: flex;
  justify-content: center;
  margin: 70px auto 0;
  position: relative;
  padding: 20px 0;
  width: 100%;
  img {
    border: 7px solid #fa821f;
    border-radius: 50px;
    margin-top: -100px;
    position: absolute;
    width: 70px;
  }
  p {
    font-size: 18px;
    width: 40%;
    text-align: center;
    z-index: 1;
  }
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-color: transparent;
  background-size: contain;
  height: 60px;
  margin-right: -78%;
  position: absolute;
  width: 60px;
`;

export const ContainerTools = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  margin: 35px auto ;
  width: 100%;
  .selection {
    height: 90px;
    width: 90px;
  }
`;

export const ButtonContainerTools = styled.button`
  border-radius: 50px;
  border: 3px solid #2afaa5;
  height: 50px;
  width: 50px;
  img {
    height: 100%;
  }
`;
