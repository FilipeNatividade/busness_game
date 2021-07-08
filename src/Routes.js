import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Industry/Home";
import SavedGame from "./Pages/Industry/SavedGame";
import SelectionFactory from "./Pages/Industry/SelectionFactory";
import MountFactory from "./Pages/Industry/MountFactory";
import Machinery from "./Pages/Industry/Machinery";
import Employees from "./Pages/Industry/Employees";
import MapMenu from "./Pages/Industry/MapMenu";
import FinancialManagement from "./Pages/Industry/FinancialManagement";
import TrainFinancialManagement from "./Pages/Industry/TrainFinancialManagement";

import Production from "./Pages/Industry/Production";
import TrainProduction from "./Pages/Industry/TrainProduction";

import Commercial from "./Pages/Industry/Commercial";
import TrainCommercial from "./Pages/Industry/TrainCommercial";

import LossesAndProfits from "./Pages/Industry/LossesAndProfits";
import Bank from "./Pages/Industry/Bank";
import Consultancy from "./Pages/Industry/Consultancy";
import CashFlow from "./Pages/Industry/CashFlow";

import ToolsPcpSausage from "./Pages/Industry/Pcp/ToolsPcpSausage";
import ToolsPcpChicken from "./Pages/Industry/Pcp/ToolsPcpChicken";
import ToolsPcpCutChicken from "./Pages/Industry/Pcp/ToolsPcpCutChicken";
import ToolsPcpFries from "./Pages/Industry/Pcp/ToolsPcpFries";

import ToolsPurchasePig from "./Pages/Industry/Purchase/ToolsPurchasePig";
import ToolsPurchaseChickenLight from "./Pages/Industry/Purchase/ToolsPurchaseChickenLight";
import ToolsPurchaseChickenHeavy from "./Pages/Industry/Purchase/ToolsPurchaseChickenHeavy";
import ToolsPurchaseFries from "./Pages/Industry/Purchase/ToolsPurchaseFries";
import ToolsPurchaseCarryBag from "./Pages/Industry/Purchase/ToolsPurchaseCarryBag";
import ToolsPurchaseCondiment from "./Pages/Industry/Purchase/ToolsPurchaseCondiment";
import ToolsPurchaseBox from "./Pages/Industry/Purchase/ToolsPurchaseBox";

import ToolsProductionSausage from "./Pages/Industry/ProductionTools/ToolsProductionSausage";
import ToolsProductionChicken from "./Pages/Industry/ProductionTools/ToolsProductionChicken";
import ToolsProductionChickenCut from "./Pages/Industry/ProductionTools/ToolsProductionChickenCut";
import ToolsProductionFries from "./Pages/Industry/ProductionTools/ToolsProductionFries";

import ToolsCommercialSausage from "./Pages/Industry/CommercialSales/ToolsCommercialSausage";
import ToolsCommercialChicken from "./Pages/Industry/CommercialSales/ToolsCommercialChicken";
import ToolsCommercialChickenCut from "./Pages/Industry/CommercialSales/ToolsCommercialChickenCut";
import ToolsCommercialFries from "./Pages/Industry/CommercialSales/ToolsCommercialFries";

import ToolsShippingSausage from "./Pages/Industry/Shipping/ToolsShippingSausage";
import ToolsShippingChicken from "./Pages/Industry/Shipping/ToolsShippingChicken";
import ToolsShippingChickenCut from "./Pages/Industry/Shipping/ToolsShippingChickenCut";
import ToolsShippingFries from "./Pages/Industry/Shipping/ToolsShippingFries";

import WeeklyReportPcp from "./Pages/Industry/WeeklyReport/WeeklyReportPcp";
import WeeklyReportPurchase from "./Pages/Industry/WeeklyReport/WeeklyReportPurchase";
import WeeklyReportProduction from "./Pages/Industry/WeeklyReport/WeeklyReportProduction";
import WeeklyReportCommercial from "./Pages/Industry/WeeklyReport/WeeklyReportCommercial";

import MapMaketplace from "./Pages/Marketplace/MapMaketplace";
import MarketplaceLossesAndProfits from "./Pages/Marketplace/MarketplaceLossesAndProfits";
import MarketplaceCashFlow from "./Pages/Marketplace/MarketplaceCashFlow";
import MpBank from "./Pages/Marketplace/MpBank";
import MpConsultancy from "./Pages/Marketplace/MpConsultancy";

import MpStockChicken from "./Pages/Marketplace/MpStock/MpStockChicken";
import MpStockSausage from "./Pages/Marketplace/MpStock/MpStockSausage";
import MpStockChickenCut from "./Pages/Marketplace/MpStock/MpStockChickenCut";
import MpStockFries from "./Pages/Marketplace/MpStock/MpStockFries";

import MpSalesSausage from "./Pages/Marketplace/MpSales/MpSalesSausage";
import MpSalesChicken from "./Pages/Marketplace/MpSales/MpSalesChicken";
import MpSalesChickenCut from "./Pages/Marketplace/MpSales/MpSalesChickenCut";
import MpSalesFries from "./Pages/Marketplace/MpSales/MpSalesFries";

import WeeklyReportStock from "./Pages/Marketplace/WeeklyReportMp/WeeklyReportStock";
import WeeklyReportPurchases from "./Pages/Marketplace/WeeklyReportMp/WeeklyReportPurchases";
import WeeklyReportSales from "./Pages/Marketplace/WeeklyReportMp/WeeklyReportSales";

// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";
// import Purchase from "./Pages/Purchase";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component>
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/savedGame">
        <SavedGame />
      </Route>
      <Route exact path="/selectionFactory">
        <SelectionFactory />
      </Route>
      <Route exact path="/mountFactory">
        <MountFactory />
      </Route>
      <Route exact path="/machinery">
        <Machinery />
      </Route>
      <Route exact path="/employees">
        <Employees />
      </Route>
      <Route exact path="/mapMenu">
        <MapMenu />
      </Route>
      <Route exact path="/financialManagement">
        <FinancialManagement />
      </Route>
      <Route exact path="/trainFinancialManagement">
        <TrainFinancialManagement />
      </Route>
      <Route exact path="/production">
        <Production />
      </Route>
      <Route exact path="/trainProduction">
        <TrainProduction />
      </Route>
      <Route exact path="/commercial">
        <Commercial />
      </Route>
      <Route exact path="/trainCommercial">
        <TrainCommercial />
      </Route>
      <Route exact path="/lossesAndProfits">
        <LossesAndProfits />
      </Route>
      <Route exact path="/bank">
        <Bank />
      </Route>
      <Route exact path="/cashFlow">
        <CashFlow />
      </Route>
      <Route exact path="/consultancy">
        <Consultancy />
      </Route>

      <Route exact path="/toolsPcpSausage">
        <ToolsPcpSausage />
      </Route>
      <Route exact path="/toolsPcpChicken">
        <ToolsPcpChicken />
      </Route>
      <Route exact path="/toolsPcpCutChicken">
        <ToolsPcpCutChicken />
      </Route>
      <Route exact path="/toolsPcpFries">
        <ToolsPcpFries />
      </Route>

      <Route exact path="/toolsPurchasePig">
        <ToolsPurchasePig />
      </Route>
      <Route exact path="/toolsPurchaseChickenLight">
        <ToolsPurchaseChickenLight />
      </Route>
      <Route exact path="/toolsPurchaseChickenHeavy">
        <ToolsPurchaseChickenHeavy />
      </Route>
      <Route exact path="/toolsPurchaseFries">
        <ToolsPurchaseFries />
      </Route>
      <Route exact path="/toolsPurchaseCarryBag">
        <ToolsPurchaseCarryBag />
      </Route>
      <Route exact path="/toolsPurchaseCondiment">
        <ToolsPurchaseCondiment />
      </Route>
      <Route exact path="/toolsPurchaseBox">
        <ToolsPurchaseBox />
      </Route>

      <Route exact path="/toolsProductionSausage">
        <ToolsProductionSausage />
      </Route>
      <Route exact path="/toolsProductionChicken">
        <ToolsProductionChicken />
      </Route>
      <Route exact path="/toolsProductionChickenCut">
        <ToolsProductionChickenCut />
      </Route>
      <Route exact path="/toolsProductionFries">
        <ToolsProductionFries />
      </Route>

      <Route exact path="/toolsCommercialSausage">
        <ToolsCommercialSausage />
      </Route>
      <Route exact path="/toolsCommercialChicken">
        <ToolsCommercialChicken />
      </Route>
      <Route exact path="/toolsCommercialChickenCut">
        <ToolsCommercialChickenCut />
      </Route>
      <Route exact path="/toolsCommercialFries">
        <ToolsCommercialFries />
      </Route>

      <Route exact path="/toolsShippingSausage">
        <ToolsShippingSausage />
      </Route>
      <Route exact path="/toolsShippingChicken">
        <ToolsShippingChicken />
      </Route>
      <Route exact path="/toolsShippingChickenCut">
        <ToolsShippingChickenCut />
      </Route>
      <Route exact path="/toolsShippingFries">
        <ToolsShippingFries />
      </Route>

      <Route exact path="/weeklyReportPcp">
        <WeeklyReportPcp />
      </Route>
      <Route exact path="/weeklyReportPurchase">
        <WeeklyReportPurchase />
      </Route>
      <Route exact path="/weeklyReportProduction">
        <WeeklyReportProduction />
      </Route>
      <Route exact path="/weeklyReportCommercial">
        <WeeklyReportCommercial />
      </Route>

      <Route exact path="/mapMaketplace">
        <MapMaketplace />
      </Route>

      <Route exact path="/mLossesAndProfits">
        <MarketplaceLossesAndProfits />
      </Route>

      <Route exact path="/mCashFlow">
        <MarketplaceCashFlow />
      </Route>

      <Route exact path="/mBank">
        <MpBank />
      </Route>

      <Route exact path="/mConsultancy">
        <MpConsultancy />
      </Route>

      <Route exact path="/mpStockChicken">
        <MpStockChicken />
      </Route>
      <Route exact path="/mpStockSausage">
        <MpStockSausage />
      </Route>
      <Route exact path="/mpStockChickenCut">
        <MpStockChickenCut />
      </Route>
      <Route exact path="/mpStockFries">
        <MpStockFries />
      </Route>

      <Route exact path="/mpSalesSausage">
        <MpSalesSausage />
      </Route>
      <Route exact path="/mpSalesChicken">
        <MpSalesChicken />
      </Route>
      <Route exact path="/mpSalesChickenCut">
        <MpSalesChickenCut />
      </Route>
      <Route exact path="/mpSalesFries">
        <MpSalesFries />
      </Route>


      <Route exact path="/weeklyReportStock">
        <WeeklyReportStock />
      </Route>
      <Route exact path="/weeklyReportPurchases">
        <WeeklyReportPurchases />
      </Route>
      <Route exact path="/weeklyReportSales">
        <WeeklyReportSales />
      </Route>


      {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
       {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
      {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
       {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
      {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
       {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
      {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
       {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
      {/* <Route exact path="/purchase">
        <Purchase />
      </Route> */}
    </Switch>
  );
};
export default Routes;
