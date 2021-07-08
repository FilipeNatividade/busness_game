import { createContext, useContext, useState, useEffect } from "react";

const MachineryContext = createContext();

export const MachineryProvider = ({ children }) => {
  const [geradorEnergia, setGeradorEnergia] = useState({
    amount: 0,
    value: 80000.0,
  });
  const [maquinaFrango, setMaquinaFrango] = useState({
    amount: 0,
    value: 240000.0,
  });
  const [maquinaSalsichao, setMaquinaSalsichao] = useState({
    amount: 0,
    value: 2160000.0,
  });
  const [maquinaFrangoCorte, setMaquinaFrangoCorte] = useState({
    amount: 0,
    value: 1920000.0,
  });
  const [maquinaFries, setMaquinaFries] = useState({
    amount: 0,
    value: 50000.0,
  });

  return (
    <MachineryContext.Provider
      value={{
        geradorEnergia,
        setGeradorEnergia,
        maquinaFrango,
        setMaquinaFrango,
        maquinaSalsichao,
        setMaquinaSalsichao,
        maquinaFrangoCorte,
        setMaquinaFrangoCorte,
        maquinaFries,
        setMaquinaFries,
      }}
    >
      {children}
    </MachineryContext.Provider>
  );
};

export const useMachinery = () => useContext(MachineryContext);
