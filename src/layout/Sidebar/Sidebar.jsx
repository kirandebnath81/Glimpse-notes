//styles
import { Container, MainBox, StyledLogo, ItemsBox } from "./Sidebar.styles";

//logo img
import images from "../../assets";

//icons
import { FaTrash, FaArchive, FaLightbulb, FaTag } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTagsModal } from "../../features";

//others
import { v4 } from "uuid";
import { NavLink, useLocation } from "react-router-dom";
import useOutsideClick from "../../custom-hooks/outsideClickHook";
import { getStandardName } from "../../utils";

//sidebar items
const items = [
  { icon: <FaArchive />, title: "Archive", id: v4() },
  { icon: <FaTrash />, title: "Trash", id: v4() },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.menu);
  const { tagsList } = useSelector((state) => state.tags);

  //getting path
  const location = useLocation();
  const { pathname } = location;

  //custom hook for closing menu
  const nodeRef = useOutsideClick(() => dispatch(toggleMenu(false)));

  //not displaying sidebar in the following paths
  if (pathname === "/" || pathname === "/404") {
    return;
  }

  return (
    <Container openMenu={isOpen && "open"}>
      <MainBox openMenu={isOpen && "open"} ref={nodeRef}>
        <StyledLogo>
          <img src={images.whiteLogo} alt="" />
          <span>Notes</span>
        </StyledLogo>

        <ItemsBox>
          {/* note item */}
          <li onClick={() => dispatch(toggleMenu(false))}>
            <NavLink
              to={`/notes`}
              state={`notes`}
              className={({ isActive }) =>
                isActive ? "active-item" : "inactive-item"
              }
            >
              <span>
                <FaLightbulb />
              </span>
              <span>Notes</span>
            </NavLink>
          </li>

          {/*tags item */}

          {tagsList?.map(({ tag, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/tag/${tag}`}
                state={`${tag}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>
                  <FaTag />
                </span>
                <span>{getStandardName(tag)}</span>
              </NavLink>
            </li>
          ))}

          {/* edit tag item */}

          <li
            className="sidebar__edit-item"
            onClick={() =>
              dispatch(toggleTagsModal({ type: "edit", view: true }))
            }
          >
            <span>
              <MdEdit />
            </span>
            <span>Edit Notes</span>
          </li>

          {/* other items */}
          {items.map(({ icon, title, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/${title.toLowerCase()}`}
                state={`${title}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ItemsBox>
      </MainBox>
    </Container>
  );
};

export default Sidebar;
