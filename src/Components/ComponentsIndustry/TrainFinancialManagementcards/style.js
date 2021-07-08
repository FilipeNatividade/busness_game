import styled from "styled-components";

export const ContainerCard = styled.div`
  align-items: flex-end;
  background-color: #fff;
  border-radius: 25% 20px 0 0;
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 30px 10px;
  max-width: 280px;
  width: 90%;
`;

export const Title = styled.div`
  align-items: center;
  color: #fff;
  border-radius: 100px 50px 50px 0;
  background-color: #fa821f;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  padding: 2px 0;
  position: relative;
  width: 100%;
  p {
    width: 130px;
    text-align: center;
    font-size: 15px;
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
  margin-bottom: -35px;
`;

export const Display = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 50%;
  color: #2afaa5;
  display: flex;
  font-size: 25px;
  font-weight: bolder;
  height: 54px;
  justify-content: center;
  margin-left: 50px;
  margin-top: 50px;
  position: absolute;
  width: 54px;
  z-index: 1;
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
  color: #4d4949;
  font-size: 15px;
  margin: 30px 10px;
  /* margin-left: 40%; */
  width: 50%;
`;

export const FooterPrice = styled.footer`
  display: flex;
  width: 100%;

  > button {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: 18px;
    font-weight: bold;
    height: 55px;
    justify-content: space-around;
    width: 50%;
    > img {
      width: 45px;
    }
  }
`;

export const ButtonTrain = styled.button`
  background-color: #054d6c;
  padding-right: 15px;
`;
export const ButtonDismiss = styled.button`
  background-color: #f23838;
  padding-left: 15px;
`;
