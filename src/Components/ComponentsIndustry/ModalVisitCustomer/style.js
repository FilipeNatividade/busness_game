import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 2;
`;

export const ContainerCard = styled.div`
  background-image: url("./images/backGroud_orange.svg");
  border-radius: 25px;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-around;
  margin: 0 auto;
  padding-bottom: 10px;
  width: 90%;
`;

export const Header = styled.div`
  align-items: center;
  border-radius: 50px;
  background-color: #054d6c;
  height: 65px;
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  position: relative;
  width: 80%;
  p {
    margin: 0 auto;
    text-align: center;
    width: 50%;
  }
`;
export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-position: center;
  border-radius: 50px;
  height: 57px;
  margin-left: 205px;
  position: absolute;
  width: 57px;
`;

export const VisitContainer = styled.div`
  align-items: center;
  border-radius: 50px;
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
  box-shadow: 0 0 10px 5px rgba(255, 215, 0, 0.5) ;
  border-radius: 50px;
  height: 16px;
  width: 16px;
`;

export const AddButton = styled.button`
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
