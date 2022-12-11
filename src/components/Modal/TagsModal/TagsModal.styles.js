import styled from "styled-components";

export const Box = styled.div`
  width: clamp(250px, 60%, 280px);
  max-height: 85vh;
  overflow-y: auto;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 15px 20px;

  .editTags__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .editTags__title {
      font-weight: 500;
      font-size: 1.3rem;
    }
    .editTags__close {
      svg {
        font-size: 1.6rem;
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    margin: 30px 0px;
  }
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  user-select: none;
  outline: none;
  text-indent: 5px;
  transition: 150ms border ease-in;
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  &:focus {
    border-bottom: 2px solid black;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const TagsBox = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    height: 30px;
    margin-bottom: 10px;

    .editTags__tag {
      width: 100%;
    }
  }
`;

export const AddBox = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  justify-content: center;
  cursor: ${({ check }) => (check ? "pointer" : "normal")};
  svg {
    transition: 350ms color ease-in-out;
    font-size: clamp(1.15rem, 2vw, 1.2rem);
    color: ${({ check }) =>
      check ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)"};
  }
`;
