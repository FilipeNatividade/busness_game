import { useHistory } from "react-router";
import { Container, ButtonManagement } from "./style";

const Modal = () => {
  const history = useHistory();
  return (
    <Container>
      <ButtonManagement onClick={() => history.push("/financialManagement")}>
        <img
          src="./images/financial_administration_button.svg"
          alt="financial_administration_button"
        />
        Administração <br /> Financeira
      </ButtonManagement>
      <ButtonManagement onClick={() => history.push("/production")}>
        <img src="./images/icon_production.svg" alt="icon_production_button" />
        Produção
      </ButtonManagement>
      <ButtonManagement onClick={() => history.push("/commercial")}>
        <img src="./images/icon_commercial.svg" alt="icon_commercial_button" />
        Comercial
      </ButtonManagement>
    </Container>
  );
};
export default Modal;
