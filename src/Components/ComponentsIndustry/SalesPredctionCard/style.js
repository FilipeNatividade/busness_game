import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
`;

export const PrimaryDiv = styled.div`
  background-color: #fa821f;
  display: flex;
  height: 75px;
  justify-content: space-between;
  width: 100%;
`;

export const SubPrimaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  h2 {
    color: #fff;
    font-size: 20px;
  }
  input {
    border-radius: 5px;
    color: #2afaa5;
    font-weight: bold;
    font-size: 18px;
    height: 30px;
    text-align: center;
    width: 95%;
  }
`;

export const SecondaryDiv = styled.div`
  background-color: #eb6d03;
  display: flex;
  flex-direction: column;
  padding: 15px 5px;
  width: 100%;
`;

export const SubSecondaryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  width: 100%;
`;
export const Title = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  width: 60%;
  img {
    margin-right: 5px;
    height: 35px;
  }
`;
export const Input = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  color: #2afaa5;
  display: flex;
  height: 35px;
  justify-content: space-between;
  padding-left: 20px;
  width: 35%;
  input {
    color: #2afaa5;
    font-weight: bolder;
    width: 100%;
    ::-webkit-input-placeholder {
      color: #2afaa5;
      font-weight: bolder;
    }
    :-moz-placeholder {
      color: #2afaa5;
      font-weight: bolder;
    }
    ::-moz-placeholder {
      color: #2afaa5;
      font-weight: bolder;
    }
    :-ms-input-placeholder {
      color: #2afaa5;
      font-weight: bolder;
    }
  }

  p {
    font-weight: bolder;
    width: 100%;
  }
  .prrcentagem {
    color: #f23838;
  }
`;

export const ThirdDiv = styled.div`
  background-color: #366796;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 170px;
  width: 100%;
`;

export const ThirdDiv1 = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 22px;
  justify-content: space-around;
  width: 100%;
`;

export const ContainerSub = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  small {
    color: #fff;
    font-size: 10px;
    margin-top: 5px;
  }
`;

export const Signals = styled.p`
  margin-bottom: 20px;
`;

export const SubThirdDiv1 = styled.div`
  align-items: flex-end;
  background-color: #fff;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  position: relative;
  padding-right: 3px;
  width: 65px;
  img {
    width: 28px;
    position: absolute;
    margin-right: 32px;
  }
  p {
    color: #2afaa5;
    font-size: 15px;
    font-weight: bold;
    /* margin-left: 10px; */
  }
  .losses {
    color: #f23838;
  }
`;

export const SubContainer = styled.div`
  background-color: #fa821f;
  border-radius: 50px;
  display: flex;
  height: 75px;
  margin: 0 auto;
  width: 80%;
  img {
    margin-left: 2px;
  }
`;

export const SubThirdDiv2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
  width: 100%;
  p {
    color: #fff;
    font-weight: bolder;
    margin-bottom: 5px;
  }
`;

export const Result = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
  color: #2afaa5;
  display: flex;
  font-size: 15px;
  font-weight: bolder;
  height: 32px;
  justify-content: center;
  width: 90%;
`;
