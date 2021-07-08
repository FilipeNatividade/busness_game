import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./images/backGroud_gray.svg");
  border-radius: 0 0 0 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const ContainerPrimary = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const TotalValue = styled.h3`
  background-color: #fa821f;
  border-radius: 0 25px 25px 0;
  box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
  border: 3px solid #fff;
  border-left: none;
  color: #fff;
  display: flex;
  font-size: 18px;
  margin: 15px 0;
  padding: 10px;
`;

export const HeaderImg = styled.img`
  padding-right: 5px;
  width: 18px;
`;

export const ContainerSecunday = styled.div`
  display: flex;
  width: 100%;
`;

export const Icon = styled.img`
  border: 5px solid #fa821f;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  position: absolute;
  width: 100px;
`;

export const Title = styled.h2`
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #fa821f;
  border-radius: 100px 0 0 50px;
  color: #fff;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;
`;
