import { useState, useEffect } from "react";
import { useValue } from "../../../../providers/ValueContext";
import { useCutChicken } from "../../../../providers/CutChickenContext";
import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";
import SubHeaderPcp from "../../../../Components/ComponentsIndustry/SubHeaderPcp";
import SalesPredctionCard from "../../../../Components/ComponentsIndustry/SalesPredctionCard";
import InputCardPcp from "../../../../Components/ComponentsIndustry/InputCardPcp";

import { Container, SizeContainer, ContainerInput } from "./style";

const ToolsPcpCutChicken = () => {
  const { lossesPercentagem } = useValue();

  const { infoCutChicken, setInfoCutChicken } = useCutChicken(0);

  let [cutChickenPrevSales, setCutChickenPrevSales] = useState(0);
  let [cutChickenStock, setCutChickenStock] = useState(0);
  let [costUnit, setCostUnit] = useState(0);
  let [cutChickenPrevProductions, setCutChickenPrevProductions] = useState(0);
  let [cutChickenProductRecipe, setCutChickenProductRecipe] = useState(0);

  useEffect(() => {
    setCutChickenPrevProductions(
      cutChickenPrevSales - (cutChickenPrevSales * lossesPercentagem) / 100
    );

    setCutChickenProductRecipe(
      cutChickenPrevProductions -
        cutChickenStock +
        (lossesPercentagem / 100) * costUnit
    );

    setInfoCutChicken({
      previsaoVendas: cutChickenPrevSales,
      estoque: cutChickenStock,
      previsaoProducao: cutChickenPrevProductions,
      custoUnitario: costUnit,
      receitaProduto: cutChickenProductRecipe,
      pesoCaixa: infoCutChicken.pesoCaixa,
    });
  }, [
    setInfoCutChicken,
    infoCutChicken,
    setCutChickenPrevProductions,
    lossesPercentagem,
    cutChickenPrevSales,
    cutChickenStock,
    cutChickenPrevProductions,
    costUnit,
    cutChickenProductRecipe,
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
          style={["", "", "selection", "", ""]}
          product="Peito de frango"
          unity="Caixa de 2 Kg"
        />

        <ContainerInput>
          <InputCardPcp
            path="./images/chicken.svg"
            title="Flango L"
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
          state1={cutChickenStock}
          setState1={setCutChickenStock}
          state2={cutChickenPrevProductions}
          setState2={setCutChickenPrevProductions}
          state3={cutChickenPrevSales}
          setState3={setCutChickenPrevSales}
          state4={costUnit}
          setState4={setCostUnit}
          total={cutChickenProductRecipe}
          setTotal={setCutChickenProductRecipe}
        />

        <FooterButton text="Confirmar" path="/toolsPcpFries" onHandle={null} />
      </SizeContainer>
    </Container>
  );
};
export default ToolsPcpCutChicken;
