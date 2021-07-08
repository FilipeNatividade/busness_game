import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const SizeContainer = styled.div`
  align-items: flex-end;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
`;

export const Title = styled.h1`
  align-items: center;
  background: #fa821f;
  display: flex;
  font-size: 30px;
  flex-direction: column;
  justify-content: center;
  height: 64px;
  position: relative;
  width: 100%;
`;

export const ImgTitle = styled.div`
  background-image: url("./images/icon_tools.svg");
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  background-color: #fa821f;
  border-radius: 50px;
  box-shadow: -1px 3px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 94px;
  margin-left: -20px;
  width: 94px;
`;

export const TitleSection = styled.div`
  align-items: center;
  background: #fa821f;
  border-radius: 25px 0 0 25px;
  box-shadow: -2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  height: 64px;
  margin: 30px 0;
  width: 90%;
  p {
    font-size: 22px;
    text-align: center;
    width: 50%;
  }
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-color: transparent;
  height: 64px;
  width: 64px;
`;

export const TotalFooter = styled.div`
  box-shadow: -2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 75px;
  margin: 50px auto 0;
  position: relative;
  width: 100%;
`;

export const TitleTotal = styled.div`
  align-items: center;
  background: #366796;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  height: 50%;
  padding: 0 30% 0 15px;

  width: 100%;
`;

export const TitleAvailable = styled.div`
  align-items: center;
  background: #054d6c;
  color: #2afaa5;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  height: 50%;
  padding: 0 25% 0 15px;
  width: 100%;
`;

export const IconDollar = styled.div`
  align-items: center;
  background: #054d6c;
  background-image: url("./images/cifrao.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border: 7px solid #054d6c;
  border-radius: 50% 0 0 50%;
  display: flex;
  justify-content: center;
  height: 66px;
  margin-left: 82%;
  position: absolute;
  width: 66px;
`;
