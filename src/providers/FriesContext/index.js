import { createContext, useContext, useEffect, useState } from "react";

const FriesContext = createContext();

export const FriesProvider = ({ children }) => {
  const [infoFries, setInfoFries] = useState({
    previsaoVendas: 0,
    estoque: 0,
    previsaoProducao: 0,
    custoUnitario: 0,
    receitaProduto: 0,
    pesoCaixa: 2,
  });
  useEffect(() => {
    setInfoFries(infoFries);
  }, [infoFries, setInfoFries]);
  return (
    <FriesContext.Provider
      value={{
        infoFries,
        setInfoFries,
      }}
    >
      {children}
    </FriesContext.Provider>
  );
};

export const useFries = () => useContext(FriesContext);
