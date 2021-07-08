import { useHistory } from "react-router-dom";
import {
  Container,
  ContainerMenu,
  ToolsButton,
  ImgButtonsTools,
} from "./style";

const SubHeader = ({ style, path1, path2, path3, path4 }) => {
  const history = useHistory();

  return (
    <Container>
      <ContainerMenu>
        <ToolsButton onClick={() => history.push(path1)}>
          <ImgButtonsTools
            className={style[0]}
            src="./images/sausage_pcp.svg"
            alt="sausage_pcp"
          />
        </ToolsButton>
        <ToolsButton onClick={() => history.push(path2)}>
          <ImgButtonsTools
            className={style[1]}
            src="./images/chicken_pcp.svg"
            alt="chicken_pcp"
          />
        </ToolsButton>
        <ToolsButton onClick={() => history.push(path3)}>
          <ImgButtonsTools
            className={style[2]}
            src="./images/cut_chicken_pcp.svg"
            alt="cut_chicken_pcp"
          />
        </ToolsButton>
        <ToolsButton onClick={() => history.push(path4)}>
          <ImgButtonsTools
            className={style[3]}
            src="./images/fries_pcp.svg"
            alt="fries_pcp"
          />
        </ToolsButton>
      </ContainerMenu>
    </Container>
  );
};
export default SubHeader;
