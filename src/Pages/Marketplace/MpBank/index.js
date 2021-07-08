import HeaderReportMp from "../../../Components/ComponentsMarketplace/HeaderReportMp";
import ButtonsMap from '../../../Components/ComponentsMarketplace/ButtonsMap'
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

const MpBank = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderReportMp title="Banco" pathImg="./images/bank_button.svg" />
        <ContainerCard>
          <Paragraph>Aplicação</Paragraph>
          <ImgCard src="./images/application_img.svg" />
          <FooterPrice>
            <img src="./images/cifrao_orange.svg" alt='cifrao_orange' />
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
            <img src="./images/cifrao_orange.svg" alt='cifrao_orange'/>
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
        <ButtonsMap/>
      </SizeContainer>
    </Container>
  );
};
export default MpBank;
