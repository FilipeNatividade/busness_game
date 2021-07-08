import styled from "styled-components";

export const Container = styled.div`
  background-color: #366796;
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const NavMenu = styled.div`
  align-items: center;
  display: flex;
  height: 110px;
  overflow: auto;
  width: 100%;
`;

export const ContainerMenu = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: -2px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  height: 70px;
  justify-content: space-between;
  position: relative;
  padding: 0 5px;
  width: 150%;
`;

export const ToolsButton = styled.button`
  display: flex;
  border-radius: 50px;
  margin: 0 5px;
  .selection {
    border: 2px solid #2afaa5;
    height: 90px;
    position: relative;
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
  margin: 5px auto 0;
  padding: 0 10px 10px;

  width: 100%;
  span {
    color: #fff;
    font-size: 20px;
  }
  p {
    color: #2afaa5;
    font-size: 25px;
  }
`;

export const ContainerInitialStock = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  padding: 0 3px;
  width: 100%;
`;
export const InitialStock = styled.div`
  background-color: #fff;
  border-radius: 18px;
  color: #2afaa5;
  height: 120px;
  width: 140px;
  h2 {
    align-items: center;
    background-color: #fa821f;
    border-radius: 25px;
    color: #fff;
    display: flex;
    height: 30px;
    justify-content: center;
    position: relative;
    font-size: 14px;
    img {
      height: 95%;
      margin-left: -5px;
      margin-right: 5px;
    }
  }
  p {
    align-items: center;
    display: flex;
    font-size: 25px;
    font-weight: bold;
    justify-content: space-around;
    padding-left: 30px;
    padding-top: 10px;
  }
`;

export const AvarangePrice = styled.div`
  align-items: center;
  background-color: #fa821f;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-between;
  padding-bottom: 5px;
  width: 25%;
  h2 {
    align-items: center;
    background-color: #ff963f;
    color: #fff;
    display: flex;
    font-size: 12px;
    height: 20px;
    justify-content: center;
    width: 100%;
  }
  p {
    color: #2afaa5;
    display: flex;
    font-weight: bold;
    font-size: 16px;
    img {
      margin-right: 3px;
    }
  }
  small {
    color: #fff;
    font-size: 10px;
    text-align: center;
  }
`;
export const Coverage = styled(InitialStock)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 140px;
  h2 {
    width: 100%;
  }
  p {
    padding: 0;
    span {
      font-size: 25px;
      margin-left: 5px;
    }
  }
`;

export const PlanningContainer = styled.div`
  align-items: center;
  background-color: #fa821f;
  border-radius: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto 5px;
  position: relative;
  width: 98%;
  h2 {
    margin: 10px auto;
    padding: 5px 0;
  }
  img {
    margin-right: 312px;
    margin-top: -10px;
    position: absolute;
  }
`;

export const TitlePlanningContainer = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 25px;
  justify-content: center;
  width: 100%;
  p {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    margin: 0 auto;
    span {
      font-size: 10px;
    }
  }
  div {
    background-image: url("./images/pcp_button.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50px;
    border: 3px solid #2afaa5;
    height: 50px;
    margin-top: -10px;
    width: 50px;
  }
`;

export const CalculatePlanningContainer = styled.div`
  align-items: center;
  border-radius: 15px;
  display: flex;
  height: 145px;
  justify-content: space-around;
  margin-top: 3px;
  position: relative;
  width: 100%;
  p {
    color: #fff;
    font-size: 30px;
  }
`;

export const InternalCalculatePlanningContainer = styled.div`
  background-color: #366796;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-bottom: 10px;
  h2 {
    background-color: #ff963f;
    border-radius: 5px 5px 0 0;
    font-size: 10px;
    margin-top: -1px;
    text-align: center;
    width: 100%;
  }
`;

export const InputInternalCalculatePlanningContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  height: 36px;
  justify-content: space-between;
  margin: auto 0;
  padding-right: 5px;

  img {
    margin: 0;
    width: 34px;
    position: relative;
  }
  input {
    background-color: transparent;
    color: #2afaa5;
    font-weight: bold;
    font-size: 15px;
    height: 36px;
    text-align: right;
    width: 50px;
    max-width: 85px;

    ::-webkit-input-placeholder {
      color: #2afaa5;
      font-weight: bold;
      font-size: 20px;
      text-align: right;
    }
  }
  p {
    font-weight: bold;
    color: #2afaa5;
    font-size: 15px;
    text-align: right;
    max-width: 85px;
    width: 50px;
  }
`;
