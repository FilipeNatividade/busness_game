import HeaderReport from "../../../Components/ComponentsMarketplace/HeaderReportMp";
import ButtonsMap from "../../../Components/ComponentsMarketplace/ButtonsMap";
import CountUp from "react-countup";
import {
  Container,
  SizeContainer,
  Content,
  PelImg,
  ContainerReport,
  ParagraphValue,
  ParagraphValuePositive,
  NoteFooter,
  ImgFooter,
} from "./style";

const MarketplaceLossesAndProfits = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderReport title="P&amp;L" pathImg="./images/pel_button.svg" />
        <Content>
          <PelImg src="./images/pel_img.svg" />
          <ContainerReport>
            <ParagraphValuePositive>
              <span>
                <img src="./images/add_red.svg" alt="add_button" />
                Venda Bruta
              </span>
              <span>
                <CountUp
                  prefix="+ R$"
                  end={20000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValuePositive>
            <ParagraphValue>
              <span>
                <img src="./images/negative_icon.svg" alt="negative_icon" />
                Impostos
              </span>
              <span>
                <CountUp
                  prefix="- R$"
                  end={2000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValue>
            <ParagraphValue>
              <span>
                <img src="./images/negative_icon.svg" alt="negative_icon" />
                Despesas de Marketing
              </span>
              <span>
                <CountUp
                  prefix="- R$"
                  end={2000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValue>
            <ParagraphValuePositive>
              <span>
                <img src="./images/point_red.svg" alt="point" />
                Receita Despesa Financeira
              </span>
              <span>
                <CountUp
                  prefix="+ R$"
                  end={4000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValuePositive>
            <ParagraphValue>
              <span>
                <img src="./images/negative_icon.svg" alt="negative_icon" />
                Despessa Pessoal
              </span>
              <span>
                <CountUp
                  prefix="- R$"
                  end={2000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValue>
            <ParagraphValue>
              <span>
                <img src="./images/negative_icon.svg" alt="negative_icon" />
                Despesa de Treinamento
              </span>
              <span>
                <CountUp
                  prefix="- R$"
                  end={2000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValue>
            <ParagraphValue>
              <span>
                <img src="./images/negative_icon.svg" alt="negative_icon" />
                CMV
              </span>
              <span>
                <CountUp
                  prefix="- R$"
                  end={2000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValue>
            <ParagraphValuePositive>
              <span>
                <img src="./images/gross_margin_red.svg" alt="gross_margin" />
                Margem Brutal
              </span>
              <span>
                <CountUp
                  prefix="R$"
                  end={20000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValuePositive>
            <ParagraphValue>
              <span>
                <img src="./images/negative_icon.svg" alt="negative_icon" />
                Aluguel
              </span>
              <span>
                <CountUp
                  prefix="- R$"
                  end={2000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValue>
            <ParagraphValue>
              <span>
                <img src="./images/negative_icon.svg" alt="negative_icon" />
                Outros
              </span>
              <span>
                <CountUp
                  prefix="- R$"
                  end={2000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValue>
            <ParagraphValuePositive>
              <span>
                <img src="./images/point.svg" alt="point" />
                Lucros Bruto/Prejuizos
              </span>
              <span>
                <CountUp
                  prefix="+ R$"
                  end={20000.0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </span>
            </ParagraphValuePositive>
          </ContainerReport>
          <NoteFooter>
            <p>Ponto de Equilibrio</p>
            <CountUp
              prefix="R$"
              end={20000.0}
              separator="."
              decimal=","
              decimals={2}
              duration={0.5}
            />
          </NoteFooter>
        </Content>
          <ImgFooter src="./images/img_pel.svg" alt="img_pel" />
        <ButtonsMap />
      </SizeContainer>
    </Container>
  );
};
export default MarketplaceLossesAndProfits;
