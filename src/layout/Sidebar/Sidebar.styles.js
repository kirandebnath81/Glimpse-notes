import styled from "styled-components";

export const Container = styled.nav`
  @media screen and (max-width: 950px) {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: 200ms visibility ease-in-out, 250ms background-color ease-in-out;
    visibility: ${({ openMenu }) =>
      openMenu === "open" ? "normal" : "hidden"};
    background-color: ${({ openMenu }) =>
      openMenu === "open" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"};
    cursor: pointer;
  }
`;

export const MainBox = styled.div`
  width: 250px;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(1, 1, 87);
  color: white;

  @media screen and (max-width: 950px) {
    transition: 350ms transform ease-in-out;
    position: absolute;
    z-index: 10;
    transform: ${({ openMenu }) =>
      openMenu === "open" ? "translateX(0%)" : "translateX(-100%)"};
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.3);
  img {
    margin-right: 10px;
  }
  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.97);
  }
`;

export const ItemsBox = styled.ul`
  li {
    width: 100%;
    height: 60px;
    list-style: none;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: clamp(1rem, 2vw, 1.1rem);

    cursor: pointer;

    svg {
      margin-right: 20px;
      font-size: clamp(14px, 1.5vw, 15px);
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
    }

    .active-item {
      background-color: rgba(255, 255, 255, 0.18);
      border-left: 5px solid var(--primary-color);
    }

    .inactive-item {
      transition: 250ms background-color ease-in-out,
        250ms border-left ease-in-out;
      border-left: 5px solid rgb(1, 1, 87);
      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-left-color: rgb(96, 96, 255);
      }
    }
  }

  .sidebar__edit-item {
    padding-left: 20px;
    transition: 250ms background-color ease-in-out,
      250ms border-left ease-in-out;
    border-left: 5px solid rgb(1, 1, 87);
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      border-left-color: rgb(96, 96, 255);
    }
  }
`;
