import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_input.svg");
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  position: relative;
  width: 100%;
`;

export const TitleContainer = styled.div`
  align-items: flex-end;
  background-color: #eb6d03;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  margin: 30px auto;
  width: 100%;
  z-index: 1;
`;

export const AddButton = styled.button`
  align-items: center;
  background-color: #eb6d03;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  color: #fff;
  display: flex;
  font-size: 45px;
  font-weight: bold;
  height: 45px;
  justify-content: center;
  margin-right: 20px;
  margin-top: 7px;
  position: absolute;
  width: 45px;
`;

export const TitleContent = styled.h2`
  align-items: center;
  background-color: #fa821f;
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  position: relative;
  width: 100%;
  img {
    border: 7px solid #fa821f;
    border-radius: 50px;
    margin-top: -90px;
    position: absolute;
    width: 70px;
  }
`;

export const VisitContainer = styled.div`
  align-items: center;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 80%;
`;

export const InternalVisitContainer = styled.div`
  align-items: center;
  border-radius: 50px;
  background-color: #ff9237;
  display: flex;
  height: 34px;
  justify-content: space-between;
  margin: -20px auto;
  width: 100%;
  img {
    width: 34px;
  }
  p {
    font-weight: bold;
  }
`;

export const AddContainer = styled.div`
  align-items: center;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  width: 70px;
`;

export const Signal = styled.div`
  background-color: #ffd700;
  box-shadow: 0 0 10px 5px rgba(255, 215, 0, 0.5);
  border-radius: 50px;
  height: 16px;
  width: 16px;
`;

export const AddVisit = styled.button`
  align-items: center;
  background-color: #366796;
  border-radius: 50px;
  color: #fff;
  display: flex;
  font-size: 30px;
  font-weight: bolder;
  height: 33px;
  justify-content: center;
  width: 33px;
`;

export const MainContainer = styled.div`
  background-color: #366796;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 300px;
  margin: 0 auto;
  width: 100%;
  h2 {
    color: #fff;
    font-size: 20px;
    margin: 25px auto;
    small {
      color: #2afaa5;
      font-size: 25px;
    }
  }
`;
export const AvailabelStock = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  color: #2afaa5;
  display: flex;
  font-size: 50px;
  font-weight: bolder;
  height: 115px;
  justify-content: flex-end;
  margin: 0 auto 50px;
  position: relative;
  width: 200px;
  h3 {
    align-items: center;
    background-color: #fa821f;
    border-radius: 20px;
    color: #fff;
    display: flex;
    font-size: 14px;
    height: 32px;
    justify-content: center;
    margin-top: -90px;
    position: absolute;
    padding-left: 15px;
    width: 100%;
    img {
      height: 29px;
      margin-right: 182px;
      position: absolute;
    }
  }
  small {
    align-items: center;
    border-radius: 50px;
    background-color: #366796;
    display: flex;
    font-size: 30px;
    height: 50px;
    justify-content: center;
    margin: 25px 10px 0 30px;
    width: 50px;
  }
  p {
    margin-top: 25px;
  }
`;

export const SubTitle = styled(TitleContent)`
  margin: 0 auto;
  z-index: 1;
`;

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  min-width: 300px;
  margin: 0 auto 100px;
  width: 100%;
`;
export const FirstRequestContainer = styled.div`
  align-items: center;
  background-color: #eb6d03;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: -25px;
  position: relative;
  padding: 25px 0;
  width: 100%;
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .buttons {
    flex-direction: row;
  }
  small {
    font-size: 10px;
  }
  input {
    box-sizing: border-box;
    border-radius: 5px;
    height: 45px;
    padding-top: 17.5px;
    text-align: center;
    width: 80px;
    ::-webkit-input-placeholder {
      color: #737373;
      font-weight: bolder;
      font-size: 40px;
    }
    :-moz-placeholder {
      color: #737373;
      font-weight: bolder;
      font-size: 40px;
    }
    ::-moz-placeholder {
      color: #737373;
      font-weight: bolder;
      font-size: 40px;
    }
    :-ms-input-placeholder {
      color: #737373;
      font-weight: bolder;
      font-size: 40px;
    }
  }
  p {
    align-items: center;
    background-color: #fff;
    border-radius: 25px;
    color: #2afaa5;
    display: flex;
    font-weight: bold;
    font-size: 20px;
    height: 45px;
    justify-content: space-between;
    margin-top: 15px;
    padding: 0 2px 0 15px;
    width: 150px;
    img {
      height: 42px;
      margin-top: 2px;
    }
  }
