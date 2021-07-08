import { useHistory } from "react-router";

import {
  Container,
  SizeContainer,
  LogoImg,
  ContainerGame,
  ButtonGame,
  ImgButtonGame,
  BackButton,
} from "./style";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <SizeContainer>
        <LogoImg src="./images/logohAsset 3.png" />
        <ContainerGame>
          <ButtonGame>
            <ImgButtonGame src="./images/dado1.svg" />
            Continuar Jogo
          </ButtonGame>
          <ButtonGame onClick={() => history.push("/SelectionFactory")}>
            <ImgButtonGame src="./images/dado2.svg" />
            Novo Jogo
          </ButtonGame>
          <ButtonGame onClick={() => history.push("/SavedGame")}>
            <ImgButtonGame src="./images/dado3.svg" />
            Jogos Salvos
          </ButtonGame>
          <ButtonGame>
            <ImgButtonGame src="./images/dado4.svg" />
            Histórico de Jogadas
          </ButtonGame>
        </ContainerGame>
        <BackButton onClick={() => history.push("/")} />
      </SizeContainer>
    </Container>
  );
};
export default Home;
