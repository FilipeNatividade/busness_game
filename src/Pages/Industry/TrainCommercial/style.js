import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SizeContainer = styled.div`
  align-items: center;
  background-size: contain;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
`;

export const HeaderPage = styled.header`
  width: 100%;
`;

export const Title = styled.h1`
  align-items: center;
  background: #fa821f;
  display: flex;
  font-size: 30px;
  flex-direction: column;
  justify-content: center;
  height: 64px;
  margin: 20px 0;
  position: relative;
  width: 100%;
`;

export const TitleSection = styled.h2`
  align-items: center;
  background: #fa821f;
  border-radius: 150px 0 0 50px;
  box-shadow: -2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  height: 64px;
  text-align: center;
  width: 100%;
`;

export const ContainerImgTitle = styled.div`
  background-image: url("./images/financial_administration_button.svg");
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: center;
  background-color: #fa821f;
  border-radius: 50%;
  box-shadow: -2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  height: 90px;
  margin-top: 28px;
  width: 90px;
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-color: transparent;
  height: 64px;
  width: 64px;
`;

export const NavTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto;
  width: 100%;
`;

export const IconSelection = styled.img`
  border: 5px solid #054d6c;
  border-radius: 50px;
  margin: 0 5px;
  width: 40px;
`;

export const IconNotSelection = styled(IconSelection)`
  border: 5px solid #fa821f;
`;
