import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_orange.svg");
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

export const RoundContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  color: #366796;
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
  background-color: #366796;
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
  border-top: 1px solid #366796;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  justify-content: space-between;
  margin: 0 auto 15px;
  position: relative;
  padding-top: 10px;
  width: 90%;
  img {
    height: 35px;
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
