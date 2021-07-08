import { useState } from "react";
import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import SubHeaderPurchase from "../../../../Components/ComponentsIndustry/SubHeaderPurchase";
import ProviderCard from "../../../../Components/ComponentsIndustry/ProviderCard";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";
import CountFooter from "../../../../Components/ComponentsIndustry/CountFooter";
import { Supplier } from "../../../../Supplier/Supplier";
import { useRawMaterial } from "../../../../providers/RawMaterialContext";
import { useValue } from "../../../../providers/ValueContext";

import { Container, SiceContainer, TitleContent } from "./style";

const ToolsPurchaseChickenHeavy = () => {
  const { insumoFrangoPesado, setInsumoFrangoPesado } = useRawMaterial();
  const {
    outputValue,
    setOutputValue,
    outputValueThirty,
    setOutputValueThirty,
    outputValueSixty,
    setOutputValueSixty,
  } = useValue();

  let [providerA, setProviderA] = useState(false);
  let [inCashA, setInCashA] = useState(false);
  let [thirtyDaysA, setThirtyDaysA] = useState(false);
  let [totalA, setTotalA] = useState(0);
  let [amountA, setAmountA] = useState(0);

  let [providerB, setProviderB] = useState(false);
  let [inCashB, setInCashB] = useState(false);
  let [thirtyDaysB, setThirtyDaysB] = useState(false);
  let [sixtyDaysB, setSixtyDaysB] = useState(false);
  let [totalB, setTotalB] = useState(0);
  let [amountB, setAmountB] = useState(0);

  const [sales, setSales] = useState(0);
  const [prodPlanning, setProdPlanning] = useState(0);

  const handlePay = () => {
    if (providerA === true) {
      if (inCashA === true) {
        setOutputValue(outputValue + totalA);
      } else {
        setOutputValueThirty(outputValueThirty + (totalA + (totalA * 5) / 100));
      }
    }

    if (providerB === true) {
      if (inCashB === true) {
        setOutputValue(outputValue + (totalB + (totalB * 2) / 100));
      } else if (thirtyDaysB === true) {
        setOutputValueThirty(outputValueThirty + (totalB + (totalB * 5) / 100));
      } else {
        setOutputValueSixty(outputValueSixty + (totalB + (totalB * 10) / 100));
      }
    }

    setInsumoFrangoPesado({
      estoqueInicial:
        parseInt(insumoFrangoPesado.estoqueInicial) +
        parseInt(amountA) +
        parseInt(amountB),
      precoMedio:
        (Supplier[2].frangoPesado.fornecedorA.precoBase +
          Supplier[2].frangoPesado.fornecedorB.precoBase / 2) *
        (parseInt(amountA) + parseInt(amountB)),

      cobertura: insumoFrangoPesado.cobertura,

      totalCompra: totalA + totalB,

      prevVenda: insumoFrangoPesado.prevVenda,

      quantidadeCompra: parseInt(amountA) + parseInt(amountB),
    });
  };

  return (
    <Container>
      <SiceContainer>
        <HeaderTools
          pathImg="./images/purchase_button.svg"
          title="Compras"
          subTitle="(Insumos e Fornecedores)"
          style={["", "selection", "", "", ""]}
        />
        <SubHeaderPurchase
          style={["", "", "selection", "", "", "", ""]}
          product="Frango Vivo Pesado"
          initialStock={insumoFrangoPesado.estoqueInicial}
          averagePrice={insumoFrangoPesado.precoMedio}
          productionPlanning={insumoFrangoPesado.planejamentoProducao}
          roof={insumoFrangoPesado.cobertura}
          sales={sales}
          setSales={setSales}
          prodPlanning={prodPlanning}
          setProdPlanning={setProdPlanning}
        />

        <TitleContent>
          <img src="./images/marketplace.svg" alt="marketplace" />
          Fornecedores de <span>Frango Pesado</span>
        </TitleContent>

        <ProviderCard
          Supplier={Supplier[2].frangoPesado}
          title1="Fornecedor A"
          minQuant1={Supplier[2].frangoPesado.fornecedorA.minQuant}
          precoBase1={Supplier[2].frangoPesado.fornecedorA.precoBase}
          leadTime1={Supplier[2].frangoPesado.fornecedorA.leadTime}
          atraso1={Supplier[2].frangoPesado.fornecedorA.atraso}
          confiabilidade1={Supplier[2].frangoPesado.fornecedorA.confiabilidade}
          desconto1={Supplier[2].frangoPesado.fornecedorA.desconto}
          provider1={providerA}
          setProvider1={setProviderA}
          inCash1={inCashA}
          setInCash1={setInCashA}
          thirtyDays1={thirtyDaysA}
          setThirtyDays1={setThirtyDaysA}
          total1={totalA}
          setTotal1={setTotalA}
          amount1={amountA}
          setAmount1={setAmountA}
          title2="Fornecedor B"
          minQuant2={Supplier[2].frangoPesado.fornecedorB.minQuant}
          precoBase2={Supplier[2].frangoPesado.fornecedorB.precoBase}
          leadTime2={Supplier[2].frangoPesado.fornecedorB.leadTime}
          atraso2={Supplier[2].frangoPesado.fornecedorB.atraso}
          confiabilidade2={Supplier[2].frangoPesado.fornecedorB.confiabilidade}
          desconto2={Supplier[2].frangoPesado.fornecedorB.desconto}
          provider2={providerB}
          setProvider2={setProviderB}
          inCash2={inCashB}
          setInCash2={setInCashB}
          thirtyDays2={thirtyDaysB}
          setThirtyDays2={setThirtyDaysB}
          sixtyDays2={sixtyDaysB}
          setSixtyDays2={setSixtyDaysB}
          total2={totalB}
          setTotal2={setTotalB}
          amount2={amountB}
          setAmount2={setAmountB}
          title3={null}
          minQuant3={null}
          precoBase3={null}
          leadTime3={null}
          atraso3={null}
          confiabilidade3={null}
          desconto3={null}
          provider3={null}
          setProvider3={null}
          inCash3={null}
          setInCash3={null}
          thirtyDays3={null}
          setThirtyDays3={null}
          sixtyDays3={null}
          setSixtyDays3={null}
          total3={null}
          setTotal3={null}
          amount3={null}
          setAmount3={null}
        />
        <CountFooter />
        <FooterButton
          text="Confirmar"
          path={"/toolsPurchaseFries"}
          onHandle={handlePay}
        />
      </SiceContainer>
    </Container>
  );
};
export default ToolsPurchaseChickenHeavy;
