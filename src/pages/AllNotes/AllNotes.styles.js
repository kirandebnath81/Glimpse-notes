import styled from "styled-components";

export const TopBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0 40px;

  .notes__filter-btn {
    flex-basis: 65%;
    text-align: start;
  }

  @media screen and (max-width: 650px) {
    justify-content: space-between;
    .notes__filter-btn {
      flex-basis: 5%;
      button {
        margin-right: 0px;
      }
      span {
        display: none;
      }
    }
  }
`;

export const InputBox = styled.div`
  flex: 1;
  height: 33px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: 300ms box-shadow ease-in;
  margin-right: 20px;

  &:hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    font-family: "Poppins", sans-serif;
    font-size: clamp(15px, 1.5vw, 1rem);
    border: none;
    user-select: none;
    outline: none;
    border-radius: 5px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .notes__search-icon {
    flex-basis: 10%;
    min-width: 35px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.06);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    svg {
      font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    }
  }
`;

export const Box = styled.div`
  .allNotes__notes-type {
    margin-bottom: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    span {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 15px;
    }
  }
`;
