import styled from "styled-components";

export const Container = styled.div`
  background-color: #366796;
  width: 100%;
`;

export const ContainerMenu = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: -2px 10px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
  width: 100%;
`;

export const ToolsButton = styled.button`
  display: flex;
  border-radius: 50px;
  .selection {
    border: 2px solid #2afaa5;
    height: 90px;
    width: 90px;
    z-index: 1;
  }
`;

export const ImgButtonsTools = styled.img`
  border-radius: 50px;
  width: 60px;
`;
