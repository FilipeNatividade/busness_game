import { useState, useEffect } from "react";
import { useFries } from "../../../../providers/FriesContext";
import { useValue } from "../../../../providers/ValueContext";
import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";
import SubHeaderPcp from "../../../../Components/ComponentsIndustry/SubHeaderPcp";
import SalesPredctionCard from "../../../../Components/ComponentsIndustry/SalesPredctionCard";
import InputCardPcp from "../../../../Components/ComponentsIndustry/InputCardPcp";

import { Container, SizeContainer, ContainerInput } from "./style";

const ToolsPcpFries = () => {
  const { infoFries, setInfoFries } = useFries(0);

  const { lossesPercentagem } = useValue();

  let [friesPrevSales, setFriesPrevSales] = useState(0);
  let [friesStock, setFriesStock] = useState(0);
  let [costUnit, setCostUnit] = useState(0);
  let [friesPrevProductions, setFriesPrevProductions] = useState(0);
  let [friesProductRecipe, setFriesProductRecipe] = useState(0);

  useEffect(() => {
    setFriesPrevProductions(
      friesPrevSales - (friesPrevSales * lossesPercentagem) / 100
    );

    setFriesProductRecipe(
      friesPrevProductions - friesStock + (lossesPercentagem / 100) * costUnit
    );

    setInfoFries({
      previsaoVendas: friesPrevSales,
      estoque: friesStock,
      previsaoProducao: friesPrevProductions,
      custoUnitario: costUnit,
      receitaProduto: friesProductRecipe,
      pesoCaixa: infoFries.pesoCaixa,
    });
  }, [
    setInfoFries,
    infoFries,
    setFriesPrevProductions,
    lossesPercentagem,
    friesProductRecipe,
    friesPrevSales,
    friesStock,
    friesPrevProductions,
    costUnit,
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
          style={["", "", "", "selection"]}
          product="Batata Frita"
          unity="Caixa de 2 Kg"
        />
        <ContainerInput>
          <InputCardPcp
            path="./images/fries_pcp.svg"
            title="Batata Frita"
            value="3,7KG"
          />
        </ContainerInput>

        <SalesPredctionCard
          state1={friesStock}
          setState1={setFriesStock}
          state2={friesPrevProductions}
          setState2={setFriesPrevProductions}
          state3={friesPrevSales}
          setState3={setFriesPrevSales}
          state4={costUnit}
          setState4={setCostUnit}
          total={friesProductRecipe}
          setTotal={setFriesProductRecipe}
          percentagem={lossesPercentagem}
        />

        <FooterButton
          text="Confirmar"
          path="/toolsPcpSausage"
          onHandle={null}
        />
      </SizeContainer>
    </Container>
  );
};
export default ToolsPcpFries;
