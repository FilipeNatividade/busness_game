import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 00.5);
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-around;
  margin: 0 auto;
  width: 80px;
  img {
    border: 2px solid #2afaa5;
    border-radius: 50px;
    height: 45px;
    margin-top: -20px;
    width: 45px;
  }
  h2 {
    color: #fa821f;
    font-size: 10px;
    text-align: center;
  }
  p {
    color: #2afaa5;
    font-size: 12px;
  }
`;
