import { useState } from "react";

import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import SubHeaderPurchase from "../../../../Components/ComponentsIndustry/SubHeaderPurchase";
import ProviderCard from "../../../../Components/ComponentsIndustry/ProviderCard";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";
import CountFooter from "../../../../Components/ComponentsIndustry/CountFooter";
import { Supplier } from "../../../../Supplier/Supplier";
import { useRawMaterial } from "../../../../providers/RawMaterialContext";
import { useValue } from "../../../../providers/ValueContext";

import { Container, SizeContainer, TitleContent } from "./style";

const ToolsPurchaseCondiment = () => {
  const { insumoCondimentos, setInsumoCondimentos } = useRawMaterial();
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

  let [providerC, setProviderC] = useState(false);
  let [inCashC, setInCashC] = useState(false);
  let [thirtyDaysC, setThirtyDaysC] = useState(false);
  let [sixtyDaysC, setSixtyDaysC] = useState(false);
  let [totalC, setTotalC] = useState(0);
  let [amountC, setAmountC] = useState(0);

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

    if (providerC === true) {
      if (inCashC === true) {
        setOutputValue(outputValue + totalC);
      } else if (thirtyDaysC === true) {
        setOutputValueThirty(outputValueThirty + (totalC + (totalC * 5) / 100));
      } else {
        setOutputValueSixty(outputValueSixty + (totalC + (totalC * 10) / 100));
      }
    }
    setInsumoCondimentos({
      estoqueInicial:
        parseInt(insumoCondimentos.estoqueInicial) +
        parseInt(amountA) +
        parseInt(amountB) +
        parseInt(amountC),
      precoMedio:
        ((Supplier[5].condimentos.fornecedorA.precoBase +
          Supplier[5].condimentos.fornecedorB.precoBase +
          Supplier[5].condimentos.fornecedorC.precoBase) /
          3) *
        (parseInt(amountA) + parseInt(amountB) + parseInt(amountC)),
      cobertura: insumoCondimentos.cobertura,
      totalCompra: totalA + totalB + totalC,
      prevVenda: insumoCondimentos.prevVenda,
      quantidadeCompra:
        parseInt(amountA) + parseInt(amountB) + parseInt(amountC),
    });
  };

  return (
    <Container>
      <SizeContainer>
        <HeaderTools
          pathImg="./images/purchase_button.svg"
          title="Compras"
          subTitle="(Insumos e Fornecedores)"
          style={["", "selection", "", "", ""]}
        />
        <SubHeaderPurchase
          style={["", "", "", "",  "","selection", ""]}
          product="Condimentos"
          initialStock={insumoCondimentos.estoqueInicial}
          averagePrice={insumoCondimentos.precoMedio}
          productionPlanning={insumoCondimentos.planejamentoProducao}
          roof={insumoCondimentos.cobertura}
          sales={sales}
          setSales={setSales}
          prodPlanning={prodPlanning}
          setProdPlanning={setProdPlanning}
        />

        <TitleContent>
          <img src="./images/marketplace.svg" alt="marketplace" />
          Fornecedores de <span>Condimentos</span>
        </TitleContent>

        <ProviderCard
          Supplier={Supplier[5].condimentos}
          title1="Fornecedor A"
          minQuant1={Supplier[5].condimentos.fornecedorA.minQuant}
          precoBase1={Supplier[5].condimentos.fornecedorA.precoBase}
          leadTime1={Supplier[5].condimentos.fornecedorA.leadTime}
          atraso1={Supplier[5].condimentos.fornecedorA.atraso}
          confiabilidade1={Supplier[5].condimentos.fornecedorA.confiabilidade}
          desconto1={Supplier[5].condimentos.fornecedorA.desconto}
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
          minQuant2={Supplier[5].condimentos.fornecedorB.minQuant}
          precoBase2={Supplier[5].condimentos.fornecedorB.precoBase}
          leadTime2={Supplier[5].condimentos.fornecedorB.leadTime}
          atraso2={Supplier[5].condimentos.fornecedorB.atraso}
          confiabilidade2={Supplier[5].condimentos.fornecedorB.confiabilidade}
          desconto2={Supplier[5].condimentos.fornecedorB.desconto}
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
          title3="Fornecedor C"
          minQuant3={Supplier[5].condimentos.fornecedorC.minQuant}
          precoBase3={Supplier[5].condimentos.fornecedorC.precoBase}
          leadTime3={Supplier[5].condimentos.fornecedorC.leadTime}
          atraso3={Supplier[5].condimentos.fornecedorC.atraso}
          confiabilidade3={Supplier[5].condimentos.fornecedorC.confiabilidade}
          desconto3={Supplier[5].condimentos.fornecedorC.desconto}
          provider3={providerC}
          setProvider3={setProviderC}
          inCash3={inCashC}
          setInCash3={setInCashC}
          thirtyDays3={thirtyDaysC}
          setThirtyDays3={setThirtyDaysC}
          sixtyDays3={sixtyDaysC}
          setSixtyDays3={setSixtyDaysC}
          total3={totalC}
          setTotal3={setTotalC}
          amount3={amountC}
          setAmount3={setAmountC}
        />
        <CountFooter />
        <FooterButton
          text="Confirmar"
          path={"/toolsPurchaseFries"}
          onHandle={handlePay}
        />
      </SizeContainer>
    </Container>
  );
};
export default ToolsPurchaseCondiment;
