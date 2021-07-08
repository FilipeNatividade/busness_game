/* eslint-disable jsx-a11y/alt-text */
import { Container } from "./style";
const InputCardPcp = ({ path, title, value }) => {
  return (
    <Container>
      <img src={path} />
      <h2>{title}</h2>
      <p>{value}</p>
    </Container>
  );
};
export default InputCardPcp;
