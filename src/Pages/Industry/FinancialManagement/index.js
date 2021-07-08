import { useHistory } from "react-router";

import ModalMapMenuCards from "../../../Components/ComponentsIndustry/ModalMapMenuCards";
import HeaderPagesModal from "../../../Components/ComponentsIndustry/HeaderPagesModal";

import {
  Container,
  SizeContainer,
  HeaderPage,
  ContainerImgTitle,
  TitleSection,
  BackButton,
  NavTitle,
  IconSelection,
  IconNotSelection,
  ButtonContinue,
} from "./style";

const FinancialManagement = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <HeaderPage>
          <HeaderPagesModal />

          <TitleSection>
            <ContainerImgTitle />
            Adm. Financ.
            <BackButton onClick={() => history.push("/mapMenu")} />
          </TitleSection>

          <NavTitle>
            <IconSelection src="./images/financial_administration_button.svg" />
            <IconNotSelection
              onClick={() => history.push("/production")}
              src="./images/icon_production.svg"
            />
            <IconNotSelection
              onClick={() => history.push("/commercial")}
              src="./images/icon_commercial.svg"
            />
          </NavTitle>
        </HeaderPage>

        <ModalMapMenuCards />
      </SizeContainer>
      <ButtonContinue onClick={() => history.push("/trainFinancialManagement")}>
        <img src="./images/icon_train.svg" alt="icon_train" /> Treinar
      </ButtonContinue>
    </Container>
  );
};
export default FinancialManagement;
