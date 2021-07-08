import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 10px 0 25px;
  width: 100%;
`;

export const ContainerHeader = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 50px 0 0 50px;
  box-shadow: -1px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100px;
  justify-content: space-between;
  
  padding-left: 5px;
  width: 100%;
`;

export const ImgHeader = styled.img`
  width: 90px;
`;

export const ContainerTitle = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-left: 10px;
  p {
    font-weight: bold;
    font-size: 35px;
  }
  small {
    font-size: 12px;
  }
`;

export const BackButton = styled.img`
  width: 64px;
`;

export const ContainerButtons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 15px 5px;

  .selection {
    border: 5px solid #2afaa5;
    height: 90px;
    width: 90px;
  }
`;

export const ToolsButton = styled.button`
  display: flex;
  border-radius: 50px;
`;

export const ImgButtonsTools = styled.img`
  border: 3px solid #2afaa5;
  border-radius: 50px;
  height: 60px;
  width: 60px;
`;
