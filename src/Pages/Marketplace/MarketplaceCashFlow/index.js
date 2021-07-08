import HeaderReportMp from "../../../Components/ComponentsMarketplace/HeaderReportMp";
import ButtonsMap from '../../../Components/ComponentsMarketplace/ButtonsMap'

import { Container, SizeContainer, ContainerCard, Paragraph } from "./style";

const MarketplaceCashFlow = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderReportMp
          title="Fluxo de Caixa"
          pathImg="./images/cash_flow.svg"
        />
        <ContainerCard>
          <Paragraph>
            Saldo Aterior: <span>D$ 1.276.850,27</span>
          </Paragraph>
          <Paragraph>
            Entrada:{" "}
            <div>
              <span>+D$ 4.000,00</span>
              <span>+D$ 1.000,00</span>
            </div>
          </Paragraph>
          <Paragraph>
            Saída:{" "}
            <div>
              <span>-D$ 6.000,00</span>
              <span>-D$ 2.500,00</span>
              <span>-D$ 3.000,00</span>
            </div>
          </Paragraph>
          <Paragraph>
            Saldo: <span>D$ -6.500</span>
          </Paragraph>
          <Paragraph>
            Saldo Atual: <span>D$ 1.270.350,27</span>
          </Paragraph>
        </ContainerCard>
        <ButtonsMap/>
      </SizeContainer>
    </Container>
  );
};
export default MarketplaceCashFlow;
