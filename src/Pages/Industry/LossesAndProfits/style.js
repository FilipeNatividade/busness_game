import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_orange.svg");
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SizeContainer = styled.div`
  background-color: #fffafa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  margin-bottom: 25px;
  width: 100%;
`;

export const PelImg = styled.img`
  margin: 0 auto;
  width: 250px;
`;

export const ContainerReport = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const ParagraphValue = styled.p`
  color: #666;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  justify-content: space-between;
  margin: 15px 0;
  width: 100%;
  img {
    margin-right: 8px;
  }
`;

export const ParagraphValuePositive = styled(ParagraphValue)`
  color: #14e891;
`;

export const NoteFooter = styled.div`
  align-items: center;
  color: #14e891;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: bold;
  padding: 15px 0;
  width: 100%;
  p {
    color: #000;
  }
`;

export const DivFooter = styled.footer`
  align-items: center;
  /* background-image: url("./images/backGroud_orange.svg"); */
  display: flex;
  height: 200px;
`;
