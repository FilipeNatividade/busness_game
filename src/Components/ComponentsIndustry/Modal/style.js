import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 0 25px 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -40px;
  padding-top: 45px;
  padding-bottom: 5px;
  width: 300px;
  z-index: 2;
`;

export const ButtonManagement = styled.div`
  align-items: center;
  border-radius: 50px 25px 25px 50px;
  background-color: #366796;
  color: #fff;
  display: flex;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  margin: 10px auto;
  position: relative;
  text-align: center;
  width: 90%;

  > img {
    border: 2px solid #eb6d03;
    border-radius: 50px;
    position: absolute;
    margin-right: 210px;
    width: 55px;
  }
`;
