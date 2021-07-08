import { useEffect } from "react";
import { useValue } from "../../../providers/ValueContext";

import {
  Container,
  PrimaryDiv,
  SubPrimaryDiv,
  SecondaryDiv,
  SubSecondaryDiv,
  Title,
  Input,
  ThirdDiv,
  ThirdDiv1,
  ContainerSub,
  Signals,
  SubThirdDiv1,
  SubContainer,
  SubThirdDiv2,
  Result,
} from "./style";

const SalesPredctionCard = ({
  state1,
  setState1,
  state2,
  setState2,
  state3,
  setState3,
  state4,
  setState4,
  state5,
  setState5,
  total,
  setTotal,
}) => {
  const { lossesPercentagem } = useValue();

  const handlePrevSale = (event) => {
    setState3(event);
  };

  const handleUnitCost = (event) => {
    setState4(event);
  };

  useEffect(() => {
    setTotal();
  }, [setState1, setState2, setState3, setTotal]);

  return (
    <Container>
      <PrimaryDiv>
        <img src="./images/cash_register.svg" alt="cash_register" />
        <SubPrimaryDiv>
          <h2>Previsão de venda:</h2>
          <input
            value={state3}
            onChange={(e) => handlePrevSale(e.target.value)}
            placeholder="Quantidade de caixas..."
          />
        </SubPrimaryDiv>
      </PrimaryDiv>
      <SecondaryDiv>
        <SubSecondaryDiv>
          <Title>
            <img src="./images/stock.svg" alt="icon_stock" />
            <p>Estoque inicial</p>
          </Title>
          <Input>
            <p> {state1}</p>
            <img src="./images/box_input.svg" alt="box_input" />
          </Input>
        </SubSecondaryDiv>
        <SubSecondaryDiv>
          <Title>
            <img src="./images/losses.svg" alt="icon_losses" />
            <p>Previsão de Perdas</p>
          </Title>
          <Input>
            <p className="prrcentagem">{`${lossesPercentagem}%`}</p>
            <img src="./images/box_input.svg" alt="box_input" />
          </Input>
        </SubSecondaryDiv>
        <SubSecondaryDiv>
          <Title>
            <img src="./images/productions.svg" alt="icon_productions" />
            <p>Previsão de Produção</p>
          </Title>
          <Input>
            <p>{state2}</p>
            <img src="./images/box_input.svg" alt="box_input" />
          </Input>
        </SubSecondaryDiv>
        <SubSecondaryDiv>
          <Title>
            <img src="./images/unit_cost.svg" alt="unit_cost" />
            <p>Custo Unitario</p>
          </Title>
          <Input>
            <input
              value={state4}
              onChange={(e) => handleUnitCost(e.target.value)}
            
            />
            <img src="./images/box_input.svg" alt="box_input" />
          </Input>
        </SubSecondaryDiv>
      </SecondaryDiv>

      <ThirdDiv>
        <ThirdDiv1>
          <ContainerSub>
            <SubThirdDiv1>
              <img src="./images/productions.svg" alt="icon_productions" />
              <p>{state2}</p>
            </SubThirdDiv1>
            <small>Prev. Produção</small>
          </ContainerSub>
          <Signals>-</Signals>

          <ContainerSub>
            <SubThirdDiv1>
              <img src="./images/stock.svg" alt="icon_stock" />
              <p>{state1}</p>
            </SubThirdDiv1>
            <small>Estoque inicial</small>
          </ContainerSub>
          <Signals>+</Signals>

          <ContainerSub>
            <SubThirdDiv1>
              <img src="./images/losses.svg" alt="icon_losses" />
              <p className="losses">{`${lossesPercentagem}%`}</p>
            </SubThirdDiv1>
            <small>Perdas</small>
          </ContainerSub>
          <Signals>x</Signals>

          <ContainerSub>
            <SubThirdDiv1>
              <img src="./images/unit_cost.svg" alt="unit_cost" />
              <p>{state4}</p>
            </SubThirdDiv1>
            <small>Custo unitario</small>
          </ContainerSub>
          <Signals>=</Signals>
        </ThirdDiv1>

        <SubContainer>
          <img src="./images/product_recipe.svg" alt="product_recipe" />
          <SubThirdDiv2>
            <p>Receita de Produtos</p>
            <Result>R$ {total}</Result>
          </SubThirdDiv2>
        </SubContainer>
      </ThirdDiv>
    </Container>
  );
};
export default SalesPredctionCard;
