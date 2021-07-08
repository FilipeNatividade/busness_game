import {
  Container,
  FirstContainer,
  SecondContainer,
  LeftSecondContainer,
  RigthSecondContainer,
  ThirdContainer,
} from "./style";

const TopShipping = () => {
  return (
    <Container>
      <FirstContainer>
        <h3>Estoque inicial</h3>
        <p>0</p>
        <small>Kg</small>
      </FirstContainer>
      <SecondContainer>
        <LeftSecondContainer>
          <h3>
            <img src="./images/ticket.svg" alt="ticket" />
            Peso
          </h3>
          <p>0</p>
          <small>Kg</small>
        </LeftSecondContainer>
        <RigthSecondContainer>
          <h3>
            Produtos
            <img src="./images/product_recipe.svg" alt="product_recipe" />
          </h3>
          <div>
            <img src="./images/sausage_pcp.svg" alt="sausage_pcp" />
            <small>0 caixas</small>
          </div>
          <div>
            <img src="./images/chicken_pcp.svg" alt="chicken_pcp" />
            <small>0 caixas</small>
          </div>
          <div>
            <img src="./images/cut_chicken_pcp.svg" alt="cut_chicken_pcp" />
            <small>0 caixas</small>
          </div>
          <div>
            <img src="./images/fries_pcp.svg" alt="sausage_pcp" />
            <small>0 caixas</small>
          </div>
        </RigthSecondContainer>
      </SecondContainer>
      <ThirdContainer>
        <h3>Preço médio</h3>
        <p>
          <img src="./images/cifrao.svg" alt="cifrao" /> R$25/Kg
        </p>
        <small>(Preço médio de estoque)</small>
      </ThirdContainer>
    </Container>
  );
};
export default TopShipping;
