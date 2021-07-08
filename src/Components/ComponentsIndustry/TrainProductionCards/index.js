import { useState } from "react";
import ModalTrain from "../ModalTrain";
import ModalDismiss from "../ModalDismiss";

import {
  ContainerCard,
  Icon,
  Display,
  Title,
  IconLevel,
  Paragraph,
  FooterPrice,
  ButtonTrain,
  ButtonDismiss,
} from "./style";

const ModalProductionCards = () => {
  const [showTrain, setShowTrain] = useState(false);
  const [showDismiss, setShowDismiss] = useState(false);

  const handleShowTrain = () => {
    setShowTrain(!showTrain);
  };

  const handleShowDismiss = () => {
    setShowDismiss(!showDismiss);
  };
  return (
    <>
      {showTrain && <ModalTrain onOff={handleShowTrain} />}
      {showDismiss && <ModalDismiss onOff={handleShowDismiss} />}
      <ContainerCard>
        <Title>
          <Icon>
            <Display>0</Display>
          </Icon>
          <p>Supervisor de produção</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>Um por linha e turno para ter lucro.</Paragraph>
        <FooterPrice>
          <ButtonTrain onClick={handleShowTrain}>
            <img src="./images/icon_train.svg" alt="icon_train" /> Treinar
          </ButtonTrain>

          <ButtonDismiss onClick={handleShowDismiss}>
            Despidir <img src="./images/sub_button.svg" alt="icon_sub" />
          </ButtonDismiss>
        </FooterPrice>
      </ContainerCard>

      <ContainerCard>
        <Title>
          <Icon>
            <Display>0</Display>
          </Icon>
          <p>Gerente de Produção</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>Aumenta a produtividade do quadro em 10%.</Paragraph>
        <FooterPrice>
          <ButtonTrain onClick={handleShowTrain}>
            <img src="./images/icon_train.svg" alt="icon_train" /> Treinar
          </ButtonTrain>

          <ButtonDismiss onClick={handleShowDismiss}>
            Despidir <img src="./images/sub_button.svg" alt="icon_sub" />
          </ButtonDismiss>
        </FooterPrice>
      </ContainerCard>

      <ContainerCard>
        <Title>
          <Icon>
            <Display>0</Display>
          </Icon>
          <p>Auxiliar de Produção</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>Aumento de capacidade.</Paragraph>
        <FooterPrice>
          <ButtonTrain onClick={handleShowTrain}>
            <img src="./images/icon_train.svg" alt="icon_train" /> Treinar
          </ButtonTrain>

          <ButtonDismiss onClick={handleShowDismiss}>
            Despidir <img src="./images/sub_button.svg" alt="icon_sub" />
          </ButtonDismiss>
        </FooterPrice>
      </ContainerCard>
    </>
  );
};
export default ModalProductionCards;
