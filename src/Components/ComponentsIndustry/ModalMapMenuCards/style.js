import styled from "styled-components";

export const ContainerCard = styled.div`
  align-items: flex-end;
  background-color: #fff;
  border-radius: 25% 20px 0 0;
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  max-width: 280px;
  width: 90%;
`;

export const Title = styled.div`
  align-items: center;
  color: #fff;
  border-radius: 25px;
  background-color: #fa821f;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  padding: 2px 0;
  position: relative;
  width: 90%;
  p {
    width: 130px;
    text-align: center;
    font-size: 12px;
    text-align: center;
    z-index: 1;
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
  width: 90px;
  margin-left: -35px;
  margin-bottom: -50px;
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
  img {
    margin: 0 5px;
  }
`;

export const Buttons = styled.button`
  align-items: center;
  border-radius: 50px;
  background-color: transparent;
  display: flex;
  height: 20px;
  justify-content: center;
  margin: 0 5px;
  width: 20px;
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
