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
  width: 100%;
`;

export const ContainerCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  margin: 50px auto;
  position: relative;
  width: 230px;
`;

export const ImgCard = styled.img`
  height: 150px;
  margin: 45px 30px;
  position: absolute;
`;

export const LoanImgCard = styled(ImgCard)`
  height: 180px;
  margin: 45px 10px;
`;

export const Paragraph = styled.p`
  color: #fa821f;
  font-size: 22px;
  font-weight: bolder;
  margin: 10px auto;
  width: 100%;
  text-align: center;
`;

export const FooterPrice = styled.footer`
  align-items: center;
  background-color: #666;
  border-radius: 25px;
  color: #2afaa5;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  img {
    height: 80%;
    margin-left: -12px;
  }
`;

export const ImgFooter = styled.img`
  width: 100%;
`;
