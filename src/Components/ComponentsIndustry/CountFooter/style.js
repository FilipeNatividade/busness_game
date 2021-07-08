import styled from "styled-components";

export const TotalFooter = styled.div`
  align-items: flex-end;
  box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 75px;
  max-width: 500px;
  margin: 20px auto 0;
  position: relative;
  width: 100%;
`;

export const TitleTotal = styled.div`
  align-items: center;
  background: #366796;
  display: flex;
  font-size: 20px;
  height: 50%;
  justify-content: space-between;
  padding: 0 85px 0 15px;
  width: 100%;
`;

export const TitleAvailable = styled.div`
  align-items: center;
  background: #054d6c;
  color: #2afaa5;
  display: flex;
  font-size: 20px;
  height: 50%;
  justify-content: space-between;
  padding: 0 85px 0 15px;
  width: 100%;
`;

export const IconDollar = styled.div`
  align-items: center;
  background: #054d6c;
  border: 7px solid #054d6c;
  border-radius: 50% 0 0 50%;
  display: flex;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 70px;
  img {
    height: 90%;
  }
`;
