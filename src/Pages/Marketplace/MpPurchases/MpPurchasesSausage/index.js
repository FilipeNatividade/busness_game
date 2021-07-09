import { useState } from "react";
import { useHistory } from "react-router-dom";
import HeaderReportMp from "../../../../Components/ComponentsMarketplace/HeaderReportMp";
import ButtonsMap from "../../../../Components/ComponentsMarketplace/ButtonsMap";

import {
  Container,
  SizeContainer,
  ContainerMenu,
  ImgButtonsTools,
  ToolsButton,
  TitleContainer,
  AddButton,
  TitleContent,
  VisitContainer,
  InternalVisitContainer,
  Signal,
  MainContainer,
  AvailabelStock,
  SubTitle,
  DivSubTitle,
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
  ButtonConfirm,
  InfoConfirm,
} from "./style";

const MpPurchasesSausage = () => {
  const history = useHistory();

  const [inCash, setInCash] = useState();
  const [thirtyDays, setThirtyDays] = useState();

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
        <HeaderReportMp
          title="COMPRAS"
          pathImg="./images/purchase_button.svg"
        />

        <TitleContainer>
          <TitleContent>Agendar Visitas</TitleContent>
          <AddButton>+</AddButton>
          <VisitContainer>
            <InternalVisitContainer>
              <img src="./images/market_basket.svg" alt="market_basket" />
              <p>Guanabara</p>
              <Signal />
            </InternalVisitContainer>
          </VisitContainer>
          <TitleContent>Visitas agendadas</TitleContent>
        </TitleContainer>
        <MainContainer>
          <ContainerMenu>
            <ToolsButton className={"selection"}>
              <ImgButtonsTools
                src="./images/sausage_gray.svg"
                alt="sausage_pcp"
              />
            </ToolsButton>
            <ToolsButton onClick={() => history.push("/mpPurchasesChicken")}>
              <ImgButtonsTools
                src="./images/chicken_gray.svg"
                alt="chicken_pcp"
              />
            </ToolsButton>
            <ToolsButton onClick={() => history.push("/mpPurchasesChickenCut")}>
              <ImgButtonsTools
                src="./images/chicken_cut_gray.svg"
                alt="cut_chicken_pcp"
              />
            </ToolsButton>
            <ToolsButton onClick={() => history.push("/mpPurchasesFries")}>
              <ImgButtonsTools src="./images/fries_gray.svg" alt="fries_pcp" />
            </ToolsButton>
          </ContainerMenu>
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
              <DivSubTitle>
                <Signal />
                <p>Pedido</p>
              </DivSubTitle>
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
            <DivSubTitle>
              <Signal />
              <p>Marketing e Promoção</p>
            </DivSubTitle>
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
              <h3>Total pedido</h3>
              <p>
                D$ 0,00
                <img src="./images/cifrao.svg" alt="cifrao" />
              </p>
            </div>
          </Total>
          <ButtonConfirm>Confirmar</ButtonConfirm>
          <InfoConfirm>
            Confirmar Pedido <Signal />
          </InfoConfirm>
        </MainContainer>

        <ButtonsMap />
      </SizeContainer>
    </Container>
  );
};
export default MpPurchasesSausage;
