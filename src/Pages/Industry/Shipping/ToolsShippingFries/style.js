import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_input.svg");
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SizeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const MainContainer = styled.div`
  background-color: #366796;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  width: 100%;
  h2 {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 30px 0;
    width: 100%;
    span {
      color: #2afaa5;
      margin-left: 25px;
    }
  }
`;

export const SubTitle = styled.h2`
  align-items: center;
  background-color: #fa821f;
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  margin: 50px auto 25px;
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

export const TotalsContainer = styled.div`
  align-items: flex-end;
  background-color: #fa821f;
  border-radius: 50px;
  display: flex;
  height: 90px;
  justify-content: space-around;
  margin: 5px auto;
  padding-bottom: 5px;
  padding-right: 5px;
  width: 95%;
  p {
    align-items: center;
    background-color: #fff;
    border-radius: 25px;
    color: #2afaa5;
    display: flex;
    font-weight: bold;
    font-size: 30px;
    height: 44px;
    justify-content: flex-start;
    margin-bottom: 5px;
    padding-left: 15px;
    position: relative;
    text-align: center;
    width: 120px;
    img {
      height: 44px;
      margin-left: 61px;
      position: absolute;
    }
  }
  img {
    margin-left: -2px;
    height: 80px;
  }
  div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    height: 100%;
    justify-content: space-between;
    padding-top: 5px;
  }
`;
export const TotalsDifferent = styled(TotalsContainer)`
align-items: flex-start;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 100px;

  img{
    position: absolute;
    margin-left:-96px;
    margin-top: 5px;
  }
  h4{
    font-weight: bold;
    font-size: 20px;
    margin-top: 5px;
  }
  p{
    align-items: center;
    display: flex;
    /* justify-content: star; */
    padding-left: 15px;
    width: 96%;
    img{
      height: 100%;
      margin-bottom:5px;
      margin-left:76%;
      position:absolute;
    }
  }
`;
