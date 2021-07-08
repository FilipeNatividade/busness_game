/* eslint-disable jsx-a11y/alt-text */
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

const ModalProductionCards = () => {
  const { setOutputValue, entranceValue, setEntranceValue } = useValue();

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

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
      case "count3":
        setCount3(count3 - 1);
        setTotal(total - value3);
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
      case "count3":
        setCount3(count3 + 1);
        setTotal(total + value3);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setValue1(6400.0);
    setValue2(24000.0);
    setValue3(2800.0);

    setEntranceValue(entranceValue - total);
    setOutputValue(total);
  }, [total]);

  return (
    <>
      <ContainerCard>
        <Title>
          <Icon />
          <p>Supervisor de produção</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>Um por linha e turno para ter lucro.</Paragraph>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" />
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
          </div >
          <ContainerButton>
            {count1 >= 1 ? (
              <Buttons onClick={() => handleSub("count1")}>
                <img src="./images/sub_button.svg" />
              </Buttons>
            ) : (
              <img src="./images/sub_button.svg" />
            )}
            <Buttons onClick={() => handleAdd("count1")}>
              <img src="./images/add_button.svg" />
            </Buttons>
            <Display>{count1}</Display>
          </ContainerButton>
        </FooterPrice>
      </ContainerCard>

      <ContainerCard>
        <Title>
          <Icon />
          <p>Gerente de Produção</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>Aumenta a produtividade do quadro em 10%.</Paragraph>
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
          <ContainerButton >
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

      <ContainerCard>
        <Title>
          <Icon />
          <p>Auxiliar de Produção</p>
          <IconLevel>Lv 1</IconLevel>
        </Title>
        <Paragraph>Aumento de capacidade.</Paragraph>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" />
            {count3 === 0 ? (
              <CountUp
                end={0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            ) : (
              <CountUp
                end={value3 * count3}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            )}
          </div>
          <ContainerButton >
            {count3 >= 1 ? (
              <Buttons onClick={() => handleSub("count3")}>
                <img src="./images/sub_button.svg" />
              </Buttons>
            ) : (
              <img src="./images/sub_button.svg" />
            )}
            <Buttons onClick={() => handleAdd("count3")}>
              <img src="./images/add_button.svg" />
            </Buttons>
            <Display>{count3}</Display>
          </ContainerButton>
        </FooterPrice>
      </ContainerCard>
    </>
  );
};
export default ModalProductionCards;
