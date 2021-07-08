import HeaderReportMp from "../../../Components/ComponentsMarketplace/HeaderReportMp";
import BootonsMap from '../../../Components/ComponentsMarketplace/ButtonsMap'

import {
  Container,
  SizeContainer,
  ContainerCard,
  Paragraph,
  ButtonInfo,
  ImgFooter,
} from "./style";

const MpConsultancy = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderReportMp
          title="Consultoria"
          pathImg="./images/consultancy_button.svg"
        />
        <ContainerCard>
          <Paragraph>Valor: R$ 1.000,00</Paragraph>
          <ButtonInfo>Mais informações</ButtonInfo>
        </ContainerCard>
        <ImgFooter src="./images/consultancy_button.svg" />
        <BootonsMap/>
      </SizeContainer>
    </Container>
  );
};
export default MpConsultancy;
