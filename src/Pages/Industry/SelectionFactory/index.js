import { useState } from "react";
import { useHistory } from "react-router";

import {
  Container,
  SizeContainer,
  Title,
  BackButton,
  ContainerFactory,
  ContainerButton,
  ContainerImgFactory,
  ImgFactory,
  TitleFactory,
  NotAvailable,
  Imgmessage,
} from "./style";

const SelectionFactory = () => {
  const [smallNotAvailable, setSmallNotAvailable] = useState(false);
  const [mediumNotAvailable, setMediumNotAvailable] = useState(false);

  const history = useHistory();

  const small = () => {
    setSmallNotAvailable(!smallNotAvailable);
    setMediumNotAvailable(false);
  };
  const medium = () => {
    setMediumNotAvailable(!mediumNotAvailable);
    setSmallNotAvailable(false);
  };

  const big = () => {
    setMediumNotAvailable(false);
    setSmallNotAvailable(false);
    history.push("/mountFactory");
  };

  return (
    <Container>
      <SizeContainer>
        <Title>Monte sua Fábrica</Title>
        <BackButton onClick={() => history.push("/home")} />
        <ContainerFactory>
          <ContainerButton>
            <ContainerImgFactory onClick={small}>
              <ImgFactory src="./images/small_factory.svg" />
              {smallNotAvailable ? (
                <NotAvailable>Indisponível</NotAvailable>
              ) : (
                <TitleFactory>Pequena</TitleFactory>
              )}
            </ContainerImgFactory>
          </ContainerButton>
          <ContainerButton>
            <ContainerImgFactory onClick={medium}>
              <ImgFactory src="./images/medium_factory.svg" />
              {mediumNotAvailable ? (
                <NotAvailable>Indisponível</NotAvailable>
              ) : (
                <TitleFactory>Média</TitleFactory>
              )}
            </ContainerImgFactory>
          </ContainerButton>
          <ContainerButton onClick={big}>
            <ContainerImgFactory>
              <ImgFactory src="./images/big_factory.svg" />
              <TitleFactory>grande</TitleFactory>
            </ContainerImgFactory>
          </ContainerButton>
        </ContainerFactory>
        <Imgmessage src="./images/message_type_factory.svg" />
      </SizeContainer>
    </Container>
  );
};
export default SelectionFactory;
