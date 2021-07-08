import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  justify-content: center;
  width: 100%;
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
  margin: 0 auto;
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

export const TitleSection = styled.h2`
  align-items: center;
  background: #fa821f;
  border-radius: 25px 0 0 25px;
  box-shadow: -2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  height: 64px;
  margin: 35px 0;
  width: 90%;
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-color: transparent;
  height: 64px;
  width: 64px;
`;
