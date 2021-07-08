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

const MpStockFries = () => {
  const history = useHistory()
  return (
    <Container>
      <SizeContainer>
        <HeaderReportMp title="Estoque" pathImg="./images/stock_Mp.svg" />
        <InternalMenu>
          <button onClick={() => history.push('/mpStockSausage')} ><img  src="./images/sausage_orange.svg" alt="sausage"/></button>
          <button onClick={() => history.push('/mpStockChiken')} ><img src="./images/chicken_orange.svg" alt="chicken"/></button>
          <button onClick={() => history.push('/mpStockChickenCut')}><img src="./images/chicken_cut_orange.svg" alt="chicken cut"/></button>
          <button className='selected'><img src="./images/fries_orange.svg" alt="fries"/></button>
        </InternalMenu>
        <ContainerCard>
          <div>
            <p>Quantidade</p>
            <small>50</small>
          </div>
          <p>X</p>
          <div>
            <p>Preço médio</p>
            <small>450</small>
          </div>
          <div>
            <p>Valor do estoque</p>
            <small>22500</small>
          </div>
        </ContainerCard>
        <BootonsMap />
        <Confirm>Comprar</Confirm>
      </SizeContainer>
    </Container>
  );
};
export default MpStockFries;
