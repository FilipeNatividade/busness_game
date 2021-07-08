import { createContext, useContext, useEffect, useState } from "react";

const ChickenContext = createContext();

export const ChickenProvider = ({ children }) => {
  const [infoChicken, setInfoChicken] = useState({
    previsaoVendas: 0,
    estoque: 0,
    previsaoProducao: 0,
    custoUnitario: 0,
    receitaProduto: 0,
    pesoCaixa: 2,
  });
  useEffect(() => {
    setInfoChicken(infoChicken);
  }, [infoChicken, setInfoChicken]);
  return (
    <ChickenContext.Provider
      value={{
        infoChicken,
        setInfoChicken,
      }}
    >
      {children}
    </ChickenContext.Provider>
  );
};

export const useChicken = () => useContext(ChickenContext);
