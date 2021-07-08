import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding:0 0 30px;
  width: 100%;
`;

export const FirstContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  color: #fff;
  display: flex;
  height: 125px;
  justify-content: flex-end;
  padding-left: 10px;
  position: relative;
  min-width: 150px;
  h3 {
    align-items: center;
    background-color: #fa821f;
    border-radius: 50px;
    display: flex;
    font-size: 14px;
    height: 32px;
    justify-content: center;
    margin-top: -110px;
    position: absolute;
    width: 100%;
  }
  p {
    color: #2afaa5;
    font-size: 55px;
    font-weight: bolder;
    margin-top: 20px;
  }
  small {
    align-items: center;
    background-color: #366796;
    border-radius: 50px;
    display: flex;
    height: 55px;
    justify-content: center;
    font-size: 30px;
    font-weight: bolder;
    margin: 20px 10px 0;
    width: 55px;
  }
`;

export const SecondContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  padding: 25px 0;
  width: 100%;
  h3 {
    margin-top: -130px;
  }
`;

export const LeftSecondContainer = styled(FirstContainer)`
  height: 140px;
  width: 150px;
  h3 {
    margin-top: -120px;
  }
  img {
    height: 29px;
    margin-right: 77%;
    position: absolute;
  }
`;

export const RigthSecondContainer = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 0 0 5px 0;
  color: #fff;
  display: flex;
  height: 100px;
  justify-content: space-around;
  margin-top: 10px;
  position: relative;
  width: 215px;
  h3 {
    align-items: center;
    background-color: #ff963f;
    border-radius: 0 15px 15px 0;
    display: flex;
    height: 25px;
    justify-content: center;
    margin-top: -100px;
    position: absolute;
    width: 100%;
    img {
      height: 22px;
      margin-left: 85%;
      position: absolute;
    }
  }
  img {
    height: 32px;
  }
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    small {
      border-radius: 50px;
      background-color: #ff963f;
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
      font-size: 10px;
      margin-top: 10px;
      padding: 2px 5px;
    }
  }
`;

export const ThirdContainer = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 0 0 10px 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-around;
  margin-top: 10px;
  position: relative;
  width: 180px;
  h3 {
    align-items: center;
    background-color: #ff963f;
    border-radius: 10px;
    display: flex;
    font-size: 15px;
    height: 25px;
    justify-content: center;
    margin-top: -25px;
    width: 100%;
  }
  p {
    align-items: center;
    color: #2afaa5;
    font-size: 20px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    img {
      height: 25px;
      margin-right: 5px;
    }
  }
  small{
      font-size: 10px;
  }
`;
