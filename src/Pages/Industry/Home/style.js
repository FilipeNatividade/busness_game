import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_login.svg");
  display: flex;
  justify-content: center;
  width: 100;
`;

export const SizeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 812px;
  margin: 0 auto;
  height: 100vh;
  max-width: 500px;
  width: 100%;
`;

export const LogoImg = styled.img`
  margin: 24px auto;
  width: 247px;
`;

export const ContainerGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

export const ButtonGame = styled.button`
  align-items: center;
  border-radius: 15px;
  background-color: #fa821f;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 15px;
  height: 50px;
  justify-content: center;
  margin: 15px auto;
  position: relative;
  width: 250px;
  @media only screen and (min-width: 320px) and (max-width: 580px) {
    font-size: 18px;
    height: 70px;
    padding: 0 50px;
  }
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    font-size: 22px;
    height: 80px;
    width: 375px;
  }
  @media only screen and (min-width: 769px) {
    font-size: 25px;
    height: 90px;
    padding: 0 80px;
    width: 375px;
  }
`;

export const ImgButtonGame = styled.img`
  margin-left: -190px;
  position: absolute;
  width: 15%;
  @media only screen and (min-width: 281) and (max-width: 580px) {
    margin-left: -300px;
    width: 50px;
  }
  @media only screen and (min-width: 581px) and (max-width: 768px) {
    margin-left: -290px;
    width: 50px;
  }
  @media only screen and (min-width: 769px) {
    margin-left: -290px;
    width: 60px;
  }
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
  height: 60px;
  margin: 15px 10px 15px 70%;
  width: 60px;
`;
