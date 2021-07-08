import { useValue } from "../../../providers/ValueContext";
import { useState } from "react";
import { useEmployees } from "../../../providers/EmployeesContext";
import CountUp from "react-countup";

import {
  Container,
  TitleContainer,
  IconCommercial,
  ContainerCard,
  BottomBar,
  Icon,
  Title,
  IconLevel,
  Paragraph,
  FooterPrice,
  ContainerButton,
  Buttons,
  Display,
} from "./style";

const EmployeesCards = ({ total, setTotal }) => {
  const { setOutputValue, entranceValue, setEntranceValue } = useValue();
  const {
    diretorGeral,
    setDiretorGeral,
    gestorAdministrativo,
    setGestorAdministrativo,
    gestorFinanceiro,
    setGestorFinanceiro,
    encarregadoContabilidade,
    setEncarregadoContabilidade,
    encarregadoRH,
    setEncarregadoRH,
    encarregadoTesouraria,
    setEncarregadoTesouraria,
    compras,
    setCompras,
    gestorLogistica,
    setGestorLogistica,
    encarregadoProducao,
    setEncarregadoProducao,
    gestaoProducao,
    setGestaoProducao,
    encarregadoLogistica,
    setEncarregadoLogistica,
    operadores,
    setoperadores,
    controleQualidade,
    setControleQualidade,
    gestorComercial,
    setGestorComercial,
    vendedor,
    setVendedor,
  } = useEmployees();

  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  let [count4, setCount4] = useState(0);
  let [count5, setCount5] = useState(0);
  let [count6, setCount6] = useState(0);
  let [count7, setCount7] = useState(0);
  let [count8, setCount8] = useState(0);
  let [count9, setCount9] = useState(0);
  let [count10, setCount10] = useState(0);
  let [count11, setCount11] = useState(0);
  let [count12, setCount12] = useState(0);
  let [count13, setCount13] = useState(0);
  let [count14, setCount14] = useState(0);
  let [count15, setCount15] = useState(0);

  let [value1, setValue1] = useState(diretorGeral.wage);
  let [value2, setValue2] = useState(gestorAdministrativo.wage);
  let [value3, setValue3] = useState(gestorFinanceiro.wage);
  let [value4, setValue4] = useState(encarregadoContabilidade.wage);
  let [value5, setValue5] = useState(encarregadoRH.wage);
  let [value6, setValue6] = useState(encarregadoTesouraria.wage);
  let [value7, setValue7] = useState(compras.wage);
  let [value8, setValue8] = useState(gestorLogistica.wage);
  let [value9, setValue9] = useState(encarregadoProducao.wage);
  let [value10, setValue10] = useState(gestaoProducao.wage);
  let [value11, setValue11] = useState(encarregadoLogistica.wage);
  let [value12, setValue12] = useState(operadores.wage);
  let [value13, setValue13] = useState(controleQualidade.wage);
  let [value14, setValue14] = useState(gestorComercial.wage);
  let [value15, setValue15] = useState(vendedor.wage);

  const handleSub = (computer) => {
    switch (computer) {
      case "count1":
        setCount1((count1 -= 1));
        setTotal(total - value1);
        setDiretorGeral({
          amount: count1,
          wage: diretorGeral.wage,
        });
        break;
      case "count2":
        setCount2((count2 -= 1));
        setTotal(total - value2);
        setEntranceValue(entranceValue + total);
        setGestorAdministrativo({
          amount: count2,
          wage: gestorAdministrativo.wage,
        });
        break;
      case "count3":
        setCount3((count3 -= 1));
        setTotal(total - value3);
        setGestorFinanceiro({
          amount: count3,
          wage: gestorFinanceiro.wage,
        });
        break;
      case "count4":
        setCount4((count4 -= 1));
        setTotal(total - value4);
        setEncarregadoContabilidade({
          amount: count4,
          wage: encarregadoContabilidade.wage,
        });
        break;
      case "count5":
        setCount5((count5 -= 1));
        setTotal(total - value5);
        setEncarregadoRH({
          amount: count5,
          wage: encarregadoRH.wage,
        });
        break;
      case "count6":
        setCount6((count6 -= 1));
        setTotal(total - value6);
        setEncarregadoTesouraria({
          amount: count6,
          wage: encarregadoTesouraria.wage,
        });
        break;
      case "count7":
        setCount7((count7 -= 1));
        setTotal(total - value7);
        setCompras({
          amount: count7,
          wage: compras.wage,
        });
        break;
      case "count8":
        setCount8((count8 -= 1));
        setTotal(total - value8);
        setGestorLogistica({
          amount: count8,
          wage: gestorLogistica.wage,
        });
        break;
      case "count9":
        setCount9((count9 -= 1));
        setTotal(total - value9);
        setEncarregadoProducao({
          amount: count9,
          wage: encarregadoProducao.wage,
        });
        break;
      case "count10":
        setCount10((count10 -= 1));
        setTotal(total - value10);
        setGestaoProducao({
          amount: count10,
          wage: gestaoProducao.wage,
        });
        break;
      case "count11":
        setCount11((count11 -= 1));
        setTotal(total - value11);
        setEncarregadoLogistica({
          amount: count11,
          wage: encarregadoLogistica.wage,
        });
        break;
      case "count12":
        setCount12((count12 -= 1));
        setTotal(total - value12);
        setoperadores({
          amount: count12,
          wage: operadores.wage,
        });
        break;
      case "count13":
        setCount13((count13 -= 1));
        setTotal(total - value13);
        setControleQualidade({
          amount: count13,
          wage: controleQualidade.wage,
        });
        break;
      case "count14":
        setCount14((count14 -= 1));
        setTotal(total - value14);
        setGestorComercial({
          amount: count14,
          wage: gestorComercial.wage,
        });
        break;
      case "count15":
        setCount15((count15 -= 1));
        setTotal(total - value15);
        setVendedor({
          amount: count15,
          wage: vendedor.wage,
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
        setDiretorGeral({
          amount: count1,
          wage: diretorGeral.wage,
        });
        break;
      case "count2":
        setCount2((count2 += 1));
        setTotal(total + value2);
        setEntranceValue(entranceValue + total);
        setGestorAdministrativo({
          amount: count2,
          wage: gestorAdministrativo.wage,
        });
        break;
      case "count3":
        setCount3((count3 += 1));
        setTotal(total + value3);
        setGestorFinanceiro({
          amount: count3,
          wage: gestorFinanceiro.wage,
        });
        break;
      case "count4":
        setCount4((count4 += 1));
        setTotal(total + value4);
        setEncarregadoContabilidade({
          amount: count4,
          wage: encarregadoContabilidade.wage,
        });
        break;
      case "count5":
        setCount5((count5 += 1));
        setTotal(total + value5);
        setEncarregadoRH({
          amount: count5,
          wage: encarregadoRH.wage,
        });
        break;
      case "count6":
        setCount6((count6 += 1));
        setTotal(total + value6);
        setEncarregadoTesouraria({
          amount: count6,
          wage: encarregadoTesouraria.wage,
        });
        break;
      case "count7":
        setCount7((count7 += 1));
        setTotal(total + value7);
        setCompras({
          amount: count7,
          wage: compras.wage,
        });
        break;
      case "count8":
        setCount8((count8 += 1));
        setTotal(total + value8);
        setGestorLogistica({
          amount: count8,
          wage: gestorLogistica.wage,
        });
        break;
      case "count9":
        setCount9((count9 += 1));
        setTotal(total + value9);
        setEncarregadoProducao({
          amount: count9,
          wage: encarregadoProducao.wage,
        });
        break;
      case "count10":
        setCount10((count10 += 1));
        setTotal(total + value10);
        setGestaoProducao({
          amount: count10,
          wage: gestaoProducao.wage,
        });
        break;
      case "count11":
        setCount11((count11 += 1));
        setTotal(total + value11);
        setEncarregadoLogistica({
          amount: count11,
          wage: encarregadoLogistica.wage,
        });
        break;
      case "count12":
        setCount12((count12 += 1));
        setTotal(total + value12);
        setoperadores({
          amount: count12,
          wage: operadores.wage,
        });
        break;
      case "count13":
        setCount13((count13 += 1));
        setTotal(total + value13);
        setControleQualidade({
          amount: count13,
          wage: controleQualidade.wage,
        });
        break;
      case "count14":
        setCount14((count14 += 1));
        setTotal(total + value14);
        setGestorComercial({
          amount: count14,
          wage: gestorComercial.wage,
        });
        break;
      case "count15":
        setCount15((count15 += 1));
        setTotal(total + value15);
        setVendedor({
          amount: count15,
          wage: vendedor.wage,
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Container>
        <TitleContainer>
          <IconCommercial src="./images/financial_administration_button.svg" />
          Diretoria
        </TitleContainer>
        <ContainerCard>
          <Title>
            <Icon />
            <p>Diretor Geral</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsavel pela coordenção geral da indústria</Paragraph>
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
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count1")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count1}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>
      </Container>

      <Container>
        <TitleContainer>
          <IconCommercial src="./images/financial_administration_button.svg" />
          Administração Financeira
        </TitleContainer>
        <ContainerCard>
          <Title>
            <Icon />
            <p>Gestor administrativo</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>
            Responsável pela administração, cadastro, cobrança e faturamento.
          </Paragraph>
          <FooterPrice>
            <div>
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
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count2")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count2}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Gestor financeiro</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsável pelo caixa e tesouraria.</Paragraph>
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
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count3")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count3}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>encarregado pela contabilidade</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsável pela operação contábil.</Paragraph>
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
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count4")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count4}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Encarregado de RH</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsável pela gestão e treinamento</Paragraph>
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
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count5")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count5}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Encarregado do pela tesouraria</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsável pela operação financeira.</Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />

              {count6 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value6 * count6}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count6 >= 1 ? (
                <Buttons onClick={() => handleSub("count6")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count6")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count6}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Compras</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>
            Responsável pelas compras junto aos fornecedores.
          </Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count7 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value7 * count7}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count7 >= 1 ? (
                <Buttons onClick={() => handleSub("count7")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count7")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count7}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>
        <BottomBar />
      </Container>

      <Container>
        <TitleContainer>
          <IconCommercial src="./images/icon_production.svg" />
          Produção
        </TitleContainer>
        <ContainerCard>
          <Title>
            <Icon />
            <p>Gestor de logística</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsável pela fabricação dos produtos.</Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count8 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value8 * count8}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count8 >= 1 ? (
                <Buttons onClick={() => handleSub("count8")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count8")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count8}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Encarregado de Produção</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>

          <Paragraph>Responsável pelas linhas de produção.</Paragraph>

          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />

              {count9 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value9 * count9}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count9 >= 1 ? (
                <Buttons onClick={() => handleSub("count9")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count9")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count9}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Gestor de Produção</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>
            Responsável pelo planejamento e revisão de todos os processos de
            produção.
          </Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count10 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value10 * count10}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count10 >= 1 ? (
                <Buttons onClick={() => handleSub("count10")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count10")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count10}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Encarregado da Logística</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsável pelos fretes e transportes.</Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count11 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value11 * count11}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count11 >= 1 ? (
                <Buttons onClick={() => handleSub("count11")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count11")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count11}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Operadores</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>Responsável pela operação do maquinário.</Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count12 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value12 * count12}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count12 >= 1 ? (
                <Buttons onClick={() => handleSub("count12")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count12")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count12}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p>Controle de Qualidade</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>
            Responsável pela administrativo, cadastro e faturamento.
          </Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count13 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value13 * count13}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count13 >= 1 ? (
                <Buttons onClick={() => handleSub("count13")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count13")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count13}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>
        <BottomBar />
      </Container>

      <Container>
        <TitleContainer>
          <IconCommercial src="./images/icon_commercial.svg" />
          Comercial
        </TitleContainer>
        <ContainerCard>
          <Title>
            <Icon />
            <p>Gestor Comercial</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>
            Responsável pelas vendas, marketing, relacionamento com o cliente.
          </Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count14 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value14 * count14}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count14 >= 1 ? (
                <Buttons onClick={() => handleSub("count14")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count14")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count14}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>

        <ContainerCard>
          <Title>
            <Icon />
            <p> Vendedores</p>
            <IconLevel>Lv 1</IconLevel>
          </Title>
          <Paragraph>
            Responsável por contactar clientes.
            <br />
            <br />
            R$1.500,00
            <span>+ 5% da venda</span>
          </Paragraph>
          <FooterPrice>
            <div className="containerFooter">
              <img src="./images/cifrao.svg" alt="cifrao" />
              {count15 === 0 ? (
                <CountUp
                  end={0}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              ) : (
                <CountUp
                  end={value15 * count15}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              )}
            </div>
            <ContainerButton>
              {count15 >= 1 ? (
                <Buttons onClick={() => handleSub("count15")}>
                  <img src="./images/sub_button.svg" alt="sub_button" />
                </Buttons>
              ) : (
                <img src="./images/sub_button.svg" alt="sub_button" />
              )}
              <Buttons onClick={() => handleAdd("count15")}>
                <img src="./images/add_button.svg" alt="add_button" />
              </Buttons>
              <Display>{count15}</Display>
            </ContainerButton>
          </FooterPrice>
        </ContainerCard>
        <BottomBar />
      </Container>
    </>
  );
};
export default EmployeesCards;
