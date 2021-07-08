import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 0 20px 20px 0;
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.2);
  color: #000;
  margin: 25px auto;
  position: relative;
  max-width: 335px;
  width: 90%;
`;

export const Icon = styled.img`
  margin-top: -10px;
  margin-left: -10px;
  position: absolute;
`;

export const Title = styled.h2`
  color: #fff;
  border-radius: 0 20px 0 0;
  background-color: #fa821f;
  font-size: 18px;
  height: 34px;
  padding-top: 5px;
  padding-right: 15px;
  text-align: right;
`;

export const ContainerContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
`;

export const ContainerParagraph = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 50%;
  span {
    font-size: 10px;
    font-weight: bold;
    margin-top: 5px;
  }
`;

export const IconInfo = styled.img`
  height: 31px;
  margin-left: -55px;
`;

export const Paragraph = styled.p`
  border-radius: 0 20px 0 0;
  font-size: 12px;
  margin-top: 20px;
`;

export const FooterPrice = styled.footer`
  align-items: center;
  background-color: #666;
  color: #2afaa5;
  height: 35px;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding-left: 5px;
  width: 100%;

  .containerFooter {
    align-items: center;
    display: flex;
    img {
      border-radius: 50px;
      height: 30px;
      margin-right: 12px;
    }
  }
`;

export const ContainerButton = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
  position: relative;
`;

export const Buttons = styled.button`
  align-items: center;
  border-radius: 50px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  img {
    width: 100%;
  }
`;

export const Display = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: 5px solid #666;
  color: #000;
  display: flex;
  font-size: 25px;
  height: 54px;
  justify-content: center;
  margin-right: -10px;
  width: 54px;
`;
