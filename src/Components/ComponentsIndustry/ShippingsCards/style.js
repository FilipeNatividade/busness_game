import styled from "styled-components";

export const Container = styled.div`
  align-items: flex-end;
  border-radius: 50px 25px 0 0;
  background-color: #eb6d03;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  width: 350px;
`;

export const Header = styled.div`
  align-items: center;
  border-radius: 50px 25px 0 50px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2);
  background-color: #fa821f;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 35px;
  padding-right: 6px;
  height: 60px;
  width: 90%;
  img {
    border: 5px solid #fa821f;
    border-radius: 50px;
    box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2);
    margin-top: 40px;
    margin-left: -35px;
    padding: 0;
  }
  input {
    border-radius: 5px;
    font-size: 35px;
    height: 35px;
    text-align: center;
    width: 80px;
    ::-webkit-input-placeholder {
      color: rgba(115, 115, 115, 0.5);
      font-weight: bolder;
    }
    :-moz-placeholder {
      color: rgba(115, 115, 115, 0.5);
      font-weight: bolder;
    }
    ::-moz-placeholder {
      color: rgba(115, 115, 115, 0.5);
      font-weight: bolder;
    }
    :-ms-input-placeholder {
      color: rgba(115, 115, 115, 0.5);
      font-weight: bolder;
    }
  }
`;

export const MiddleContent = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  h3 {
    font-size: 15px;
    span {
      color: #2afaa5;
    }
  }
  p {
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
    box-sizing: border-box;
    color: #2afaa5;
    display: flex;
    font-size: 30px;
    font-weight: bold;
    height: 45px;
    justify-content: center;
    padding-right: 30px;
    position: relative;
    width: 145px;
    span {
      font-size: 15px;
      margin: 10px 0 0 5px;
    }
    img {
      height: 45px;
      margin-right: -140px;
      position: absolute;
    }
  }
`;

export const Footer = styled.div`
  align-items: center;
  background-color: #fa821f;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  h3 {
    font-size: 25px;
    span {
      font-size: 15px;
    }
  }
  p {
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
    box-sizing: border-box;
    color: #2afaa5;
    display: flex;
    font-size: 30px;
    font-weight: bold;
    height: 45px;
    justify-content: center;
    padding-right: 30px;
    position: relative;
    width: 145px;
    img {
      height: 45px;
      margin-right: -140px;
      position: absolute;
    }
  }
`;
