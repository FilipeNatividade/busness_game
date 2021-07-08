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

const TrainFinancialManagementcards = () => {
  // const { setOutputValue, entranceValue, setEntranceValue } = useValue();

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
          <p>Auxiliar de Escritório</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>
          Sem impacto direto. Representa 5% dos auxiliares de produção
        </Paragraph>
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
          <p>Controle de Qualidade</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>
          Reduz as perdas pro qualidade ou aumenta a produtividade (a decidir)
        </Paragraph>
        <FooterPrice>
          {/* descobrir para onde esses botões direcionam */}
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
export default TrainFinancialManagementcards;
