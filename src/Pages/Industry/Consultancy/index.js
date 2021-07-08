import HeaderReport from "../../../Components/ComponentsIndustry/HeaderReport";
import {
  Container,
  SizeContainer,
  ContainerCard,
  Paragraph,
  ButtonInfo,
  ImgFooter,
} from "./style";

const Consultancy = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderReport
          title="Consultoria"
          pathImg="./images/consultancy_button.svg"
        />
        <ContainerCard>
          <Paragraph>Valor: R$ 1.000,00</Paragraph>
          <ButtonInfo>Mais informações</ButtonInfo>
        </ContainerCard>
        <ImgFooter src="./images/consultancy_button.svg" />
      </SizeContainer>
    </Container>
  );
};
export default Consultancy;
