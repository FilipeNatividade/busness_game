import { createContext, useContext, useState } from "react";

const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [diretorGeral, setDiretorGeral] = useState({
    amount: 0,
    wage: 40000.0,
  });

  const [gestorAdministrativo, setGestorAdministrativo] = useState({
    amount: 0,
    wage: 24000.0,
  });
  const [gestorFinanceiro, setGestorFinanceiro] = useState({
    amount: 0,
    wage: 24000.0,
  });
  const [encarregadoContabilidade, setEncarregadoContabilidade] = useState({
    amount: 0,
    wage: 4500.0,
  });
  const [encarregadoRH, setEncarregadoRH] = useState({
    amount: 0,
    wage: 4500.0,
  });
  const [encarregadoTesouraria, setEncarregadoTesouraria] = useState({
    amount: 0,
    wage: 4500.0,
  });
  const [compras, setCompras] = useState({
    amount: 0,
    wage: 4500.0,
  });

  const [gestorLogistica, setGestorLogistica] = useState({
    amount: 0,
    wage: 24000.0,
  });
  const [encarregadoProducao, setEncarregadoProducao] = useState({
    amount: 0,
    wage: 4500.0,
  });
  const [gestaoProducao, setGestaoProducao] = useState({
    amount: 0,
    wage: 24000.0,
  });
  const [encarregadoLogistica, setEncarregadoLogistica] = useState({
    amount: 0,
    wage: 4500.0,
  });
  const [operadores, setoperadores] = useState({
    amount: 0,
    wage: 2000.0,
  });
  const [controleQualidade, setControleQualidade] = useState({
    amount: 0,
    wage: 4500.0,
  });
  const [gestorComercial, setGestorComercial] = useState({
    amount: 0,
    wage: 5000.0,
  });
  const [vendedor, setVendedor] = useState({
    amount: 0,
    wage: 1000.0,
  });

  return (
    <EmployeesContext.Provider
      value={{
        diretorGeral,
        setDiretorGeral,
        gestorAdministrativo,
        setGestorAdministrativo,
        gestorFinanceiro,
        setGestorFinanceiro,
        encarregadoContabilidade,
        setEncarregadoContabilidade,
        encarregadoRH,
        setEncarregadoRH,
        encarregadoTesouraria,
        setEncarregadoTesouraria,
        compras,
        setCompras,
        gestorLogistica,
        setGestorLogistica,
        encarregadoProducao,
        setEncarregadoProducao,
        gestaoProducao,
        setGestaoProducao,
        encarregadoLogistica,
        setEncarregadoLogistica,
        operadores,
        setoperadores,
        controleQualidade,
        setControleQualidade,
        gestorComercial,
        setGestorComercial,
        vendedor,
        setVendedor,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeesContext);
