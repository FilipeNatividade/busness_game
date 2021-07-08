import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_login.svg");
  display: flex;
  width: 100%;
`;

export const SizeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.h1`
  align-items: center;
  background: #fa821f;
  display: flex;
  font-size: 20px;
  justify-content: center;
  height: 64px;
  margin: 20px auto;
  position: relative;
  width: 100%;
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50px;
  height: 60px;
  margin-left: 77%;
  position: absolute;
  width: 60px;
`;

export const ContainerGame = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  margin: 50px auto;
  width: 95%;
`;

export const ButtonFactory = styled.button`
  align-items: center;
  border-radius: 0 50px 50px 0;
  background: #fa821f;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding-right: 20px;
  width: 90%;
`;

export const ContainerImg = styled.div`
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  border: 6px solid #fa821f;
  display: flex;
  height: 125px;
  justify-content: center;
  margin-left: -26px;
  width: 125px;
`;
export const ImgFactory = styled.img`
  height: 80%;
  width: 80%;
`;

export const RightContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleFactory = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 0.7rem;
`;

export const ParagraphFactory = styled.p`
  align-items: center;
  color: #2afaa5;
  display: flex;
  font-weight: bold;
  @media only screen and (min-width: 370px) {
    font-size: 22px;
  }
`;

export const ImgParagraph = styled.img`
  height: 90%;
  margin-right: 5px;
`;
