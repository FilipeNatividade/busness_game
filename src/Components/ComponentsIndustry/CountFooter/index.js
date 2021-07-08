import CountUp from "react-countup";

import { useValue } from "../../../providers/ValueContext";

import { TotalFooter, TitleTotal, TitleAvailable, IconDollar } from "./style";

const CountFooter = () => {
  const { outputValue, entranceValue } = useValue();

  return (
    <TotalFooter>
      <TitleTotal>
        <p>total</p>
        {entranceValue <= 0 ? (
          <CountUp
            style={{ color: "#ff0000" }}
            end={outputValue}
            prefix="- R$ "
            separator="."
            decimal=","
            decimals={2}
            duration={0.5}
          />
        ) : (
          <CountUp
            end={outputValue}
            prefix="R$ "
            separator="."
            decimal=","
            decimals={2}
            duration={0.5}
          />
        )}
      </TitleTotal>
      <TitleAvailable>
        <p>disponivel</p>
        {entranceValue <= 0 ? (
          <CountUp
            prefix="R$ "
            end={0}
            separator="."
            decimal=","
            decimals={2}
            duration={0.5}
          />
        ) : (
          <CountUp
            prefix="R$ "
            end={entranceValue}
            separator="."
            decimal=","
            decimals={2}
            duration={0.5}
          />
        )}
      </TitleAvailable>
      <IconDollar>
        <img src="./images/cifrao.svg" alt="cifrao" />
      </IconDollar>
    </TotalFooter>
  );
};
export default CountFooter;
