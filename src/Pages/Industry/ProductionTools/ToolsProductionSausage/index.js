import { useState } from "react";

import HeaderTools from "../../../../Components/ComponentsIndustry/HeaderTools";
import FooterButton from "../../../../Components/ComponentsIndustry/FooterButton";
import SubHeader from "../../../../Components/ComponentsIndustry/SubHeader";

import {
  Container,
  SizeContainer,
  MainContainer,
  FirstContainer,
  InternalFirstContainer,
  SecondContainer,
  InternalSecondContainer,
  RotationInternalSecondContainer,
  ThirdContainer,
  UpThirdContainer,
  DownThirdContainer,
} from "./style";

const ToolsProductionSausage = () => {
  const [daytime, setDaytime] = useState(false);
  const [nightly, setNightly] = useState(false);

  const handleRotation = (rotation) => {
    switch (rotation) {
      case "daytime":
        setDaytime(!daytime);
        break;
      case "nightly":
        setNightly(!nightly);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <SizeContainer>
        <HeaderTools
          pathImg="./images/productions_1.svg"
          title="Produção"
          subTitle="(Inicio de produção de produtos)"
          style={["", "", "selection", "", ""]}
        />
        <SubHeader
          style={["selection", "", "", "", ""]}
          path1="toolsProductionSausage"
          path2="toolsProductionChicken"
          path3="toolsProductionChickenCut"
          path4="toolsProductionFries"
        />
        <MainContainer>
          <h2>
            Produção de <span>Linguiça Salsichão</span>
          </h2>
          <FirstContainer>
            <InternalFirstContainer>
              <h3>
                <img src="./images/icon_tools.svg" alt="icon_tools" /> N° de
                Maquinário
              </h3>
              <p className="background">01</p>
            </InternalFirstContainer>
            <InternalFirstContainer>
              <h3>
                <img src="./images/icon_management.svg" alt="icon_management" />
                N° de Operadores
              </h3>
              <p>20</p>
            </InternalFirstContainer>
          </FirstContainer>

          <SecondContainer>
            <h3>Turnos</h3>
            <InternalSecondContainer>
              <RotationInternalSecondContainer
                onClick={() => handleRotation("daytime")}
              >
                <h4>Diurno</h4>
                <img src="./images/daytime.svg" alt="daytime" />
                {daytime ? <button className="checked" /> : <button />}
              </RotationInternalSecondContainer>
              <RotationInternalSecondContainer
                onClick={() => handleRotation("nightly")}
              >
                <h4>Noturno</h4>
                <img src="./images/nightly.svg" alt="nightly" />
                {nightly ? <button className="checked" /> : <button />}
              </RotationInternalSecondContainer>
            </InternalSecondContainer>
          </SecondContainer>

          <ThirdContainer>
            <h3>
              <img src="./images/product_recipe.svg" alt="product_recipe" /> CPF
              <small>(Custo de produto fabricado)</small>
            </h3>
            <UpThirdContainer>
              <div>
                <img src="./images/material_cost.svg" alt="material_cost" />
                <p>Custo da Matéria-prima</p> <input placeholder="R$0,00" />
                <img
                  src="./images/cifrao.svg"
                  alt="cifrão"
                  className="cifrao"
                />
              </div>
              <div>
                <img
                  src="./images/commercial_manager.svg"
                  alt="commercial_manager"
                />
                <p>Custo de mão de obra</p> <input placeholder="R$0,00" />
                <img
                  src="./images/cifrao.svg"
                  alt="cifrão"
                  className="cifrao"
                />
              </div>
              <div>
                <img
                  src="./images/depreciation_machinery.svg"
                  alt="depreciation_machinery"
                />
                <p>Depreciação de maquinario</p> <input placeholder="R$0,00" />
                <img
                  src="./images/cifrao.svg"
                  alt="cifrão"
                  className="cifrao"
                />
              </div>
              <div>
                <img src="./images/losses.svg" alt="losses" />
                <p>Perdas</p> <input placeholder="R$0,00" />
                <img
                  src="./images/cifrao.svg"
                  alt="cifrão"
                  className="cifrao"
                />
              </div>
            </UpThirdContainer>
            <DownThirdContainer>
              <div>
                <p>Total</p>
                <p className="value">
                  R$0,00 <img src="./images/cifrao.svg" alt="cifrao" />
                </p>
              </div>

              <div>
                <p>Qnt. a produzir</p>
                <p className="value">
                  0 <img src="./images/productions.svg" alt="productions" />
                </p>
              </div>

              <div>
                <p>Tempo de produção</p>
                <p className="value">
                  0 <img src="./images/icon_tools.svg" alt="icon_tools" />
                </p>
              </div>
            </DownThirdContainer>
          </ThirdContainer>
        </MainContainer>

        <FooterButton text="Confirmar" />
      </SizeContainer>
    </Container>
  );
};
export default ToolsProductionSausage;
