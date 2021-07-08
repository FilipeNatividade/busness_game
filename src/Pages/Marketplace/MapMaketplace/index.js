import { useHistory } from "react-router";
import CountUp from "react-countup";
import ButtonsMap from '../../../Components/ComponentsMarketplace/ButtonsMap'

import {
  Container,
  ContainerHeader,
  ContainerTitle,
  TotalValue,
  HeaderImg,
  PlayngTime,
  ContainerButtonTime,
  TimeButton,
  ImpotEx,
  ImpExButton,
} from "./style";

const MapMaketplace = () => {

  const history = useHistory();
  return (
    <Container>
        <ContainerHeader>
          <ContainerTitle>
              <TotalValue>
                <HeaderImg src="./images/cifrao_white.svg" />
                <CountUp
                  end={1000000}
                  separator="."
                  decimal=","
                  decimals={2}
                  duration={0.5}
                />
              </TotalValue>
        
            <PlayngTime onClick={() => history.push("")}>
              <HeaderImg src="./images/icon_playng_game.svg" />
              Semana 1
            </PlayngTime>
          </ContainerTitle>
          <ContainerButtonTime>
            {/* colocar os "onClickes" nessas imagens */}
            <TimeButton>
              <img src="./images/button_pause.svg" alt="button_pause" />
            </TimeButton>
            <TimeButton>
              <img src="./images/button_fallow.svg" alt="button_fallow" />
            </TimeButton>
            <TimeButton>
              <img src="./images/button_advance.svg" alt="button_advance" />
            </TimeButton>
          
          </ContainerButtonTime>
          <ImpotEx>
            {/* colocar os "onClickes" nessas imagens */}
              <ImpExButton>Import</ImpExButton>
              <ImpExButton>Export</ImpExButton>
          </ImpotEx>

        </ContainerHeader>

          <ButtonsMap/>
    </Container>
  );
};
export default MapMaketplace;
