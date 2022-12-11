//styles
import { StyledNav, Container } from "./Navbar.styles";
import { ButtonFill } from "../../styles/styles";

//icon
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

//redux
import { useDispatch } from "react-redux";
import { toggleCreateNoteModal, toggleMenu } from "../../features";

import { useLocation } from "react-router-dom";

import { getStandardName } from "../../utils";

const Navbar = () => {
  const dispatch = useDispatch();

  //getting path
  const location = useLocation();
  const { pathname, state } = location;

  //not displaying navbar in the following path
  if (pathname === "/" || pathname === "/404") {
    return;
  }

  return (
    <StyledNav>
      <div className="nav__menu">
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>

      <Container>
        <div className="nav__page-title">{getStandardName(state)}</div>

        {state !== "Trash" && state !== "Archive" && (
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn"
          >
            <FaPlus /> <span>Create</span>
          </ButtonFill>
        )}
      </Container>
    </StyledNav>
  );
};

export default Navbar;
