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

export const ContainerCard = styled.div`
  background-color: #054d6c;
  border-radius: 50px 20px 0 0;
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 300px;
  line-height: 1.5;
  position: relative;
  width: 90%;
`;

export const Title = styled.div`
  align-items: center;
  border-radius:100px 50px 50px 0;
  background-color: #fa821f;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  height: 45px;
  justify-content: space-between;
  width: 100%;
  p {
    text-align: center;
  }
`;

export const Icon = styled.div`
  background-image: url("./images/commercial_manager.svg");
  background-color: #fa821f;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  border-radius: 50px;
  height: 80px;
  margin-top: 35px;
  width: 80px;
`;

export const Description = styled.p`
  align-items: center;
  border-bottom: 1px solid #fff;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  padding-left: 100px;
  width: 90%;
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-position: center;
  border-radius: 50px;
  height: 50px;
  width: 50px;
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
  color: #2afaa5;
  display: flex;
  font-size: 25px;
  font-weight: bold;
  justify-content: space-between;
  margin: -20px auto 10px;
  width: 95%;
  img {
    margin-right: 10px;
    height: 25px;
  }
  div {
    align-items: center;
    display: flex;
  }
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
  margin-right: 2px;
  width: 40px;
`;

export const TrainButton = styled.button`
  background-color: #fa821f;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  height: 70px;
  width: 100%;
`;
