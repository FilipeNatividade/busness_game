import { createContext, useContext, useEffect, useState } from "react";

const SausageContext = createContext();

export const SausageProvider = ({ children }) => {
  const [infoSausage, setInfoSausage] = useState({
    previsaoVendas: 0,
    estoque: 0,
    previsaoProducao: 0,
    custoUnitario: 0,
    receitaProduto: 0,
    pesoCaixa: 4,
  });
  useEffect(() => {
    setInfoSausage(infoSausage);
  }, [infoSausage, setInfoSausage]);
  return (
    <SausageContext.Provider
      value={{
        infoSausage,
        setInfoSausage,
      }}
    >
      {children}
    </SausageContext.Provider>
  );
};

export const useSausage = () => useContext(SausageContext);
