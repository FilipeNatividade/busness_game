import { useHistory } from "react-router";
import CountUp from "react-countup";
import { useValue } from "../../../providers/ValueContext";
import {
  Container,
  SizeContainer,
  Title,
  BackButton,
  ContainerGame,
  ContainerImg,
  RightContainer,
  ImgFactory,
  ButtonFactory,
  TitleFactory,
  ParagraphFactory,
  ImgParagraph,
} from "./style";

const SavedGame = () => {
  const { entranceValue } = useValue();

  const history = useHistory();
  return (
    <Container>
      <SizeContainer>
        <Title>
          Jogos Salvos
          <BackButton onClick={() => history.push("/home")} />
        </Title>

        <ContainerGame>
          <ButtonFactory>
            <ContainerImg>
              <ImgFactory src="./images/small_factory.svg" />
            </ContainerImg>
            <RightContainer>
              <TitleFactory>Fábrica pequena | Semana 7</TitleFactory>
              <ParagraphFactory>
                <ImgParagraph src="./images/cifrao.svg" />
                <CountUp
                  end={entranceValue}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </ParagraphFactory>
            </RightContainer>
          </ButtonFactory>

          <ButtonFactory>
            <ContainerImg>
              <ImgFactory src="./images/medium_factory.svg" />
            </ContainerImg>
            <RightContainer>
              <TitleFactory>Fábrica Média | Semana 7</TitleFactory>
              <ParagraphFactory>
                <ImgParagraph src="./images/cifrao.svg" />
                <CountUp
                  end={entranceValue}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={1}
                />
              </ParagraphFactory>
            </RightContainer>
          </ButtonFactory>

          <ButtonFactory onClick={() => history.push("/mapMenu")}>
            <ContainerImg>
              <ImgFactory src="./images/big_factory.svg" />
            </ContainerImg>
            <RightContainer>
              <TitleFactory>Fábrica Grande | Semana 7</TitleFactory>
              <ParagraphFactory>
                <ImgParagraph src="./images/cifrao.svg" />
                <CountUp
                  end={entranceValue}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={1}
                />
              </ParagraphFactory>
            </RightContainer>
          </ButtonFactory>
        </ContainerGame>
      </SizeContainer>
    </Container>
  );
};
export default SavedGame;