`;
export const ButtonContainer = styled.div`
  p {
    align-items: center;
    background-color: #fa821f;
    box-shadow: 0.5px 2px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    display: flex;
    font-size: 10px;
    height: 24px;
    justify-content: center;
    padding: 0;
    margin-bottom: 8px;
    margin-left: 5px;
    width: 50px;
  }
  button {
    border-radius: 50px;
    height: 30px;
    margin-bottom: 20px;
    width: 30px;
  }
  .checked {
    background-image: url("./images/checkin_on.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }
`;

export const SecondRequestContainer = styled.div`
  background-color: #fa821f;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  justify-content: space-around;
  position: relative;
  padding: 25px 25px 0;
  width: 100%;
  h3 {
    font-weight: bolder;
  }
  p {
    align-items: center;
    background-color: #fff;
    border-radius: 25px;
    color: #2afaa5;
    display: flex;
    font-weight: bolder;
    height: 40px;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-left: 5px;
    img {
      width: 38px;
    }
  }
`;

export const MarketngContainer = styled.div`

  background-color: #eb6d03;
  margin: 0 auto;
  margin-top: -25px;
  min-width: 300px;
  padding: 20px 0;
  width: 100%;
`;
export const FirstMarketngContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -25px;
  padding: 20px 0;
`;

export const CountMarketngContainer = styled.div`
  align-items: center;
  background-color: #fb9541;
  border-radius: 5px ;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px auto;
  padding: 5px 0;
  width: 98%;
  input {
    border-radius: 5px;
    height: 40px;
    margin-right: 10px auto;
    padding-top: 20px;
    text-align: center;
    width: 50px;
    ::-webkit-input-placeholder {
      font-size: 40px;
    }
    :-moz-placeholder {
      font-size: 40px;
    }
    ::-moz-placeholder {
      font-size: 40px;
    }
    :-ms-input-placeholder {
      font-size: 40px;
    }
  }
  p {
    font-size: 15px;
    font-weight: bold;
    margin:0 auto;
    text-align: center;
    width: 120px;
  }
  small {
    align-items: center;
    background-color: #366796;
    display: flex;
    margin:0 auto;
    padding: 0 5px;
    height: 40px;
  }
  div {
    align-items: center;
    border-radius: 25px;
    background-color: #fff;
    color: #2afaa5;
    display: flex;
    font-weight: bold;
    height: 40px;
    justify-content: space-between;
    margin: 0 auto;
    padding-left: 10px;
    width: 110px;
    img {
      height: 40px;
      margin-right: 0;
    }
  }
`;

export const TotalContainer = styled.div`
  align-items: center;
  background-color: #fa821f;
  color: #fff;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 10px auto;
  padding:30px 5px;
  width: 100%;
  p {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    small {
      font-size: 15px;
    }
  }
  div {
    align-items: center;
    background-color: #fff;
    border-radius: 25px;
    color: #2afaa5;
    display: flex;
    font-size: 25px;
    font-weight: bold;
    height: 40px;
    justify-content: space-between;
    padding-left: 5px;
    width: 170px;
    img {
      height: 40px;
    }
  }
`;

export const Total = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 50px 0 0 50px;
  color: #fff;
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin: 25px 0;
  padding:2px;
  width: 95%;
  div{
padding-right: 5px;
  p {
    align-items: center;
    background-color: #fff;
    border-radius: 50px;
    color: #2afaa5;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    height: 35px;
    justify-content: flex-end;
    width: 160px;
    img {
      height: 35px;
      margin-left: 5px;
    }
  }
  }
`;

export const Icon = styled.img`
  height: 75px;
`;
