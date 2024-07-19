import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="notFound">
      <h1>404</h1>
      <p>Not Found</p>
      <Link to={"/"} replace={true}>
        Look's like you've reached to non-existent page. <br />
        Hou about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
