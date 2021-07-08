import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_gray.svg");
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
`;

export const InternalMenu = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  button {
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    display: flex;
    height: 50px;
    justify-content: center;
    margin: 0 5px;
    width: 50px;
    img {
      width: 100%;
    }
  }
  .selected {
    border: 3px solid white;
    height: 70px;
    width: 70px;
  }
`;

export const ContainerCard = styled.div`
  align-items: center;
  background-color: #eb6d03;
  border-radius: 20px;
  color: #fff;
  display: flex;
  font-size: 15px;
  font-weight: bolder;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px 0;
  width: 90%;
  span{
    font-size: 30px;
  }
  p {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
    width: 100%;
    small {
      border-radius: 50px;
      background-color: #fff;
      color: #a1a1a1;
      font-weight: bolder;
      font-size: 18px;
      padding: 10px 0;
      text-align: center;
      width: 100px;
    }
  }
  .column {
    flex-direction: column;
  }
`;

export const SubContainerCard = styled.div`
  background-color: #fa821f;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;
  width: 95%;
`;

export const DivSubContainerCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  p {
    text-align: center;
  }
  img {
    width: 100px;
    margin-top: 20px;
  }
  small {
    background-color: #fff;
    border-radius: 50px;
    color: #a1a1a1;
    font-size: 20px;
    font-weight: bolder;
    padding: 5px 0;
    text-align: center;
  }
`;

export const SignalYellow = styled.span`
  border: 2px solid yellow;
  border-radius: 50%;
  height: 30px;
  margin: 5px 0;
  width: 30px;
    background-color: #ffd700;
    box-shadow: 0 0 5px 5px rgba(255, 215, 0, 0.5);
`;

export const Confirm = styled.button`
  background-color: #fa821f;
  color: #fff;
  font-size: 30px;
  height: 70px;
  width: 100%;
`;