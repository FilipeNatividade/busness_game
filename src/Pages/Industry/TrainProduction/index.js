import { useHistory } from "react-router";
import TrainProductionCards from "../../../Components/ComponentsIndustry/TrainProductionCards";
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
} from "./style";

const TrainProduction = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <HeaderPage>
          <HeaderPagesModal />
          <TitleSection>
            <ContainerImgTitle />
            Produção
            <BackButton onClick={() => history.push("/production")} />
          </TitleSection>
          <NavTitle>
            <IconNotSelection
              onClick={() => history.push("/trainFinancialManagement")}
              src="./images/financial_administration_button.svg"
            />
            <IconSelection src="./images/icon_production.svg" />
            <IconNotSelection
              onClick={() => history.push("/trainCommercial")}
              src="./images/icon_commercial.svg"
            />
          </NavTitle>
        </HeaderPage>

        <TrainProductionCards />
      </SizeContainer>
    </Container>
  );
};
export default TrainProduction;
