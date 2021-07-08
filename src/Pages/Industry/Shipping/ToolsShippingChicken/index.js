import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import TopShopping from "../../../../Components/ComponentsIndustry/TopShipping";
import SubHeader from "../../../../Components/ComponentsIndustry/SubHeader";
import ShippingsCards from "../../../../Components/ComponentsIndustry/ShippingsCards";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";

import {
  Container,
  SizeContainer,
  MainContainer,
  SubTitle,
  TotalsContainer,
  TotalsDifferent,
} from "./style";

const ToolsShippingChicken = () => {
  return (
    <Container>
      <SizeContainer>
        <HeaderTools
          pathImg="./images/shipping_button.svg"
          title="Logística"
          subTitle="(Frota e Frete)"
          style={["", "", "", "", "selection"]}
        />
        <TopShopping />
        <SubHeader
          style={["", "selection", "", "", ""]}
          path1="toolsShippingSausage"
          path2="toolsShippingChicken"
          path3="toolsShippingChickenCut"
          path4="toolsShippingFries"
        />
        <MainContainer>
          <h2>
            Produto <span>Frango Inteiro</span>
          </h2>
          <SubTitle>
            <img src="./images/shipping_icon.svg" alt="shipping_icon" />
            Frete
          </SubTitle>
          <ShippingsCards img="shipping_1.svg" />
          <ShippingsCards img="shipping_2.svg" />
          <ShippingsCards img="shipping_3.svg" />
          <TotalsContainer>
            <img src="./images/unit_cost.svg" alt="unit_cost" />
            <div>
              <h4>Carga total</h4>
              <p>
                0 <img src="./images/box.svg" alt="box" />
              </p>
            </div>
            <p>
              0 <img src="./images/kg.svg" alt="kg" />
            </p>
          </TotalsContainer>

          <TotalsDifferent>
            <img src="./images/shipping_button.svg" alt="shipping_button" />
            <h4>Frete total</h4>
            <p>0</p>
          </TotalsDifferent>

          <TotalsDifferent>
            <img src="./images/ticket.svg" alt="ticket" />
            <h4>Preço CIF</h4>
            <p>
              0 <img src="./images/cifrao.svg" alt="cifrao" />
            </p>
          </TotalsDifferent>
        </MainContainer>
        <FooterButton text="Confirmar" />
      </SizeContainer>
    </Container>
  );
};
export default ToolsShippingChicken;
