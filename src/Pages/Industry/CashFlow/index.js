import HeaderReport from "../../../Components/ComponentsIndustry/HeaderReport";
import {
  Container,
  SizeContainer,
  ContainerCard,
  Paragraph,
} from "./style";

const CashFlow = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderReport
          title="Fluxo de Caixa"
          pathImg="./images/cash_flow.svg"
        />
        <ContainerCard>
          <Paragraph>Saldo Aterior: <span>D$ 1.276.850,27</span></Paragraph>
          <Paragraph>Entrada: <div ><span className='positive'>+D$ 4.000,00</span><span className='positive'>+D$ 1.000,00</span></div></Paragraph>
          <Paragraph>Saída: <div ><span className='negative'>-D$ 6.000,00</span><span className='negative'>-D$ 2.500,00</span><span className='negative'>-D$ 3.000,00</span></div></Paragraph>
          <Paragraph>Saldo: <span className='negative'>D$ -6.500</span></Paragraph>
          <Paragraph>Saldo Atual: <span>D$ 1.270.350,27</span></Paragraph>
        </ContainerCard>
      </SizeContainer>
    </Container>
  );
};
export default CashFlow;
