import CountUp from "react-countup";
import { useHistory } from "react-router";
import { useValue } from "../../../providers/ValueContext";
import {
  Container,
  ContainerPrimary,
  TotalValue,
  BackButton,
  HeaderImg,
  ContainerSecunday,
  Title,
  Icon,
} from "./style";

const HeaderReport = ({ title, pathImg }) => {
  const history = useHistory();
  const { entranceValue } = useValue();
  return (
    <Container>
      <ContainerPrimary>
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
        <BackButton onClick={() => history.push("/mapMenu")} />
      </ContainerPrimary>
      <ContainerSecunday>
        <Icon src={pathImg} />
        <Title>{title}</Title>
      </ContainerSecunday>
    </Container>
  );
};
export default HeaderReport;
