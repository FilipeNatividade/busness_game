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

export const HeaderTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  height: 75px;
  margin: 0 auto 10px;
  padding-bottom: 10px;
  width: 85%;
  span {
    color: #fff;
    font-size: 20px;
  }
  p {
    color: #2afaa5;
    font-size: 25px;
  }
`;

export const HeaderPrimaryDiv = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  width: 95%;
  z-index: 1;
`;
export const PrimaryHeading = styled.h2`
  align-items: center;
  border: 5px solid #366796;
  background-color: #fa821f;
  border-radius: 12px;
  color: #fff;
  display: flex;
  font-size: 13px;
  height: 40px;
  justify-content: center;
  margin-top: -10px;
  margin-left: -2px;
  width: 62%;
  span {
    color: #2afaa5;
    font-size: 12px;
  }
`;
export const Secondaryeading = styled.h2`
  align-items: center;
  border: 5px solid #fa821f;
  background-color: #366796;
  border-radius: 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 12px;
  height: 40px;
  margin-top: -10px;
  width: 40%;
`;

export const SubPrimaryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 5px;
  width: 100%;
`;
