import CountUp from "react-countup";
import {
  Container,
  ContainerPrimary,
  TotalValue,
  HeaderImg,
  ContainerSecunday,
  Title,
  Icon,
} from "./style";

const HeaderReport = ({ title, pathImg }) => {
  return (
    <Container>
      <ContainerPrimary>
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
      </ContainerPrimary>
      <ContainerSecunday>
        <Icon src={pathImg} />
        <Title>{title}</Title>
      </ContainerSecunday>
    </Container>
  );
};
export default HeaderReport;
