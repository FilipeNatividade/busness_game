import { useHistory } from "react-router-dom";
import CountUp from "react-countup";

import {
  Container,
  MainContainer,
  Header,
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

const ModalDismiss = ({onOff}) => {
  const history = useHistory();

  return (
    <Container>
      <MainContainer>
        <Header>
          Deseja desligar?
          <BackButton onClick={onOff} />
        </Header>
        <ContainerCard>
          <Icon />
          <Title>
            <p>Auxíliar de Escritório</p> <IconLevel>Lv 1</IconLevel>
          </Title>
          <Description>
            Aumenta o número de  Propostas  nos  Pedidos  de
            Mercados
          </Description>
        </ContainerCard>
        <TrainButton
        // onClick={}
        >
          Realizar Treinamento
        </TrainButton>
      </MainContainer>
    </Container>
  );
};
export default ModalDismiss;
