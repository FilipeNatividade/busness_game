import { useHistory } from "react-router";
import ModalProductionCards from "../../../Components/ComponentsIndustry/ModalProductionCards";
import HeaderPagesModal from "../../../Components/ComponentsIndustry/HeaderPagesModal";

import {
  Container,
  SizeContainer,
  HeaderPage,
  ContainerTitleSection,
  ContainerImgTitle,
  TitleSection,
  BackButton,
  NavTitle,
  IconSelection,
  IconNotSelection,
  ButtonContinue,
} from "./style";

const Production = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <HeaderPage>
          <HeaderPagesModal />

          <TitleSection>
            <ContainerImgTitle src="./images/icon_production.svg" />
            Produção
            <BackButton onClick={() => history.push("/mapMenu")} />
          </TitleSection>
          <NavTitle>
            <IconNotSelection
              src="./images/financial_administration_button.svg"
              onClick={() => history.push("/financialManagement")}
            />
            <IconSelection src="./images/icon_production.svg" />
            <IconNotSelection
              onClick={() => history.push("/commercial")}
              src="./images/icon_commercial.svg"
            />
          </NavTitle>
        </HeaderPage>

        <ModalProductionCards />
      </SizeContainer>
      <ButtonContinue
      //  onClick={() => history.push("/trainProduction")}
      >
        <img src="./images/icon_train.svg" alt="icon_train" /> Treinar
      </ButtonContinue>
    </Container>
  );
};
export default Production;
