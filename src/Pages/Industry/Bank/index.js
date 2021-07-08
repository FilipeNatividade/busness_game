import HeaderReport from "../../../Components/ComponentsIndustry/HeaderReport";
import CountUp from "react-countup";
import {
  Container,
  SizeContainer,
  ContainerCard,
  Paragraph,
  ImgCard,
  FooterPrice,
  LoanImgCard,
  ImgFooter,
} from "./style";

const Bank = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderReport title="Banco" pathImg="./images/bank_button.svg" />
        <ContainerCard>
          <Paragraph>Aplicação</Paragraph>
          <ImgCard src="./images/application_img.svg" />
          <FooterPrice>
            <img src="./images/cifrao.svg" alt='cifrao' />
            <CountUp
              end={0}
              separator="."
              decimal=","
              decimals={2}
              duration={0.5}
            />
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Paragraph>Empréstimo</Paragraph>
          <LoanImgCard src="./images/loan_img.svg" />
          <FooterPrice>
            <img src="./images/cifrao.svg" alt='cifrao'/>
            <CountUp
              end={0}
              separator="."
              decimal=","
              decimals={2}
              duration={0.5}
            />
          </FooterPrice>
        </ContainerCard>
        <ImgFooter src="./images/character_bank.svg" />
      </SizeContainer>
    </Container>
  );
};
export default Bank;
