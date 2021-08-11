import { useHistory } from "react-router";
import { useValue } from "../../../providers/ValueContext";
import CountUp from "react-countup";
import Modal from "../../../Components/ComponentsIndustry/Modal";
import {
  ExternContainer,
  Container,
  ContainerHeader,
  ContainerTitle,
  TotalValue,
  HeaderImg,
  PlayngTime,
  ContainerButtonTime,
  TimeButton,
  ImpotEx,
  ImpExButton,
  ContainerActivateModal,
  ActivateModalButton,
  IconModal,
  ModalOn,
  ContainerFooter,
  ContainerTools,
  ContainerMenu,
  ButtonsFloatContainer,
  ButtonsFloat,
  ButtonsFloatSection,
} from "./style";
import { useState } from "react";

const MapMenu = () => {
  const { entranceValue } = useValue();

  const [modalOnOff, setModalOnOff] = useState(false);

  const modal = () => {
    setModalOnOff(!modalOnOff);
  };

  const history = useHistory();
  return (
    <ExternContainer>
      <ButtonsFloatContainer>
        <ButtonsFloatSection>
          <ButtonsFloat onClick={() => history.push("/employees")}>
            <img src="/images/management_float.svg" alt="management_float" />
          </ButtonsFloat>
          <ButtonsFloat onClick={() => history.push("/machinery")}>
            <img src="/images/tools_float.svg" alt="tools_float" />
          </ButtonsFloat>
        </ButtonsFloatSection>
        <ButtonsFloatSection>
          <ButtonsFloat onClick={() => history.push('')}>
            <img src="/images/shed_float.svg" alt="shed_float" />
          </ButtonsFloat>
          <ButtonsFloat onClick={() => history.push("/weeklyReportPcp")}>
            <img src="/images/calendar_float.svg" alt="calendar_float" />
          </ButtonsFloat>
        </ButtonsFloatSection>
      </ButtonsFloatContainer>
      <Container>
        <ContainerHeader>
          <ContainerTitle>
            {entranceValue >= 0 ? (
              <TotalValue>
                <HeaderImg src="./images/cifrao_hidden_backgound.svg" />
                <CountUp
                  end={entranceValue}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </TotalValue>
            ) : (
              <TotalValue>
                <HeaderImg src="./images/cifrao_hidden_backgound.svg" />
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </TotalValue>
            )}
            <PlayngTime >
              <HeaderImg src="./images/icon_playng_game.svg" />
              Semana 1
            </PlayngTime>
          </ContainerTitle>
          <ContainerButtonTime>
            {/* colocar os "onClickes" nessas imagens */}
            <TimeButton>
              <img src="./images/button_pause.svg" alt="button_pause" />
            </TimeButton>
            <TimeButton>
              <img src="./images/button_fallow.svg" alt="button_fallow" />
            </TimeButton>
            <TimeButton>
              <img src="./images/button_advance.svg" alt="button_advance" />
            </TimeButton>
          </ContainerButtonTime>
          <ImpotEx>
            {/* colocar os "onClickes" nessas imagens */}
            <ImpExButton>Import</ImpExButton>
            <ImpExButton>Export</ImpExButton>
          </ImpotEx>

          {modalOnOff ? (
            <>
              <ModalOn onClick={modal}>
                <ActivateModalButton src="./images/open_modal.svg" />
                Administração
                <IconModal
                  src="./images/icon_management.svg"
                  alt="icon_management"
                />
              </ModalOn>
              <Modal />
            </>
          ) : (
            <ContainerActivateModal onClick={modal}>
              <ActivateModalButton src="./images/open_modal.svg" />
            </ContainerActivateModal>
          )}
        </ContainerHeader>

        <ContainerFooter>
          <ContainerTools>
            <img
              onClick={() => history.push("/ToolsPcpSausage")}
              src="./images/pcp_button.svg"
              alt="pcp_button"
            />
            <img
              onClick={() => history.push("/toolspurchasePig")}
              src="./images/purchase_button.svg"
              alt="purchase_button"
            />
            <img
              onClick={() => history.push("/toolsproductionSausage")}
              src="./images/productions_1.svg"
              alt="production_button"
            />
            <img
              onClick={() => history.push("/toolsCommercialSausage")}
              src="./images/partnership.svg"
              alt="commercial_button"
            />
            <img
              onClick={() => history.push("/toolsShippingSausage")}
              src="./images/shipping_button.svg"
              alt="shipping_button"
            />
          </ContainerTools>
          <ContainerMenu>
            <img
              onClick={() => history.push("/lossesAndProfits")}
              src="./images/pel_button.svg"
              alt="pel_button.svg"
            />
            <img
              onClick={() => history.push("/cashFlow")}
              src="./images/cash_flow.svg"
              alt="cash flow"
            />
            <img
              onClick={() => history.push("/bank")}
              src="./images/bank_button.svg"
              alt="bank_button"
            />
            <img
              onClick={() => history.push("/consultancy")}
              src="./images/consultancy_button.svg"
              alt="consultancy_button"
            />
            <img
              src="/images/back_button.svg"
              alt="back_button"
              onClick={() => history.push("/employees")}
            />
          </ContainerMenu>
        </ContainerFooter>
      </Container>
    </ExternContainer>
  );
};
export default MapMenu;
