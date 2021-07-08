import { useHistory } from "react-router-dom";
import CountUp from "react-countup";

import {
  Container,
  ContainerCard,
  Icon,
  Title,
  Description,
  BackButton,
  TrainingFocus,
  TrainingDescription,
  Value,
  IconLevel,
  TrainButton,
} from "./style";

const ModalTrain = ({ onOff }) => {
  const history = useHistory();

  return (
    <Container>
      <ContainerCard>
        <Title>
        <Icon />
          <p>Auxíliar de Escritório</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Description>responsável caixa e tesouraria</Description>
        <TrainingFocus>Foco do Treino</TrainingFocus>
        <TrainingDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc
          mauris, accumsan vel augue quis, malesuada iaculis nisl.
        </TrainingDescription>
        <TrainingFocus>Valor do Treinamento</TrainingFocus>
        <Value>
          <div>
            <img src="./images/cifrao.svg" alt="cifrao" />
            <CountUp
              end={1500.0}
              prefix="R$ "
              separator="."
              decimal=","
              decimals={2}
              duration={0.5}
            />
          </div>

          <BackButton onClick={onOff} />
        </Value>
        <TrainButton
        // onClick={}
        >
          Realizar Treinamento
        </TrainButton>
      </ContainerCard>
    </Container>
  );
};
export default ModalTrain;
