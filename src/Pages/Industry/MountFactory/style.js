import styled from "styled-components";

export const Container = styled.div`
  align-items:center;
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;
export const SizeContainer = styled.div`
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
  font-size: 25px;
  justify-content: center;
  height: 64px;
  position: relative;
  padding: 0 25px;
  text-align: center;
  width: 100%;
`;

export const BackButton = styled.button`
  background-image: url("./images/back_button.svg");
  background-color: transparent;
  height: 64px;
  margin: 15px;
  width: 64px;
`;

export const ImgFactory = styled.img`
  margin: 0 auto;
  width: 232px;
`;

export const MainContainer = styled.div`
  background-color: #d46f1b;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  max-width: 375px;
  width: 95%;
`;

export const SubTitle = styled.h2`
  align-items: center;
  background: #fa821f;
  display: flex;
  font-size: 15.15px;
  justify-content: space-between;
  height: 43.91px;
  padding: 15px;
  position: relative;
  width: 100%;
`;

export const IconH2 = styled.img`
  width: 54.85px;
`;

export const Paragraph = styled.p`
  color: #ffc493;
  font-size: 13px;
  font-weight: bold;
  padding: 12px 20px;
  &:last-child {
    padding-bottom: 40px;
  }
`;

export const SpanParagraph = styled.span`
  color: #fff;
  margin-left: 5px;
`;

export const InitialValue = styled.h2`
  align-items: center;
  background: #054d6c;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin: auto;
  padding: 10px;
  width: 100%;
`;

export const DollarSign = styled.img`
  width: 31.75px;
`;
export const SpanValue = styled.span`
  color: #2afaa5;
`;

export const TitleAvailable = styled.div`
  align-items: center;
  background: #054d6c;
  color: #2afaa5;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  min-height: 40px;
  justify-content: space-between;
  padding: 2px 15px;
  width: 100%;
  p {
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    img {
      height: 30px;
      margin-right: 10px;
    }
  }
`;
