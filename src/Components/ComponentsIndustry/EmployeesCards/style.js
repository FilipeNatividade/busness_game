import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_input.svg");
  background-size: 110%;
  background-position: center;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto 0;
  max-width: 375px;
  position: relative;
`;

export const TitleContainer = styled.h2`
  align-items: center;
  background-color: #fa821f;
  border-radius: 25px;
  color: #fff;
  display: flex;
  font-size: 18px;
  justify-content: center;
  min-height: 40px;
  position: relative;
  width: 100%;
`;

export const IconCommercial = styled.img`
  height: 100%;
  margin-left: -89%;
  position: absolute;
  height: 80%;
`;

export const BottomBar = styled.div`
  background-color: #fa821f;
  border-radius: 0 0 25px 25px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.2);

  height: 30px;
  width: 100%;
`;

export const ContainerCard = styled.div`
  align-items: flex-end;
  background-color: #fff;
  border-radius: 60px 25px 0 0;
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 10px;
  width: 280px;
`;

export const Title = styled.div`
  align-items: center;
  color: #fff;
  border-radius: 75px;
  background-color: #fa821f;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  padding: 2px;
  width: 90%;
  p {
    font-size: 15px;
    text-align: center;
    width: 130px;
  }
`;

export const Icon = styled.div`
  background-image: url("./images/commercial_manager.svg");
  background-color: #fa821f;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  border-radius: 50%;
  height: 90px;
  margin: 50px 0 0 -30px;
  width: 90px;
`;

export const IconLevel = styled.small`
  align-items: center;
  background-color: #124d6c;
  border-radius: 50px;
  color: #2afaa5;
  display: flex;
  font-size: 14px;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

export const Paragraph = styled.p`
  border-radius: 0 20px 0 0;
  color: #4d4949;
  font-size: 15px;
  margin: 25px 0;
  width: 60%;
`;

export const FooterPrice = styled.footer`
  align-items: center;
  background-color: #666;
  color: #2afaa5;
  height: 35px;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  justify-content: space-between;
  padding-left: 5px;
  width: 100%;

  .containerFooter {
    align-items: center;
    display: flex;
    img {
      border-radius: 50px;
      height: 30px;
      margin-right: 12px;
    }
  }
  p {
    margin-left: 5px;
    font-size: 12px;
  }
`;

export const ContainerButton = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: flex-start;
`;

export const Buttons = styled.button`
  align-items: center;
  border-radius: 50px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

export const Display = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid #666;
  color: #000;
  display: flex;
  font-size: 25px;
  height: 54px;
  justify-content: center;
  margin-right: -10px;
  width: 54px;
`;
