import { useValue } from "../../../providers/ValueContext";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

import {
  ContainerCard,
  Icon,
  Title,
  IconLevel,
  Paragraph,
  FooterPrice,
  ContainerButton,
  Buttons,
  Display,
} from "./style";

const ModalCommercialCards = () => {
  const { setOutputValue, entranceValue, setEntranceValue } = useValue();

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [total, setTotal] = useState(0);

  const handleSub = (computer) => {
    switch (computer) {
      case "count1":
        setCount1(count1 - 1);
        setTotal(total - value1);
        setEntranceValue(entranceValue + total);
        break;
      case "count2":
        setCount2(count2 - 1);
        setTotal(total - value2);
        setEntranceValue(entranceValue + total);
        break;
      default:
        break;
    }
  };

  const handleAdd = (computer) => {
    switch (computer) {
      case "count1":
        setCount1(count1 + 1);
        setTotal(total + value1);
        break;
      case "count2":
        setCount2(count2 + 1);
        setTotal(total + value2);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setValue1(24000.0);
    setValue2(4500.0);

    setEntranceValue(entranceValue - total);
    setOutputValue(total);
  }, [total]);

  return (
    <>
      <ContainerCard>
        <Title>
          <Icon />
          <p>Gerente Comercial</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>É preciso ter 1 para realizar as vendas.</Paragraph>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" alt="cifrao" />
            {count1 === 0 ? (
              <CountUp
                end={0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            ) : (
              <CountUp
                end={value1 * count1}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            )}
          </div>
          <ContainerButton className="containerFooter">
            {count1 >= 1 ? (
              <Buttons onClick={() => handleSub("count1")}>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            ) : (
              <img src="./images/sub_button.svg" alt="sub_button" />
            )}
            <Buttons onClick={() => handleAdd("count1")}>
              <img src="./images/add_button.svg" alt="add_button" />
            </Buttons>
            <Display>{count1}</Display>
          </ContainerButton>
        </FooterPrice>
      </ContainerCard>

      <ContainerCard>
        <Title>
          <Icon />
          <p>Controle de Qualidade</p>
          <IconLevel>lv 1</IconLevel>
        </Title>
        <Paragraph>
          Reduz as perdas por qualidade ou aumenta a produtividade (a decidir)
        </Paragraph>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" />
            {count2 === 0 ? (
              <CountUp
                end={0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            ) : (
              <CountUp
                end={value2 * count2}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            )}
          </div>
          <ContainerButton className="containerFooter">
            {count2 >= 1 ? (
              <Buttons onClick={() => handleSub("count2")}>
                <img src="./images/sub_button.svg" />
              </Buttons>
            ) : (
              <img src="./images/sub_button.svg" />
            )}
            <Buttons onClick={() => handleAdd("count2")}>
              <img src="./images/add_button.svg" />
            </Buttons>
            <Display>{count2}</Display>
          </ContainerButton>
        </FooterPrice>
      </ContainerCard>
    </>
  );
};
export default ModalCommercialCards;
