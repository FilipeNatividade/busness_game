import { useEffect, useState } from "react";
import { useValue } from "../../../../providers/ValueContext";
import { useSausage } from "../../../../providers/SausageContext";
import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";
import SubHeaderPcp from "../../../../Components/ComponentsIndustry/SubHeaderPcp";
import SalesPredctionCard from "../../../../Components/ComponentsIndustry/SalesPredctionCard";
import InputCardPcp from "../../../../Components/ComponentsIndustry/InputCardPcp";

import { Container, SizeContainer, ContainerInput } from "./style";

const ToolsPcpSausage = () => {
  const { lossesPercentagem } = useValue();

  const { infoSausage, setInfoSausage } = useSausage();

  let [sausagePrevSales, setSausagePrevSales] = useState(0);
  let [sausageStock, setSausageStock] = useState(0);
  let [costUnit, setCostUnit] = useState(0);
  let [sausagePrevProductions, setSausagePrevProductions] = useState(0);
  let [sausageProductRecipe, setSausageProductRecipe] = useState(0);

  useEffect(() => {
    setSausagePrevProductions(
      sausagePrevSales - (sausagePrevSales * lossesPercentagem) / 100
    );

    setSausageProductRecipe(
      sausagePrevProductions -
        sausageStock +
        (lossesPercentagem / 100) * costUnit
    );

    setInfoSausage({
      previsaoVendas: sausagePrevSales,
      estoque: sausageStock,
      previsaoProducao: sausagePrevProductions,
      custoUnitario: costUnit,
      receitaProduto: sausageProductRecipe,
      pesoCaixa: infoSausage.pesoCaixa,
    });
  }, [
    setInfoSausage,
    infoSausage,
    setSausagePrevProductions,
    lossesPercentagem,
    sausagePrevSales,
    sausageStock,
    sausagePrevProductions,
    costUnit,
    sausageProductRecipe,
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
          style={["selection", "", "", "", ""]}
          product="Linguiça Salsichão"
          unity="Caixa de 4 Kg"
        />
        <ContainerInput>
          <InputCardPcp
            path="./images/pig.svg"
            title="Pernil Suíno"
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
          <InputCardPcp
            path="./images/condiment.svg"
            title="Condimento"
            value="0,3KG"
          />
        </ContainerInput>

        <SalesPredctionCard
          state1={sausageStock}
          setState1={setSausageStock}
          state2={sausagePrevProductions}
          setState2={setSausagePrevProductions}
          state3={sausagePrevSales}
          setState3={setSausagePrevSales}
          state4={costUnit}
          setState4={setCostUnit}
          total={sausageProductRecipe}
          setTotal={setSausageProductRecipe}
        />

        <FooterButton
          text="Confirmar"
          path="/toolsPcpChicken"
          onHandle={null}
        />
      </SizeContainer>
    </Container>
  );
};
export default ToolsPcpSausage;
