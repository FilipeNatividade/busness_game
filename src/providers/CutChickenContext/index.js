import { createContext, useContext, useEffect, useState } from "react";

const CutChickenContext = createContext();

export const CutChickenProvider = ({ children }) => {
  const [infoCutChicken, setInfoCutChicken] = useState({
    previsaoVendas: 0,
    estoque: 0,
    previsaoProducao: 0,
    custoUnitario: 0,
    receitaProduto: 0,
    pesoCaixa: 2,
  });
  useEffect(() => {
    setInfoCutChicken(infoCutChicken);
  }, [infoCutChicken, setInfoCutChicken]);
  return (
    <CutChickenContext.Provider
      value={{
        infoCutChicken,
        setInfoCutChicken,
      }}
    >
      {children}
    </CutChickenContext.Provider>
  );
};

export const useCutChicken = () => useContext(CutChickenContext);
