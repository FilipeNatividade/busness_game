import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 2;
`;

export const MainContainer = styled.div`
  align-items: center;
  border-radius: 30px;
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 375px;
  width: 90%;
`;

export const Header = styled.h3`
  align-items: center;
  border-radius: 50px;
  background-color: #054d6c;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding:0 2px 0 15px;
  width: 100%;
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-position: center;
  border-radius: 50px;
  height: 55px;
  width: 55px;
`;

export const ContainerCard = styled.div`
  background-color: #fff;
  border-radius: 50px 20px 20px;
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto;
  line-height: 1.5;
  position: relative;
  width: 90%;
`;

export const Icon = styled.div`
  background-image: url("./images/commercial_manager.svg");
  background-color: #fa821f;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  border-radius: 50%;
  height: 100px;
  margin: -2px;
  position: absolute;
  width: 100px;
`;

export const Title = styled.div`
  align-items: center;
  border-radius: 50px;
  background-color: #fa821f;
  color: #fff;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  margin: 0 auto;
  margin-left: 25px;
  padding-left: 75px;
  width: 91%;
  p {
    width: 85%;
  }
`;

export const Description = styled.p`
  align-items: center;
  display: flex;
  font-size: 14px;
  margin: 15px auto;
  padding: 20px 0;
  padding-left: 100px;
  /* text-align: start; */
`;

export const TrainingFocus = styled.h4`
  font-size: 18px;
  margin: 10px auto 20px;
  width: 90%;
`;

export const TrainingDescription = styled.p`
  font-size: 14px;
  color: #2afaa5;
  margin: 0 auto;
  padding-right: 30%;
  width: 90%;
`;

export const Value = styled.p`
  align-items: center;
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: #2afaa5;
  margin: -20px auto 10px;
  width: 90%;
  img {
    margin-right: 10px;
    height: 25px;
  }
`;

export const IconLevel = styled.small`
  align-items: center;
  background-color: #124d6c;
  border-radius: 50px;
  color: #2afaa5;
  display: flex;
  font-size: 14px;
  height: 35px;
  justify-content: center;
  width: 35px;
`;

export const TrainButton = styled.button`
  box-shadow: 0 -1px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background-color: #fa821f;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  height: 70px;
  width: 100%;
`;
