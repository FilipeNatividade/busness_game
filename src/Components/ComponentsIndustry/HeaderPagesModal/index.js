import CountUp from "react-countup";
import { useValue } from "../../../providers/ValueContext";
import { ContainerTitle, TotalValue, PlayngTime, HeaderImg } from "./style";

const HeaderPagesModal = () => {
  const { outputValue, entranceValue } = useValue();

  return (
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
  );
};
export default HeaderPagesModal;
