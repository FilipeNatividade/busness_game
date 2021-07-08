import { useHistory } from "react-router";

import {
  Container,
  LogoImg,
  InputContainer,
  H1Login,
  ContainerInput,
  InputLogin,
  ContainerButtonLogin,
  ButtonLogin,
  ContainerButtonWeb,
  ImgWeb,
  SmallFooter,
} from "./style";

const Login = () => {
  const history = useHistory();
  return (
    <Container>
      <LogoImg src="./images/logohAsset 3.png" />
      <InputContainer>
        <H1Login>Login</H1Login>

        <ContainerInput>
          <InputLogin
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
          />
          <InputLogin type="password" name="password" placeholder="Senha" />

          <ContainerButtonLogin>
            <ButtonLogin onClick={() => history.push("/home")}>
              Entrar
            </ButtonLogin>
            <ButtonLogin onClick={() => history.push("/register")}>
              Cadastrar
            </ButtonLogin>
          </ContainerButtonLogin>
        </ContainerInput>
      </InputContainer>
      <ContainerButtonWeb>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
          <ImgWeb src="./images/button_gmail.svg" />
        </a>
        <a href="https://facebook.com" target="blank">
          <ImgWeb src="./images/button_face.svg" />
        </a>
      </ContainerButtonWeb>
      <SmallFooter>Powered by Mercadata Digital</SmallFooter>
    </Container>
  );
};
export default Login;