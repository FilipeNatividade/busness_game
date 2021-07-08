import { useHistory } from "react-router";
import CountUp from "react-countup";
import { useValue } from "../../../providers/ValueContext";
import FooterButton from "../../../Components/ComponentsIndustry/FooterButton";

import {
  Container,
  SizeContainer,
  Title,
  BackButton,
  ImgFactory,
  MainContainer,
  SubTitle,
  IconH2,
  Paragraph,
  SpanParagraph,
  TitleAvailable,
  IconDollar,
} from "./style";

const MountFactory = () => {
  const { outputValue, entranceValue } = useValue();

  const history = useHistory();
  return (
    <Container>
      <SizeContainer>
        <Title>MONTE SUA INDÚSTRIA</Title>
        <BackButton onClick={() => history.push("/selectionFactory")} />
        <ImgFactory src="./images/big_factory.svg" />
        <MainContainer>
          <SubTitle>
            Funcionário <IconH2 src="./images/icon_management.svg" />
          </SubTitle>
          <Paragraph>
            A Administração é aonde você controla os seu Funcionários, tanto
            Operacionais quanto Administrtivos. Uma fábrica pequena possui
            <SpanParagraph>até 500 funcionários.</SpanParagraph>
          </Paragraph>

          <SubTitle>
            Maquinário <IconH2 src="./images/icon_tools.svg" />
          </SubTitle>
          <Paragraph>
            O Maquinário é onde você controla suas Máquinas e os quais Produtos
            voce pode produzir. Você pode ter até:
            <SpanParagraph>
              10 Máquina de Corte de Frango, 10 Máquina de Linguiça e Salsichão,
              10 Máquina de Frango Carcaça e 10 Máquina de Batata Resfriada.
            </SpanParagraph>
          </Paragraph>

          <SubTitle>
            Galpão <IconH2 src="./images/icon_shed.svg" />
          </SubTitle>
          <Paragraph>
            O Armazém é aonde voce pode encontrar seus itens para Produção e
            para Venda.
            <SpanParagraph>
              Tamanho do galpão = 150t material congelado ou refrigerado e 50 t
              de material não refrigerado/congelado.
            </SpanParagraph>
          </Paragraph>
        </MainContainer>
        <TitleAvailable>
          <p>
            <img src="./images/cifrao.svg" alt="cifrao" />
            Investimento inicial
          </p>
          <CountUp
            prefix="R$ "
            end={entranceValue}
            separator="."
            decimal=","
            decimals={2}
            duration={0.5}
          />
        </TitleAvailable>
        <FooterButton
          text="Selecionar indústria"
          path="/machinery"
          onHandle={null}
        />
      </SizeContainer>
    </Container>
  );
};
export default MountFactory;
