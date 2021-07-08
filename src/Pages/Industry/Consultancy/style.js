import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  margin-bottom: 25px;
  width: 100%;
`;

export const ContainerCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 230px;
  margin: 50px auto;
  width: 90%;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: bolder;
  text-align: center;
`;

export const ButtonInfo = styled.button`
  background-color: #fa821f;
  border-radius: 25px;
  color: #fff;
  font-size: 25px;
  font-weight: bolder;
  height: 60px;
  margin: 20px auto 0;
  width: 90%;
`;

export const ImgFooter = styled.img`
  margin: 50px 30px 0;
  width: 200px;
`;
