import styled from "styled-components";

export const Container = styled.div`
align-items: center;
  background-image: url("./images/backgorud_Map_Menu2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 812px;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TotalValue = styled.h2`
  align-items: center;
  background-color: #666;
  border-radius: 0 25px 25px 0;
  color: #2afaa5;
  display: flex;
  font-size: 18px;
  height: 45px;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
`;

export const PlayngTime = styled.button`
  align-items: center;
  background-color: #eb6d03;
  border-radius: 25px 0 0 25px;
  color: #fff;
  display: flex;
  font-size: 18px;
  height: 45px;
  justify-content: flex-start;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 50%;
`;

export const HeaderImg = styled.img`
  padding-right: 5px;
  width: 18px;
`;

export const ContainerButtonTime = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 10px;
  width: 100%;
`;

export const TimeButton = styled.button`
  background-color: transparent;
  align-items: center;
  border-radius: 50px;
  display: flex;
  height: 25px;
  justify-content: center;
  margin: 0 5px;
  width: 25px;
`;
export const ImpotEx = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  padding-top: 10px;
  width: 100%;
`;
export const ImpExButton = styled.button`
  background-color: #eb6d03;
  color: #fff;
  align-items: center;
  border-radius: 50px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 10px 25px;
  width: 100px;
  &:first-child {
    margin-bottom: 10px;
  }
`;

export const ContainerActivateModal = styled.button`
  align-items: center;
  border-radius: 0 50px 50px 0;
  background-color: #eb6d03;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
`;

export const ModalOn = styled(ContainerActivateModal)`
  color: #fff;
  font-size: 20px;
  height: 50px;
  justify-content: space-between;
  padding: 0 3px 0 10px;
  width: 300px;
  z-index: 1;
`;

export const ActivateModalButton = styled.img`
  width: 12px;
`;

export const IconModal = styled.img`
  margin-bottom: 3px;
  width: 45px;
`;

export const ContainerFooter = styled.footer`
  width: 100%;
`;

export const ContainerTools = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  width: 100%;
  > img {
    width: 50px;
    border: 3px solid #2afaa5;
    border-radius: 50px;
    @media only screen and (min-width: 380px) {
      width: 70px;
    }
  }
`;

export const ContainerMenu = styled.button`
  align-items: center;
  background-color: #eb6d03;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  width: 100%;

  > img {
    width: 50px;
  }
`;
