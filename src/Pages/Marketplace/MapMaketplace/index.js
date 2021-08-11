import { useHistory } from "react-router";
import { useState } from "react";
import CountUp from "react-countup";
import ButtonsMap from "../../../Components/ComponentsMarketplace/ButtonsMap";

import {
  ExternContainer,
  Container,
  ButtonsFloatContainer,
  ButtonsFloatSection,
  ButtonsFloat,
  ContainerHeader,
  ContainerTitle,
  TotalValue,
  HeaderImg,
  PlayngTime,
  ContainerButtonTime,
  TimeButton,
  ImpotEx,
  ImpExButton,
} from "./style";

const MapMaketplace = () => {
  const history = useHistory();
  const [shedShow, setShedShow] = useState(false);

  const shed = () => setShedShow(!shedShow);

  return (
    <ExternContainer>
      <ButtonsFloatContainer>
        <ButtonsFloatSection>
          <ButtonsFloat onClick={() => history.push("/mpPurchasesSausage")}>
            <img src="/images/Purchases_float.svg" alt="Purchases_float" />
          </ButtonsFloat>
          <ButtonsFloat onClick={() => history.push("mpSalesSausage")}>
            <img src="/images/sales_float.svg" alt="sales_float" />
          </ButtonsFloat>
        </ButtonsFloatSection>
        <ButtonsFloat onClick={shed}>
          {shedShow && (
            <p>
              Locação:{" "}
              <CountUp
                end={90000}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </p>
          )}
          <img src="/images/shed_float.svg" alt="shed_float" />
        </ButtonsFloat>
        <ButtonsFloatSection>
          <ButtonsFloat onClick={() => history.push("/mpStockSausage")}>
            <img src="/images/stock_float.svg" alt="stock_float" />
          </ButtonsFloat>
          <ButtonsFloat onClick={() => history.push("weeklyReportStock")}>
            <img src="/images/calendar_float.svg" alt="calendar_float" />
          </ButtonsFloat>
        </ButtonsFloatSection>
      </ButtonsFloatContainer>

      <Container>
        <ContainerHeader>
          <ContainerTitle>
            <TotalValue>
              <HeaderImg src="./images/cifrao_white.svg" />
              <CountUp
                end={1000000}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            </TotalValue>

            <PlayngTime onClick={() => history.push("")}>
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
        </ContainerHeader>

        <ButtonsMap showButtons={false}/>
      </Container>
    </ExternContainer>
  );
};
export default MapMaketplace;
