import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SizeContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 950px;
  max-width: 500px;
  width: 100%;
`;

export const Title = styled.h1`
  align-items: center;
  background: #fa821f;
  display: flex;
  font-size: 30px;
  justify-content: center;
  height: 64px;
  position: relative;
  width: 100%;
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-color: transparent;
  height: 64px;
  margin:15px 15px;
  width: 64px;
`;

export const ContainerFactory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ContainerButton = styled.div`
  display: flex;
  height: 150px;
  margin: 15px;
  width: 176px;
`;

export const ContainerImgFactory = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  height: 150px;
  justify-content: center;
  position: relative;
  width: 150px;
`;

export const ImgFactory = styled.img`
  width: 139px;
`;

export const TitleFactory = styled.h3`
  align-items: center;
  background-color: #fff;
  border-radius: 0 25px 25px 0;
  color: #000;
  display: flex;
  font-size: 18px;
  height: 43px;
  margin-bottom: 107px;
  margin-left: 115px;
  position: absolute;
  padding-left: 18px;
  width: 100px;
`;

export const NotAvailable = styled(ContainerImgFactory)`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fa2a2a;
  font-size: 25px;
  position: absolute;
`;

export const Imgmessage = styled.img`
  margin: 15px auto;
  max-width: 350px;
  width: 90%;
`;
