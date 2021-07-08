import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_gray.svg");
  flex-direction: column;
  width: 100vw;
`;

export const SizeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
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
    border: 3px solid #fa821f;
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
    height: 70px;
    width: 70px;
  }
`;

export const RoundContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  color: #EB6D03;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  margin: 15px auto;
  max-width: 300px;
  padding-bottom: 15px;
  width: 90%;
  .totalsRound {
    background-color: #fa821f;
  }
`;

export const H2RoundContainer = styled.h2`
  align-items: center;
  background-color: #EB6D03;
  border-radius: 20px;
  color: #fff;
  display: flex;
  font-size: 18px;
  height: 42px;
  justify-content: space-between;
  margin-bottom: 50px;
  position: relative;
  padding: 0 15px;
  width: 100%;
`;

export const ParagraphRoundContainer = styled.p`
  border-top: 1px solid #EB6D03;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  justify-content: space-between;
  margin: 0 auto 15px;
  position: relative;
  padding-top: 10px;
  width: 90%;
  div {
    background-image: url("./images/purchase_button.svg");
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: center;
    background-color: #fa821f;
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }
`;

export const MainRoundContainer = styled.div`
  display: flex;
  font-size: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  width: 90%;
  div {
    display: flex;
    margin-bottom: 10px;
    img {
      height: 35px;
      margin-right: 5px;
    }
  }
  p {
    align-items: center;
    display: flex;
    margin-bottom: 10px;
  }
`;
