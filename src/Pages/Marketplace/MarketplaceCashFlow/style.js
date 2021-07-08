import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_gray.svg");
  color: #fff;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
`;

export const ContainerCard = styled.div`
  background-color: #fa821f;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 50px 25px;
  width: 80%;
`;

export const Paragraph = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: bolder;
  justify-content: space-between;
  margin: 25px 0;
  div {
    display: flex;
    flex-direction: column;
    span {
      margin-bottom: 5px;
    }
  }
`;
