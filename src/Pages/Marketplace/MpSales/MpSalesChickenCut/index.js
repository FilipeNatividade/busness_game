import { useHistory } from "react-router-dom";
import HeaderReportMp from "../../../../Components/ComponentsMarketplace/HeaderReportMp";
import BootonsMap from "../../../../Components/ComponentsMarketplace/ButtonsMap";

import {
  Container,
  SizeContainer,
  ContainerCard,
  SubContainerCard,
  DivSubContainerCard,
  InternalMenu,
  SignalYellow,
  Confirm,
} from "./style";

const MpSalesChickenCut = () => {
  const history = useHistory();
  return (
    <Container>
      <SizeContainer>
        <HeaderReportMp title="Compras" pathImg="./images/partnership.svg" />
        <InternalMenu>
          <button onClick={() => history.push("/mpSalesSausage")}>
            <img src="./images/sausage_orange.svg" alt="sausage" />
          </button>
          <button onClick={() => history.push("/mpSalesChicken")}>
            <img src="./images/chicken_orange.svg" alt="chicken" />
          </button>
          <button className="selected">
            <img src="./images/chicken_cut_orange.svg" alt="chicken cut" />
          </button>
          <button onClick={() => history.push("/mpSalesFries")}>
            <img src="./images/fries_orange.svg" alt="fries" />
          </button>
        </InternalMenu>
        <ContainerCard>
          <SubContainerCard>
            <p>
              Estoque <small>30</small>
            </p>
          </SubContainerCard>
          <span>X</span>
          <SubContainerCard>
            <p>
              Preço médio<small>15</small>
            </p>
          </SubContainerCard>
          <SubContainerCard className="column">
            <p>
              Valor CWV = <small>55</small>
            </p>
            <p>
              Quantidade de venda <small>125</small>
            </p>
            <p>
              Preço de venda <small>80</small>
            </p>
            <p>
              Prazo <small>11/03/2021</small>
            </p>
            <p>
              Total de receita de produto <small>1310</small>
            </p>
            <p>
              Total de receita<small>2620</small>
            </p>
          </SubContainerCard>
          <SubContainerCard>
            <DivSubContainerCard className="column">
              <p>Marketing </p>
              <img src="./images/sausage_gray.svg" alt="sausage" />
            </DivSubContainerCard>
            <DivSubContainerCard className="column">
              <p>Total Marketing Produto</p>
              <small>D$ 60,00</small>
              <p>Total Marketing Pedido</p>
              <small>D$ 80,00</small>
            </DivSubContainerCard>
          </SubContainerCard>
          <SubContainerCard>
            <p>
              Enviar <SignalYellow />
            </p>
          </SubContainerCard>
        </ContainerCard>
        <BootonsMap />
        <Confirm>Comprar</Confirm>
      </SizeContainer>
    </Container>
  );
};
export default MpSalesChickenCut;
