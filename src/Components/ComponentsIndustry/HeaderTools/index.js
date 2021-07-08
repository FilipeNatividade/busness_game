import { useHistory } from "react-router-dom";
import {
  Container,
  ContainerHeader,
  ImgHeader,
  ContainerTitle,
  BackButton,
  ContainerButtons,
  ToolsButton,
  ImgButtonsTools,
} from "./style";

const HeaderTools = ({ pathImg, title, subTitle, style }) => {
  const history = useHistory();
  return (
    <Container>
      <ContainerHeader>
        <ImgHeader src={pathImg} />
        <ContainerTitle>
          <p>{title}</p>
          <small>{subTitle}</small>
        </ContainerTitle>
        <BackButton
          src="./images/back_button.svg"
          onClick={() => history.push("/mapMenu")}
        />
      </ContainerHeader>
      <ContainerButtons>
        <ToolsButton onClick={() => history.push("/toolsPcpSausage")}>
          {style[0] === "" ? (
            <ImgButtonsTools
              className={style[0]}
              src="./images/focus_pcp_button.png"
              alt="pcp_button"
            />
          ) : (
            <ImgButtonsTools
              className={style[0]}
              src="./images/pcp_button.svg"
              alt="pcp_button"
            />
          )}
        </ToolsButton>
        <ToolsButton onClick={() => history.push("/toolsPurchasePig")}>
          {style[1] === "" ? (
            <ImgButtonsTools
              className={style[1]}
              src="./images/focus_purchase_button.png"
              alt="purchase_button"
            />
          ) : (
            <ImgButtonsTools
              className={style[1]}
              src="./images/purchase_button.svg"
              alt="purchase_button"
            />
          )}
        </ToolsButton>
        <ToolsButton onClick={() => history.push("/toolsProductionSausage")}>
          {style[2] === "" ? (
            <ImgButtonsTools
              className={style[2]}
              src="./images/focus_productions_1.svg"
              alt="production_button"
            />
          ) : (
            <ImgButtonsTools
              className={style[2]}
              src="./images/productions_1.svg"
              alt="production_button"
            />
          )}
        </ToolsButton>
        <ToolsButton onClick={() => history.push("/toolsCommercialSausage")}>
          {style[3] === "" ? (
            <ImgButtonsTools
              className={style[3]}
              src="./images/focus_partnership.svg"
              alt="commercial_button"
            />
          ) : (
            <ImgButtonsTools
              className={style[3]}
              src="./images/partnership.svg"
              alt="commercial_button"
            />
          )}
        </ToolsButton>
        <ToolsButton onClick={() => history.push("/toolsShippingSausage")}>
          {style[4] === "" ? (
            <ImgButtonsTools
              className={style[4]}
              src="./images/focus_shipping_button.png"
              alt="shipping_button"
            />
          ) : (
            <ImgButtonsTools
              className={style[4]}
              src="./images/shipping_button.svg"
              alt="shipping_button"
            />
          )}
        </ToolsButton>
      </ContainerButtons>
    </Container>
  );
};
export default HeaderTools;
