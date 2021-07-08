import { useHistory } from "react-router-dom";
import { Container } from "./style";

const FooterButton = ({ text, path, onHandle }) => {
  const history = useHistory();

  const handle = () => {
    history.push(path);
    onHandle !== null && onHandle();
  };

  return (
    <Container onClick={handle}>
      <h2>{text}</h2>
    </Container>
  );
};
export default FooterButton;
