import { useHistory } from "react-router";
import TrainFinancialManagementcards from "../../../Components/ComponentsIndustry/TrainFinancialManagementcards";
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
} from "./style";

const TrainFinancialManagement = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <HeaderPage>
          <HeaderPagesModal />
          <TitleSection>
            <ContainerImgTitle />
            Adm. Financ.
            <BackButton onClick={() => history.push("/financialManagement")} />
          </TitleSection>

          <NavTitle>
            <IconSelection src="./images/financial_administration_button.svg" />
            <IconNotSelection
              onClick={() => history.push("/trainProduction")}
              src="./images/icon_production.svg"
            />
            <IconNotSelection
              onClick={() => history.push("/trainCommercial")}
              src="./images/icon_commercial.svg"
            />
          </NavTitle>
        </HeaderPage>

        <TrainFinancialManagementcards />
      </SizeContainer>
    </Container>
  );
};
export default TrainFinancialManagement;
