import styled from "styled-components";

export const Container = styled.div`
  background-color: #366796;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const SizeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
`;

export const MainContainer = styled.div`
  background-color: #366796;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  h2 {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    span {
      color: #2afaa5;
      font-size: 25px;
    }
  }
`;

export const FirstContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const InternalFirstContainer = styled.div`
  align-items: center;
  background-color: #eb6d03;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 90px;
  width: 48%;
  h3 {
    align-items: center;
    border-radius: 15px 15px 0 0;
    background-color: #fa821f;
    box-shadow: 0 2px 20px -1px rgba(0, 0, 0, 0.5);
    display: flex;
    font-size: 13px;
    height: 35px;
    justify-content: flex-end;
    position: relative;
    padding-right: 25px;
    width: 100%;
    img {
      height: 90%;
      margin-right: 120px;
      position: absolute;
    }
  }
  p {
    color: #2afaa5;
    font-size: 25px;
    font-weight: bold;
    margin: 10px auto;
  }
  .background {
    align-items: center;
    border-radius: 25px;
    background-color: #fff;
    display: flex;
    height: 40px;
    justify-content: center;
    margin: 8px auto;
    width: 70%;
  }
`;

export const SecondContainer = styled.div`
  align-items: center;
  background-color: #eb6d03;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 170px;
  margin: 5px auto;

  width: 98%;
  h3 {
    align-items: center;
    border-radius: 15px 15px 0 0;
    background-color: #fa821f;
    box-shadow: 0 2px 20px -1px rgba(0, 0, 0, 0.5);
    display: flex;
    font-size: 20px;
    height: 35px;
    justify-content: center;
    width: 100%;
  }
`;

export const InternalSecondContainer = styled.div`
  align-items: center;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  margin: 12px auto;
  position: relative;
  padding: 0 25px;
  width: 100%;
`;

export const RotationInternalSecondContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  color: #366796;
  display: flex;
  flex-direction: column;
  height: 110px;
  position: relative;
  padding-top: 5px;
  width: 110px;
  img {
    width: 70px;
  }
  button {
    border-radius: 50px;
    background-color: #fff;
    border: 2px solid #366796;
    height: 35px;
    position: absolute;
    margin: 70px -80px 5px 0;
    width: 35px;
  }
  .checked {
    background-image: url("./images/checkin_on.svg");
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const ThirdContainer = styled.div`
  align-items: center;
  background-color: #eb6d03;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  width: 98%;
  h3 {
    align-items: center;
    border-radius: 15px 15px 0 0;
    background-color: #fa821f;
    box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    font-size: 20px;
    height: 45px;
    justify-content: center;
    width: 100%;
    img {
      height: 35px;
      margin-left: -160px;
      position: absolute;
    }
    small {
      font-size: 12px;
    }
  }
`;

export const UpThirdContainer = styled.div`
  align-items: center;
  background-color: #eb6d03;
  display: flex;
  flex-direction: column;
  height: 180px;
  margin: 5px auto;
  padding: 10px;
  width: 100%;
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
    position: relative;
    width: 100%;
    img {
      width: 32px;
    }
    .cifrao {
      margin-left: 92%;
      position: absolute;
    }
    p {
      margin-left: 5px;
      width: 60%;
    }
    input {
      border-radius: 25px;
      color: #2afaa5;
      font-size: 15px;
      height: 33px;
      padding-left: 10px;
      width: 100px;
      ::-webkit-input-placeholder {
        color: #2afaa5;
        font-weight: bolder;
      }
      :-moz-placeholder {
        color: #2afaa5;
        font-weight: bolder;
      }
      ::-moz-placeholder {
        color: #2afaa5;
        font-weight: bolder;
      }
      :-ms-input-placeholder {
        color: #2afaa5;
        font-weight: bolder;
      }
    }
  }
`;

export const DownThirdContainer = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto 0;
  padding: 10px;
  width: 100%;
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
    width: 100%;
    p {
      width: 40%;
    }
    .value {
      align-items: center;
      background-color: #fff;
      border-radius: 25px;
      color: #2afaa5;
      display: flex;
      font-size: 30px;
      height: 55px;
      justify-content: space-between;
      padding-left: 15px;
      width: 190px;
    }
    img {
      width: 55px;
    }
  }
`;
