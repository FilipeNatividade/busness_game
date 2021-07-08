import { useValue } from "../../../providers/ValueContext";
import { useMachinery } from "../../../providers/MachineryContext";
import { useEffect, useMemo, useState } from "react";
import CountUp from "react-countup";

import {
  Container,
  Icon,
  Title,
  ContainerContent,
  ContainerParagraph,
  IconInfo,
  Paragraph,
  FooterPrice,
  ContainerButton,
  Buttons,
  Display,
} from "./style";

const MachineryCards = ({ total, setTotal }) => {
  const {
    geradorEnergia,
    setGeradorEnergia,
    maquinaFrango,
    setMaquinaFrango,
    maquinaSalsichao,
    setMaquinaSalsichao,
    maquinaFrangoCorte,
    setMaquinaFrangoCorte,
    maquinaFries,
    setMaquinaFries,
  } = useMachinery();

  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  let [count4, setCount4] = useState(0);
  let [count5, setCount5] = useState(0);

  let [value1, setValue1] = useState(geradorEnergia.value);
  let [value2, setValue2] = useState(maquinaFrango.value);
  let [value3, setValue3] = useState(maquinaSalsichao.value);
  let [value4, setValue4] = useState(maquinaFrangoCorte.value);
  let [value5, setValue5] = useState(maquinaFries.value);

  const handleSub = (computer) => {
    switch (computer) {
      case "count1":
        setCount1((count1 -= 1));
        setTotal((total -= value1));
        setGeradorEnergia({
          amount: count1,
          value: geradorEnergia.value,
        });
        break;
      case "count2":
        setCount2((count2 -= 1));
        setTotal((total -= value2));
        setMaquinaFrango({
          amount: count2,
          value: maquinaFrango.value,
        });
        break;
      case "count3":
        setCount3((count3 -= 1));
        setTotal((total -= value3));
        setMaquinaSalsichao({
          amount: count3,
          value: maquinaSalsichao.value,
        });
        break;
      case "count4":
        setCount4((count4 -= 1));
        setTotal((total -= value4));
        setMaquinaFrangoCorte({
          amount: count4,
          value: maquinaFrangoCorte.value,
        });
        break;
      case "count5":
        setCount5((count5 -= 1));
        setTotal((total -= value5));
        setMaquinaFries({
          amount: count5,
          value: maquinaFries.value,
        });
        break;
      default:
        break;
    }
  };

  const handleAdd = (computer) => {
    switch (computer) {
      case "count1":
        setCount1((count1 += 1));
        setTotal(total + value1);
        setGeradorEnergia({
          amount: count1,
          value: geradorEnergia.value,
        });
        break;
      case "count2":
        setCount2((count2 += 1));
        setTotal(total + value2);
        setMaquinaFrango({
          amount: count2,
          value: maquinaFrango.value,
        });
        break;
      case "count3":
        setCount3((count3 += 1));
        setTotal(total + value3);
        setMaquinaSalsichao({
          amount: count3,
          value: maquinaSalsichao.value,
        });
        break;
      case "count4":
        setCount4((count4 += 1));
        setTotal(total + value4);
        setMaquinaFrangoCorte({
          amount: count4,
          value: maquinaFrangoCorte.value,
        });
        break;
      case "count5":
        setCount5((count5 += 1));
        setTotal(total + value5);
        setMaquinaFries({
          amount: count5,
          value: maquinaFries.value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Container>
        <Icon src="./images/icon_gerador_energia.svg" />
        <Title>Gerador de Energia</Title>
        <ContainerContent>
          <ContainerParagraph>
            <IconInfo src="./images/icon_info.svg" />
            <span>Antes de comprar uma máquina você precisa ter 1 gerador</span>
            <Paragraph>
              Um gerador elétrico é um dispositivo utilizado para a conversão da
              energia mecânica,química, ou outra forma de energia em energia
              elétrica.
            </Paragraph>
          </ContainerParagraph>
          <img src="./images/gerador_energia.svg" alt="gerador_energia" />
        </ContainerContent>
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
          <ContainerButton>
            {count1 >= 1 ? (
              <Buttons onClick={() => handleSub("count1")}>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            ) : (
              <Buttons>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            )}

            <Buttons onClick={() => handleAdd("count1")}>
              <img src="./images/add_button.svg" alt="add_button" />
            </Buttons>
            <Display>{count1}</Display>
          </ContainerButton>
        </FooterPrice>
      </Container>

      <Container>
        <Icon src="./images/icon_thigh_chicken.svg" />
        <Title>Linha Corte de Frango</Title>
        <ContainerContent>
          <ContainerParagraph>
            <IconInfo src="./images/icon_info.svg" />
            <Paragraph>
              Máquina destidana para corte de Frango.Produção de ate
              <b>24 mil kilos p/ dia</b> com mais de <b>50 pessoas por turno</b>
              .
            </Paragraph>
          </ContainerParagraph>
          <img src="./images/thigh_chicken.svg" alt="thigh_chicken" />
        </ContainerContent>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" alt="cifrao" />

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
          <ContainerButton>
            {count2 >= 1 ? (
              <Buttons onClick={() => handleSub("count2")}>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            ) : (
              <Buttons>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            )}
            <Buttons onClick={() => handleAdd("count2")}>
              <img src="./images/add_button.svg" alt="add_button" />
            </Buttons>
            <Display>{count2}</Display>
          </ContainerButton>
        </FooterPrice>
      </Container>

      <Container>
        <Icon src="./images/icon_sausage_machine.svg" />
        <Title>Linha de Linguiça Salsichão</Title>
        <ContainerContent>
          <ContainerParagraph>
            <IconInfo src="./images/icon_info.svg" />
            <Paragraph>
              Produção de ate <b>24 mil kg p/ dia</b> com mais de
              <b>50 pessoas por turno</b>.
            </Paragraph>
          </ContainerParagraph>
          <img src="./images/sausage_machine.svg" alt="sausage_machine" />
        </ContainerContent>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" alt="cifrao" />

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
          <ContainerButton>
            {count3 >= 1 ? (
              <Buttons onClick={() => handleSub("count3")}>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            ) : (
              <Buttons>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            )}
            <Buttons onClick={() => handleAdd("count3")}>
              <img src="./images/add_button.svg" alt="add_button" />
            </Buttons>
            <Display>{count3}</Display>
          </ContainerButton>
        </FooterPrice>
      </Container>

      <Container>
        <Icon src="./images/icon_chicken_machine.svg" />
        <Title>Linha de Frango Carcaça</Title>
        <ContainerContent>
          <ContainerParagraph>
            <IconInfo src="./images/icon_info.svg" />
            <Paragraph>
              Produção de ate <b>12 mil kilos p/ dia</b> com mais de
              <b>10 pessoas por turno</b>.
            </Paragraph>
          </ContainerParagraph>
          <img src="./images/chicken_machine.svg" alt="chicken_machine" />
        </ContainerContent>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" alt="cifrao" />

            {count4 === 0 ? (
              <CountUp
                end={0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            ) : (
              <CountUp
                end={value4 * count4}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            )}
          </div>
          <ContainerButton>
            {count4 >= 1 ? (
              <Buttons onClick={() => handleSub("count4")}>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            ) : (
              <Buttons>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            )}
            <Buttons onClick={() => handleAdd("count4")}>
              <img src="./images/add_button.svg" alt="add_button" />
            </Buttons>
            <Display>{count4}</Display>
          </ContainerButton>
        </FooterPrice>
      </Container>

      <Container>
        <Icon src="./images/icon_fries_machine.svg" />
        <Title>Linha de Batata Resfriada</Title>
        <ContainerContent>
          <ContainerParagraph>
            <IconInfo src="./images/icon_info.svg" />
            <Paragraph>
              Produção de ate <b>5 mil kg p/ dia</b> com mais de
              <b>10 pessoas por turno</b>.
            </Paragraph>
          </ContainerParagraph>
          <img src="./images/fries_machine.svg" alt="fries_machine" />
        </ContainerContent>
        <FooterPrice>
          <div className="containerFooter">
            <img src="./images/cifrao.svg" alt="cifrao" />

            {count5 === 0 ? (
              <CountUp
                end={0}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            ) : (
              <CountUp
                end={value5 * count5}
                separator="."
                decimal=","
                decimals={2}
                duration={0.5}
              />
            )}
          </div>
          <ContainerButton>
            {count5 >= 1 ? (
              <Buttons onClick={() => handleSub("count5")}>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            ) : (
              <Buttons>
                <img src="./images/sub_button.svg" alt="sub_button" />
              </Buttons>
            )}
            <Buttons onClick={() => handleAdd("count5")}>
              <img src="./images/add_button.svg" alt="add_button" />
            </Buttons>
            <Display>{count5}</Display>
          </ContainerButton>
        </FooterPrice>
      </Container>
    </>
  );
};
export default MachineryCards;
