import styled from "styled-components";

export const Container = styled.div``;

export const ContainerCards = styled.div`
  align-items: center;
  border-radius: 25px 25px 10px 10px;
  background-color: #366796;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 95%;

  h3 {
    margin: 10px auto;
  }
`;

export const TitleCard = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 25px;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  height: 45px;
  justify-content: space-between;
  padding: 0 5px;
  width: 100%;
  div {
    background-image: url("./images/purchase_button.svg");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fa821f;
    border-radius: 50px;
    height: 75px;
    margin-left: -10px;
    width: 75px;
  }
`;

export const ButtonCheckedProvider = styled.button`
  border-radius: 50px;
  height: 35px;
  width: 35px;
`;

export const ButtonOnCheckedProvider = styled(ButtonCheckedProvider)`
  background-image: url("./images/checkin_on.svg");
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const InfoContainer = styled.div`
  align-items: center;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
`;

export const PrimaryInfoContainer = styled.div`
  border-right: 1px solid #fff;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  height: 100%;
  padding: 5px;
  width: 60%;
  p {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  span {
    color: #2afaa5;
    font-weight: bold;
  }
`;

export const SecondInfoContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  height: 100%;
  padding: 10px;
  width: 40%;
  p {
    align-items: center;
    display: flex;
    margin-bottom: 15px;
    width: 100%;
    span{
      margin-right: 20px;
    }
  }
`;

export const RadiusSecondInfoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  p {
    color: #2afaa5;
    margin: auto 0;
    width: 35px;
  }
  span {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    color: #2afaa5;
    display: flex;
    font-weight: bolder;
    font-size: 15px;
    justify-content: center;
    height: 20px;
    width: 30px;
  }
`;

export const PaymentOff = styled.button`
  border: 2px solid #fa821f;
  border-radius: 50px;
  height: 20px;
  margin: 0;
  width: 20px;
`;

export const PaymentOn = styled(PaymentOff)`
  background-image: url("./images/checkin_on.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  height: 45px;
  padding-left: 10px;
  width: 100%;
  p {
    margin: 0 15px;
  }
  small {
    align-items: center;
    background-color: #fff;
    border-radius: 25px;
    color: #2afaa5;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 90px;
  }
`;

export const FooterProvider = styled.div`
  align-items: center;
  background-image: url("./images/footer_provider.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  height: 100px;
  margin-bottom: 10px;
  width: 100%;
  h2 {
    align-items: center;
    background-color: transparent;
    display: flex;
    font-size: 18px;
    height: 20px;
    justify-content: center;
    padding: 0;
    width: 100px;
  }
`;

export const LeftFooterProvider = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100%;
  justify-content: space-around;
  width: 100%;
  h2 {
    width: 205px;
    padding-left: 5px;
  }
  input {
    border-radius: 3px;
    height: 30px;
    width: 190px;
    margin-bottom: 5px;
    padding: 0 5px;
  }
`;

export const RightFooterProvider = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100%;
  justify-content: space-around;
  padding-right: 15px;
  width: 100%;
  p {
    align-items: center;
    background-color: #fff;
    border-radius: 25px;
    color: #2afaa5;
    display: flex;
    height: 30px;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-left: 5px;
    img {
      width: 30px;
      margin-left: 5px;
    }
  }
`;
