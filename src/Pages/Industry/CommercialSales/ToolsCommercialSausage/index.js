import { useState } from "react";
import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import SubHeader from "../../../../Components/ComponentsIndustry/SubHeader";
import ModalVisitCustomer from "../../../../Components/ComponentsIndustry/ModalVisitCustomer";

import {
  Container,
  SizeContainer,
  TitleContainer,
  AddButton,
  TitleContent,
  VisitContainer,
  InternalVisitContainer,
  AddContainer,
  Signal,
  AddVisit,
  MainContainer,
  AvailabelStock,
  SubTitle,
  RequestContainer,
  FirstRequestContainer,
  ButtonContainer,
  SecondRequestContainer,
  FirstMarketngContainer,
  MarketngContainer,
  CountMarketngContainer,
  TotalContainer,
  Total,
  Icon,
} from "../style";

const ToolsCommercialSausage = () => {
  const [inCash, setInCash] = useState(false);
  const [thirtyDays, setThirtyDays] = useState(false);

  const handleDeadline = (sub) => {
    switch (sub) {
      case "inCash":
        setInCash(true);
        setThirtyDays(false);
        break;
      case "thirtyDays":
        setInCash(false);
        setThirtyDays(true);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      {/* <ModalVisitCustomer/> */}
      <SizeContainer>
        <HeaderTools
          pathImg="./images/commercial_button.svg"
          title="Comercial"
          subTitle="(Vendas e Contato com Mercados)"
          style={["", "", "", "selection", ""]}
        />
        <TitleContainer>
          <TitleContent>
            <img src="./images/partnership.svg" alt="partnership" />
            Agendar Visitas
          </TitleContent>
          <AddButton>+</AddButton>
          <VisitContainer>
            <InternalVisitContainer>
              <img src="./images/market_basket.svg" alt="market_basket" />
              <p>Guanabara</p>
              <AddContainer>
                <Signal />
                <AddVisit>+</AddVisit>
              </AddContainer>
            </InternalVisitContainer>
          </VisitContainer>
          <TitleContent>Visitas agendadas</TitleContent>
        </TitleContainer>
        <SubHeader
          style={["selection", "", "", "", ""]}
          path1="toolsCommercialSausage"
          path2="toolsCommercialChicken"
          path3="toolsCommercialChickenCut"
          path4="toolsCommercialFries"
        />
        <MainContainer>
          <h2>
            Produção de <small>Linguiça Salsichão</small>
          </h2>
          <AvailabelStock>
            <h3>
              <img src="./images/productions.svg" alt="productions" /> Estoque
              Disponível
            </h3>
            <p>0</p> <small>KG</small>
          </AvailabelStock>

          <RequestContainer>
            <SubTitle>
              <img src="./images/ticket.svg" alt="ticket" />
              Pedido
            </SubTitle>
            <FirstRequestContainer>
              <div>
                <small>(até 10 caixas)</small>
                <input placeholder="0" />
              </div>
              <p>
                R$0,00 <img src="./images/box.svg" alt="box" />
              </p>
              <div className="buttons">
                <ButtonContainer>
                  <p>á vista</p>
                  {inCash ? (
                    <button
                      className="checked"
                      onClick={() => handleDeadline("inCash")}
                    />
                  ) : (
                    <button onClick={() => handleDeadline("inCash")} />
                  )}
                </ButtonContainer>
                <ButtonContainer>
                  <p>30 dias</p>
                  {thirtyDays ? (
                    <button
                      className="checked"
                      onClick={() => handleDeadline("thirtyDays")}
                    />
                  ) : (
                    <button onClick={() => handleDeadline("thirtyDays")} />
                  )}
                </ButtonContainer>
              </div>
            </FirstRequestContainer>
            <SecondRequestContainer>
              <h3>Venda de Produto</h3>
              <p>
                R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
              </p>
              <h3>Venda Total</h3>
              <p>
                R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
              </p>
            </SecondRequestContainer>
          </RequestContainer>
          <SubTitle>
            <img src="./images/marketing.svg" alt="marketing" />
            Marketing e Promoção
          </SubTitle>
          <MarketngContainer>
            <FirstMarketngContainer>
              <CountMarketngContainer>
                <input placeholder="0" />
                <p>Demonstradora</p>
                <small>1.000/mês</small>
                <div>
                  R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
                </div>
              </CountMarketngContainer>

              <CountMarketngContainer>
                <input placeholder="0" />
                <p>Repositora</p>
                <small>1.000/mês</small>
                <div>
                  R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
                </div>
              </CountMarketngContainer>

              <CountMarketngContainer>
                <input placeholder="0" />
                <p>Encarte</p>
                <small>1.000/mês</small>
                <div>
                  R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
                </div>
              </CountMarketngContainer>

              <CountMarketngContainer>
                <input placeholder="0" />
                <p>TV</p>
                <small>1.000/mês</small>
                <div>
                  R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
                </div>
              </CountMarketngContainer>

              <CountMarketngContainer>
                <input placeholder="0" />
                <p>Rádio</p>
                <small>1.000/mês</small>
                <div>
                  R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
                </div>
              </CountMarketngContainer>

              <CountMarketngContainer>
                <input placeholder="0" />
                <p>Demonstradora</p>
                <small>1.000/mês</small>
                <div>
                  R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
                </div>
              </CountMarketngContainer>
            </FirstMarketngContainer>
            <TotalContainer>
              <p>
                Total
                <small>Marketing Produto</small>
              </p>
              <div>
                R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
              </div>
            </TotalContainer>
            <TotalContainer>
              <p>
                Total
                <small>Marketing Pedidos</small>
              </p>
              <div>
                R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
              </div>
            </TotalContainer>
          </MarketngContainer>
          <Total>
            <Icon
              src="./images/commercial_button.svg"
              alt="commercial_button"
            />
            <div>
            <h3>Total</h3>
            <p>
              D$ 0,00<img src="./images/cifrao.svg" alt="cifrao" />
            </p>
            </div>
          </Total>
        </MainContainer>
      </SizeContainer>
    </Container>
  );
};
export default ToolsCommercialSausage;
