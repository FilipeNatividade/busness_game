import { useHistory } from "react-router";
import { useValue } from "../../../providers/ValueContext";
import CountUp from "react-countup";
import {
  ContainerHeader,
  ContainerTitle,
  TotalValue,
  HeaderImg,
  PlayngTime,
  TitleContent,
  BackButton,
  ContainerTools,
  ButtonContainerTools,
} from "./style";

const HeaderWeeklyReport = ({ selected }) => {
  const { entranceValue } = useValue();

  const history = useHistory();
  return (
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
        <PlayngTime>
          <HeaderImg src="./images/icon_playng_game.svg" />
          Semana 1
        </PlayngTime>
      </ContainerTitle>
      <TitleContent>
        <img src="./images/calendar.svg" alt="calendar" />
        <p>Relatório Semanal</p>
        <BackButton onClick={() => history.push("/mapMenu")} />
      </TitleContent>
      <ContainerTools>
        <ButtonContainerTools
          onClick={() => history.push("/weeklyReportPcp")}
          className={selected[0]}
        >
          <img src="./images/pcp_button.svg" alt="pcp_button" />
        </ButtonContainerTools>
        <ButtonContainerTools
          onClick={() => history.push("/weeklyReportPurchase")}
          className={selected[1]}
        >
          <img src="./images/purchase_button.svg" alt="purchase_button" />
        </ButtonContainerTools>
        <ButtonContainerTools
          onClick={() => history.push("/weeklyReportProduction")}
          className={selected[2]}
        >
          <img src="./images/productions_1.svg" alt="production_button" />
        </ButtonContainerTools>
        <ButtonContainerTools
          onClick={() => history.push("/weeklyReportCommercial")}
          className={selected[3]}
        >
          <img src="./images/partnership.svg" alt="commercial_button" />
        </ButtonContainerTools>
      </ContainerTools>
    </ContainerHeader>
  );
};
export default HeaderWeeklyReport;
