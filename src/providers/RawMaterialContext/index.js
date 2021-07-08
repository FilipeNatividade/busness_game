import { createContext, useContext, useEffect, useState } from "react";

const RawMaterialContext = createContext();

export const RawMaterialProvider = ({ children }) => {
  const [insumoPernil, setInsumoPernil] = useState({
    estoqueInicial: 0,
    precoMedio: 0,
    cobertura: 0,
    totalCompra: 0,
    prevVenda: 0,
    quantidadeCompra: 0,
  });

  const [insumoFrangoLeve, setInsumoFrangoLeve] = useState({
    estoqueInicial: 0,
    precoMedio: 0,
    cobertura: 0,
    totalCompra: 0,
    prevVenda: 0,
    prevProducao: 0,
    quantidadeCompra: 0,
  });

  const [insumoFrangoPesado, setInsumoFrangoPesado] = useState({
    estoqueInicial: 0,
    precoMedio: 0,
    cobertura: 0,
    totalCompra: 0,
    prevVenda: 0,
    prevProducao: 0,
    quantidadeCompra: 0,
  });

  const [insumoBatata, setInsumoBatata] = useState({
    estoqueInicial: 0,
    precoMedio: 0,
    cobertura: 0,
    totalCompra: 0,
    prevVenda: 0,
    prevProducao: 0,
    quantidadeCompra: 0,
  });

  const [insumoSacola, setInsumoSacola] = useState({
    estoqueInicial: 0,
    precoMedio: 0,
    cobertura: 0,
    totalCompra: 0,
    prevVenda: 0,
    prevProducao: 0,
    quantidadeCompra: 0,
  });

  const [insumoCondimentos, setInsumoCondimentos] = useState({
    estoqueInicial: 0,
    precoMedio: 0,
    cobertura: 0,
    totalCompra: 0,
    prevVenda: 0,
    prevProducao: 0,
    quantidadeCompra: 0,
  });

  const [insumoCaixa, setInsumoCaixa] = useState({
    estoqueInicial: 0,
    precoMedio: 0,
    cobertura: 0,
    totalCompra: 0,
    prevVenda: 0,
    prevProducao: 0,
    quantidadeCompra: 0,
  });

  useEffect(() => {}, []);
  return (
    <RawMaterialContext.Provider
      value={{
        insumoPernil,
        setInsumoPernil,
        insumoFrangoLeve,
        setInsumoFrangoLeve,
        insumoFrangoPesado,
        setInsumoFrangoPesado,
        insumoBatata,
        setInsumoBatata,
        insumoSacola,
        setInsumoSacola,
        insumoCondimentos,
        setInsumoCondimentos,
        insumoCaixa,
        setInsumoCaixa,
      }}
    >
      {children}
    </RawMaterialContext.Provider>
  );
};

export const useRawMaterial = () => useContext(RawMaterialContext);
