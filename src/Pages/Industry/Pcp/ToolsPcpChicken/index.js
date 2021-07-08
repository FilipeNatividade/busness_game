import { useState, useEffect } from "react";
import { useChicken } from "../../../../providers/ChickenContext";
import { useValue } from "../../../../providers/ValueContext";
import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";
import SubHeaderPcp from "../../../../Components/ComponentsIndustry/SubHeaderPcp";
import SalesPredctionCard from "../../../../Components/ComponentsIndustry/SalesPredctionCard";
import InputCardPcp from "../../../../Components/ComponentsIndustry/InputCardPcp";

import { Container, SizeContainer, ContainerInput } from "./style";

const ToolsPcpChicken = () => {
  const { lossesPercentagem } = useValue();

  const { infoChicken, setInfoChicken } = useChicken(0);

  let [chickenPrevSales, setChickenPrevSales] = useState(0);
  let [chickenStock, setChickenStock] = useState(0);
  let [costUnit, setCostUnit] = useState(0);
  let [chickenPrevProductions, setChickenPrevProductions] = useState(0);
  let [chickenProductRecipe, setChickenProductRecipe] = useState(0);

  useEffect(() => {
    setChickenPrevProductions(
      chickenPrevSales - (chickenPrevSales * lossesPercentagem) / 100
    );

    setChickenProductRecipe(
      chickenPrevProductions -
        chickenStock +
        (lossesPercentagem / 100) * costUnit
    );

    setInfoChicken({
      previsaoVendas: chickenPrevSales,
      estoque: chickenStock,
      previsaoProducao: chickenPrevProductions,
      custoUnitario: costUnit,
      receitaProduto: chickenProductRecipe,
      pesoCaixa: infoChicken.pesoCaixa,
    });
  }, [
    setInfoChicken,
    infoChicken,
    setChickenPrevProductions,
    lossesPercentagem,
    chickenPrevSales,
    chickenStock,
    chickenPrevProductions,
    costUnit,
    chickenProductRecipe,
  ]);

  return (
    <Container>
      <SizeContainer>
        <HeaderTools
          pathImg="./images/pcp_button.svg"
          title="PCP"
          subTitle="(Planejamento Controle de Produção)"
          style={["selection", "", "", "", ""]}
        />

        <SubHeaderPcp
          style={["", "selection", "", "", ""]}
          product="Peito de frango"
          unity="Caixa de 2 Kg"
        />

        <ContainerInput>
          <InputCardPcp
            path="./images/chicken.svg"
            title="Flango P"
            value="3,7KG"
          />
          <InputCardPcp
            path="./images/box.svg"
            title="Caixa (papelão)"
            value="1 uni."
          />
          <InputCardPcp
            path="./images/carry_bag.svg"
            title="Embalagem Plástica"
            value="1 milh."
          />
        </ContainerInput>

        <SalesPredctionCard
          state1={chickenStock}
          setState1={setChickenStock}
          state2={chickenPrevProductions}
          setState2={setChickenPrevProductions}
          state3={chickenPrevSales}
          setState3={setChickenPrevSales}
          state4={costUnit}
          setState4={setCostUnit}
          total={chickenProductRecipe}
          setTotal={setChickenProductRecipe}
        />

        <FooterButton
          text="Confirmar"
          path="/toolsPcpCutChicken"
          onHandle={null}
        />
      </SizeContainer>
    </Container>
  );
};
export default ToolsPcpChicken;
