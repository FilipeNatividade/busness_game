import { useState } from "react";
import { useHistory } from "react-router";

import { ContainerFooter, ContainerTools, ContainerMenu } from "./style";

const ButtonsMap = ({ showButtons = true }) => {
  console.log(showButtons);
  const history = useHistory();
  return (
    <ContainerFooter>
      {showButtons && (
        <ContainerTools>
          <button onClick={() => history.push("/mpStockSausage")}>
            <img src="./images/stock_Mp.svg" alt="purchase_button" />
          </button>
          <button onClick={() => history.push("/mpPurchasesSausage")}>
            <img src="./images/purchase_button.svg" alt="production_button" />
          </button>
          <button onClick={() => history.push("mpSalesSausage")}>
            <img src="./images/partnership.svg" alt="commercial_button" />
          </button>
          <button onClick={() => history.push("weeklyReportStock")}>
            <img src="./images/calendar.svg" alt="pcp_button" />
          </button>
        </ContainerTools>
      )}
      <ContainerMenu>
        <button onClick={() => history.push("/mLossesAndProfits")}>
          <img src="./images/pel_button.svg" alt="pel_button.svg" />
        </button>
        <button onClick={() => history.push("/mCashFlow")}>
          <img src="./images/cash_flow.svg" alt="cash flow" />
        </button>
        <button onClick={() => history.push("/mBank")}>
          <img src="./images/bank_button.svg" alt="bank_button" />
        </button>
        <button onClick={() => history.push("/mConsultancy")}>
          <img src="./images/consultancy_button.svg" alt="consultancy_button" />
        </button>
        <button onClick={() => history.push("/mapMaketplace")}>
          <img src="/images/back_button.svg" alt="back_button" />
        </button>
      </ContainerMenu>
    </ContainerFooter>
  );
};
export default ButtonsMap;
