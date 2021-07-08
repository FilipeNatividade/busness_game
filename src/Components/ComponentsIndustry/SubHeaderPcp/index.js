import { useHistory } from "react-router-dom";
import {
  Container,
  ContainerMenu,
  ToolsButton,
  ImgButtonsTools,
  HeaderTitle,
  HeaderPrimaryDiv,
  PrimaryHeading,
  Secondaryeading,
} from "./style";

const SubHeaderPcp = ({ style, product, unity }) => {
  const history = useHistory();
  return (
    <Container>
      <ContainerMenu>
        <ToolsButton onClick={() => history.push("/toolsPcpSausage")}>
          <ImgButtonsTools
            className={style[0]}
            src="./images/sausage_pcp.svg"
            alt="sausage_pcp"
          />
        </ToolsButton>
        <ToolsButton onClick={() => history.push("/toolsPcpChicken")}>
          <ImgButtonsTools
            className={style[1]}
            src="./images/chicken_pcp.svg"
            alt="chicken_pcp"
          />
        </ToolsButton>
        <ToolsButton onClick={() => history.push("/toolsPcpCutChicken")}>
          <ImgButtonsTools
            className={style[2]}
            src="./images/cut_chicken_pcp.svg"
            alt="cut_chicken_pcp"
          />
        </ToolsButton>
        <ToolsButton onClick={() => history.push("/toolsPcpFries")}>
          <ImgButtonsTools
            className={style[3]}
            src="./images/fries_pcp.svg"
            alt="fries_pcp"
          />
        </ToolsButton>
      </ContainerMenu>
      <HeaderTitle>
        <span>Insumos</span> <p>{product}</p>
      </HeaderTitle>

      <HeaderPrimaryDiv>
        <PrimaryHeading>
          Unidade de Venda: <span>{unity}</span>
        </PrimaryHeading>
        <Secondaryeading>Composição</Secondaryeading>
      </HeaderPrimaryDiv>
    </Container>
  );
};
export default SubHeaderPcp;
