import { useState } from "react";
import { useHistory } from "react-router";
import { useValue } from "../../../providers/ValueContext";
import EmployeesCards from "../../../Components/ComponentsIndustry/EmployeesCards";
import CountFooter from "../../../Components/ComponentsIndustry/CountFooter";
import FooterButton from "../../../Components/ComponentsIndustry/FooterButton";

import {
  Container,
  SizeContainer,
  Title,
  TitleSection,
  ImgTitle,
  BackButton,
} from "./style";

const Employees = () => {
  const history = useHistory();

  const { salary, setSalary } = useValue();

  let [total, setTotal] = useState(0);

  const handlePay = () => {
    setSalary(salary + total);
    setTotal(0);
  };

  return (
    <Container>
      <SizeContainer>
        <Title>Monte sua Fábrica</Title>
        <TitleSection>
          <ImgTitle />
          Funcionários
          <BackButton onClick={() => history.push("/machinery")} />
        </TitleSection>
        <EmployeesCards total={total} setTotal={setTotal} />
        <CountFooter />
        <FooterButton text="Confirmar" path="/mapMenu" onHandle={handlePay} />
      </SizeContainer>
    </Container>
  );
};
export default Employees;
