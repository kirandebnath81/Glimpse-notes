//styles
import { Container } from "./ErrorPage.styles";
import { ButtonFill } from "../../styles/styles";

//img
import images from "../../assets";

//router
import { useNavigate } from "react-router-dom";

const ErrorsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="error__img">
        <img src={images.errorImg} alt="pageNotFound" />
      </div>
      <div className="error__text">
        <h1>We have looked everywhere</h1>
        <div>Looks like the page is missing</div>
        <ButtonFill onClick={() => navigate("/")}>
          <span>Go to home page</span>
        </ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorsPage;
