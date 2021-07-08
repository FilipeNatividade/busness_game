import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CountUp from "react-countup";
import {
  Container,
  NavMenu,
  ContainerMenu,
  ToolsButton,
  ImgButtonsTools,
  HeaderTitle,
  ContainerInitialStock,
  InitialStock,
  AvarangePrice,
  Coverage,
  PlanningContainer,
  TitlePlanningContainer,
  CalculatePlanningContainer,
  InternalCalculatePlanningContainer,
  InputInternalCalculatePlanningContainer,
} from "./style";

const SubHeaderPurchase = ({
  style,
  product,
  initialStock,
  averagePrice,
  roof,
  sales,
  setSales,
  prodPlanning,
  setProdPlanning,
}) => {
  const history = useHistory();

  const handlePrevSale = (event) => {
    setProdPlanning(event);
  };

  useEffect(() => {
    setSales(prodPlanning - initialStock);
  }, [setSales, prodPlanning, initialStock]);

  return (
    <Container>
      <NavMenu>
        <ContainerMenu>
          <ToolsButton onClick={() => history.push("/toolsPurchasePig")}>
            <ImgButtonsTools
              className={style[0]}
              src="./images/pig.svg"
              alt="pig"
            />
          </ToolsButton>
          <ToolsButton
            onClick={() => history.push("/toolsPurchaseChickenLight")}
          >
            <ImgButtonsTools
              className={style[1]}
              src="./images/chicken_l.svg"
              alt="chicken_l"
            />
          </ToolsButton>
          <ToolsButton
            onClick={() => history.push("/toolsPurchaseChickenHeavy")}
          >
            <ImgButtonsTools
              className={style[2]}
              src="./images/chicken_p.svg"
              alt="chicken_p"
            />
          </ToolsButton>

          <ToolsButton onClick={() => history.push("/toolsPurchaseFries")}>
            <ImgButtonsTools
              className={style[3]}
              src="./images/fries_pcp.svg"
              alt="fries"
            />
          </ToolsButton>
          <ToolsButton onClick={() => history.push("/toolsPurchaseCarryBag")}>
            <ImgButtonsTools
              className={style[4]}
              src="./images/carry_bag.svg"
              alt="carry_bag"
            />
          </ToolsButton>
          <ToolsButton onClick={() => history.push("/toolsPurchaseCondiment")}>
            <ImgButtonsTools
              className={style[5]}
              src="./images/condiment.svg"
              alt="condiment"
            />
          </ToolsButton>
          <ToolsButton onClick={() => history.push("toolsPurchaseBox")}>
            <ImgButtonsTools
              className={style[6]}
              src="./images/box.svg"
              alt="box"
            />
          </ToolsButton>
        </ContainerMenu>
      </NavMenu>

      <HeaderTitle>
        <span>Produto</span> <p>{product}</p>
      </HeaderTitle>
      <ContainerInitialStock>
        <InitialStock>
          <h2>
            <img src="./images/stock.svg" alt="stock" />
            Estoque inicial
          </h2>
          <p>
            {initialStock} <img src="./images/kg.svg" alt="kg" />
          </p>
        </InitialStock>
        <AvarangePrice>
          <h2>Preço médio</h2>
          <p>
            <img src="./images/cifrao.svg" alt="cifrao" />
            <CountUp
              end={averagePrice}
              prefix="R$ "
              separator="."
              decimal=","
              decimals={2}
              duration={0.5}
            />
          </p>
          <small>(Preço médio de estoque)</small>
        </AvarangePrice>
        <Coverage>
          <h2>Cobertura</h2>
          <p>
            {roof} <span>dias</span>
          </p>
        </Coverage>
      </ContainerInitialStock>
      <PlanningContainer>
        <TitlePlanningContainer>
          <div />
          <p>
            Planejado
            <span>(Análise do planejado para produção)</span>
          </p>
        </TitlePlanningContainer>
        <CalculatePlanningContainer>
          <InternalCalculatePlanningContainer>
            <h2>Planejado p. produção</h2>
            <InputInternalCalculatePlanningContainer>
              <img src="./images/productions.svg" alt="productions" />
              <input
                value={prodPlanning}
                placeholder="0"
                onChange={(e) => handlePrevSale(e.target.value)}
              />
            </InputInternalCalculatePlanningContainer>
          </InternalCalculatePlanningContainer>
          <p>-</p>
          <InternalCalculatePlanningContainer>
            <h2>Estoque Inicial</h2>
            <InputInternalCalculatePlanningContainer>
              <img src="./images/productions.svg" alt="productions" />
              <p>{initialStock}</p>
            </InputInternalCalculatePlanningContainer>
          </InternalCalculatePlanningContainer>
          <p>=</p>
          <InternalCalculatePlanningContainer>
            <h2>Compras</h2>
            <InputInternalCalculatePlanningContainer>
              <img src="./images/productions.svg" alt="productions" />
              <p>{sales}</p>
            </InputInternalCalculatePlanningContainer>
          </InternalCalculatePlanningContainer>
        </CalculatePlanningContainer>
      </PlanningContainer>
    </Container>
  );
};
export default SubHeaderPurchase;
