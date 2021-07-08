import { Container, Header, MiddleContent, Footer } from "./style";

const ShippingsCards = ({ img }) => {
  return (
    <Container>
      <Header>
        <img src={`./images/${img}`} alt="shipping_icon" />
        <h3>N° de Frotas</h3>
        <input placeholder="0" />
      </Header>
      <MiddleContent>
        <h3>
          Capacidade de <span>Caixas</span>
        </h3>
        <p>
          2 <span>ton</span>
          <img src="./images/shipping_icon.svg" alt="shipping_icon" />
        </p>
      </MiddleContent>
      <MiddleContent>
        <h3>
          Custo unitário de <span>Caixas</span>
        </h3>
        <p>
          <span>R$</span> 0,00 <img src="./images/cifrao.svg" alt="cifrao" />
        </p>
      </MiddleContent>
      <Footer>
      <h3>
          Carga <span>Selecionada</span>
        </h3>
        <p>
         1000 <img src="./images/unit_cost.svg" alt="unit_cost" />
        </p>
      </Footer>
    </Container>
  );
};
export default ShippingsCards;
