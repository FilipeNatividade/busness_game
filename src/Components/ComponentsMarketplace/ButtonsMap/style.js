import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  margin-top: 30px;
  button {
    background-color: transparent;
  }
`;

export const ContainerTools = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  width: 100%;
  img {
    width: 50px;
    border: 3px solid #eb6d03;
    border-radius: 50px;
    @media only screen and (min-width: 380px) {
      width: 50px;
    }
  }
`;

export const ContainerMenu = styled.div`
  align-items: center;
  background-color: #eb6d03;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  width: 100%;
  img {
    width: 50px;
  }
`;
