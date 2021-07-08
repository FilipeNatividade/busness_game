import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_login.svg");
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 812px;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const LogoImg = styled.img`
  margin: 25px auto;
  width: 245px;
`;

export const InputContainer = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_input.svg");
  background-position: 90%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 280px;
  margin: 0 auto;
  padding-bottom: 20px;
  width: 90%;
`;
export const H1Login = styled.h1`
  align-items: center;
  background-color: #fa821f;
  border-radius: 15px;
  display: flex;
  font-size: 35px;
  height: 68px;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const ContainerInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const InputLogin = styled.input`
  border-radius: 5px;
  height: 50px;
  margin: 5px auto;
  padding: 10px;
  width: 90%;
`;
export const ContainerButtonLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px auto;
  width: 100%;
`;

export const ButtonLogin = styled.button`
  background-color: #fa821f;
  border-radius: 5px;
  color: #fff;
  font-size: 25px;
  height: 50px;
  margin: 0 auto;
  width: 80%;

  &:first-child {
    margin-bottom: 5px;
  }
`;

export const ContainerButtonWeb = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  margin: 30px auto;
  width: 200px;
`;

export const ImgWeb = styled.img`
  width: 80px;
`;

export const SmallFooter = styled.small`
  color: #366796;
  font-size: 12px;
  margin: 20px auto 0;
`;
