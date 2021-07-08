import { useHistory } from "react-router-dom";

import HeaderReportMp from "../../../../Components/ComponentsMarketplace/HeaderReportMp";
import ButtonsMap from "../../../../Components/ComponentsMarketplace/ButtonsMap";

import {
  Container,
  SizeContainer,
  InternalMenu,
  RoundContainer,
  H2RoundContainer,
  ParagraphRoundContainer,
  MainRoundContainer,
} from "./style";

const WeeklyReportSales = () => {
  const history = useHistory();

  return (
    <Container>
      <SizeContainer>
        <HeaderReportMp title="RELATÓRIOS" pathImg="./images/calendar.svg" />
        <InternalMenu>
          <button onClick={() => history.push("/weeklyReportStock")}>
            <img src="./images/stock_Mp.svg" alt="stock_Mp" />
          </button>
          <button onClick={() => history.push("/weeklyReportPurchases")}>
            <img src="./images/purchase_button.svg" alt="purchase_button" />
          </button>
          <button  className="selected">
            <img src="./images/partnership.svg" alt="partnership" />
          </button>
        </InternalMenu>
        <RoundContainer>
          <H2RoundContainer>
            RODADA 1
            <img src="./images/icon_playng_game.svg" alt="icon_playng_game" />
          </H2RoundContainer>
          <ParagraphRoundContainer>
            Compra de insumos
            <div />
          </ParagraphRoundContainer>
          <MainRoundContainer>
            <div>
              <img src="./images/chicken_l_orange.svg" alt="chicken_l_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/chicken_p_orange.svg" alt="chicken_p_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/condiment_orange.svg" alt="condiment_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img
                src="./images/carry_bag_orange.svg"
                alt="carry_bag_orange
              "
              />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/fries_orange.svg" alt="fries_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/box_orange.svg" alt="box_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/pig_orange.svg" alt="pig_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
          </MainRoundContainer>
        </RoundContainer>

        <RoundContainer>
          <H2RoundContainer>
            RODADA 2
            <img src="./images/icon_playng_game.svg" alt="icon_playng_game" />
          </H2RoundContainer>
          <ParagraphRoundContainer>
            Compra de insumos
            <div />
          </ParagraphRoundContainer>
          <MainRoundContainer>
            <div>
              <img src="./images/chicken_l_orange.svg" alt="chicken_l_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/chicken_p_orange.svg" alt="chicken_p_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/condiment_orange.svg" alt="condiment_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img
                src="./images/carry_bag_orange.svg"
                alt="carry_bag_orange
              "
              />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/fries_orange.svg" alt="fries_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/box_orange.svg" alt="box_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/pig_orange.svg" alt="pig_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
          </MainRoundContainer>
        </RoundContainer>

        <RoundContainer>
          <H2RoundContainer>
            RODADA 3
            <img src="./images/icon_playng_game.svg" alt="icon_playng_game" />
          </H2RoundContainer>
          <ParagraphRoundContainer>
            Compra de insumos
            <div />
          </ParagraphRoundContainer>
          <MainRoundContainer>
            <div>
              <img src="./images/chicken_l_orange.svg" alt="chicken_l_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/chicken_p_orange.svg" alt="chicken_p_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/condiment_orange.svg" alt="condiment_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img
                src="./images/carry_bag_orange.svg"
                alt="carry_bag_orange
              "
              />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/fries_orange.svg" alt="fries_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/box_orange.svg" alt="box_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/pig_orange.svg" alt="pig_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
          </MainRoundContainer>
        </RoundContainer>

        <RoundContainer>
          <H2RoundContainer>
            RODADA 4
            <img src="./images/icon_playng_game.svg" alt="icon_playng_game" />
          </H2RoundContainer>
          <ParagraphRoundContainer>
            Compra de insumos
            <div />
          </ParagraphRoundContainer>
          <MainRoundContainer>
            <div>
              <img src="./images/chicken_l_orange.svg" alt="chicken_l_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/chicken_p_orange.svg" alt="chicken_p_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/condiment_orange.svg" alt="condiment_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img
                src="./images/carry_bag_orange.svg"
                alt="carry_bag_orange
              "
              />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/fries_orange.svg" alt="fries_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/box_orange.svg" alt="box_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/pig_orange.svg" alt="pig_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
          </MainRoundContainer>
        </RoundContainer>

        <RoundContainer>
          <H2RoundContainer className="totalsRound">
            TOTAL DE RODADAS
            <img src="./images/icon_playng_game.svg" alt="icon_playng_game" />
          </H2RoundContainer>
          <ParagraphRoundContainer>
            Compra de insumos
            <div />
          </ParagraphRoundContainer>
          <MainRoundContainer>
            <div>
              <img src="./images/chicken_l_orange.svg" alt="chicken_l_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/chicken_p_orange.svg" alt="chicken_p_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/condiment_orange.svg" alt="condiment_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img
                src="./images/carry_bag_orange.svg"
                alt="carry_bag_orange
              "
              />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/fries_orange.svg" alt="fries_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/box_orange.svg" alt="box_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
            <div>
              <img src="./images/pig_orange.svg" alt="pig_orange" />
              <p>Quantidade: 100Kg</p>
            </div>
          </MainRoundContainer>
        </RoundContainer>
        <ButtonsMap />
      </SizeContainer>
    </Container>
  );
};
export default WeeklyReportSales;
