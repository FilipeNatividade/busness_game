import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useValue } from "../../../providers/ValueContext";
import MachineryCards from "../../../Components/ComponentsIndustry/MachineryCards";
import FooterButton from "../../../Components/ComponentsIndustry/FooterButton";
import CountFooter from "../../../Components/ComponentsIndustry/CountFooter";

import {
  Container,
  SizeContainer,
  Title,
  ImgTitle,
  TitleSection,
  BackButton,
} from "./style";

const Machinery = () => {
  const history = useHistory();

  const { machinaryFinancing, setMachinaryFinancing } = useValue();

  let [total, setTotal] = useState(0);

  const handlePay = () => {
    setMachinaryFinancing(machinaryFinancing + total);
    setTotal(0);
  };

  return (
    <Container>
      <SizeContainer>
        <Title>SUA INDÚSTRIA</Title>
        <TitleSection>
          <ImgTitle />
          <p>Linha de produção</p>
          <BackButton onClick={() => history.push("/mountFactory")} />
        </TitleSection>
        <MachineryCards total={total} setTotal={setTotal} />
        <CountFooter />
        <FooterButton text="Continuar" path="/employees" onHandle={handlePay} />
      </SizeContainer>
    </Container>
  );
};
export default Machinery;
