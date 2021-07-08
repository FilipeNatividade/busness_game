import { useHistory } from "react-router";
import TrainCommercialCards from "../../../Components/ComponentsIndustry/TrainCommercialCards";
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
            <BackButton onClick={() => history.push("/commercial")} />
          </TitleSection>
          <NavTitle>
            <IconNotSelection
              onClick={() => history.push("/trainFinancialManagement")}
              src="./images/financial_administration_button.svg"
            />
            <IconNotSelection
              onClick={() => history.push("/trainProduction")}
              src="./images/icon_production.svg"
            />
            <IconSelection src="./images/icon_commercial.svg" />
          </NavTitle>
        </HeaderPage>
        <TrainCommercialCards />
      </SizeContainer>
    </Container>
  );
};
export default Commercial;
