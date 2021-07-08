import { useHistory } from "react-router-dom";
import HeaderReportMp from "../../../../Components/ComponentsMarketplace/HeaderReportMp";
import BootonsMap from "../../../../Components/ComponentsMarketplace/ButtonsMap";

import {
  Container,
  SizeContainer,
  ContainerCard,
  InternalMenu,
  Confirm
} from "./style";

const MpStockSausage = () => {
  const history = useHistory()
  return (
    <Container>
      <SizeContainer>
        <HeaderReportMp title="Estoque" pathImg="./images/stock_Mp.svg" />
        <InternalMenu>
          <button className='selected' ><img src="./images/sausage_orange.svg" alt="sausage"/></button>
          <button onClick={() => history.push('/mpStockChicken')} ><img src="./images/chicken_orange.svg" alt="chicken"/></button>
          <button onClick={() => history.push('/mpStockChickenCut')}><img src="./images/chicken_cut_orange.svg" alt="chicken cut"/></button>
          <button onClick={() => history.push('/mpStockFries')}><img src="./images/fries_orange.svg" alt="fries"/></button>
        </InternalMenu>
        <ContainerCard>
          <div>
            <p>Quantidade</p>
            <small>45</small>
          </div>
          <p>X</p>
          <div>
            <p>Preço médio</p>
            <small>180</small>
          </div>
          <div>
            <p>Valor do estoque</p>
            <small>8100</small>
          </div>
        </ContainerCard>
        <BootonsMap />
        <Confirm>Comprar</Confirm>
      </SizeContainer>
    </Container>
  );
};
export default MpStockSausage;
