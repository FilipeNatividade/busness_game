import { createContext, useContext, useEffect, useState } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [outputValue, setOutputValue] = useState(0);
  const [outputValueThirty, setOutputValueThirty] = useState(0);
  const [outputValueSixty, setOutputValueSixty] = useState(0);
  const [machinaryFinancing, setMachinaryFinancing] = useState(0);
  const [lossesPercentagem, setLossesPercentagem] = useState(3);
  const [salary, setSalary] = useState(0);
  const [entranceValue, setEntranceValue] = useState(1000000.0);
  const [boringMerchandise, setBoringMerchandise] = useState(0);
  const [tax, setTax] = useState(0);
  const [spendsMarketing, setspendsMarketing] = useState(0);
  const [incomeFinancialExpenses, setIncomeFinancialExpenses] = useState(0);
  const [personalExpenses, setPersonalExpenses] = useState(0);
  const [trainingExpenses, setTrainingExpenses] = useState(0);
  const [cmv, setCmv] = useState(0);
  const [grossMargin, setGrossMargin] = useState(0);
  const [rent, setRent] = useState(0);
  const [others, setOthers] = useState(0);
  const [profitPrejudice, setProfitPrejudice] = useState(0);

  useEffect(() => {
    setOutputValue(outputValue);
    setEntranceValue(entranceValue);
    setBoringMerchandise(boringMerchandise);
    setTax(tax);
    setspendsMarketing(spendsMarketing);
    setIncomeFinancialExpenses(incomeFinancialExpenses);
    setPersonalExpenses(personalExpenses);
    setTrainingExpenses(trainingExpenses);
    setCmv(cmv);
    setGrossMargin(grossMargin);
    setRent(rent);
    setOthers(others);
    setProfitPrejudice(profitPrejudice);
  }, [
    outputValue,
    entranceValue,
    boringMerchandise,
    tax,
    spendsMarketing,
    incomeFinancialExpenses,
    personalExpenses,
    trainingExpenses,
    cmv,
    grossMargin,
    rent,
    others,
    profitPrejudice,
  ]);
  return (
    <ValueContext.Provider
      value={{
        outputValue,
        setOutputValue,
        outputValueThirty,
        setOutputValueThirty,
        outputValueSixty,
        setOutputValueSixty,
        machinaryFinancing,
        setMachinaryFinancing,
        salary,
        setSalary,
        lossesPercentagem,
        setLossesPercentagem,
        entranceValue,
        setEntranceValue,
        boringMerchandise,
        setBoringMerchandise,
        tax,
        setTax,
        spendsMarketing,
        setspendsMarketing,
        incomeFinancialExpenses,
        setIncomeFinancialExpenses,
        personalExpenses,
        setPersonalExpenses,
        trainingExpenses,
        setTrainingExpenses,
        cmv,
        setCmv,
        grossMargin,
        setGrossMargin,
        rent,
        setRent,
        others,
        setOthers,
        profitPrejudice,
        setProfitPrejudice,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => useContext(ValueContext);
