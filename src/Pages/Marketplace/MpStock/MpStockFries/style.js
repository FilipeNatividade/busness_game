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
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px 0;
  width: 90%;
  p {
    color: #fff;
    font-weight: bolder;
    font-size: 25px;
  }
  div {
    display: flex;
    margin: 10px auto;
    width: 90%;
    p {
      border-radius: 10px 0 0 10px;
      background-color: #a1a1a1;
      color: #fff;
      font-size: 15px;
      padding: 10px 0;
      text-align: center;
      width: 50%;
    }
    small {
      border-radius: 0 10px 10px 0;
      background-color: #fff;
      color: #a1a1a1;
      font-weight: bolder;
      font-size: 18px;
      padding: 10px 0;
      text-align: center;
      width: 50%;
    }
  }
`;

export const Confirm = styled.button`
background-color: #fa821f;
color: #fff;
font-size: 30px;
height: 70px;
width: 100%;
`