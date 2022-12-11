//styles
import { Container, Box, LeftBox, RightBox } from "./Home.styles";
import { ButtonFill } from "../../styles/styles";

import images from "../../assets";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="home__header">
        <div className="home__logo">
          <img src={images.colorLogo} alt="" />
          <span>Glimpse Notes</span>
        </div>
      </div>
      <Box>
        <LeftBox>
          <div className="home__main-heading">
            One Stop Solution for all your Notes
          </div>
          <p className="home__sub-heading">
            Glimpse Notes helps you to create, organise and save your notes
            effortlessly across all platforms.
          </p>
          <ButtonFill
            className="home__btn"
            onClick={() => navigate("/notes", { state: "notes" })}
          >
            <span>Get Started</span>
          </ButtonFill>
        </LeftBox>
        <RightBox>
          <img src={images.homePageGif} alt="home_gif" />
        </RightBox>
      </Box>
    </Container>
  );
};

export default Home;
