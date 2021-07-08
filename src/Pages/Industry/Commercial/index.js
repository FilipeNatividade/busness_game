import { useHistory } from "react-router";
import ModalCommercialCards from "../../../Components/ComponentsIndustry/ModalCommercialCards";
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

const Commercial = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <HeaderPage>
          <HeaderPagesModal />

          <TitleSection>
            <ContainerImgTitle />
            Comercial
            <BackButton onClick={() => history.push("/mapMenu")} />
          </TitleSection>
          <NavTitle>
            <IconNotSelection
              onClick={() => history.push("/financialManagement")}
              src="./images/financial_administration_button.svg"
            />
            <IconNotSelection
              onClick={() => history.push("/production")}
              src="./images/icon_production.svg"
            />
            <IconSelection src="./images/icon_commercial.svg" />
          </NavTitle>
        </HeaderPage>

        <ModalCommercialCards />
      </SizeContainer>
      <ButtonContinue
      // onClick={() => history.push("/trainCommercial")}
      >
        <img src="./images/icon_train.svg" alt="icon_train" /> Treinar
      </ButtonContinue>
    </Container>
  );
};
export default Commercial;
