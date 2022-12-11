import styled from "styled-components";

export const Container = styled.div`
  width: clamp(250px, 90%, 270px);
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 20px 20px 25px 30px;
  .filters__close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
    svg {
      font-size: 1.3rem;
    }
  }
`;

export const TopBox = styled.div`
  display: flex;
  align-items: flex-end;

  .filters__title {
    flex-basis: 25%;
    font-size: clamp(1.1rem, 1.8vw, 1.2rem);
    font-weight: 500;
    margin-right: 20px;
  }

  .filters__delete {
    color: red;
    cursor: pointer;
    font-weight: 500;
    font-size: clamp(13px, 1.2vw, 14px);
    &:hover {
      font-weight: 600;
    }
  }
`;

export const Box = styled.div`
  margin-top: 20px;
  .filters__subtitle {
    font-size: clamp(14px, 1.4vw, 15px);
    font-weight: 600;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.6);
  }

  .filters__check {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    font-size: clamp(13.5px, 1.2vw, 14.5px);
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
    input {
      width: 13px;
      height: 13px;
      margin-right: 8px;
      cursor: pointer;
    }
    label {
      cursor: pointer;
      user-select: none;
    }
  }
`;
