import styled from "styled-components";

export const Container = styled.div`
  background-color: #366796;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
`;

export const TitleContent = styled.h2`
  align-items: center;
  background-color: #fa821f;
  color: #fff;
  display: flex;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  margin: 70px auto 0;
  position: relative;
  width: 100%;
  span {
    color: #2afaa5;
    margin-left: 10px;
  }
  img {
    border: 7px solid #fa821f;
    border-radius: 50px;
    margin-top: -90px;
    position: absolute;
    width: 70px;
  }
`;
