import { useHistory } from "react-router-dom";

import {
  Container,
  ContainerCard,
  Header,
  BackButton,
  VisitContainer,
  InternalVisitContainer,
  AddContainer,
  Signal,
  AddButton,
} from "./style";

const ModalVisitCustomer = () => {
  const history = useHistory();

  return (
    <Container>
      <ContainerCard>
        <Header>
          <p>Agendar novas Visitas?</p>
          <BackButton
            src="/images/back_button.svg"
            onClick={() => history.push("/")}
          />
        </Header>
        <VisitContainer>
          <InternalVisitContainer>
            <img src="./images/market_basket.svg" alt="market_basket" />
            <p>Zona Sul</p>
            <AddContainer>
              <Signal />
              <AddButton>+</AddButton>
            </AddContainer>
          </InternalVisitContainer>
        </VisitContainer>
        <VisitContainer>
          <InternalVisitContainer>
            <img src="./images/market_basket.svg" alt="market_basket" />
            <p>Carrefour</p>
            <AddContainer>
              <Signal />
              <AddButton>+</AddButton>
            </AddContainer>
          </InternalVisitContainer>
        </VisitContainer>
        <VisitContainer>
          <InternalVisitContainer>
            <img src="./images/market_basket.svg" alt="market_basket" />
            <p>Pão de Açucar</p>
            <AddContainer>
              <Signal />
              <AddButton>+</AddButton>
            </AddContainer>
          </InternalVisitContainer>
        </VisitContainer>
        <VisitContainer>
          <InternalVisitContainer>
            <img src="./images/market_basket.svg" alt="market_basket" />
            <p>Guanabara</p>
            <AddContainer>
              <Signal />
              <AddButton>+</AddButton>
            </AddContainer>
          </InternalVisitContainer>
        </VisitContainer>
      </ContainerCard>
    </Container>
  );
};
export default ModalVisitCustomer;
